<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danh sách đề thi</title>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.js']); ?>
</head>
<body class="bg-white" data-auth-required="true">
    <!-- Navigation -->
    <nav class="border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex justify-between items-center">
                <div>
                    <a href="/" class="text-2xl font-bold text-gray-900">Quiz</a>
                </div>
                <div class="flex gap-3">
                    <span data-auth-email class="hidden sm:inline-flex items-center px-3 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700"></span>
                    <a href="<?php echo e(route('quiz.results')); ?>" class="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors">
                        Bài đã làm
                    </a>
                    <a href="<?php echo e(route('questions.index')); ?>" class="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors">
                        Câu hỏi của tôi
                    </a>
                    <a href="<?php echo e(route('quiz.create')); ?>" class="btn-primary">
                        + Tạo đề
                    </a>
                    <button type="button" data-auth-logout class="px-4 py-2 text-gray-700 font-medium hover:text-gray-900 transition-colors">
                        Đăng xuất
                    </button>
                </div>
            </div>
        </div>
    </nav>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <!-- Hero Section -->
        <div class="mb-12">
            <h1 class="text-4xl font-bold text-gray-900 mb-3">Làm bài thi ngay</h1>
            <p class="text-lg text-gray-600 max-w-2xl">Khám phá những bộ câu hỏi thú vị và kiểm tra kiến thức của bạn.</p>
        </div>

        <?php if(session('status')): ?>
            <div class="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 font-medium">
                <?php echo e(session('status')); ?>

            </div>
        <?php endif; ?>

        <!-- Recent Results Section -->
        <?php if($recentResults->isNotEmpty()): ?>
            <section class="mb-12">
                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-2xl font-bold text-gray-900">Bài bạn làm gần đây</h2>
                    <a href="<?php echo e(route('quiz.results')); ?>" class="text-blue-600 hover:text-blue-700 font-medium">
                        Xem tất cả →
                    </a>
                </div>
                <div class="space-y-3">
                    <?php $__currentLoopData = $recentResults; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $result): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <a href="<?php echo e(route('quiz.review', $result->id)); ?>" 
                           class="block p-4 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 transition-colors">
                            <div class="flex justify-between items-center">
                                <span class="text-gray-900 font-medium"><?php echo e($result->quiz->title ?? 'Bài thi đã xóa'); ?></span>
                                <span class="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                                    <?php echo e($result->score); ?> / <?php echo e($result->total_questions); ?>

                                </span>
                            </div>
                        </a>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </section>
        <?php endif; ?>

        <!-- Quizzes Grid -->
        <section>
            <h2 class="text-2xl font-bold text-gray-900 mb-6">Tất cả bài thi</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <?php $__currentLoopData = $quizzes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $quiz): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="card-lg p-6 hover:shadow-lg transition-shadow">
                        <div class="mb-4">
                            <h3 class="text-xl font-bold text-gray-900 mb-2"><?php echo e($quiz->title); ?></h3>
                            <p class="text-sm text-gray-500">Ngày tạo: <?php echo e($quiz->created_at->format('d/m/Y')); ?></p>
                        </div>
                        
                        <div class="flex gap-3 mb-6">
                            <div class="flex items-center gap-2 text-gray-700">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                                </svg>
                                <span class="text-sm font-medium"><?php echo e($quiz->questions_count); ?> câu</span>
                            </div>
                            <div class="flex items-center gap-2 text-gray-700">
                                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span class="text-sm font-medium"><?php echo e($quiz->minutes); ?> phút</span>
                            </div>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-2">
                            <a href="<?php echo e(route('quiz.show', $quiz->id)); ?>" class="btn-primary text-center col-span-3 sm:col-span-1">
                                Bắt đầu
                            </a>
                            <a
                                href="<?php echo e(route('quiz.edit', $quiz->id)); ?>"
                                class="px-4 py-2.5 border border-blue-200 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors col-span-3 sm:col-span-1 text-center"
                            >
                                Sửa câu hỏi
                            </a>
                            <form
                                action="<?php echo e(route('quiz.destroy', $quiz->id)); ?>"
                                method="POST"
                                class="col-span-3 sm:col-span-1"
                                onsubmit="return confirm('Bạn có chắc chắn muốn xóa đề thi này? Hành động này không thể hoàn tác.');"
                            >
                                <?php echo csrf_field(); ?>
                                <?php echo method_field('DELETE'); ?>
                                <button type="submit" class="w-full px-4 py-2.5 border border-red-200 text-red-600 rounded-lg font-medium hover:bg-red-50 transition-colors">
                                    Xóa
                                </button>
                            </form>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>

            <?php if($quizzes->isEmpty()): ?>
                <div class="text-center py-12">
                    <svg class="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"/>
                    </svg>
                    <p class="text-gray-500 text-lg">Không có bài thi nào</p>
                    <a href="<?php echo e(route('quiz.create')); ?>" class="btn-primary inline-block mt-4">
                        Tạo bài thi đầu tiên
                    </a>
                </div>
            <?php endif; ?>
        </section>
    </main>
</body>
</html><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views\quiz\index.blade.php ENDPATH**/ ?>