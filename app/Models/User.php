<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\Hash;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'firebase_uid',
        'auth_provider',
        'username',
        'user_tag',
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected static function booted()
    {
        static::creating(function (User $user) {
            if (empty($user->username)) {
                $base = $user->name ?: (explode('@', (string) $user->email)[0] ?? 'user');
                $base = preg_replace('/[^a-zA-Z0-9_]/', '', (string) $base);
                $user->username = strtolower($base ?: 'user');
            }

            if (empty($user->user_tag)) {
                $user->user_tag = static::generateUniqueUserTag($user->username);
            }

            if (!empty($user->password) && !str_starts_with($user->password, '$2y$')) {
                $user->password = Hash::make($user->password);
            }
        });
    }

    public static function generateUniqueUserTag(string $username): string
    {
        do {
            $tag = '#' . str_pad((string) random_int(0, 9999), 4, '0', STR_PAD_LEFT);
        } while (static::where('username', $username)->where('user_tag', $tag)->exists());

        return $tag;
    }

    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
