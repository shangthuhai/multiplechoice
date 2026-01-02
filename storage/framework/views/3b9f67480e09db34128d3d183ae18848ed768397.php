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
            <a href="<?php echo e(route('quiz.create')); ?>" class="btn btn-light text-primary fw-bold">+ Tạo đề mới</a>
        </div>
    </nav>

    <div class="container">
        <?php if(session('status')): ?>
            <div class="alert alert-success text-center fw-bold"><?php echo e(session('status')); ?></div>
        <?php endif; ?>

        <h3 class="mb-4 text-secondary">Danh sách bài thi hiện có</h3>
        
        <div class="row">
            <?php $__currentLoopData = $quizzes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $quiz): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-md-4 mb-4">
                <div class="card quiz-card h-100 border-0 shadow-sm">
                    <div class="card-body">
                        <h5 class="card-title text-primary"><?php echo e($quiz->title); ?></h5>
                        <p class="text-muted small mb-2">Đăng ngày: <?php echo e($quiz->created_at->format('d/m/Y')); ?></p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="badge bg-info text-dark"><?php echo e($quiz->questions_count); ?> câu hỏi</span>
                            <span class="badge bg-warning text-dark"><?php echo e($quiz->minutes); ?> phút</span>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-top-0 pb-3">
                        <a href="<?php echo e(route('quiz.show', $quiz->id)); ?>" class="btn btn-outline-primary w-100">Xem chi tiết</a>
                    </div>
                </div>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</body>
</html><?php /**PATH C:\Users\0pham\trac-nghiem\resources\views/quiz/index.blade.php ENDPATH**/ ?>