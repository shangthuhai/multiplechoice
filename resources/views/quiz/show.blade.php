<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $quiz->title ?? 'Bài thi' }}</title>
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="bg-white" data-auth-required="true">
    <!-- Navigation -->
    <nav class="border-b border-gray-200">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div class="flex justify-between items-center">
                <div>
                    <a href="{{ route('quiz.index') }}" class="text-2xl font-bold text-gray-900">Quiz</a>
                </div>
                <a href="{{ route('quiz.index') }}" class="text-blue-600 hover:text-blue-700 font-medium">
                    ← Danh sách
                </a>
            </div>
        </div>
    </nav>

    <main class="min-h-[calc(100vh-80px)] flex items-center justify-center px-4">
        <form action="{{ route('quiz.submit', $quiz->id) }}" method="POST" class="w-full max-w-2xl">
            @csrf

            <div class="card-lg p-8 text-center">
                <div class="mb-8">
                    <h2 class="text-3xl font-bold text-gray-900 mb-4">{{ $quiz->title }}</h2>
                    <p class="text-gray-600 text-lg">Sẵn sàng bắt đầu? Tập trung tối đa để có kết quả tốt nhất.</p>
                </div>

                <!-- Stats -->
                <div class="grid grid-cols-2 gap-6 mb-8 py-6 border-y border-gray-200">
                    <div>
                        <div class="text-3xl font-bold text-blue-600 mb-2">{{ $quiz->questions_count }}</div>
                        <div class="text-sm text-gray-600">Câu hỏi</div>
                    </div>
                    <div>
                        <div class="text-3xl font-bold text-amber-600 mb-2">{{ $quiz->minutes }}</div>
                        <div class="text-sm text-gray-600">Phút làm bài</div>
                    </div>
                </div>

                <!-- Features -->
                <div class="space-y-3 mb-8 text-left max-w-md mx-auto">
                    <div class="flex items-center gap-3 text-gray-700">
                        <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm">Trắc nghiệm 1 đáp án đúng</span>
                    </div>
                    <div class="flex items-center gap-3 text-gray-700">
                        <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm">Xem kết quả ngay sau khi nộp bài</span>
                    </div>
                    <div class="flex items-center gap-3 text-gray-700">
                        <svg class="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm">Lưu kết quả để xem lại chi tiết</span>
                    </div>
                </div>

                <!-- Actions -->
                <div class="space-y-3 flex flex-col">
                    <button type="submit" class="btn-primary py-3 text-lg font-semibold w-full">
                        Bắt đầu làm bài →
                    </button>
                    <a href="{{ route('quiz.index') }}" class="px-4 py-2.5 text-gray-700 hover:text-gray-900 font-medium transition-colors">
                        ← Quay lại danh sách
                    </a>
                </div>
            </div>
        </form>
    </main>
</body>
</html>