import './bootstrap';
import { setupAuthGuard, setupAuthPage, setupLogout } from './firebase-auth';

document.addEventListener('DOMContentLoaded', () => {
	setupAuthPage();
	setupAuthGuard();
	setupLogout();
});
