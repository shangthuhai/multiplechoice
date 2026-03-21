<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;

class AuthViewController extends Controller
{
    public function show(Request $request)
    {
        $mode = $request->query('mode', 'login');

        if (!in_array($mode, ['login', 'register'], true)) {
            $mode = 'login';
        }

        return view('auth.index', [
            'mode' => $mode,
        ]);
    }

    /**
     * Logout endpoint - clears all session data
     */
    public function logout(Request $request)
    {
        Auth::logout();

        // Clear laravel session data
        session()->forget([
            'quiz_result_ids',
            'quiz_firebase_uid',
        ]);

        // Invalidate entire session
        session()->invalidate();

        // Regenerate session token for security
        session()->regenerateToken();

        return response()->json([
            'success' => true,
            'message' => 'Đã đăng xuất thành công'
        ]);
    }

    public function sessionStatus(Request $request)
    {
        if (!Auth::check()) {
            return response()->json([
                'authenticated' => false,
            ]);
        }

        $user = Auth::user();
        $ownerUid = $user->firebase_uid ?: ('local_' . $user->id);

        return response()->json([
            'authenticated' => true,
            'display_name' => $user->username ?: 'Người dùng',
            'owner_uid' => $ownerUid,
        ]);
    }

    public function loginLocal(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required', 'string', 'min:2', 'max:255'],
            'password' => ['required', 'string', 'min:6'],
        ]);

        if (!Auth::attempt(['username' => $validated['username'], 'password' => $validated['password']])) {
            return response()->json([
                'success' => false,
                'message' => 'Tên đăng nhập hoặc mật khẩu không đúng.',
            ], 422);
        }

        $request->session()->regenerate();

        /** @var User $user */
        $user = Auth::user();

        return response()->json([
            'success' => true,
            'message' => 'Đăng nhập thành công',
            'owner_uid' => $user->firebase_uid ?: ('local_' . $user->id),
            'display_name' => $user->username ?: 'Người dùng',
        ]);
    }

    public function registerLocal(Request $request)
    {
        $validated = $request->validate([
            'username' => ['required', 'string', 'min:2', 'max:255', 'regex:/^[a-zA-Z0-9_]+$/', 'unique:users,username'],
            'password' => ['required', 'string', 'min:6', 'confirmed'],
        ]);

        $emailLocalPart = Str::lower($validated['username']) . '.' . now()->timestamp . '.' . random_int(1000, 9999);

        $user = User::create([
            'username' => Str::lower($validated['username']),
            'email' => $emailLocalPart . '@quizapp.example.com',
            'password' => $validated['password'],
            'auth_provider' => 'local_password',
        ]);

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'success' => true,
            'message' => 'Đăng ký thành công',
            'owner_uid' => $user->firebase_uid ?: ('local_' . $user->id),
            'display_name' => $user->username ?: 'Người dùng',
        ]);
    }

    public function registerSync(Request $request)
    {
        $validated = $request->validate([
            'username' => ['nullable', 'string', 'min:2', 'max:255'],
            'name' => ['nullable', 'string', 'min:2', 'max:255'],
            'password' => ['required', 'string', 'min:6'],
            'firebase_uid' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);

        $username = $validated['username'] ?? $validated['name'] ?? (explode('@', (string) $validated['email'])[0] ?? 'user');
        $username = Str::lower(preg_replace('/[^a-zA-Z0-9_]/', '', (string) $username) ?: 'user');

        $user = User::updateOrCreate(
            ['firebase_uid' => $validated['firebase_uid']],
            [
                'username' => $username,
                'email' => $validated['email'],
                'password' => $validated['password'],
                'auth_provider' => 'firebase_password',
            ]
        );

        return response()->json([
            'success' => true,
            'user_id' => $user->id,
            'message' => 'Đăng ký thành công',
        ]);
    }

    public function googleSync(Request $request)
    {
        $validated = $request->validate([
            'firebase_uid' => ['required', 'string', 'max:255'],
            'email' => ['nullable', 'string', 'email', 'max:255'],
            'name' => ['nullable', 'string', 'max:255'],
        ]);

        $firebaseUid = $validated['firebase_uid'];
        $email = $validated['email'] ?? ($firebaseUid . '@google.local');
        $displayName = $validated['name'] ?? '';

        $base = $displayName ?: (explode('@', (string) $email)[0] ?? 'googleuser');
        $base = Str::lower(preg_replace('/[^a-zA-Z0-9_]/', '', (string) $base) ?: 'googleuser');

        $username = $base;
        $counter = 1;
        while (
            User::where('username', $username)
                ->where(function ($q) use ($firebaseUid) {
                    $q->whereNull('firebase_uid')->orWhere('firebase_uid', '!=', $firebaseUid);
                })
                ->exists()
        ) {
            $username = $base . $counter;
            $counter++;
        }

        $user = User::firstOrNew(['firebase_uid' => $firebaseUid]);

        if (!$user->exists) {
            $user->username = $username;
            $user->email = $email;
            $user->password = Str::random(32);
            $user->auth_provider = 'google';
        } else {
            if (empty($user->username)) {
                $user->username = $username;
            }
            if (empty($user->email)) {
                $user->email = $email;
            }
            $user->auth_provider = 'google';
        }

        $user->save();

        Auth::login($user);
        $request->session()->regenerate();

        return response()->json([
            'success' => true,
            'message' => 'Đăng nhập Google thành công',
            'owner_uid' => $user->firebase_uid ?: ('local_' . $user->id),
            'display_name' => $user->username ?: 'Người dùng',
        ]);
    }
}
