<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đang làm bài: <?php echo e($quiz->title); ?></title>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.js']); ?>
    <style>
        .option-input {
            display: none;
        }

        .option-label {
            position: relative;
            cursor: pointer;
            transition: all 0.2s ease;
        }

        .option-input:not(:checked) + .option-label:hover {
            border-color: #60a5fa;
            background: #dbeafe;
        }

        .option-input:checked + .option-label {
            border-color: #2563eb;
            background: #eff6ff;
            box-shadow: 0 0 0 2px #2563eb;
        }

        .option-input:checked + .option-label::after {
            content: "✓";
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            color: #2563eb;
            font-weight: 700;
        }

        html.dark .option-input:not(:checked) + .option-label:hover {
            border-color: #60a5fa;
            background: #1e293b;
        }

        html.dark .option-input:not(:checked) + .option-label:hover .text-gray-700,
        html.dark .option-input:not(:checked) + .option-label:hover .text-gray-800 {
            color: #e2e8f0 !important;
        }

        html.dark .option-input:checked + .option-label {
            border-color: #60a5fa;
            background: #1e3a8a;
            box-shadow: 0 0 0 2px #60a5fa;
        }

        html.dark .option-input:checked + .option-label::after {
            color: #dbeafe;
        }

        html.dark .option-input:checked + .option-label .text-gray-700,
        html.dark .option-input:checked + .option-label .text-gray-800 {
            color: #eff6ff !important;
        }

        .tracker-item {
            transition: all 0.2s ease;
        }

        .tracker-item.done {
            background: #2563eb !important;
            border-color: #2563eb !important;
            color: #ffffff !important;
        }

        html.dark .tracker-item.done {
            background: #3b82f6 !important;
            border-color: #60a5fa !important;
            color: #eff6ff !important;
            box-shadow: 0 0 0 1px rgba(147, 197, 253, 0.35);
        }
    </style>
</head>
<body class="bg-gray-50" data-auth-required="true">
    <!-- Fixed Header -->
    <header class="fixed top-0 w-full bg-white border-b border-gray-200 z-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex justify-between items-center">
                <div>
                    <h1 class="text-lg font-bold text-gray-900"><?php echo e($quiz->title); ?></h1>
                </div>
                <div class="flex items-center gap-4">
                    <div id="answeredCounter" class="text-sm font-medium text-gray-700">
                        Đã chọn 0 / <?php echo e($quiz->questions->count()); ?>

                    </div>
                    <div class="flex items-center gap-1 text-sm font-medium px-3 py-1 bg-amber-50 text-amber-700 rounded-full">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>
                        <?php echo e($quiz->minutes); ?> phút
                    </div>
                </div>
            </div>
        </div>
    </header>

    <main class="pt-24 pb-12">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Question Tracker -->
            <div class="mb-8 p-4 bg-white rounded-lg border border-gray-200">
                <p class="text-xs font-semibold text-gray-500 mb-3 uppercase">Tiến độ</p>
                <div class="grid grid-cols-12 gap-2">
                    <?php $__currentLoopData = $quiz->questions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $question): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="tracker-item h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded font-medium text-sm cursor-pointer" 
                             data-question-id="<?php echo e($question->id); ?>" 
                             id="tracker-<?php echo e($question->id); ?>">
                            <?php echo e($index + 1); ?>

                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>

            <!-- Form -->
            <form action="<?php echo e(route('quiz.submit', $quiz->id)); ?>" method="POST" class="space-y-6">
                <?php echo csrf_field(); ?>

                <!-- Questions -->
                <?php $__currentLoopData = $quiz->questions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $question): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <div id="question-<?php echo e($question->id); ?>" class="question-card bg-white rounded-lg border border-gray-200 p-6 scroll-mt-28" data-question-id="<?php echo e($question->id); ?>">
                    <div class="mb-6">
                        <div class="flex items-start justify-between gap-4 mb-2">
                            <h3 class="text-lg font-bold text-gray-900">
                                <span class="text-gray-500">Câu <?php echo e($index + 1); ?>.</span> <?php echo e($question->question_text); ?>

                            </h3>
                        </div>
                    </div>

                    <!-- Options -->
                    <div class="space-y-3">
                        <?php $__currentLoopData = $question->options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div>
                            <input type="radio" 
                                   class="option-input answer-input"
                                   data-question-id="<?php echo e($question->id); ?>"
                                   name="answers[<?php echo e($question->id); ?>]"
                                   id="opt-<?php echo e($option->id); ?>"
                                   value="<?php echo e($option->id); ?>">

                            <label class="option-label block p-4 border-2 border-gray-200 rounded-lg cursor-pointer transition-all" 
                                   for="opt-<?php echo e($option->id); ?>">
                                <span class="font-semibold text-gray-700"><?php echo e(chr(64 + $loop->iteration)); ?>.</span>
                                <span class="ml-2 text-gray-800"><?php echo e($option->option_text); ?></span>
                            </label>
                        </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                <!-- Submit Button -->
                <div class="sticky bottom-0 bg-white border-t border-gray-200 p-6 -mx-4 sm:-mx-6 lg:-mx-8 mt-8">
                    <div class="max-w-4xl mx-auto">
                        <button type="submit" 
                                onclick="return confirm('Xác nhận nộp bài? Bạn vẫn có thể xem lại chi tiết sau khi nộp.')"
                                class="btn-primary w-full py-3 text-lg font-semibold">
                            Nộp bài và xem kết quả
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </main>

    <script>
        const answerInputs = document.querySelectorAll('.answer-input');
        const answeredCounter = document.getElementById('answeredCounter');
        const totalQuestions = <?php echo e($quiz->questions->count()); ?>;

        function updateAnsweredState() {
            const answeredQuestionIds = new Set();

            answerInputs.forEach((input) => {
                if (input.checked) {
                    answeredQuestionIds.add(input.dataset.questionId);
                }

                const tracker = document.getElementById('tracker-' + input.dataset.questionId);
                if (tracker) {
                    tracker.classList.toggle('done', answeredQuestionIds.has(input.dataset.questionId));
                }
            });

            answeredCounter.textContent = `Đã chọn ${answeredQuestionIds.size} / ${totalQuestions}`;
        }

        answerInputs.forEach((input) => {
            input.addEventListener('change', updateAnsweredState);
        });

        updateAnsweredState();

        // Scroll to question when clicking tracker item
        document.querySelectorAll('.tracker-item').forEach(item => {
            item.addEventListener('click', function() {
                const questionElement = document.getElementById('question-' + this.dataset.questionId);
                if (questionElement) {
                    questionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    </script>
</body>
</html><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views\quiz\take.blade.php ENDPATH**/ ?>