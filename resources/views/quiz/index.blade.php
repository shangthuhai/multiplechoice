<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Danh sách đề thi</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .quiz-card { transition: transform 0.2s; cursor: pointer; }
        .quiz-card:hover { transform: translateY(-5px); box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
    </style>
</head>
<body class="bg-light">
    <nav class="navbar navbar-dark bg-primary mb-4 shadow">
        <div class="container">
            <a class="navbar-brand fw-bold" href="/">MY QUIZ APP</a>
            <div class="d-flex gap-2">
                <a href="{{ route('quiz.results') }}" class="btn btn-outline-light fw-bold">Bài đã làm</a>
                <a href="{{ route('quiz.create') }}" class="btn btn-light text-primary fw-bold">+ Tạo đề mới</a>
            </div>
        </div>
    </nav>

    <div class="container">
        @if(session('status'))
            <div class="alert alert-success text-center fw-bold">{{ session('status') }}</div>
        @endif

        <h3 class="mb-4 text-secondary">Danh sách bài thi hiện có</h3>

        @if($recentResults->isNotEmpty())
            <div class="card border-0 shadow-sm mb-4">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="mb-0">Bài bạn làm gần đây</h5>
                        <a href="{{ route('quiz.results') }}" class="btn btn-sm btn-outline-primary">Xem tất cả</a>
                    </div>
                    <div class="list-group list-group-flush">
                        @foreach($recentResults as $result)
                            <a href="{{ route('quiz.review', $result->id) }}" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                <span>{{ $result->quiz->title ?? 'Bài thi đã xóa' }}</span>
                                <span class="badge bg-success">{{ $result->score }} / {{ $result->total_questions }}</span>
                            </a>
                        @endforeach
                    </div>
                </div>
            </div>
        @endif
        
        <div class="row">
            @foreach($quizzes as $quiz)
            <div class="col-md-4 mb-4">
                <div class="card quiz-card h-100 border-0 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title text-primary">{{ $quiz->title }}</h5>
                        <p class="text-muted small mb-2">Đăng ngày: {{ $quiz->created_at->format('d/m/Y') }}</p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="badge bg-info text-dark">{{ $quiz->questions_count }} câu hỏi</span>
                            <span class="badge bg-warning text-dark">{{ $quiz->minutes }} phút</span>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-top-0 pb-3">
                        <a href="{{ route('quiz.show', $quiz->id) }}" class="btn btn-outline-primary w-100">Xem chi tiết</a>
                    </div>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</body>
</html>