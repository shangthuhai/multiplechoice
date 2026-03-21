import { initializeApp } from 'firebase/app';
import {
  getAuth,
  getRedirectResult,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
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

const ROUTES = {
  login: '/login',
  logout: '/logout',
  session: '/auth/session',
  localLogin: '/auth/login-local',
  localRegister: '/auth/register-local',
  googleSync: '/auth/google-sync',
};

const SELECTORS = {
  authMessage: '#authMessage',
  authTabLogin: '#authTabLogin',
  authTabRegister: '#authTabRegister',
  loginForm: '#loginForm',
  registerForm: '#registerForm',
  loginUsername: '#loginUsername',
  loginPassword: '#loginPassword',
  registerName: '#registerName',
  registerPassword: '#registerPassword',
  registerPasswordConfirmation: '#registerPasswordConfirmation',
  googleAuthBtn: '#googleAuthBtn',
  authEmail: '[data-auth-email]',
  logoutButton: '[data-auth-logout]',
  csrfToken: 'meta[name="csrf-token"]',
};

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
  const el = qs(SELECTORS.authMessage);
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
  const loginTab = qs(SELECTORS.authTabLogin);
  const registerTab = qs(SELECTORS.authTabRegister);
  const loginForm = qs(SELECTORS.loginForm);
  const registerForm = qs(SELECTORS.registerForm);

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

function getGoogleAuthErrorMessage(errorCode) {
  const map = {
    'auth/popup-closed-by-user': 'Bạn đã đóng cửa sổ đăng nhập Google.',
    'auth/popup-blocked': 'Trình duyệt đã chặn popup. Hệ thống sẽ chuyển sang chế độ đăng nhập redirect.',
    'auth/operation-not-allowed': 'Google Sign-In chưa được bật trong Firebase Console (Authentication > Sign-in method).',
    'auth/unauthorized-domain': 'Domain hiện tại chưa được cấp quyền trong Firebase. Hãy thêm localhost hoặc 127.0.0.1 vào Authorized domains.',
    'auth/network-request-failed': 'Lỗi mạng, vui lòng kiểm tra kết nối internet và thử lại.',
  };

  return map[errorCode] || 'Đăng nhập Google thất bại. Vui lòng thử lại.';
}

async function postJson(url, body) {
  const csrfToken = document.querySelector(SELECTORS.csrfToken)?.content || '';

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'X-CSRF-TOKEN': csrfToken,
    },
    body: JSON.stringify(body),
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    let message = payload?.message || 'Yêu cầu không hợp lệ.';
    if (payload?.errors) {
      const firstError = Object.values(payload.errors)[0];
      if (Array.isArray(firstError) && firstError[0]) {
        message = firstError[0];
      }
    }
    throw new Error(message);
  }

  return payload;
}

async function getSessionStatus() {
  const response = await fetch(ROUTES.session, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  if (!response.ok) {
    return { authenticated: false };
  }

  return response.json();
}

async function syncGoogleSession(user) {
  if (!user?.uid) return null;

  const payload = await postJson(ROUTES.googleSync, {
    firebase_uid: user.uid,
    email: user.email || `${user.uid}@google.local`,
    name: user.displayName || '',
  });

  if (payload?.owner_uid) {
    setFirebaseUidCookie(payload.owner_uid);
  } else {
    setFirebaseUidCookie(user.uid);
  }

  return payload;
}

export function setupAuthPage() {
  if (document.body.dataset.authPage !== 'true') return;

  const initialMode = document.body.dataset.authMode === 'register' ? 'register' : 'login';
  setAuthTab(initialMode);

  const loginTab = qs(SELECTORS.authTabLogin);
  const registerTab = qs(SELECTORS.authTabRegister);

  loginTab?.addEventListener('click', () => setAuthTab('login'));
  registerTab?.addEventListener('click', () => setAuthTab('register'));

  const loginForm = qs(SELECTORS.loginForm);
  const registerForm = qs(SELECTORS.registerForm);
  const googleBtn = qs(SELECTORS.googleAuthBtn);

  getSessionStatus().then((session) => {
    if (session?.authenticated) {
      if (session.owner_uid) {
        setFirebaseUidCookie(session.owner_uid);
      }
      window.location.href = getRedirectTarget();
    }
  });

  getRedirectResult(auth)
    .then(async (result) => {
      if (result?.user) {
        await syncGoogleSession(result.user);
        window.location.href = getRedirectTarget();
      }
    })
    .catch((error) => {
      showMessage('error', getGoogleAuthErrorMessage(error.code));
    });

  // Do not auto-redirect on Firebase state for the login page.
  // This app now uses local Laravel auth for username/password,
  // and auto-redirect here can create a reload loop.
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setFirebaseUidCookie(user.uid);
    }
  });

  loginForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = qs(SELECTORS.loginUsername)?.value?.trim();
    const password = qs(SELECTORS.loginPassword)?.value;

    try {
      const payload = await postJson(ROUTES.localLogin, {
        username,
        password,
      });

      if (payload?.owner_uid) {
        setFirebaseUidCookie(payload.owner_uid);
      }

      showMessage('success', 'Đăng nhập thành công, đang chuyển hướng...');
      window.location.href = getRedirectTarget();
    } catch (error) {
      showMessage('error', error?.message || 'Đăng nhập thất bại.');
    }
  });

  registerForm?.addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = qs(SELECTORS.registerName)?.value?.trim();
    const password = qs(SELECTORS.registerPassword)?.value;
    const passwordConfirmation = qs(SELECTORS.registerPasswordConfirmation)?.value;

    if (!username) {
      showMessage('error', 'Vui lòng nhập tên đăng nhập.');
      return;
    }

    if (password !== passwordConfirmation) {
      showMessage('error', 'Mật khẩu nhập lại không khớp.');
      return;
    }

    try {
      const payload = await postJson(ROUTES.localRegister, {
        username,
        password,
        password_confirmation: passwordConfirmation,
      });

      if (payload?.owner_uid) {
        setFirebaseUidCookie(payload.owner_uid);
      }

      showMessage('success', 'Đăng ký thành công, đang chuyển hướng...');
      window.location.href = getRedirectTarget();
    } catch (error) {
      showMessage('error', error?.message || 'Đăng ký thất bại.');
    }
  });

  googleBtn?.addEventListener('click', async () => {
    try {
      const credential = await signInWithPopup(auth, googleProvider);
      await syncGoogleSession(credential.user);
      showMessage('success', 'Đăng nhập Google thành công, đang chuyển hướng...');
      window.location.href = getRedirectTarget();
    } catch (error) {
      if (error.code === 'auth/popup-blocked') {
        showMessage('error', getGoogleAuthErrorMessage(error.code));
        await signInWithRedirect(auth, googleProvider);
        return;
      }

      showMessage('error', `${getGoogleAuthErrorMessage(error.code)} (Mã lỗi: ${error.code || 'unknown'})`);
    }
  });
}

export function setupAuthGuard() {
  if (document.body.dataset.authRequired !== 'true') return;

  getSessionStatus().then((session) => {
    if (session?.authenticated) {
      if (session.owner_uid) {
        setFirebaseUidCookie(session.owner_uid);
      }

      const emailNode = document.querySelector(SELECTORS.authEmail);
      if (emailNode) {
        emailNode.textContent = session.display_name || 'Người dùng';
      }

      return;
    }

    onAuthStateChanged(auth, (user) => {
      if (!user) {
        clearFirebaseUidCookie();
        const redirectUrl = encodeURIComponent(window.location.pathname + window.location.search);
        window.location.href = `${ROUTES.login}?redirect=${redirectUrl}`;
        return;
      }

      setFirebaseUidCookie(user.uid);

      const emailNode = document.querySelector(SELECTORS.authEmail);
      if (emailNode) {
        emailNode.textContent = user.displayName || user.email || 'Người dùng';
      }
    });
  });
}

export function setupLogout() {
  const logoutBtn = document.querySelector(SELECTORS.logoutButton);
  if (!logoutBtn) return;

  logoutBtn.addEventListener('click', async () => {
    try {
      // Clear server-side session
      await fetch(ROUTES.logout, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
    } catch (error) {
      console.error('Error calling logout endpoint:', error);
    }

    // Sign out from Firebase (if there is a Firebase session)
    try {
      await signOut(auth);
    } catch (error) {
      // Ignore: local auth may be used without Firebase session.
    }
    
    // Clear client-side cookie
    clearFirebaseUidCookie();
    
    // Clear localStorage for any cached data
    try {
      localStorage.removeItem('firebase_uid');
      localStorage.removeItem('quiz_session');
    } catch (e) {}
    
    // Redirect to login
    window.location.href = ROUTES.login;
  });
}
