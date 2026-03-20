<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Danh sách đề thi</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        :root {
            --bg-1: #0b1538;
            --bg-2: #111f4f;
            --card: #ffffff;
            --ink: #1b2559;
            --accent: #ff8a00;
            --cyan: #00c2ff;
            --mint: #22c55e;
        }

        body {
            min-height: 100vh;
            background:
                radial-gradient(circle at 8% 10%, rgba(0, 194, 255, 0.22), transparent 35%),
                radial-gradient(circle at 90% 20%, rgba(255, 138, 0, 0.25), transparent 40%),
                linear-gradient(135deg, var(--bg-1), var(--bg-2));
        }

        .top-nav {
            background: rgba(8, 17, 48, 0.78);
            backdrop-filter: blur(6px);
        }

        .brand-pill {
            font-weight: 900;
            letter-spacing: 0.6px;
            color: #fff;
            text-decoration: none;
            font-size: 20px;
        }

        .section-card {
            border: 0;
            border-radius: 18px;
            background: rgba(255, 255, 255, 0.97);
            box-shadow: 0 22px 42px rgba(8, 17, 48, 0.25);
        }

        .quiz-card {
            border: 0;
            border-radius: 16px;
            background: var(--card);
            transition: transform 0.22s ease, box-shadow 0.22s ease;
            box-shadow: 0 10px 26px rgba(11, 21, 56, 0.12);
        }

        .quiz-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 18px 35px rgba(11, 21, 56, 0.22);
        }

        .quiz-title {
            color: var(--ink);
            font-weight: 800;
        }

        .chip {
            border-radius: 999px;
            font-weight: 700;
            padding: 6px 12px;
            font-size: 12px;
        }

        .chip-cyan { background: #dff6ff; color: #0f5a74; }
        .chip-orange { background: #fff0d9; color: #925312; }

        .hero-title {
            color: #fff;
            font-weight: 900;
            letter-spacing: 0.3px;
        }

        .hero-sub {
            color: rgba(255, 255, 255, 0.78);
            max-width: 700px;
        }
    </style>
</head>
<body>
    <nav class="navbar navbar-dark top-nav mb-4 py-3">
        <div class="container">
            <a class="brand-pill" href="/">MY QUIZ APP</a>
            <div class="d-flex gap-2">
                <a href="<?php echo e(route('quiz.results')); ?>" class="btn btn-outline-light fw-bold">Bài đã làm</a>
                <a href="<?php echo e(route('quiz.create')); ?>" class="btn fw-bold" style="background:#fff;color:#1b2559;">+ Tạo đề mới</a>
            </div>
        </div>
    </nav>

    <div class="container">
        <div class="mb-4">
            <h2 class="hero-title mb-2">Chọn bộ câu hỏi và chơi ngay</h2>
            <p class="hero-sub mb-0">Phong cách thi nhanh, trực quan, dễ theo dõi tiến độ và điểm số.</p>
        </div>

        <?php if(session('status')): ?>
            <div class="alert alert-success text-center fw-bold"><?php echo e(session('status')); ?></div>
        <?php endif; ?>

        <h3 class="mb-3 text-white">Danh sách bài thi</h3>

        <?php if($recentResults->isNotEmpty()): ?>
            <div class="section-card mb-4">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-center mb-2">
                        <h5 class="mb-0 fw-bold" style="color:#1b2559;">Bài bạn làm gần đây</h5>
                        <a href="<?php echo e(route('quiz.results')); ?>" class="btn btn-sm btn-outline-primary">Xem tất cả</a>
                    </div>
                    <div class="list-group list-group-flush">
                        <?php $__currentLoopData = $recentResults; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <a href="<?php echo e(route('quiz.review', $result->id)); ?>" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
                                <span><?php echo e($result->quiz->title ?? 'Bài thi đã xóa'); ?></span>
                                <span class="badge bg-success rounded-pill"><?php echo e($result->score); ?> / <?php echo e($result->total_questions); ?></span>
                            </a>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            </div>
        <?php endif; ?>
        
        <div class="row">
            <?php $__currentLoopData = $quizzes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $quiz): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-md-4 mb-4">
                <div class="card quiz-card h-100">
                    <div class="card-body">
                        <h5 class="quiz-title"><?php echo e($quiz->title); ?></h5>
                        <p class="text-muted small mb-2">Đăng ngày: <?php echo e($quiz->created_at->format('d/m/Y')); ?></p>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="chip chip-cyan"><?php echo e($quiz->questions_count); ?> câu hỏi</span>
                            <span class="chip chip-orange"><?php echo e($quiz->minutes); ?> phút</span>
                        </div>
                    </div>
                    <div class="card-footer bg-white border-top-0 pb-3">
                        <a href="<?php echo e(route('quiz.show', $quiz->id)); ?>" class="btn btn-dark w-100 fw-bold">Vào phòng chờ</a>
                    </div>
                </div>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>
    </div>
</body>
</html><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views/quiz/index.blade.php ENDPATH**/ ?>