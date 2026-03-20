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
            <a class="navbar-brand fw-bold" href="<?php echo e(route('quiz.index')); ?>">MY QUIZ APP</a>
            <div class="d-flex gap-2">
                <a href="<?php echo e(route('quiz.results')); ?>" class="btn btn-outline-light">Bai da lam</a>
                <a href="<?php echo e(route('quiz.index')); ?>" class="btn btn-light text-primary fw-bold">Danh sach de thi</a>
            </div>
        </div>
    </nav>

    <div class="container" style="max-width: 900px;">
        <?php if(session('status')): ?>
            <div class="alert alert-success text-center fw-bold"><?php echo e(session('status')); ?></div>
        <?php endif; ?>

        <div class="card border-0 shadow-sm mb-4">
            <div class="card-body d-flex justify-content-between align-items-center flex-wrap gap-2">
                <div>
                    <h4 class="mb-1"><?php echo e($result->quiz->title ?? 'Bai thi'); ?></h4>
                    <p class="text-muted mb-0">Hoan thanh luc: <?php echo e($result->created_at->format('d/m/Y H:i')); ?></p>
                </div>
                <div class="text-end">
                    <span class="badge bg-success fs-6">Diem: <?php echo e($result->score); ?> / <?php echo e($result->total_questions); ?></span>
                </div>
            </div>
        </div>

        <?php $__currentLoopData = $result->quiz->questions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $question): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php
                $answer = $answersByQuestionId->get($question->id);
                $selectedOptionId = $answer?->selected_option_id;
                $correctOptionId = $answer?->correct_option_id;
            ?>

            <div class="card border-0 shadow-sm mb-3">
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-3 gap-2">
                        <h5 class="mb-0">Cau <?php echo e($index + 1); ?>: <?php echo e($question->question_text); ?></h5>
                        <?php if($answer?->is_correct): ?>
                            <span class="badge bg-success">Dung</span>
                        <?php else: ?>
                            <span class="badge bg-danger">Sai</span>
                        <?php endif; ?>
                    </div>

                    <div class="d-grid gap-2">
                        <?php $__currentLoopData = $question->options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <?php
                                $classes = 'option-item';
                                if ($option->id === $correctOptionId) {
                                    $classes .= ' option-correct';
                                } elseif ($selectedOptionId && $option->id === $selectedOptionId && $selectedOptionId !== $correctOptionId) {
                                    $classes .= ' option-wrong';
                                }
                            ?>

                            <div class="<?php echo e($classes); ?> d-flex justify-content-between align-items-center">
                                <span><?php echo e($option->option_text); ?></span>
                                <span>
                                    <?php if($option->id === $correctOptionId): ?>
                                        <span class="pill bg-success text-white">Dap an dung</span>
                                    <?php endif; ?>
                                    <?php if($selectedOptionId && $option->id === $selectedOptionId): ?>
                                        <span class="pill bg-primary text-white">Ban chon</span>
                                    <?php endif; ?>
                                </span>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>

                    <?php if(!$selectedOptionId): ?>
                        <p class="text-muted mt-2 mb-0"><em>Ban bo qua cau nay.</em></p>
                    <?php endif; ?>
                </div>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
    </div>
</body>
</html>
<?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views/quiz/review.blade.php ENDPATH**/ ?>