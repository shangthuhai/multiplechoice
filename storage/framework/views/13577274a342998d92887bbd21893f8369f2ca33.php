<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tạo Đề Thi Mới</title>
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
                    ← Danh sách
                </a>
            </div>
        </div>
    </nav>

    <main class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 class="text-4xl font-bold text-gray-900 mb-8">Tạo đề thi mới</h1>

        <?php if($errors->any()): ?>
            <div class="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <h3 class="font-semibold text-red-800 mb-2">Có lỗi xảy ra:</h3>
                <ul class="list-disc list-inside text-red-700 space-y-1">
                    <?php $__currentLoopData = $errors->all(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $error): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <li><?php echo e($error); ?></li>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                </ul>
            </div>
        <?php endif; ?>

        <!-- Import Section -->
        <div class="card-lg p-6 mb-8">
            <div class="mb-4">
                <h2 class="text-xl font-bold text-gray-900 mb-2">Nhập từ file</h2>
                <p class="text-gray-600 text-sm mb-4">Chọn file .txt để nhập nhanh câu hỏi. Quy tắc định dạng: Câu hỏi trên 1 dòng, đáp án đúng bắt đầu bằng (*), đáp án sai bắt đầu bằng (-).</p>
            </div>
            <div id="import-area" class="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors">
                <svg class="w-12 h-12 text-gray-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                </svg>
                <p class="text-gray-700 font-medium mb-1">Bấm để chọn file</p>
                <p class="text-gray-500 text-sm">hoặc kéo thả file vào đây</p>
            </div>
            <input type="file" id="fileInput" accept=".txt" style="display: none;" onchange="handleFileUpload(this)">
        </div>

        <!-- Form Section -->
        <form action="<?php echo e(route('quiz.store')); ?>" method="POST" id="quizForm" class="space-y-6">
            <?php echo csrf_field(); ?>
            
            <!-- Quiz Details -->
            <div class="card-lg p-6">
                <h2 class="text-xl font-bold text-gray-900 mb-4">Thông tin bài thi</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Tên bài thi *</label>
                        <input type="text" name="title" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                               placeholder="Ví dụ: Kiểm tra Toán 10..." required>
                    </div>
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Thời gian (phút) *</label>
                        <input type="number" name="minutes" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                               value="15" min="1" required>
                    </div>
                </div>
            </div>

            <!-- Questions Container -->
            <div id="questions-container"></div>

            <!-- Add Question Button -->
            <div class="flex justify-between items-center gap-4">
                <button type="button" class="btn-secondary" onclick="addQuestion()">
                    + Thêm câu hỏi
                </button>
                <button type="submit" class="btn-primary px-8 py-3 font-semibold">
                    Lưu đề thi
                </button>
            </div>
        </form>
    </main>

    <script>
        let qIndex = 0;

        function addQuestion(content = "", options = []) {
            const container = document.getElementById('questions-container');
            
            if (options.length === 0) {
                options = [
                    {text: "", correct: true},
                    {text: "", correct: false},
                    {text: "", correct: false},
                    {text: "", correct: false}
                ];
            }

            let optionsHTML = '';
            options.forEach((opt, oIndex) => {
                optionsHTML += `
                <div class="flex items-start gap-3 mb-3">
                    <input class="mt-2" type="radio" 
                           name="questions[${qIndex}][correct_option]" 
                           value="${oIndex}" ${opt.correct ? 'checked' : ''} required>
                    <div class="flex-1">
                        <input type="text" name="questions[${qIndex}][options][${oIndex}]" 
                               class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${opt.correct ? 'font-semibold text-green-700 bg-green-50' : ''}" 
                               value="${opt.text}" placeholder="Đáp án ${String.fromCharCode(65 + oIndex)}" required>
                    </div>
                </div>`;
            });

            const html = `
            <div class="card-lg p-6 border-l-4 border-blue-500" id="q-${qIndex}">
                <div class="flex justify-between items-start mb-4">
                    <h3 class="text-lg font-bold text-gray-900 question-order">Câu hỏi số ${qIndex + 1}</h3>
                    <div class="flex items-center gap-3">
                        <button type="button" class="text-blue-600 hover:text-blue-700 font-medium" 
                                onclick="focusQuestionEditor(${qIndex})">
                            Sửa
                        </button>
                        <button type="button" class="text-red-600 hover:text-red-700 font-medium" 
                                onclick="removeQuestion(${qIndex})">
                            Xóa
                        </button>
                    </div>
                </div>
                
                <div class="mb-4">
                    <label class="block text-sm font-semibold text-gray-700 mb-2">Nội dung câu hỏi *</label>
                    <input type="text" name="questions[${qIndex}][question_text]" 
                           class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
                           value="${content}" placeholder="Nhập nội dung câu hỏi..." required>
                </div>
                
                <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-3">Chọn đáp án đúng *</label>
                    <div class="space-y-2">
                        ${optionsHTML}
                    </div>
                </div>
            </div>`;

            container.insertAdjacentHTML('beforeend', html);
            qIndex++;
            reindexQuestionLabels();
        }

        function focusQuestionEditor(questionIndex) {
            const questionCard = document.getElementById(`q-${questionIndex}`);
            if (!questionCard) return;

            const questionInput = questionCard.querySelector(`input[name="questions[${questionIndex}][question_text]"]`);
            if (questionInput) {
                questionInput.focus();
                questionInput.select();
            }

            questionCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
            questionCard.classList.add('ring-2', 'ring-blue-200');
            setTimeout(() => {
                questionCard.classList.remove('ring-2', 'ring-blue-200');
            }, 1200);
        }

        function removeQuestion(questionIndex) {
            const questionCard = document.getElementById(`q-${questionIndex}`);
            if (!questionCard) return;

            if (!confirm('Bạn có chắc chắn muốn xóa câu hỏi này?')) {
                return;
            }

            questionCard.remove();
            reindexQuestionLabels();
        }

        function reindexQuestionLabels() {
            const labels = document.querySelectorAll('#questions-container .question-order');
            labels.forEach((label, index) => {
                label.textContent = `Câu hỏi số ${index + 1}`;
            });
        }

        function handleFileUpload(input) {
            const file = input.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                const text = e.target.result;
                parseAndPopulate(text);
            };
            reader.readAsText(file);
        }

        function parseAndPopulate(text) {
            const lines = text.split(/\r\n|\n/);
            let currentQuestion = null;
            let currentOptions = [];
            
            lines.forEach(line => {
                line = line.trim();
                if (!line) return;

                if (line.startsWith('*') || line.startsWith('+') || line.startsWith('-')) {
                    const isCorrect = (line.startsWith('*') || line.startsWith('+'));
                    const content = line.substring(1).trim();
                    if (currentQuestion) {
                        currentOptions.push({ text: content, correct: isCorrect });
                    }
                } else {
                    if (currentQuestion) {
                        addQuestion(currentQuestion, currentOptions);
                    }
                    currentQuestion = line;
                    currentOptions = [];
                }
            });

            if (currentQuestion) {
                addQuestion(currentQuestion, currentOptions);
            }

            alert('✓ Nhập dữ liệu thành công! Kiểm tra lại trước khi lưu.');
        }

        // Drag and drop support
        const importArea = document.getElementById('import-area');
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
            importArea.addEventListener(eventName, preventDefaults, false);
        });

        function preventDefaults(e) {
            e.preventDefault();
            e.stopPropagation();
        }

        ['dragenter', 'dragover'].forEach(eventName => {
            importArea.addEventListener(eventName, highlight, false);
        });

        ['dragleave', 'drop'].forEach(eventName => {
            importArea.addEventListener(eventName, unhighlight, false);
        });

        function highlight(e) {
            importArea.classList.add('border-blue-400', 'bg-blue-50');
        }

        function unhighlight(e) {
            importArea.classList.remove('border-blue-400', 'bg-blue-50');
        }

        importArea.addEventListener('drop', handleDrop, false);
        importArea.addEventListener('click', () => document.getElementById('fileInput').click());

        function handleDrop(e) {
            const dt = e.dataTransfer;
            const files = dt.files;
            const input = document.getElementById('fileInput');
            input.files = files;
            handleFileUpload(input);
        }
    </script>
</body>
</html><?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views\quiz\create.blade.php ENDPATH**/ ?>