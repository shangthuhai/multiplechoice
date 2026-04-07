<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Xem lại bài thi</title>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.js']); ?>
</head>
<body class="bg-white" data-auth-required="true">
    <!-- Navigation -->
    <nav class="border-b border-gray-200 sticky top-0 bg-white z-40">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex justify-between items-center">
                <div>
                    <a href="<?php echo e(route('quiz.index')); ?>" class="text-2xl font-bold text-gray-900">Quiz</a>
                </div>
                <div class="flex gap-3">
                    <a href="<?php echo e(route('quiz.results')); ?>" class="text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        Lịch sử
                    </a>
                    <a href="<?php echo e(route('quiz.index')); ?>" class="text-blue-600 hover:text-blue-700 font-medium">
                        Danh sách →
                    </a>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <?php if(session('status')): ?>
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium">
                <?php echo e(session('status')); ?>

            </div>
        <?php endif; ?>

        <!-- Result Header -->
        <div class="card-lg p-6 mb-8">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
                <div>
                    <h1 class="text-3xl font-bold text-gray-900 mb-2"><?php echo e($result->quiz->title ?? 'Bài thi'); ?></h1>
                    <p class="text-gray-600">Hoàn thành lúc: <?php echo e($result->created_at->format('d/m/Y H:i')); ?></p>
                </div>
                <div class="px-6 py-3 bg-green-100 text-green-700 rounded-lg font-bold text-xl">
                    Điểm: <?php echo e($result->score); ?>/<?php echo e($result->total_questions); ?>

                </div>
            </div>
        </div>

        <!-- Questions Review -->
        <div class="space-y-6">
            <?php $__currentLoopData = $result->quiz->questions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $question): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php
                    $answer = $answersByQuestionId->get($question->id);
                    $selectedOptionId = $answer?->selected_option_id;
                    $correctOptionId = $answer?->correct_option_id;
                    $isCorrect = $answer?->is_correct;
                ?>

                <div class="card-lg p-6">
                    <!-- Question Header -->
                    <div class="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
                        <h3 class="text-lg font-bold text-gray-900">
                            <span class="text-gray-500">Câu <?php echo e($index + 1); ?>.</span> <?php echo e($question->question_text); ?>

                        </h3>
                        <div class="flex-shrink-0">
                            <?php if($isCorrect): ?>
                                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                                    </svg>
                                    Đúng
                                </span>
                            <?php else: ?>
                                <span class="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-semibold flex items-center gap-1">
                                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"/>
                                    </svg>
                                    Sai
                                </span>
                            <?php endif; ?>
                        </div>
                    </div>

                    <!-- Answer Feedback -->
                    <?php if(!$selectedOptionId): ?>
                        <div class="p-4 bg-gray-50 rounded-lg text-gray-700 font-medium mb-4">
                            <p class="mb-0">Bạn đã bỏ qua câu này.</p>
                        </div>
                    <?php endif; ?>

                    <!-- Options List -->
                    <div class="space-y-3">
                        <?php $__currentLoopData = $question->options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $optionIndex => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <?php
                                $isSelectedOption = $selectedOptionId && $option->id === $selectedOptionId;
                                $isCorrectOption = $option->id === $correctOptionId;
                                $isWrongSelection = $isSelectedOption && !$isCorrectOption;
                            ?>

                            <div class="p-4 border-2 rounded-lg transition-colors <?php if($isCorrectOption): ?> bg-green-50 border-green-300 <?php elseif($isWrongSelection): ?> bg-red-50 border-red-300 <?php else: ?> bg-white border-gray-200 <?php endif; ?>">
                                <div class="flex items-start justify-between gap-3">
                                    <div class="flex items-start gap-3">
                                        <span class="font-semibold text-gray-700 flex-shrink-0"><?php echo e(chr(65 + $optionIndex)); ?>.</span>
                                        <span class="<?php if($isCorrectOption): ?> text-green-700 font-medium <?php elseif($isWrongSelection): ?> text-red-700 font-medium <?php else: ?> text-gray-800 <?php endif; ?>">
                                            <?php echo e($option->option_text); ?>

                                        </span>
                                    </div>
                                    <div class="flex gap-2 flex-shrink-0">
                                        <?php if($isCorrectOption): ?>
                                            <span class="px-2 py-1 bg-green-200 text-green-700 rounded text-xs font-semibold">
                                                ✓ Đáp án đúng
                                            </span>
                                        <?php endif; ?>
                                        <?php if($isSelectedOption && !$isCorrectOption): ?>
                                            <span class="px-2 py-1 bg-red-200 text-red-700 rounded text-xs font-semibold">
                                                Bạn chọn
                                            </span>
                                        <?php elseif($isSelectedOption): ?>
                                            <span class="px-2 py-1 bg-blue-200 text-blue-700 rounded text-xs font-semibold">
                                                Bạn chọn
                                            </span>
                                        <?php endif; ?>
                                    </div>
                                </div>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        </div>

        <!-- Back Button -->
        <div class="mt-8 text-center">
            <a href="<?php echo e(route('quiz.results')); ?>" class="text-blue-600 hover:text-blue-700 font-medium">
                ← Quay lại lịch sử
            </a>
        </div>
    </main>
</body>
</html>
<?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views\quiz\review.blade.php ENDPATH**/ ?>