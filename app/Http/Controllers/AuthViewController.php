<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

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

    public function registerSync(Request $request)
    {
        $validated = $request->validate([
            'name' => ['required', 'string', 'min:2', 'max:255'],
            'password' => ['required', 'string', 'min:6'],
            'firebase_uid' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255'],
        ]);

        $user = User::updateOrCreate(
            ['firebase_uid' => $validated['firebase_uid']],
            [
                'name' => $validated['name'],
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
}
