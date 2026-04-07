<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="<?php echo e(csrf_token()); ?>">
    <title>Đăng nhập / Đăng ký</title>
    <?php echo app('Illuminate\Foundation\Vite')(['resources/css/app.css', 'resources/js/app.js']); ?>
</head>

<body class="min-h-screen bg-gray-50" data-auth-page="true" data-auth-mode="<?php echo e($mode); ?>">
    <main class="min-h-screen flex items-center justify-center px-4 py-10">
        <section class="w-full max-w-md bg-white rounded-2xl border border-gray-200 shadow-sm p-6 sm:p-8">
            <!-- Heading -->
            <div class="mb-6 text-center">
                <h1 class="text-2xl font-bold text-gray-900">Chào mừng quay lại</h1>
                <p class="text-sm text-gray-600 mt-1">Đăng nhập hoặc tạo tài khoản để làm quiz</p>
            </div>

            <!-- Auth Tabs -->
            <div class="grid grid-cols-2 gap-2 rounded-lg bg-gray-100 p-1 mb-6">
                <button id="authTabLogin" type="button" class="auth-tab px-3 py-2 rounded-md text-sm font-semibold">
                    Đăng nhập
                </button>
                <button id="authTabRegister" type="button" class="auth-tab px-3 py-2 rounded-md text-sm font-semibold">
                    Đăng ký
                </button>
            </div>

            <!-- Feedback Message -->
            <div id="authMessage" class="hidden mb-4 rounded-lg px-3 py-2 text-sm"></div>

            <!-- Login Form -->
            <form id="loginForm" class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="loginUsername">Tên đăng nhập</label>
                    <input
                        id="loginUsername"
                        type="text"
                        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="nhập tên đăng nhập"
                        required
                    >
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="loginPassword">Mật khẩu</label>
                    <input
                        id="loginPassword"
                        type="password"
                        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="••••••••"
                        required
                    >
                </div>
                <button id="loginSubmit" type="submit" class="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-white font-semibold hover:bg-blue-700 transition">
                    Đăng nhập
                </button>
            </form>

            <!-- Register Form -->
            <form id="registerForm" class="hidden space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="registerName">Tên đăng nhập</label>
                    <input
                        id="registerName"
                        type="text"
                        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="nguyenvana"
                        required
                    >
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="registerPassword">Mật khẩu</label>
                    <input
                        id="registerPassword"
                        type="password"
                        minlength="6"
                        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Ít nhất 6 ký tự"
                        required
                    >
                </div>
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1" for="registerPasswordConfirmation">Nhập lại mật khẩu</label>
                    <input
                        id="registerPasswordConfirmation"
                        type="password"
                        minlength="6"
                        class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
                        placeholder="Nhập lại mật khẩu"
                        required
                    >
                </div>
                <button id="registerSubmit" type="submit" class="w-full rounded-lg bg-blue-600 px-4 py-2.5 text-white font-semibold hover:bg-blue-700 transition">
                    Tạo tài khoản
                </button>
            </form>

            <!-- Social Divider -->
            <div class="my-5 flex items-center gap-3">
                <div class="h-px bg-gray-200 flex-1"></div>
                <span class="text-xs text-gray-500 uppercase">hoặc</span>
                <div class="h-px bg-gray-200 flex-1"></div>
            </div>

            <!-- Google Sign-in -->
            <button id="googleAuthBtn" type="button" class="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-700 font-semibold hover:bg-gray-50 transition">
                Tiếp tục với Google
            </button>

            <p class="mt-6 text-center text-xs text-gray-500">Bằng cách tiếp tục, bạn đồng ý sử dụng Firebase Authentication.</p>
        </section>
    </main>
</body>

</html>
<?php /**PATH C:\Users\0pham\Documents\GitHub\multiplechoice\resources\views\auth\index.blade.php ENDPATH**/ ?>