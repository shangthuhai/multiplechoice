<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index(Request $request)
    {
        $posts = Post::where('user_id', $request->user()->id)
            ->latest('id')
            ->get();

        return response()->json($posts);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'content' => ['nullable', 'string'],
        ]);

        $post = Post::create([
            'user_id' => $request->user()->id,
            'title' => $validated['title'],
            'content' => $validated['content'] ?? null,
        ]);

        return response()->json($post, 201);
    }
}
