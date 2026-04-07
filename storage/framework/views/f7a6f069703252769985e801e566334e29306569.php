

<?php $__env->startSection('content'); ?>
<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="flex justify-between items-center mb-8">
            <div>
                <h1 class="text-4xl font-bold text-gray-900">Câu hỏi của tôi</h1>
                <p class="text-gray-600 mt-2">Quản lý các câu hỏi bạn đã tạo</p>
            </div>
            <a href="<?php echo e(route('questions.create')); ?>" class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                </svg>
                Tạo câu hỏi mới
            </a>
        </div>

        <!-- Messages -->
        <?php if($errors->any()): ?>
            <div class="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <p class="text-red-800 font-medium">Lỗi:</p>
                <ul class="text-red-700 mt-2 list-disc list-inside">
                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <li><?php echo e($error); ?></li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </ul>
            </div>
        <?php endif; ?>

        <?php if(session('success')): ?>
            <div class="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <p class="text-green-800"><?php echo e(session('success')); ?></p>
            </div>
        <?php endif; ?>

        <!-- Questions Grid -->
        <?php if($questions->count() > 0): ?>
            <div class="space-y-4">
                <?php $__currentLoopData = $questions; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $question): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="bg-white rounded-lg shadow hover:shadow-lg transition border border-gray-200">
                        <div class="p-6">
                            <div class="flex justify-between items-start mb-4">
                                <div class="flex-1">
                                    <p class="text-gray-500 text-sm mb-2">Câu hỏi #<?php echo e($question->id); ?></p>
                                    <h3 class="text-xl font-semibold text-gray-900 mb-2"><?php echo e($question->text); ?></h3>
                                    <div class="flex items-center gap-4 text-sm text-gray-600">
                                        <span class="flex items-center gap-1">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                                            </svg>
                                            <?php echo e($question->options->count()); ?> đáp án
                                        </span>
                                        <span class="flex items-center gap-1">
                                            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                            <?php echo e($question->created_at->format('d/m/Y H:i')); ?>

                                        </span>
                                    </div>
                                </div>
                                <div class="flex gap-2 ml-4">
                                    <a href="<?php echo e(route('questions.show', $question->id)); ?>" class="inline-flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium px-3 py-2 rounded transition hover:bg-blue-50">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                                        </svg>
                                        Xem
                                    </a>
                                    <a href="<?php echo e(route('questions.edit', $question->id)); ?>" class="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium px-3 py-2 rounded transition hover:bg-amber-50">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                        Sửa
                                    </a>
                                    <button onclick="deleteQuestion(<?php echo e($question->id); ?>)" class="inline-flex items-center gap-1 text-red-600 hover:text-red-700 font-medium px-3 py-2 rounded transition hover:bg-red-50">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                        Xóa
                                    </button>
                                </div>
                            </div>

                            <!-- Options Preview -->
                            <div class="mt-4 pt-4 border-t border-gray-200">
                                <p class="text-sm font-medium text-gray-700 mb-2">Đáp án:</p>
                                <div class="space-y-2">
                                    <?php $__currentLoopData = $question->options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div class="flex items-center gap-2 text-sm">
                                            <?php if($option->is_correct): ?>
                                                <span class="inline-flex items-center justify-center w-5 h-5 bg-green-100 rounded-full">
                                                    <svg class="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                    </svg>
                                                </span>
                                                <span class="text-green-700 font-medium"><?php echo e($option->text); ?></span>
                                            <?php else: ?>
                                                <span class="inline-flex items-center justify-center w-5 h-5 border-2 border-gray-300 rounded-full"></span>
                                                <span class="text-gray-700"><?php echo e($option->text); ?></span>
                                            <?php endif; ?>
                                        </div>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                </div>
                            </div>
                        </div>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>

            <!-- Pagination -->
            <div class="mt-8">
                <?php echo e($questions->links()); ?>

            </div>
        <?php else: ?>
            <div class="bg-white rounded-lg shadow border border-gray-200 p-12 text-center">
                <svg class="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <h3 class="text-xl font-semibold text-gray-900 mb-2">Chưa có câu hỏi nào</h3>
                <p class="text-gray-600 mb-6">Bạn chưa tạo câu hỏi nào. Hãy bắt đầu tạo câu hỏi đầu tiên của bạn.</p>
                <a href="<?php echo e(route('questions.create')); ?>" class="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg font-medium transition">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                    </svg>
                    Tạo câu hỏi mới
                </a>
            </div>
        <?php endif; ?>
    </div>
</div>

<script>
function deleteQuestion(id) {
    if (confirm('Bạn có chắc chắn muốn xóa câu hỏi này?')) {
        fetch(`/my-questions/${id}`, {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                window.location.reload();
            } else {
                alert('Lỗi: ' + data.error);
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Có lỗi xảy ra khi xóa câu hỏi');
        });
    }
}
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views\questions\index.blade.php ENDPATH**/ ?>