<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Chi tiết đề thi</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            min-height: 100vh;
            background:
                radial-gradient(circle at 15% 20%, rgba(34, 197, 94, 0.24), transparent 30%),
                radial-gradient(circle at 85% 15%, rgba(0, 194, 255, 0.24), transparent 30%),
                linear-gradient(135deg, #0b1538, #111f4f);
        }

        .lobby-card {
            max-width: 560px;
            width: 100%;
            border: 0;
            border-radius: 22px;
            background: #fff;
            box-shadow: 0 28px 48px rgba(8, 17, 48, 0.34);
        }

        .badge-soft {
            border-radius: 999px;
            background: #eef4ff;
            color: #28427c;
            font-weight: 700;
            padding: 8px 14px;
            font-size: 13px;
        }
    </style>
</head>
<body class="d-flex align-items-center justify-content-center">
    <div class="card lobby-card text-center p-5">
        <div class="mb-4">
            <img src="https://cdn-icons-png.flaticon.com/512/3407/3407024.png" width="80" alt="icon">
        </div>
        <h2 class="fw-bold" style="color:#1b2559;"><?php echo e($quiz->title); ?></h2>
        <p class="text-muted">Sẵn sàng vào trận chưa? Mỗi câu đều tính điểm, tập trung và chọn thật nhanh.</p>
        
        <div class="row mt-4 mb-4 g-3">
            <div class="col-6">
                <div class="p-3 rounded-3" style="background:#f4f7ff;">
                    <h4 class="fw-bold mb-1"><?php echo e($quiz->questions_count); ?></h4>
                    <small class="text-secondary">Câu hỏi</small>
                </div>
            </div>
            <div class="col-6">
                <div class="p-3 rounded-3" style="background:#fff4e8;">
                    <h4 class="fw-bold mb-1"><?php echo e($quiz->minutes); ?></h4>
                    <small class="text-secondary">Phút</small>
                </div>
            </div>
        </div>

        <div class="d-flex justify-content-center gap-2 mb-4">
            <span class="badge-soft">Trắc nghiệm 1 đáp án</span>
            <span class="badge-soft">Tự chấm điểm</span>
        </div>

        <a href="<?php echo e(route('quiz.take', $quiz->id)); ?>" class="btn btn-lg w-100 fw-bold text-white" style="background:#1f67ff;border-radius:14px;">BẮT ĐẦU LÀM BÀI</a>
        <a href="<?php echo e(route('quiz.index')); ?>" class="btn btn-link text-muted mt-2">Quay lại danh sách</a>
    </div>
</body>
</html><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views/quiz/detail.blade.php ENDPATH**/ ?>