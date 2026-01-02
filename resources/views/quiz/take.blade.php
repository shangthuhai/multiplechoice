<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Đang làm bài: {{ $quiz->title }}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .option-label { cursor: pointer; transition: all 0.2s; border: 2px solid #eee; }
        .option-input:checked + .option-label { border-color: #0d6efd; background-color: #e7f1ff; }
    </style>
</head>
<body class="bg-light">
    <nav class="navbar fixed-top navbar-light bg-white shadow-sm">
        <div class="container">
            <span class="navbar-brand mb-0 h1 text-primary">{{ $quiz->title }}</span>
            <div class="d-flex align-items-center">
                <span class="badge bg-danger p-2 fs-6">⏳ Thời gian: {{ $quiz->minutes }} phút</span>
            </div>
        </div>
    </nav>

    <div class="container" style="margin-top: 80px; max-width: 800px;">
        <form action="{{ route('quiz.submit', $quiz->id) }}" method="POST">
            @csrf
            
            @foreach($quiz->questions as $index => $question)
            <div class="card mb-4 border-0 shadow-sm">
                <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
                    <h5 class="fw-bold">Câu {{ $index + 1 }}: <span class="fw-normal">{{ $question->question_text }}</span></h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        @foreach($question->options as $option)
                        <div class="col-md-6 mb-3">
                            <input type="radio" class="btn-check option-input" 
                                   name="answers[{{ $question->id }}]" 
                                   id="opt-{{ $option->id }}" 
                                   value="{{ $option->id }}">
                            
                            <label class="btn btn-outline-light text-dark w-100 text-start p-3 option-label shadow-sm" 
                                   for="opt-{{ $option->id }}">
                                <span class="fw-bold me-2">{{ $loop->iteration }}.</span> {{ $option->option_text }}
                            </label>
                        </div>
                        @endforeach
                    </div>
                </div>
            </div>
            @endforeach

            <div class="card mb-5 border-0 bg-transparent">
                <button type="submit" class="btn btn-success btn-lg py-3 shadow fw-bold" 
                        onclick="return confirm('Bạn có chắc chắn muốn nộp bài không?')">
                    📤 NỘP BÀI THI
                </button>
            </div>
        </form>
    </div>
</body>
</html>