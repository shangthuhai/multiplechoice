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
        if (Schema::hasTable('questions') && !Schema::hasColumn('questions', 'user_id')) {
            Schema::table('questions', function (Blueprint $table) {
                $table->unsignedBigInteger('user_id')->nullable()->after('id');
                $table->string('firebase_uid')->nullable()->after('user_id');
                $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
                $table->index('user_id');
                $table->index('firebase_uid');
            });
        }
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        if (Schema::hasTable('questions') && Schema::hasColumn('questions', 'user_id')) {
            Schema::table('questions', function (Blueprint $table) {
                $table->dropForeign(['user_id']);
                $table->dropIndex(['user_id']);
                $table->dropIndex(['firebase_uid']);
                $table->dropColumn(['user_id', 'firebase_uid', 'text']);
            });
        }
    }
};
