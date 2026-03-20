<!DOCTYPE html>
<html lang="vi">
<head>
    <title>Lich su bai thi</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body class="bg-light">
    <nav class="navbar navbar-dark bg-primary mb-4 shadow">
        <div class="container">
            <a class="navbar-brand fw-bold" href="{{ route('quiz.index') }}">MY QUIZ APP</a>
            <a href="{{ route('quiz.index') }}" class="btn btn-light text-primary fw-bold">Danh sach de thi</a>
        </div>
    </nav>

    <div class="container" style="max-width: 900px;">
        <h3 class="mb-3 text-secondary">Lich su bai thi da lam</h3>

        @if(session('status'))
            <div class="alert alert-success text-center fw-bold">{{ session('status') }}</div>
        @endif

        @if($results->isEmpty())
            <div class="card border-0 shadow-sm">
                <div class="card-body text-center py-5">
                    <h5 class="mb-2">Ban chua co bai lam nao</h5>
                    <p class="text-muted mb-3">Lam bai xong, ket qua se duoc luu de ban xem lai.</p>
                    <a href="{{ route('quiz.index') }}" class="btn btn-primary">Di lam bai ngay</a>
                </div>
            </div>
        @else
            <div class="card border-0 shadow-sm">
                <div class="table-responsive">
                    <table class="table align-middle mb-0">
                        <thead class="table-light">
                            <tr>
                                <th>Bai thi</th>
                                <th>Diem</th>
                                <th>Ngay lam</th>
                                <th class="text-end">Thao tac</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach($results as $result)
                                <tr>
                                    <td>{{ $result->quiz->title ?? 'Bai thi da xoa' }}</td>
                                    <td><span class="badge bg-success">{{ $result->score }} / {{ $result->total_questions }}</span></td>
                                    <td>{{ $result->created_at->format('d/m/Y H:i') }}</td>
                                    <td class="text-end">
                                        <a href="{{ route('quiz.review', $result->id) }}" class="btn btn-sm btn-outline-primary">Xem lai</a>
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>

            <div class="mt-3">
                {{ $results->links() }}
            </div>
        @endif
    </div>
</body>
</html>
