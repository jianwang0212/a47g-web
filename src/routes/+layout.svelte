<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
	import { language } from '$lib/i18n';
	import PageProgress from '$lib/components/PageProgress.svelte';
	import ScrollToTop from '$lib/components/ScrollToTop.svelte';
	import { onMount } from 'svelte';
	import { initGoogleAnalytics } from '$lib/analytics';

	let { children } = $props();
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});

	onMount(() => {
		// Initialize Google Analytics
		initGoogleAnalytics();
	});
</script>

<div class="app">
	<PageProgress />
	<Header />

	<main>
		{@render children()}
	</main>

	<ScrollToTop />

	<footer>
		<div class="footer-content">
			<p class="footer-brand">
				{currentLang === 'zh' ? 'LY Quant - 量化投资' : 'LY Quant - Quantitative Investment'}
			</p>
			<div class="footer-links">
				<a href="/privacy">{currentLang === 'zh' ? '隐私政策' : 'Privacy Policy'}</a>
				<span class="separator">|</span>
				<a href="/compliance">{currentLang === 'zh' ? '合规声明' : 'Compliance'}</a>
				<span class="separator">|</span>
				<a href="/contact">{currentLang === 'zh' ? '联系我们' : 'Contact Us'}</a>
			</div>
			<p class="footer-copyright">
				© 2024 LY Quant. {currentLang === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
			</p>
		</div>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		background: #001F3F;
		color: white;
		padding: 3rem 2rem;
		margin-top: 4rem;
	}

	.footer-content {
		max-width: 1200px;
		margin: 0 auto;
		text-align: center;
	}

	.footer-brand {
		font-size: 1.2rem;
		font-weight: 600;
		color: #FFD700;
		margin-bottom: 1rem;
	}

	.footer-links {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
		margin-bottom: 1rem;
		flex-wrap: wrap;
	}

	.footer-links a {
		color: rgba(255, 255, 255, 0.8);
		text-decoration: none;
		font-size: 0.9rem;
		transition: color 0.2s;
	}

	.footer-links a:hover {
		color: #FFD700;
	}

	.separator {
		color: rgba(255, 255, 255, 0.3);
	}

	.footer-copyright {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.85rem;
		margin-top: 1rem;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
