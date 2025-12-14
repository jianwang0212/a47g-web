<script lang="ts">
	import { language } from '../i18n';
	import type { Language } from '../i18n';

	let currentLang = $state<Language>('zh');

	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});

	function switchLanguage(lang: Language) {
		language.set(lang);
		if (typeof window !== 'undefined') {
			localStorage.setItem('preferred-language', lang);
		}
	}

	$effect(() => {
		if (typeof window !== 'undefined') {
			const saved = localStorage.getItem('preferred-language') as Language;
			if (saved && (saved === 'zh' || saved === 'en')) {
				language.set(saved);
			}
		}
	});
</script>

<div class="language-switcher">
	<button
		class="lang-btn {currentLang === 'zh' ? 'active' : ''}"
		onclick={() => switchLanguage('zh')}
		aria-label="切换到中文"
	>
		中文
	</button>
	<span class="separator">|</span>
	<button
		class="lang-btn {currentLang === 'en' ? 'active' : ''}"
		onclick={() => switchLanguage('en')}
		aria-label="Switch to English"
	>
		EN
	</button>
</div>

<style>
	.language-switcher {
		display: flex;
		align-items: center;
		gap: 0.5rem;
	}

	.lang-btn {
		background: none;
		border: none;
		color: rgba(255, 255, 255, 0.9);
		font-size: 0.9rem;
		font-weight: 600;
		cursor: pointer;
		padding: 0.25rem 0.5rem;
		border-radius: 4px;
		transition: all 0.2s;
	}

	.lang-btn:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.lang-btn.active {
		color: #FFD700;
		background: rgba(212, 175, 55, 0.1);
	}

	.separator {
		color: rgba(255, 255, 255, 0.3);
	}
</style>
