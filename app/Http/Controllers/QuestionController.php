<?php

namespace App\Http\Controllers;

use App\Models\Question;
use App\Models\Option;
use Illuminate\Http\Request;

class QuestionController extends Controller
{
    /**
     * Get current Firebase UID from cookie
     */
    protected function currentFirebaseUid(Request $request): ?string
    {
        $uid = $request->cookie('quiz_firebase_uid');
        if (!is_string($uid) || $uid === '') {
            return null;
        }

        return $uid;
    }

    /**
     * List all questions created by current user
     */
    public function index(Request $request)
    {
        $firebaseUid = $this->currentFirebaseUid($request);

        if (!$firebaseUid || !is_string($firebaseUid) || $firebaseUid === '') {
            return redirect()->route('auth.login')->with('error', 'Vui lòng đăng nhập');
        }

        $questions = Question::forCurrentUser($firebaseUid)
            ->with('options')
            ->orderByDesc('created_at')
            ->paginate(10);

        return view('questions.index', compact('questions'));
    }

    /**
     * Show create question form
     */
    public function create(Request $request)
    {
        $firebaseUid = $this->currentFirebaseUid($request);

        if (!$firebaseUid || !is_string($firebaseUid) || $firebaseUid === '') {
            return redirect()->route('auth.login')->with('error', 'Vui lòng đăng nhập');
        }

        return view('questions.create');
    }

    /**
     * Store new question
     */
    public function store(Request $request)
    {
        $firebaseUid = $this->currentFirebaseUid($request);

        if (!$firebaseUid || !is_string($firebaseUid) || $firebaseUid === '') {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $validated = $request->validate([
            'text' => 'required|string|min:5|max:1000',
            'options' => 'required|array|min:2|max:6',
            'options.*.text' => 'required|string|min:1|max:500',
            'options.*.is_correct' => 'boolean',
            'correct_option' => 'required|integer|min:0',
        ]);

        // Ensure at least one option is correct
        if (!isset($validated['options'][$validated['correct_option']])) {
            return response()->json(['error' => 'Invalid correct option index'], 422);
        }

        try {
            // Create question
            $question = Question::create([
                'text' => $validated['text'],
                'firebase_uid' => $firebaseUid,
                'user_id' => auth()->id() ?? null, // If user is authenticated in Laravel
            ]);

            // Create options
            foreach ($validated['options'] as $index => $optionData) {
                Option::create([
                    'question_id' => $question->id,
                    'text' => $optionData['text'],
                    'is_correct' => $index === (int) $validated['correct_option'],
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Câu hỏi được tạo thành công',
                'question_id' => $question->id,
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Show single question
     */
    public function show(Request $request, $id)
    {
        $firebaseUid = $this->currentFirebaseUid($request);

        if (!$firebaseUid || !is_string($firebaseUid) || $firebaseUid === '') {
            return redirect()->route('auth.login')->with('error', 'Vui lòng đăng nhập');
        }

        $question = Question::with('options')->findOrFail($id);

        if (!$question->canView($firebaseUid)) {
            abort(403, 'Bạn không có quyền xem câu hỏi này');
        }

        return view('questions.show', compact('question'));
    }

    /**
     * Show edit question form
     */
    public function edit(Request $request, $id)
    {
        $firebaseUid = $this->currentFirebaseUid($request);

        if (!$firebaseUid || !is_string($firebaseUid) || $firebaseUid === '') {
            return redirect()->route('auth.login')->with('error', 'Vui lòng đăng nhập');
        }

        $question = Question::with('options')->findOrFail($id);

        if (!$question->canEdit($firebaseUid)) {
            abort(403, 'Bạn không có quyền chỉnh sửa câu hỏi này');
        }

        return view('questions.edit', compact('question'));
    }

    /**
     * Update question
     */
    public function update(Request $request, $id)
    {
        $firebaseUid = $this->currentFirebaseUid($request);

        if (!$firebaseUid || !is_string($firebaseUid) || $firebaseUid === '') {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $question = Question::findOrFail($id);

        if (!$question->canEdit($firebaseUid)) {
            return response()->json(['error' => 'Forbidden'], 403);
        }

        $validated = $request->validate([
            'text' => 'required|string|min:5|max:1000',
            'options' => 'required|array|min:2|max:6',
            'options.*.text' => 'required|string|min:1|max:500',
            'options.*.is_correct' => 'boolean',
            'correct_option' => 'required|integer|min:0',
        ]);

        if (!isset($validated['options'][$validated['correct_option']])) {
            return response()->json(['error' => 'Invalid correct option index'], 422);
        }

        try {
            // Update question text
            $question->update(['text' => $validated['text']]);

            // Delete old options
            $question->options()->delete();

            // Create new options
            foreach ($validated['options'] as $index => $optionData) {
                Option::create([
                    'question_id' => $question->id,
                    'text' => $optionData['text'],
                    'is_correct' => $index === (int) $validated['correct_option'],
                ]);
            }

            return response()->json([
                'success' => true,
                'message' => 'Câu hỏi được cập nhật thành công',
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * Delete question
     */
    public function destroy(Request $request, $id)
    {
        $firebaseUid = $this->currentFirebaseUid($request);

        if (!$firebaseUid || !is_string($firebaseUid) || $firebaseUid === '') {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $question = Question::findOrFail($id);

        if (!$question->canEdit($firebaseUid)) {
            return response()->json(['error' => 'Forbidden'], 403);
        }

        try {
            // Delete options first (due to foreign key)
            $question->options()->delete();
            // Then delete question
            $question->delete();

            return response()->json([
                'success' => true,
                'message' => 'Câu hỏi được xóa thành công',
            ]);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
