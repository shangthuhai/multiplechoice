<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Quiz;
use App\Models\Question;
use App\Models\Option;
use App\Models\Result;
use App\Models\ResultAnswer;

class QuizController extends Controller
{
    // 1. Trang chủ: Liệt kê danh sách đề thi
    public function index() {
        $quizzes = Quiz::withCount('questions')->orderByDesc('id')->get();
        $recentResults = $this->resultsQuery()->take(5)->get();

        return view('quiz.index', compact('quizzes', 'recentResults'));
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

        DB::beginTransaction();
        try {
            $result = Result::create([
                'user_id' => auth()->id(),
                'quiz_id' => $quiz->id,
                'score' => 0,
                'total_questions' => $total,
            ]);

            foreach ($quiz->questions as $question) {
                $selectedOptionId = isset($answers[$question->id]) ? (int) $answers[$question->id] : null;
                $correctOption = $question->options->firstWhere('is_correct', 1);
                $isCorrect = $correctOption && $selectedOptionId === (int) $correctOption->id;

                if ($isCorrect) {
                    $score++;
                }

                ResultAnswer::create([
                    'result_id' => $result->id,
                    'question_id' => $question->id,
                    'selected_option_id' => $selectedOptionId,
                    'correct_option_id' => $correctOption?->id,
                    'is_correct' => $isCorrect,
                ]);
            }

            $result->update(['score' => $score]);

            $sessionResultIds = session('quiz_result_ids', []);
            array_unshift($sessionResultIds, $result->id);
            session(['quiz_result_ids' => array_values(array_unique(array_slice($sessionResultIds, 0, 50)))]);

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();

            return back()->withErrors(['msg' => 'Không thể nộp bài: ' . $e->getMessage()]);
        }

        return redirect()
            ->route('quiz.review', $result->id)
            ->with('status', "Kết quả: Bạn đúng $score / $total câu!");
    }

    public function results()
    {
        $results = $this->resultsQuery()->paginate(12);

        return view('quiz.results', compact('results'));
    }

    public function review($resultId)
    {
        $result = Result::with([
            'quiz.questions.options',
            'answers.question',
            'answers.selectedOption',
            'answers.correctOption',
        ])->findOrFail($resultId);

        if (! $this->canViewResult($result)) {
            abort(403, 'Bạn không có quyền xem bài làm này.');
        }

        $answersByQuestionId = $result->answers->keyBy('question_id');

        return view('quiz.review', compact('result', 'answersByQuestionId'));
    }

    private function resultsQuery()
    {
        $query = Result::with('quiz')->latest('id');

        if (auth()->check()) {
            return $query->where('user_id', auth()->id());
        }

        $sessionResultIds = session('quiz_result_ids', []);

        return $query->whereIn('id', $sessionResultIds);
    }

    private function canViewResult(Result $result): bool
    {
        if (auth()->check()) {
            return (int) $result->user_id === (int) auth()->id();
        }

        return in_array($result->id, session('quiz_result_ids', []), true);
    }
}