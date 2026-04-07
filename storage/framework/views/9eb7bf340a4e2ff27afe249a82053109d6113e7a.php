<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lịch sử bài thi</title>
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
                <a href="<?php echo e(route('quiz.index')); ?>" class="text-blue-600 hover:text-blue-700 font-medium">
                    ← Danh sách đề thi
                </a>
            </div>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Lịch sử bài thi</h1>

        <?php if(session('status')): ?>
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium">
                <?php echo e(session('status')); ?>

            </div>
        <?php endif; ?>

        <?php if($results->isEmpty()): ?>
            <div class="text-center py-12 card-lg p-8">
                <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                <h3 class="text-xl font-bold text-gray-900 mb-2">Bạn chưa làm bài nào</h3>
                <p class="text-gray-600 mb-6">Hoàn thành một bài thi để xem kết quả của bạn ở đây.</p>
                <a href="<?php echo e(route('quiz.index')); ?>" class="btn-primary inline-block">
                    Bắt đầu làm bài →
                </a>
            </div>
        <?php else: ?>
            <div class="space-y-3">
                <?php $__currentLoopData = $results; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="block card-lg p-6 hover:shadow-md transition-shadow">
                        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                            <div>
                                <h3 class="text-lg font-bold text-gray-900 mb-1">
                                    <?php echo e($result->quiz->title ?? 'Bài thi đã xóa'); ?>

                                </h3>
                                <p class="text-sm text-gray-500">
                                    Ngày làm: <?php echo e($result->created_at->format('d/m/Y H:i')); ?>

                                </p>
                            </div>
                            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                                <div class="px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold text-center">
                                    <?php echo e($result->score); ?>/<?php echo e($result->total_questions); ?> điểm
                                </div>
                                <a href="<?php echo e(route('quiz.review', $result->id)); ?>" class="btn-outline px-4 py-2 text-center">
                                    Xem chi tiết →
                                </a>
                                <form action="<?php echo e(route('quiz.results.destroy', $result->id)); ?>" method="POST" onsubmit="return confirm('Bạn có chắc muốn xóa bài làm này khỏi lịch sử?');">
                                    <?php echo csrf_field(); ?>
                                    <?php echo method_field('DELETE'); ?>
                                    <button type="submit" class="px-4 py-2 text-center border border-red-200 text-red-600 rounded-lg hover:bg-red-50 transition-colors w-full sm:w-auto">
                                        Xóa
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>

            <!-- Pagination -->
            <div class="mt-8">
                <?php echo e($results->links()); ?>

            </div>
        <?php endif; ?>
    </main>
</body>
</html><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views/quiz/results.blade.php ENDPATH**/ ?>