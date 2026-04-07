

<?php $__env->startSection('content'); ?>
<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="flex justify-between items-start mb-8">
            <div>
                <h1 class="text-4xl font-bold text-gray-900">Chi tiết câu hỏi</h1>
                <p class="text-gray-600 mt-2">Câu hỏi #<?php echo e($question->id); ?></p>
            </div>
            <div class="flex gap-2">
                <a href="<?php echo e(route('questions.edit', $question->id)); ?>" class="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-4 py-2 rounded-lg font-medium transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                    </svg>
                    Chỉnh sửa
                </a>
                <button onclick="deleteQuestion()" class="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium transition">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                    Xóa
                </button>
            </div>
        </div>

        <!-- Question Card -->
        <div class="bg-white rounded-lg shadow border border-gray-200 p-8 mb-8">
            <!-- Question Info -->
            <div class="mb-8">
                <p class="text-gray-500 text-sm mb-3">Câu hỏi</p>
                <h2 class="text-2xl font-semibold text-gray-900 mb-4"><?php echo e($question->text); ?></h2>
                <div class="flex items-center gap-6 text-sm text-gray-600">
                    <span class="flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        Tạo: <?php echo e($question->created_at->format('d/m/Y H:i')); ?>

                    </span>
                    <span class="flex items-center gap-2">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                        </svg>
                        Cập nhật: <?php echo e($question->updated_at->format('d/m/Y H:i')); ?>

                    </span>
                </div>
            </div>

            <!-- Options -->
            <div class="mt-8 pt-8 border-t border-gray-200">
                <h3 class="text-lg font-semibold text-gray-900 mb-6">Đáp án (<?php echo e($question->options->count()); ?>)</h3>

                <div class="space-y-3">
                    <?php $__currentLoopData = $question->options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $index => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="flex items-start gap-4 p-5 rounded-lg border-2 <?php echo e($option->is_correct ? 'border-green-300 bg-green-50' : 'border-gray-300 bg-gray-50'); ?>">
                            <div class="flex-shrink-0">
                                <?php if($option->is_correct): ?>
                                    <div class="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                                        <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                        </svg>
                                    </div>
                                <?php else: ?>
                                    <div class="flex items-center justify-center w-6 h-6 border-2 border-gray-400 rounded-full text-gray-400 text-sm"><?php echo e(chr(65 + $index)); ?></div>
                                <?php endif; ?>
                            </div>
                            <div class="flex-1">
                                <p class="text-gray-900 font-medium"><?php echo e($option->text); ?></p>
                                <?php if($option->is_correct): ?>
                                    <span class="inline-block mt-2 px-3 py-1 bg-green-200 text-green-800 text-sm font-medium rounded-full">
                                        Đáp án đúng
                                    </span>
                                <?php endif; ?>
                            </div>
                        </div>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </div>
            </div>
        </div>

        <!-- Back Link -->
        <div class="text-center">
            <a href="<?php echo e(route('questions.index')); ?>" class="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
                </svg>
                Quay lại danh sách
            </a>
        </div>
    </div>
</div>

<script>
function deleteQuestion() {
    if (confirm('Bạn có chắc chắn muốn xóa câu hỏi này? Hành động này không thể hoàn tác.')) {
        fetch('/my-questions/<?php echo e($question->id); ?>', {
            method: 'DELETE',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert(data.message);
                window.location.href = '<?php echo e(route("questions.index")); ?>';
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

<?php echo $__env->make('layouts.app', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views\questions\show.blade.php ENDPATH**/ ?>