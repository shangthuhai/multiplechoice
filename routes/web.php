<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// routes/web.php
use App\Http\Controllers\QuizController;
use App\Http\Controllers\AuthViewController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\QuestionController;

Route::get('/login', [AuthViewController::class, 'show'])->name('auth.login');
Route::get('/logout', [AuthViewController::class, 'logout'])->name('auth.logout.get');
Route::post('/logout', [AuthViewController::class, 'logout'])->name('auth.logout');
Route::get('/auth/session', [AuthViewController::class, 'sessionStatus'])->name('auth.session');
Route::post('/auth/login-local', [AuthViewController::class, 'loginLocal'])->name('auth.login.local');
Route::post('/auth/register-local', [AuthViewController::class, 'registerLocal'])->name('auth.register.local');
Route::post('/auth/google-sync', [AuthViewController::class, 'googleSync'])->name('auth.google.sync');
Route::post('/auth/register-sync', [AuthViewController::class, 'registerSync'])->name('auth.register.sync');
Route::get('/register', function () {
	return redirect()->route('auth.login', ['mode' => 'register']);
})->name('auth.register');

Route::middleware('auth')->group(function () {
	Route::get('/', [QuizController::class, 'index'])->name('quiz.index'); // Trang chủ danh sách
	Route::get('/quiz/create', [QuizController::class, 'create'])->name('quiz.create');
	Route::post('/quiz/store', [QuizController::class, 'store'])->name('quiz.store');

	Route::get('/quiz/{id}', [QuizController::class, 'show'])->name('quiz.show'); // Trang chờ (Lobby)
	Route::get('/quiz/{id}/take', [QuizController::class, 'take'])->name('quiz.take'); // Trang làm bài thực tế
	Route::post('/quiz/{id}/submit', [QuizController::class, 'submit'])->name('quiz.submit');
	Route::get('/my-results', [QuizController::class, 'results'])->name('quiz.results');
	Route::get('/my-results/{resultId}', [QuizController::class, 'review'])->name('quiz.review');
	Route::delete('/my-results/{resultId}', [QuizController::class, 'destroyResult'])->name('quiz.results.destroy');

	// Question routes - User's private questions
	Route::prefix('/my-questions')->group(function () {
		Route::get('/', [QuestionController::class, 'index'])->name('questions.index');
		Route::get('/create', [QuestionController::class, 'create'])->name('questions.create');
		Route::post('/', [QuestionController::class, 'store'])->name('questions.store');
		Route::get('/{id}', [QuestionController::class, 'show'])->name('questions.show');
		Route::get('/{id}/edit', [QuestionController::class, 'edit'])->name('questions.edit');
		Route::put('/{id}', [QuestionController::class, 'update'])->name('questions.update');
		Route::delete('/{id}', [QuestionController::class, 'destroy'])->name('questions.destroy');
	});

	Route::get('/my-posts', [PostController::class, 'index'])->name('posts.mine');
	Route::post('/my-posts', [PostController::class, 'store'])->name('posts.store');
});