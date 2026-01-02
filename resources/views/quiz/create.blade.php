<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Tạo Đề Thi Mới</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <style>
        .question-card { transition: all 0.3s; border-left: 5px solid #0d6efd; }
        .question-card:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(0,0,0,0.1); }
        .btn-remove { position: absolute; top: 10px; right: 10px; }
        .import-area { border: 2px dashed #bbb; padding: 30px; text-align: center; background: #f9f9f9; border-radius: 10px; cursor: pointer; }
        .import-area:hover { background: #eef; border-color: #0d6efd; }
    </style>
</head>
<body class="bg-light pb-5">

<div class="container mt-4">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2 class="fw-bold text-primary"><i class="fas fa-edit"></i> Tạo Đề Thi Mới</h2>
        <a href="{{ route('quiz.index') }}" class="btn btn-outline-secondary">Quay lại danh sách</a>
    </div>

    @if($errors->any())
        <div class="alert alert-danger">
            <ul>@foreach($errors->all() as $error) <li>{{ $error }}</li> @endforeach</ul>
        </div>
    @endif

    <div class="card mb-4 shadow-sm">
        <div class="card-header bg-success text-white fw-bold">
            <i class="fas fa-file-upload"></i> Nhập nhanh từ File (Import)
        </div>
        <div class="card-body">
            <div class="import-area" onclick="document.getElementById('fileInput').click()">
                <i class="fas fa-cloud-upload-alt fa-3x text-secondary mb-3"></i>
                <h5>Bấm vào đây để chọn file .txt</h5>
                <p class="text-muted small">Quy tắc: Câu hỏi 1 dòng. Đáp án đúng bắt đầu bằng (*). Đáp án sai bắt đầu bằng (-)</p>
            </div>
            <input type="file" id="fileInput" accept=".txt" style="display: none;" onchange="handleFileUpload(this)">
        </div>
    </div>

    <form action="{{ route('quiz.store') }}" method="POST" id="quizForm">
        @csrf
        
        <div class="card mb-4 shadow-sm">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-8">
                        <label class="form-label fw-bold">Tên bài thi:</label>
                        <input type="text" name="title" class="form-control form-control-lg" placeholder="Ví dụ: Kiểm tra 1 tiết Toán" required>
                    </div>
                    <div class="col-md-4">
                        <label class="form-label fw-bold">Thời gian (phút):</label>
                        <input type="number" name="minutes" class="form-control form-control-lg" value="15">
                    </div>
                </div>
            </div>
        </div>

        <div id="questions-container">
            </div>

        <div class="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
            <button type="button" class="btn btn-secondary me-md-2" onclick="addQuestion()">
                <i class="fas fa-plus-circle"></i> Thêm câu hỏi thủ công
            </button>
            <button type="submit" class="btn btn-primary btn-lg px-5">
                <i class="fas fa-save"></i> LƯU ĐỀ THI
            </button>
        </div>
    </form>
</div>

<script>
    let qIndex = 0; // Biến đếm số câu hỏi

    // Hàm 1: Thêm khung câu hỏi mới vào giao diện
    function addQuestion(content = "", options = []) {
        const container = document.getElementById('questions-container');
        
        // Nếu không có options truyền vào (thêm thủ công), tạo 4 ô trống
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
            <div class="input-group mb-2">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="radio" 
                           name="questions[${qIndex}][correct_option]" 
                           value="${oIndex}" ${opt.correct ? 'checked' : ''}>
                </div>
                <input type="text" name="questions[${qIndex}][options][${oIndex}]" 
                       class="form-control ${opt.correct ? 'text-success fw-bold' : ''}" 
                       value="${opt.text}" placeholder="Đáp án ${oIndex + 1}" required>
            </div>`;
        });

        const html = `
        <div class="card mb-4 question-card shadow-sm" id="q-${qIndex}">
            <div class="card-body position-relative">
                <button type="button" class="btn btn-outline-danger btn-sm btn-remove" 
                        onclick="this.closest('.card').remove()">
                    <i class="fas fa-trash"></i>
                </button>
                
                <h5 class="card-title text-primary">Câu hỏi số ${qIndex + 1}</h5>
                <input type="text" name="questions[${qIndex}][question_text]" 
                       class="form-control mb-3 fw-bold" 
                       value="${content}" placeholder="Nhập nội dung câu hỏi..." required>
                
                <div class="row">
                    <div class="col-md-12">
                        <label class="form-label text-muted small">Nhập các phương án (Tích chọn vào ô tròn đáp án đúng)</label>
                        ${optionsHTML}
                    </div>
                </div>
            </div>
        </div>`;

        container.insertAdjacentHTML('beforeend', html);
        qIndex++;
    }

    // Hàm 2: Xử lý khi người dùng chọn File
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

    // Hàm 3: Phân tích nội dung file text
    function parseAndPopulate(text) {
        const lines = text.split(/\r\n|\n/);
        let currentQuestion = null;
        let currentOptions = [];
        
        // Xóa sạch câu hỏi cũ nếu muốn (hoặc giữ lại tùy ý)
        // document.getElementById('questions-container').innerHTML = '';
        // qIndex = 0;

        lines.forEach(line => {
            line = line.trim();
            if (!line) return;

            if (line.startsWith('*') || line.startsWith('+') || line.startsWith('-')) {
                // Đây là đáp án
                const isCorrect = (line.startsWith('*') || line.startsWith('+'));
                const content = line.substring(1).trim();
                if (currentQuestion) { // Chỉ thêm nếu đã có câu hỏi
                    currentOptions.push({ text: content, correct: isCorrect });
                }
            } else {
                // Đây là câu hỏi mới -> Lưu câu cũ trước
                if (currentQuestion) {
                    addQuestion(currentQuestion, currentOptions);
                }
                // Reset cho câu mới
                currentQuestion = line;
                currentOptions = [];
            }
        });

        // Lưu câu cuối cùng
        if (currentQuestion) {
            addQuestion(currentQuestion, currentOptions);
        }

        alert('Đã nhập dữ liệu thành công! Bạn hãy kiểm tra lại trước khi Lưu.');
    }

    // Tự động thêm 1 câu trống khi mới vào trang
    document.addEventListener('DOMContentLoaded', () => {
        // addQuestion(); 
    });
</script>

</body>
</html>