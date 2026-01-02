<form action="{{ route('quiz.submit', $quiz->id) }}" method="POST">
    @csrf
    <h2>{{ $quiz->title }}</h2>
    
    @foreach($quiz->questions as $question)
        <div class="card mb-3">
            <div class="card-header">{{ $question->question_text }}</div>
            <div class="card-body">
                @foreach($question->options as $option)
                    <div class="form-check">
                        <input class="form-check-input" type="radio" 
                               name="answers[{{ $question->id }}]" 
                               value="{{ $option->id }}" 
                               id="opt-{{ $option->id }}">
                        <label class="form-check-label" for="opt-{{ $option->id }}">
                            {{ $option->option_text }}
                        </label>
                    </div>
                @endforeach
            </div>
        </div>
    @endforeach

    <button type="submit" class="btn btn-primary">Nộp bài</button>
</form>