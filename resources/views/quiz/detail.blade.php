<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chi tiết đề thi</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen flex items-center justify-center" data-auth-required="true">
    <div class="card-lg max-w-md w-full p-8">
        <div class="text-center">
            <div class="mb-6">
                <svg class="w-20 h-20 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
            </div>

            <h2 class="text-3xl font-bold text-gray-900 mb-2">{{ $quiz->title }}</h2>
            <p class="text-gray-600 mb-8">Sẵn sàng chứ? Tập trung tối đa và chọn đáp án chính xác.</p>

            <!-- Stats -->
            <div class="grid grid-cols-2 gap-4 mb-8">
                <div class="p-4 bg-blue-50 rounded-lg">
                    <div class="text-2xl font-bold text-blue-600 mb-1">{{ $quiz->questions_count }}</div>
                    <div class="text-sm text-gray-600">Câu hỏi</div>
                </div>
                <div class="p-4 bg-amber-50 rounded-lg">
                    <div class="text-2xl font-bold text-amber-600 mb-1">{{ $quiz->minutes }}</div>
                    <div class="text-sm text-gray-600">Phút</div>
                </div>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap justify-center gap-2 mb-8">
                <span class="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold">
                    Trắc nghiệm 1 đáp án
                </span>
                <span class="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                    Tự chấm điểm
                </span>
            </div>

            <!-- Actions -->
            <div class="space-y-3">
                <a href="{{ route('quiz.take', $quiz->id) }}" class="btn-primary w-full py-3 font-semibold text-center">
                    Bắt đầu làm bài →
                </a>
                <a href="{{ route('quiz.index') }}" class="block px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                    ← Quay lại danh sách
                </a>
            </div>
        </div>
    </div>
</body>
</html>