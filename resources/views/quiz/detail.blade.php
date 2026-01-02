<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Chi tiết đề thi</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light d-flex align-items-center justify-content-center" style="height: 100vh;">
    <div class="card shadow-lg text-center p-5 border-0" style="max-width: 500px; width: 100%;">
        <div class="mb-4">
            <img src="https://cdn-icons-png.flaticon.com/512/3407/3407024.png" width="80" alt="icon">
        </div>
        <h2 class="fw-bold text-primary">{{ $quiz->title }}</h2>
        <p class="text-muted">Bạn sắp bắt đầu bài kiểm tra này. Hãy chuẩn bị sẵn sàng!</p>
        
        <div class="row mt-4 mb-4">
            <div class="col-6 border-end">
                <h4 class="fw-bold">{{ $quiz->questions_count }}</h4>
                <small class="text-secondary">Câu hỏi</small>
            </div>
            <div class="col-6">
                <h4 class="fw-bold">{{ $quiz->minutes }}</h4>
                <small class="text-secondary">Phút</small>
            </div>
        </div>

        <a href="{{ route('quiz.take', $quiz->id) }}" class="btn btn-primary btn-lg w-100 rounded-pill shadow">BẮT ĐẦU LÀM BÀI</a>
        <a href="{{ route('quiz.index') }}" class="btn btn-link text-muted mt-3">Quay lại danh sách</a>
    </div>
</body>
</html>