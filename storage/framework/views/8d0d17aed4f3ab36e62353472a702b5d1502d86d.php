<form action="<?php echo e(route('quiz.submit', $quiz->id)); ?>" method="POST">
    <?php echo csrf_field(); ?>
    <h2><?php echo e($quiz->title); ?></h2>
    
    <?php $__currentLoopData = $quiz->questions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $question): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <div class="card mb-3">
            <div class="card-header"><?php echo e($question->question_text); ?></div>
            <div class="card-body">
                <?php $__currentLoopData = $question->options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" 
                               name="answers[<?php echo e($question->id); ?>]" 
                               value="<?php echo e($option->id); ?>" 
                               id="opt-<?php echo e($option->id); ?>">
                        <label class="form-check-label" for="opt-<?php echo e($option->id); ?>">
                            <?php echo e($option->option_text); ?>

                        </label>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

    <button type="submit" class="btn btn-primary">Nộp bài</button>
</form><?php /**PATH C:\Users\0pham\trac-nghiem\resources\views/quiz/show.blade.php ENDPATH**/ ?>