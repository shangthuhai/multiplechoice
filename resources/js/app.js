import './bootstrap';
import { setupAuthGuard, setupAuthPage, setupLogout } from './firebase-auth';

const THEME_STORAGE_KEY = 'quiz-theme';

function readStoredTheme() {
	try {
		const value = window.localStorage.getItem(THEME_STORAGE_KEY);
		return value === 'dark' || value === 'light' ? value : null;
	} catch {
		return null;
	}
}

function writeStoredTheme(theme) {
	try {
		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
	} catch {
		// Ignore storage errors (private mode, blocked storage, etc.)
	}
}

function resolveInitialTheme() {
	const storedTheme = readStoredTheme();
	if (storedTheme) {
		return storedTheme;
	}

	return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
		? 'dark'
		: 'light';
}

function applyTheme(theme) {
	const isDark = theme === 'dark';
	document.documentElement.classList.toggle('dark', isDark);
	document.documentElement.style.colorScheme = isDark ? 'dark' : 'light';
}

function getCurrentTheme() {
	return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function iconMarkup(theme) {
	if (theme === 'dark') {
		return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/></svg>';
	}

	return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 0 1 8.646 3.646 9 9 0 1 0 20.354 15.354z"/></svg>';
}

function updateThemeToggle(button, activeTheme) {
	const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';
	const label = nextTheme === 'dark' ? 'Dark mode' : 'Light mode';

	button.innerHTML = `${iconMarkup(nextTheme)}<span>${label}</span>`;
	button.setAttribute('aria-label', `Switch to ${label.toLowerCase()}`);
	button.setAttribute('title', `Switch to ${label.toLowerCase()}`);
}

function setupThemeToggle() {
	if (!document.body || document.querySelector('[data-theme-toggle]')) {
		return;
	}

	const button = document.createElement('button');
	button.type = 'button';
	button.className = 'theme-toggle-btn';
	button.setAttribute('data-theme-toggle', 'true');

	updateThemeToggle(button, getCurrentTheme());

	button.addEventListener('click', () => {
		const currentTheme = getCurrentTheme();
		const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';

		applyTheme(nextTheme);
		writeStoredTheme(nextTheme);
		updateThemeToggle(button, nextTheme);
	});

	document.body.appendChild(button);
}

function followSystemThemeWhenUnset() {
	const mediaQuery = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;
	if (!mediaQuery) {
		return;
	}

	const applySystemTheme = (event) => {
		if (readStoredTheme()) {
			return;
		}

		const theme = event.matches ? 'dark' : 'light';
		applyTheme(theme);

		const toggleButton = document.querySelector('[data-theme-toggle]');
		if (toggleButton) {
			updateThemeToggle(toggleButton, theme);
		}
	};

	if (mediaQuery.addEventListener) {
		mediaQuery.addEventListener('change', applySystemTheme);
		return;
	}

	if (mediaQuery.addListener) {
		mediaQuery.addListener(applySystemTheme);
	}
}

applyTheme(resolveInitialTheme());

document.addEventListener('DOMContentLoaded', () => {
	setupAuthPage();
	setupAuthGuard();
	setupLogout();
	setupThemeToggle();
	followSystemThemeWhenUnset();
});
