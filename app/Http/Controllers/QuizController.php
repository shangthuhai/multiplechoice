<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Quiz;
use App\Models\Question;
use App\Models\Option;
use App\Models\Result;

class QuizController extends Controller
{
    // 1. Trang chủ: Liệt kê danh sách đề thi
    public function index() {
        $quizzes = Quiz::withCount('questions')->orderByDesc('id')->get();
        return view('quiz.index', compact('quizzes'));
    }

    public function create() {
        return view('quiz.create');
    }

    public function store(Request $request) {
        $request->validate(['title' => 'required', 'questions' => 'required|array']);
        
        DB::beginTransaction();
        try {
            $quiz = Quiz::create(['title' => $request->title, 'minutes' => $request->minutes ?? 15]);
            
            foreach ($request->questions as $qData) {
                $question = $quiz->questions()->create(['question_text' => $qData['question_text']]);
                if(isset($qData['options'])) {
                    foreach ($qData['options'] as $key => $optionText) {
                        $question->options()->create([
                            'option_text' => $optionText,
                            'is_correct' => (isset($qData['correct_option']) && $key == $qData['correct_option']) ? 1 : 0
                        ]);
                    }
                }
            }
            DB::commit();
            // Sửa: Tạo xong quay về trang danh sách
            return redirect()->route('quiz.index')->with('success', 'Tạo đề thi thành công!');
        } catch (\Exception $e) {
            DB::rollBack();
            return back()->withErrors(['msg' => 'Lỗi: ' . $e->getMessage()]);
        }
    }

    // 2. Trang chờ (Lobby): Xem thông tin trước khi làm
    public function show($id) {
        $quiz = Quiz::withCount('questions')->findOrFail($id);
        return view('quiz.detail', compact('quiz'));
    }

    // 3. Trang làm bài thi (Interface đẹp)
    public function take($id) {
        $quiz = Quiz::with('questions.options')->findOrFail($id);
        return view('quiz.take', compact('quiz'));
    }

    public function submit(Request $request, $id) {
        $quiz = Quiz::with('questions.options')->findOrFail($id);
        $score = 0;
        $total = $quiz->questions->count();
        $answers = $request->input('answers', []);

        foreach ($quiz->questions as $question) {
            $userOption = $answers[$question->id] ?? null;
            $correct = $question->options->where('is_correct', 1)->first();
            if ($correct && $userOption == $correct->id) $score++;
        }

        Result::create([
            'user_id' => auth()->id(),
            'quiz_id' => $quiz->id,
            'score' => $score,
            'total_questions' => $total
        ]);

        return redirect()->route('quiz.index')->with('status', "Kết quả: Bạn đúng $score / $total câu!");
    }
}