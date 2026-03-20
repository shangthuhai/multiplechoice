<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Đang làm bài: <?php echo e($quiz->title); ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        .option-label { cursor: pointer; transition: all 0.2s; border: 2px solid #eee; }
        .option-input:checked + .option-label { border-color: #0d6efd; background-color: #e7f1ff; }
    </style>
</head>
<body class="bg-light">
    <nav class="navbar fixed-top navbar-light bg-white shadow-sm">
        <div class="container">
            <span class="navbar-brand mb-0 h1 text-primary"><?php echo e($quiz->title); ?></span>
            <div class="d-flex align-items-center">
                <span class="badge bg-danger p-2 fs-6">⏳ Thời gian: <?php echo e($quiz->minutes); ?> phút</span>
            </div>
        </div>
    </nav>

    <div class="container" style="margin-top: 80px; max-width: 800px;">
        <form action="<?php echo e(route('quiz.submit', $quiz->id)); ?>" method="POST">
            <?php echo csrf_field(); ?>
            
            <?php $__currentLoopData = $quiz->questions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $question): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="card mb-4 border-0 shadow-sm">
                <div class="card-header bg-white border-bottom-0 pt-4 pb-0">
                    <h5 class="fw-bold">Câu <?php echo e($index + 1); ?>: <span class="fw-normal"><?php echo e($question->question_text); ?></span></h5>
                </div>
                <div class="card-body">
                    <div class="row">
                        <?php $__currentLoopData = $question->options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-md-6 mb-3">
                            <input type="radio" class="btn-check option-input" 
                                   name="answers[<?php echo e($question->id); ?>]" 
                                   id="opt-<?php echo e($option->id); ?>" 
                                   value="<?php echo e($option->id); ?>">
                            
                            <label class="btn btn-outline-light text-dark w-100 text-start p-3 option-label shadow-sm" 
                                   for="opt-<?php echo e($option->id); ?>">
                                <span class="fw-bold me-2"><?php echo e($loop->iteration); ?>.</span> <?php echo e($option->option_text); ?>

                            </label>
                        </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

            <div class="card mb-5 border-0 bg-transparent">
                <button type="submit" class="btn btn-success btn-lg py-3 shadow fw-bold" 
                        onclick="return confirm('Bạn có chắc chắn muốn nộp bài không?')">
                    📤 NỘP BÀI THI
                </button>
            </div>
        </form>
    </div>
</body>
</html><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views/quiz/take.blade.php ENDPATH**/ ?>