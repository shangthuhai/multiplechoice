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
    public function up()
    {
        if (Schema::hasTable('result_answers')) {
            return;
        }

        Schema::create('result_answers', function (Blueprint $table) {
            $table->id();
            $table->foreignId('result_id')->constrained()->onDelete('cascade');
            $table->foreignId('question_id')->constrained()->onDelete('cascade');
            $table->foreignId('selected_option_id')->nullable()->constrained('options')->nullOnDelete();
            $table->foreignId('correct_option_id')->nullable()->constrained('options')->nullOnDelete();
            $table->boolean('is_correct')->default(false);
            $table->timestamps();

            $table->unique(['result_id', 'question_id']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('result_answers');
    }
};
