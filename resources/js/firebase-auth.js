import { initializeApp } from 'firebase/app';
import {
  createUserWithEmailAndPassword,
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  updateProfile,
} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBD0OkN3KM4nnT6lpk2Z3X-PX10AsnAwTo',
  authDomain: 'tracnghiemdemo-a2567.firebaseapp.com',
  projectId: 'tracnghiemdemo-a2567',
  storageBucket: 'tracnghiemdemo-a2567.firebasestorage.app',
  messagingSenderId: '856722669723',
  appId: '1:856722669723:web:9f5795bec5949fa64c063e',
  measurementId: 'G-SZRZ18TTM1',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

function qs(selector) {
  return document.querySelector(selector);
}

function setFirebaseUidCookie(uid) {
  const maxAge = 60 * 60 * 24 * 30;
  document.cookie = `quiz_firebase_uid=${encodeURIComponent(uid)}; path=/; max-age=${maxAge}; samesite=lax`;
}

function clearFirebaseUidCookie() {
  document.cookie = 'quiz_firebase_uid=; path=/; max-age=0; samesite=lax';
}

function showMessage(type, text) {
  const el = qs('#authMessage');
  if (!el) return;

  el.classList.remove('hidden', 'bg-red-50', 'text-red-700', 'bg-green-50', 'text-green-700');

  if (type === 'error') {
    el.classList.add('bg-red-50', 'text-red-700');
  } else {
    el.classList.add('bg-green-50', 'text-green-700');
  }

  el.textContent = text;
}

function getRedirectTarget() {
  const url = new URL(window.location.href);
  const fromQuery = url.searchParams.get('redirect');
  return fromQuery || '/';
}

function setAuthTab(mode) {
  const loginTab = qs('#authTabLogin');
  const registerTab = qs('#authTabRegister');
  const loginForm = qs('#loginForm');
  const registerForm = qs('#registerForm');

  if (!loginTab || !registerTab || !loginForm || !registerForm) return;

  const isLogin = mode === 'login';

  loginForm.classList.toggle('hidden', !isLogin);
  registerForm.classList.toggle('hidden', isLogin);

  loginTab.classList.toggle('bg-white', isLogin);
  loginTab.classList.toggle('text-gray-900', isLogin);
  loginTab.classList.toggle('text-gray-500', !isLogin);

  registerTab.classList.toggle('bg-white', !isLogin);
  registerTab.classList.toggle('text-gray-900', !isLogin);
  registerTab.classList.toggle('text-gray-500', isLogin);
}

function getFirebaseErrorMessage(errorCode) {
  const map = {
    'auth/email-already-in-use': 'Email này đã được đăng ký.',
    'auth/invalid-email': 'Email không hợp lệ.',
    'auth/user-not-found': 'Không tìm thấy tài khoản.',
    'auth/wrong-password': 'Mật khẩu không đúng.',
    'auth/invalid-credential': 'Thông tin đăng nhập không đúng.',
    'auth/weak-password': 'Mật khẩu quá yếu (ít nhất 6 ký tự).',
    'auth/popup-closed-by-user': 'Bạn đã đóng cửa sổ đăng nhập Google.',
    'auth/popup-blocked': 'Trình duyệt đã chặn popup. Hệ thống sẽ chuyển sang chế độ đăng nhập redirect.',
    'auth/operation-not-allowed': 'Google Sign-In chưa được bật trong Firebase Console (Authentication > Sign-in method).',
    'auth/unauthorized-domain': 'Domain hiện tại chưa được cấp quyền trong Firebase. Hãy thêm localhost hoặc 127.0.0.1 vào Authorized domains.',
    'auth/network-request-failed': 'Lỗi mạng, vui lòng kiểm tra kết nối internet và thử lại.',
  };

  return map[errorCode] || 'Có lỗi xảy ra. Vui lòng thử lại.';
}

function buildInternalEmail(username) {
  const base = String(username || '')
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9_]/g, '');

  const safeBase = base || 'user';
  return `${safeBase}.${Date.now()}@local.quiz`;
}

async function syncLocalUser({ name, password, firebaseUid, email }) {
  const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content || '';

  const response = await fetch('/auth/register-sync', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-CSRF-TOKEN': csrfToken,
    },
    body: JSON.stringify({
      name,
      password,
      firebase_uid: firebaseUid,
      email,
    }),
  });

  if (!response.ok) {
    throw new Error('sync-local-user-failed');
  }
}

export function setupAuthPage() {
  if (document.body.dataset.authPage !== 'true') return;

  const initialMode = document.body.dataset.authMode === 'register' ? 'register' : 'login';
  setAuthTab(initialMode);

  const loginTab = qs('#authTabLogin');
  const registerTab = qs('#authTabRegister');

  loginTab?.addEventListener('click', () => setAuthTab('login'));
  registerTab?.addEventListener('click', () => setAuthTab('register'));

  const loginForm = qs('#loginForm');
  const registerForm = qs('#registerForm');
  const googleBtn = qs('#googleAuthBtn');

  getRedirectResult(auth).catch((error) => {
    showMessage('error', getFirebaseErrorMessage(error.code));
  });

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setFirebaseUidCookie(user.uid);
      window.location.href = getRedirectTarget();
    }
  });

  loginForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = qs('#loginEmail')?.value?.trim();
    const password = qs('#loginPassword')?.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      showMessage('success', 'Đăng nhập thành công, đang chuyển hướng...');
      window.location.href = getRedirectTarget();
    } catch (error) {
      showMessage('error', getFirebaseErrorMessage(error.code));
    }
  });

  registerForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const name = qs('#registerName')?.value?.trim();
    const password = qs('#registerPassword')?.value;
    const passwordConfirmation = qs('#registerPasswordConfirmation')?.value;

    if (!name) {
      showMessage('error', 'Vui lòng nhập tên đăng nhập.');
      return;
    }

    if (password !== passwordConfirmation) {
      showMessage('error', 'Mật khẩu nhập lại không khớp.');
      return;
    }

    const internalEmail = buildInternalEmail(name);

    try {
      const credential = await createUserWithEmailAndPassword(auth, internalEmail, password);
      if (name) {
        await updateProfile(credential.user, { displayName: name });
      }

      await syncLocalUser({
        name,
        password,
        firebaseUid: credential.user.uid,
        email: internalEmail,
      });

      showMessage('success', 'Đăng ký thành công, đang chuyển hướng...');
      window.location.href = getRedirectTarget();
    } catch (error) {
      if (error?.message === 'sync-local-user-failed') {
        showMessage('error', 'Không thể đồng bộ tài khoản vào hệ thống. Vui lòng thử lại.');
        return;
      }

      showMessage('error', getFirebaseErrorMessage(error.code));
    }
  });

  googleBtn?.addEventListener('click', async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      showMessage('success', 'Đăng nhập Google thành công, đang chuyển hướng...');
      window.location.href = getRedirectTarget();
    } catch (error) {
      if (error.code === 'auth/popup-blocked') {
        showMessage('error', getFirebaseErrorMessage(error.code));
        await signInWithRedirect(auth, googleProvider);
        return;
      }

      showMessage('error', `${getFirebaseErrorMessage(error.code)} (Mã lỗi: ${error.code || 'unknown'})`);
    }
  });
}

export function setupAuthGuard() {
  if (document.body.dataset.authRequired !== 'true') return;

  onAuthStateChanged(auth, (user) => {
    if (!user) {
      clearFirebaseUidCookie();
      const redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
      window.location.href = `/login?redirect=${redirectUrl}`;
      return;
    }

    setFirebaseUidCookie(user.uid);

    const emailNode = document.querySelector('[data-auth-email]');
    if (emailNode) {
      emailNode.textContent = user.displayName || user.email || 'Người dùng';
    }
  });
}

export function setupLogout() {
  const logoutBtn = document.querySelector('[data-auth-logout]');
  if (!logoutBtn) return;

  logoutBtn.addEventListener('click', async () => {
    try {
      // Clear server-side session
      await fetch('/logout', {
        method: 'POST',
        headers: {
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.content || '',
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error calling logout endpoint:', error);
    }

    // Sign out from Firebase
    await signOut(auth);
    
    // Clear client-side cookie
    clearFirebaseUidCookie();
    
    // Clear localStorage for any cached data
    try {
      localStorage.removeItem('firebase_uid');
      localStorage.removeItem('quiz_session');
    } catch (e) {}
    
    // Redirect to login
    window.location.href = '/login';
  });
}
