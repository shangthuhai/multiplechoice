<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
// database/migrations/xxxx_create_quiz_tables.php
    public function up()
    {
        // 1. Bảng Đề thi
        Schema::create('quizzes', function (Blueprint $table) {
            $table->id();
            $table->string('title'); // Tên bài thi
            $table->text('description')->nullable();
            $table->integer('minutes')->default(15); // Thời gian làm bài
            $table->timestamps();
        });

        // 2. Bảng Câu hỏi
        Schema::create('questions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('quiz_id')->constrained()->onDelete('cascade');
            $table->text('question_text');
            $table->integer('points')->default(1); // Điểm số cho câu này
            $table->timestamps();
        });

        // 3. Bảng Đáp án
        Schema::create('options', function (Blueprint $table) {
            $table->id();
            $table->foreignId('question_id')->constrained()->onDelete('cascade');
            $table->string('option_text');
            $table->boolean('is_correct')->default(false); // 1: Đúng, 0: Sai
            $table->timestamps();
        });

        // 4. Bảng Kết quả thi (Lưu ai làm, được bao nhiêu điểm)
        Schema::create('results', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->nullable()->constrained(); // Nếu có login
            $table->foreignId('quiz_id')->constrained()->onDelete('cascade');
            $table->integer('score'); // Tổng điểm đạt được
            $table->integer('total_questions'); // Tổng số câu hỏi lúc thi
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('quiz_tables');
    }
};
