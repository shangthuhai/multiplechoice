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

    public function edit($id)
    {
        $quiz = Quiz::with('questions.options')->findOrFail($id);

        $editableQuestions = $quiz->questions->map(function ($question) {
            return [
                'question_text' => $question->question_text,
                'options' => $question->options->map(function ($option) {
                    return [
                        'option_text' => $option->option_text,
                        'is_correct' => (bool) $option->is_correct,
                    ];
                })->values(),
            ];
        })->values();

        return view('quiz.edit', compact('quiz', 'editableQuestions'));
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'title' => 'required|string|min:3|max:255',
            'minutes' => 'required|integer|min:1|max:300',
            'questions' => 'required|array|min:1',
            'questions.*.question_text' => 'required|string|min:5|max:1000',
            'questions.*.options' => 'required|array|min:2|max:6',
            'questions.*.options.*' => 'required|string|min:1|max:500',
            'questions.*.correct_option' => 'required|integer|min:0',
        ]);

        $quiz = Quiz::findOrFail($id);

        DB::beginTransaction();
        try {
            $quiz->update([
                'title' => $validated['title'],
                'minutes' => (int) $validated['minutes'],
            ]);

            // Replace all questions/options in the quiz with the edited set.
            $quiz->questions()->delete();

            foreach ($validated['questions'] as $qData) {
                $correctIndex = (int) $qData['correct_option'];
                if (!array_key_exists($correctIndex, $qData['options'])) {
                    DB::rollBack();

                    return back()
                        ->withInput()
                        ->withErrors(['msg' => 'Đáp án đúng không hợp lệ ở một số câu hỏi.']);
                }

                $question = $quiz->questions()->create([
                    'question_text' => $qData['question_text'],
                ]);

                foreach ($qData['options'] as $key => $optionText) {
                    $question->options()->create([
                        'option_text' => $optionText,
                        'is_correct' => ((int) $key === $correctIndex) ? 1 : 0,
                    ]);
                }
            }

            DB::commit();
        } catch (\Throwable $e) {
            DB::rollBack();

            return back()
                ->withInput()
                ->withErrors(['msg' => 'Không thể cập nhật đề thi: ' . $e->getMessage()]);
        }

        return redirect()
            ->route('quiz.index')
            ->with('status', 'Đã cập nhật đề thi và câu hỏi bên trong.');
    }

    public function destroy($id)
    {
        $quiz = Quiz::findOrFail($id);
        $quiz->delete();

        return redirect()
            ->route('quiz.index')
            ->with('status', 'Đã xóa đề thi.');
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
        $firebaseUid = $this->currentFirebaseUid($request);

        DB::beginTransaction();
        try {
            $result = Result::create([
                'user_id' => auth()->id(),
                'firebase_uid' => $firebaseUid,
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
            session(['quiz_result_ids' => array_values(array_unique(array_slice($sessionResultIds, 0, 100)))]);

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

    public function destroyResult($resultId)
    {
        $result = $this->resultsQuery()->whereKey($resultId)->firstOrFail();
        $result->delete();

        $sessionResultIds = session('quiz_result_ids', []);
        if (!empty($sessionResultIds)) {
            $sessionResultIds = array_values(array_filter(
                $sessionResultIds,
                fn ($id) => (int) $id !== (int) $resultId
            ));
            session(['quiz_result_ids' => $sessionResultIds]);
        }

        return redirect()
            ->route('quiz.results')
            ->with('status', 'Đã xóa bài làm khỏi lịch sử.');
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

        $firebaseUid = $this->currentFirebaseUid(request());
        $sessionResultIds = session('quiz_result_ids', []);

        if (!empty($firebaseUid)) {
            return $query->where(function ($q) use ($firebaseUid, $sessionResultIds) {
                $q->where('firebase_uid', $firebaseUid);

                if (!empty($sessionResultIds)) {
                    // Allow legacy results created before firebase_uid existed.
                    $q->orWhereIn('id', $sessionResultIds);
                }
            });
        }

        // Security: If no valid firebase_uid and no session IDs, return empty result
        if (empty($sessionResultIds)) {
            return $query->whereRaw('1 = 0');
        }

        return $query->whereIn('id', $sessionResultIds);
    }

    private function canViewResult(Result $result): bool
    {
        if (auth()->check()) {
            return (int) $result->user_id === (int) auth()->id();
        }

        $firebaseUid = $this->currentFirebaseUid(request());
        $sessionResultIds = session('quiz_result_ids', []);

        if (!empty($firebaseUid)) {
            if ((string) $result->firebase_uid === (string) $firebaseUid) {
                return true;
            }

            // Fallback for records created without firebase_uid.
            return in_array($result->id, $sessionResultIds, true);
        }

        // Security: Deny access if no firebase_uid and result_id not in session
        if (empty($sessionResultIds)) {
            return false;
        }

        return in_array($result->id, $sessionResultIds, true);
    }

    private function currentFirebaseUid(Request $request): ?string
    {
        $uid = $request->cookie('quiz_firebase_uid');
        if (!is_string($uid) || $uid === '') {
            return null;
        }

        return $uid;
    }
}