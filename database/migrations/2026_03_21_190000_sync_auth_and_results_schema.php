<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasTable('users')) {
            Schema::create('users', function (Blueprint $table) {
                $table->id();
                $table->string('name');
                $table->string('email')->unique();
                $table->timestamp('email_verified_at')->nullable();
                $table->string('password')->nullable();
                $table->rememberToken();
                $table->string('firebase_uid')->nullable()->unique();
                $table->string('auth_provider')->default('firebase');
                $table->timestamps();
            });
        } else {
            Schema::table('users', function (Blueprint $table) {
                if (!Schema::hasColumn('users', 'firebase_uid')) {
                    $table->string('firebase_uid')->nullable()->unique();
                }

                if (!Schema::hasColumn('users', 'auth_provider')) {
                    $table->string('auth_provider')->default('firebase');
                }
            });
        }

        if (!Schema::hasTable('results')) {
            Schema::create('results', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->nullable()->constrained('users')->nullOnDelete();
                $table->foreignId('quiz_id')->constrained('quizzes')->cascadeOnDelete();
                $table->integer('score')->default(0);
                $table->integer('total_questions')->default(0);
                $table->timestamps();
            });
        } else {
            Schema::table('results', function (Blueprint $table) {
                if (!Schema::hasColumn('results', 'user_id')) {
                    $table->foreignId('user_id')->nullable()->after('id');
                }

                if (!Schema::hasColumn('results', 'quiz_id')) {
                    $table->foreignId('quiz_id')->nullable()->after('user_id');
                }

                if (!Schema::hasColumn('results', 'score')) {
                    $table->integer('score')->default(0)->after('quiz_id');
                }

                if (!Schema::hasColumn('results', 'total_questions')) {
                    $table->integer('total_questions')->default(0)->after('score');
                }
            });
        }

        if (!Schema::hasTable('result_answers')) {
            Schema::create('result_answers', function (Blueprint $table) {
                $table->id();
                $table->foreignId('result_id')->constrained('results')->cascadeOnDelete();
                $table->foreignId('question_id')->constrained('questions')->cascadeOnDelete();
                $table->foreignId('selected_option_id')->nullable()->constrained('options')->nullOnDelete();
                $table->foreignId('correct_option_id')->nullable()->constrained('options')->nullOnDelete();
                $table->boolean('is_correct')->default(false);
                $table->timestamps();

                $table->index(['result_id', 'question_id']);
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('users', 'auth_provider')) {
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('auth_provider');
            });
        }

        if (Schema::hasColumn('users', 'firebase_uid')) {
            Schema::table('users', function (Blueprint $table) {
                $table->dropColumn('firebase_uid');
            });
        }
    }
};
