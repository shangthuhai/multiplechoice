<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        if (!Schema::hasColumn('users', 'username')) {
            Schema::table('users', function (Blueprint $table) {
                $table->string('username')->nullable()->after('id');
            });
        }

        if (!Schema::hasColumn('users', 'user_tag')) {
            Schema::table('users', function (Blueprint $table) {
                $table->string('user_tag', 5)->nullable()->after('username');
            });
        }

        $users = DB::table('users')->select('id', 'email', 'username', 'user_tag')->orderBy('id')->get();

        foreach ($users as $user) {
            $username = $user->username;
            if (!$username) {
                $base = explode('@', (string) $user->email)[0] ?? ('user' . $user->id);
                $base = preg_replace('/[^a-zA-Z0-9_]/', '', (string) $base);
                $base = $base ?: ('user' . $user->id);
                $username = strtolower($base);

                $candidate = $username;
                $counter = 1;
                while (DB::table('users')->where('username', $candidate)->where('id', '!=', $user->id)->exists()) {
                    $candidate = $username . $counter;
                    $counter++;
                }

                $username = $candidate;
            }

            $userTag = $user->user_tag;
            if (!$userTag || !preg_match('/^#[0-9]{4}$/', (string) $userTag)) {
                do {
                    $userTag = '#' . str_pad((string) random_int(0, 9999), 4, '0', STR_PAD_LEFT);
                } while (
                    DB::table('users')
                        ->where('username', $username)
                        ->where('user_tag', $userTag)
                        ->where('id', '!=', $user->id)
                        ->exists()
                );
            }

            DB::table('users')->where('id', $user->id)->update([
                'username' => $username,
                'user_tag' => $userTag,
            ]);
        }

        if (!Schema::hasTable('posts')) {
            Schema::create('posts', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained('users')->cascadeOnDelete();
                $table->string('title');
                $table->text('content')->nullable();
                $table->timestamps();
                $table->index('user_id');
            });
        }

        if (Schema::hasColumn('users', 'username') && Schema::hasColumn('users', 'user_tag')) {
            try {
                Schema::table('users', function (Blueprint $table) {
                    $table->unique(['username', 'user_tag']);
                });
            } catch (\Throwable $e) {
                // Ignore if the unique index already exists.
            }
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('posts')) {
            Schema::dropIfExists('posts');
        }

        Schema::table('users', function (Blueprint $table) {
            if (Schema::hasColumn('users', 'user_tag')) {
                $table->dropColumn('user_tag');
            }
            if (Schema::hasColumn('users', 'username')) {
                $table->dropColumn('username');
            }
        });
    }
};
