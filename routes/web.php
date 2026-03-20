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

Route::get('/', [QuizController::class, 'index'])->name('quiz.index'); // Trang chủ danh sách
Route::get('/quiz/create', [QuizController::class, 'create'])->name('quiz.create');
Route::post('/quiz/store', [QuizController::class, 'store'])->name('quiz.store');

Route::get('/quiz/{id}', [QuizController::class, 'show'])->name('quiz.show'); // Trang chờ (Lobby)
Route::get('/quiz/{id}/take', [QuizController::class, 'take'])->name('quiz.take'); // Trang làm bài thực tế
Route::post('/quiz/{id}/submit', [QuizController::class, 'submit'])->name('quiz.submit');
Route::get('/my-results', [QuizController::class, 'results'])->name('quiz.results');
Route::get('/my-results/{resultId}', [QuizController::class, 'review'])->name('quiz.review');