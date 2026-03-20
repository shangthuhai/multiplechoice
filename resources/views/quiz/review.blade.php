<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Xem lai bai thi</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .option-item { border: 1px solid #e5e7eb; border-radius: 8px; padding: 10px 12px; }
        .option-correct { border-color: #198754; background: #e9f7ef; }
        .option-wrong { border-color: #dc3545; background: #fdeced; }
        .pill { font-size: 12px; padding: 2px 8px; border-radius: 999px; }
    </style>
</head>
<body class="bg-light">
    <nav class="navbar navbar-dark bg-primary mb-4 shadow">
        <div class="container">
            <a class="navbar-brand fw-bold" href="{{ route('quiz.index') }}">MY QUIZ APP</a>
            <div class="d-flex gap-2">
                <a href="{{ route('quiz.results') }}" class="btn btn-outline-light">Bai da lam</a>
                <a href="{{ route('quiz.index') }}" class="btn btn-light text-primary fw-bold">Danh sach de thi</a>
            </div>
        </div>
    </nav>

    <div class="container" style="max-width: 900px;">
        @if(session('status'))
            <div class="alert alert-success text-center fw-bold">{{ session('status') }}</div>
        @endif

        <div class="card border-0 shadow-sm mb-4">
            <div class="card-body d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <h4 class="mb-1">{{ $result->quiz->title ?? 'Bai thi' }}</h4>
                    <p class="text-muted mb-0">Hoan thanh luc: {{ $result->created_at->format('d/m/Y H:i') }}</p>
                </div>
                <div class="text-end">
                    <span class="badge bg-success fs-6">Diem: {{ $result->score }} / {{ $result->total_questions }}</span>
                </div>
            </div>
        </div>

        @foreach($result->quiz->questions as $index => $question)
            @php
                $answer = $answersByQuestionId->get($question->id);
                $selectedOptionId = $answer?->selected_option_id;
                $correctOptionId = $answer?->correct_option_id;
            @endphp

            <div class="card border-0 shadow-sm mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3 gap-2">
                        <h5 class="mb-0">Cau {{ $index + 1 }}: {{ $question->question_text }}</h5>
                        @if($answer?->is_correct)
                            <span class="badge bg-success">Dung</span>
                        @else
                            <span class="badge bg-danger">Sai</span>
                        @endif
                    </div>

                    <div class="d-grid gap-2">
                        @foreach($question->options as $option)
                            @php
                                $classes = 'option-item';
                                if ($option->id === $correctOptionId) {
                                    $classes .= ' option-correct';
                                } elseif ($selectedOptionId && $option->id === $selectedOptionId && $selectedOptionId !== $correctOptionId) {
                                    $classes .= ' option-wrong';
                                }
                            @endphp

                            <div class="{{ $classes }} d-flex justify-content-between align-items-center">
                                <span>{{ $option->option_text }}</span>
                                <span>
                                    @if($option->id === $correctOptionId)
                                        <span class="pill bg-success text-white">Dap an dung</span>
                                    @endif
                                    @if($selectedOptionId && $option->id === $selectedOptionId)
                                        <span class="pill bg-primary text-white">Ban chon</span>
                                    @endif
                                </span>
                            </div>
                        @endforeach
                    </div>

                    @if(!$selectedOptionId)
                        <p class="text-muted mt-2 mb-0"><em>Ban bo qua cau nay.</em></p>
                    @endif
                </div>
            </div>
        @endforeach
    </div>
</body>
</html>
