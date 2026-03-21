@extends('layouts.app')

@section('content')
<div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <!-- Header -->
        <div class="mb-8">
            <h1 class="text-4xl font-bold text-gray-900">Chỉnh sửa câu hỏi</h1>
            <p class="text-gray-600 mt-2">Cập nhật câu hỏi của bạn</p>
        </div>

        <!-- Edit Form -->
        <div class="bg-white rounded-lg shadow border border-gray-200 p-8">
            <form id="editQuestionForm" class="space-y-6">
                @csrf
                @method('PUT')

                <!-- Question Text -->
                <div>
                    <label for="text" class="block text-sm font-medium text-gray-700 mb-2">
                        Câu hỏi <span class="text-red-500">*</span>
                    </label>
                    <textarea
                        id="text"
                        name="text"
                        rows="4"
                        placeholder="Nhập câu hỏi của bạn..."
                        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                        required
                        minlength="5"
                        maxlength="1000"
                    >{{ $question->text }}</textarea>
                    <p class="text-gray-500 text-sm mt-1">Tối thiểu 5 ký tự, tối đa 1000 ký tự</p>
                </div>

                <!-- Options -->
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-4">
                        Đáp án <span class="text-red-500">*</span>
                    </label>
                    <div id="optionsContainer" class="space-y-3">
                        <!-- Options will be inserted here -->
                    </div>
                    <div class="flex gap-2 mt-4">
                        <button
                            type="button"
                            onclick="addOption()"
                            id="addOptionBtn"
                            class="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium px-4 py-2 rounded transition hover:bg-green-50"
                        >
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                            </svg>
                            Thêm đáp án
                        </button>
                    </div>
                </div>

                <!-- Error Message -->
                <div id="errorMessage" class="hidden bg-red-50 border border-red-200 rounded-lg p-4">
                    <p id="errorText" class="text-red-800"></p>
                </div>

                <!-- Actions -->
                <div class="flex gap-4 pt-6 border-t border-gray-200">
                    <button
                        type="submit"
                        class="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition"
                    >
                        Cập nhật câu hỏi
                    </button>
                    <a
                        href="{{ route('questions.show', $question->id) }}"
                        class="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-3 px-6 rounded-lg transition text-center"
                    >
                        Hủy
                    </a>
                </div>
            </form>
        </div>
    </div>
</div>

<script>
const maxOptions = 6;
let optionCount = 0;

// Load existing options
function loadExistingOptions() {
    const questions = @json($question);
    const options = @json($question->options);

    options.forEach((option, index) => {
        addExistingOption(option.text, option.is_correct);
    });

    // Find the correct option index and set it
    const correctIndex = options.findIndex(opt => opt.is_correct);
    if (correctIndex !== -1) {
        document.querySelector(`input[name="correct_option"][value="${correctIndex}"]`).checked = true;
    }
}

function addExistingOption(text, isCorrect) {
    const container = document.getElementById('optionsContainer');
    const optionId = 'option-' + optionCount;

    const optionHtml = `
        <div class="option-row" id="${optionId}">
            <div class="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                <input
                    type="radio"
                    name="correct_option"
                    value="${optionCount}"
                    class="mt-3 cursor-pointer"
                    required
                    ${isCorrect ? 'checked' : ''}
                />
                <div class="flex-1">
                    <input
                        type="text"
                        name="options[${optionCount}][text]"
                        placeholder="Nhập đáp án..."
                        value="${text}"
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                        minlength="1"
                        maxlength="500"
                    />
                </div>
                <button
                    type="button"
                    onclick="removeOption('${optionId}')"
                    class="text-red-600 hover:text-red-700 p-2 transition hover:bg-red-50 rounded"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', optionHtml);
    optionCount++;
}

function addOption() {
    if (optionCount >= maxOptions) {
        alert('Tối đa ' + maxOptions + ' đáp án');
        return;
    }

    const container = document.getElementById('optionsContainer');
    const newIndex = optionCount;
    const optionId = 'option-' + optionCount;

    const optionHtml = `
        <div class="option-row" id="${optionId}">
            <div class="flex gap-3 items-start bg-gray-50 p-4 rounded-lg">
                <input
                    type="radio"
                    name="correct_option"
                    value="${newIndex}"
                    class="mt-3 cursor-pointer"
                    required
                />
                <div class="flex-1">
                    <input
                        type="text"
                        name="options[${newIndex}][text]"
                        placeholder="Nhập đáp án..."
                        class="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        required
                        minlength="1"
                        maxlength="500"
                    />
                </div>
                <button
                    type="button"
                    onclick="removeOption('${optionId}')"
                    class="text-red-600 hover:text-red-700 p-2 transition hover:bg-red-50 rounded"
                >
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        </div>
    `;

    container.insertAdjacentHTML('beforeend', optionHtml);
    optionCount++;
}

function removeOption(optionId) {
    const optionRow = document.getElementById(optionId);
    if (document.querySelectorAll('.option-row').length > 2) {
        optionRow.remove();
    } else {
        alert('Tối thiểu phải có 2 đáp án');
    }
}

document.getElementById('editQuestionForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const errorDiv = document.getElementById('errorMessage');
    const errorText = document.getElementById('errorText');

    try {
        const response = await fetch('{{ route("questions.update", $question->id) }}', {
            method: 'POST',
            headers: {
                'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content,
            },
            body: formData
        });

        const data = await response.json();

        if (response.ok && data.success) {
            alert(data.message);
            window.location.href = '{{ route("questions.show", $question->id) }}';
        } else {
            errorText.textContent = data.error || 'Lỗi khi cập nhật câu hỏi';
            errorDiv.classList.remove('hidden');
        }
    } catch (error) {
        console.error('Error:', error);
        errorText.textContent = 'Có lỗi xảy ra khi gửi yêu cầu';
        errorDiv.classList.remove('hidden');
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadExistingOptions);
</script>
@endsection
