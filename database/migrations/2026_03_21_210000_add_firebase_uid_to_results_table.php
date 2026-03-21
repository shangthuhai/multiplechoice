<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasColumn('results', 'firebase_uid')) {
            Schema::table('results', function (Blueprint $table) {
                $table->string('firebase_uid')->nullable()->after('user_id');
                $table->index('firebase_uid');
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasColumn('results', 'firebase_uid')) {
            Schema::table('results', function (Blueprint $table) {
                $table->dropIndex(['firebase_uid']);
                $table->dropColumn('firebase_uid');
            });
        }
    }
};
