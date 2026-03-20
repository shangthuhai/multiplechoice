<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Đang làm bài: {{ $quiz->title }}</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        :root {
            --bg-1: #0b1538;
            --bg-2: #12245a;
            --panel: #ffffff;
            --ink: #1a2558;
            --muted: #6c7698;
        }

        body {
            min-height: 100vh;
            background:
                radial-gradient(circle at 10% 10%, rgba(34, 197, 94, 0.2), transparent 28%),
                radial-gradient(circle at 85% 8%, rgba(0, 194, 255, 0.2), transparent 30%),
                linear-gradient(135deg, var(--bg-1), var(--bg-2));
            color: var(--ink);
        }

        .top-bar {
            background: rgba(8, 16, 45, 0.8);
            backdrop-filter: blur(8px);
        }

        .layout-wrap {
            margin-top: 98px;
            margin-bottom: 36px;
        }

        .quiz-shell {
            border: 0;
            border-radius: 22px;
            background: var(--panel);
            box-shadow: 0 24px 48px rgba(8, 16, 45, 0.3);
            overflow: hidden;
        }

        .quiz-head {
            background: linear-gradient(90deg, #f4f8ff, #eefcff);
            border-bottom: 1px solid #e9eef8;
        }

        .tracker-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
            gap: 8px;
        }

        .tracker-item {
            text-align: center;
            font-weight: 800;
            border: 1px solid #d9e2fb;
            background: #fff;
            border-radius: 10px;
            color: #5f6a8c;
            padding: 8px 0;
            font-size: 13px;
        }

        .tracker-item.done {
            background: #1f67ff;
            border-color: #1f67ff;
            color: #fff;
        }

        .question-card {
            border: 1px solid #edf1fb;
            border-radius: 16px;
            background: #fff;
        }

        .question-title {
            font-weight: 800;
            color: var(--ink);
        }

        .option-input {
            display: none;
        }

        .option-label {
            cursor: pointer;
            border: 2px solid #e8edfb;
            border-radius: 14px;
            padding: 14px;
            font-weight: 700;
            background: #fff;
            transition: transform 0.16s ease, border-color 0.16s ease, box-shadow 0.16s ease;
            width: 100%;
        }

        .option-label:hover {
            transform: translateY(-2px);
            border-color: #bfd1ff;
            box-shadow: 0 8px 18px rgba(24, 51, 128, 0.12);
        }

        .option-input:checked + .option-label {
            border-color: #1f67ff;
            background: #edf3ff;
            color: #1b3d98;
            box-shadow: 0 8px 18px rgba(31, 103, 255, 0.18);
        }

        .pill {
            border-radius: 999px;
            padding: 7px 14px;
            font-size: 13px;
            font-weight: 800;
        }

        .pill-time {
            background: #ffe8ce;
            color: #9a5d08;
        }

        .pill-progress {
            background: #dff4ff;
            color: #0e5a77;
        }

        @media (max-width: 992px) {
            .layout-wrap {
                margin-top: 86px;
            }
        }
    </style>
</head>
<body>
    <nav class="navbar fixed-top navbar-dark top-bar shadow-sm">
        <div class="container">
            <span class="navbar-brand mb-0 fw-bold">{{ $quiz->title }}</span>
            <div class="d-flex align-items-center gap-2">
                <span class="pill pill-progress" id="answeredCounter">Đã chọn 0 / {{ $quiz->questions->count() }}</span>
                <span class="pill pill-time">{{ $quiz->minutes }} phút</span>
            </div>
        </div>
    </nav>

    <div class="container layout-wrap" style="max-width: 1080px;">
        <form action="{{ route('quiz.submit', $quiz->id) }}" method="POST">
            @csrf

            <div class="quiz-shell">
                <div class="quiz-head p-3 p-md-4">
                    <div class="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
                        <h5 class="mb-0 fw-bold">Vòng chơi cá nhân</h5>
                        <small class="text-muted">Chọn đáp án phù hợp nhất cho mỗi câu hỏi</small>
                    </div>
                    <div class="tracker-grid">
                        @foreach($quiz->questions as $index => $question)
                            <div class="tracker-item" id="tracker-{{ $question->id }}">{{ $index + 1 }}</div>
                        @endforeach
                    </div>
                </div>

                <div class="p-3 p-md-4">
                    @foreach($quiz->questions as $index => $question)
                    <div class="question-card mb-4 p-3 p-md-4">
                        <div class="d-flex justify-content-between align-items-start gap-3 mb-3">
                            <h5 class="question-title mb-0">Câu {{ $index + 1 }}. <span class="fw-normal">{{ $question->question_text }}</span></h5>
                            <a class="btn btn-sm btn-outline-secondary" href="#top">Lên đầu</a>
                        </div>

                        <div class="row">
                            @foreach($question->options as $option)
                            <div class="col-md-6 mb-3">
                                <input type="radio" class="option-input answer-input"
                                       data-question-id="{{ $question->id }}"
                                       name="answers[{{ $question->id }}]"
                                       id="opt-{{ $option->id }}"
                                       value="{{ $option->id }}">

                                <label class="option-label" for="opt-{{ $option->id }}">
                                    <span class="me-2">{{ chr(64 + $loop->iteration) }}.</span>{{ $option->option_text }}
                                </label>
                            </div>
                            @endforeach
                        </div>
                    </div>
                    @endforeach

                    <div class="d-grid mt-2">
                        <button type="submit" class="btn btn-lg fw-bold text-white" style="background:#1f67ff;border-radius:14px;"
                                onclick="return confirm('Xác nhận nộp bài? Bạn vẫn có thể xem lại chi tiết sau khi nộp.')">
                            NOP BAI VA XEM KET QUA
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </div>

    <script>
        const answerInputs = document.querySelectorAll('.answer-input');
        const answeredCounter = document.getElementById('answeredCounter');
        const totalQuestions = {{ $quiz->questions->count() }};

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

            answeredCounter.textContent = `Da chon ${answeredQuestionIds.size} / ${totalQuestions}`;
        }

        answerInputs.forEach((input) => {
            input.addEventListener('change', updateAnsweredState);
        });

        updateAnsweredState();
    </script>
</body>
</html>