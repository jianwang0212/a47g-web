<script lang="ts">
	import { page } from '$app/stores';
	import { language, t } from '$lib/i18n';
	import LanguageSwitcher from '$lib/components/LanguageSwitcher.svelte';
	
	let isMenuOpen = $state(false);
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
	
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
	
	function closeMenu() {
		isMenuOpen = false;
	}
</script>

<header class="header">
	<div class="header-container">
		<a href="/" class="logo-link">
			<div class="logo-text">
				<span class="logo-name">LY Quant</span>
				<span class="logo-tagline">Quantitative Investment</span>
			</div>
		</a>

		<nav class="nav" aria-label="Main navigation">
			<ul class="nav-list">
				<li>
					<a href="/" class="nav-link" class:active={$page.url.pathname === '/'} onclick={closeMenu}>
						{t('nav.home', currentLang)}
					</a>
				</li>
				<li>
					<a href="/team" class="nav-link" class:active={$page.url.pathname === '/team'} onclick={closeMenu}>
						{t('nav.team', currentLang)}
					</a>
				</li>
				<li>
					<a href="/strategies" class="nav-link" class:active={$page.url.pathname === '/strategies'} onclick={closeMenu}>
						{t('nav.strategies', currentLang)}
					</a>
				</li>
				<li>
					<a href="/performance" class="nav-link" class:active={$page.url.pathname === '/performance'} onclick={closeMenu}>
						{t('nav.performance', currentLang)}
					</a>
				</li>
				<li>
					<a href="/insights" class="nav-link" class:active={$page.url.pathname === '/insights'} onclick={closeMenu}>
						{t('nav.insights', currentLang)}
					</a>
				</li>
				<li>
					<a href="/philosophy" class="nav-link" class:active={$page.url.pathname === '/philosophy'} onclick={closeMenu}>
						{t('nav.philosophy', currentLang)}
					</a>
				</li>
				<li>
					<a href="/contact" class="nav-link" class:active={$page.url.pathname === '/contact'} onclick={closeMenu}>
						{t('nav.contact', currentLang)}
					</a>
				</li>
			</ul>
		</nav>

		<div class="header-actions">
			<LanguageSwitcher />
			<a href="/login" class="login-btn">
				{t('nav.login', currentLang)}
			</a>
			<button class="menu-toggle" onclick={toggleMenu} aria-label="Toggle menu" aria-expanded={isMenuOpen}>
				<span></span>
				<span></span>
				<span></span>
			</button>
		</div>
	</div>

	<!-- Mobile Menu -->
	{#if isMenuOpen}
		<div class="mobile-menu">
			<a href="/" class="mobile-link" class:active={$page.url.pathname === '/'} onclick={closeMenu}>
				{t('nav.home', currentLang)}
			</a>
			<a href="/team" class="mobile-link" class:active={$page.url.pathname === '/team'} onclick={closeMenu}>
				{t('nav.team', currentLang)}
			</a>
			<a href="/strategies" class="mobile-link" class:active={$page.url.pathname === '/strategies'} onclick={closeMenu}>
				{t('nav.strategies', currentLang)}
			</a>
			<a href="/performance" class="mobile-link" class:active={$page.url.pathname === '/performance'} onclick={closeMenu}>
				{t('nav.performance', currentLang)}
			</a>
			<a href="/insights" class="mobile-link" class:active={$page.url.pathname === '/insights'} onclick={closeMenu}>
				{t('nav.insights', currentLang)}
			</a>
			<a href="/philosophy" class="mobile-link" class:active={$page.url.pathname === '/philosophy'} onclick={closeMenu}>
				{t('nav.philosophy', currentLang)}
			</a>
			<a href="/contact" class="mobile-link" class:active={$page.url.pathname === '/contact'} onclick={closeMenu}>
				{t('nav.contact', currentLang)}
			</a>
			<a href="/login" class="mobile-link login" onclick={closeMenu}>
				{t('nav.login', currentLang)}
			</a>
		</div>
	{/if}
</header>

<style>
	.header {
		background: #001F3F;
		color: white;
		position: sticky;
		top: 0;
		z-index: 1000;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
	}

	.header-container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 80px;
	}

	.logo-link {
		display: flex;
		align-items: center;
		gap: 1rem;
		text-decoration: none;
		color: white;
		transition: opacity 0.2s;
	}

	.logo-link:hover {
		opacity: 0.9;
	}

	.logo-text {
		display: flex;
		flex-direction: column;
	}

	.logo-name {
		font-size: 1.5rem;
		font-weight: 700;
		letter-spacing: 0.05em;
		color: #FFD700;
	}

	.logo-tagline {
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.7);
		letter-spacing: 0.1em;
		text-transform: uppercase;
	}

	.nav {
		display: none;
	}

	.nav-list {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
		gap: 0.5rem;
	}

	.nav-link {
		padding: 0.5rem 1rem;
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-weight: 500;
		font-size: 0.95rem;
		border-radius: 4px;
		transition: all 0.2s;
		position: relative;
	}

	.nav-link:hover {
		background: rgba(255, 255, 255, 0.1);
		color: #FFD700;
	}

	.nav-link.active {
		color: #FFD700;
	}

	.nav-link.active::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
		width: 60%;
		height: 2px;
		background: #FFD700;
	}

	.header-actions {
		display: flex;
		align-items: center;
		gap: 1rem;
	}

	.login-btn {
		padding: 0.5rem 1.5rem;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 600;
		font-size: 0.9rem;
		transition: all 0.2s;
		white-space: nowrap;
	}

	.login-btn:hover {
		transform: translateY(-1px);
		box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
	}

	.menu-toggle {
		display: none;
		flex-direction: column;
		gap: 4px;
		background: none;
		border: none;
		cursor: pointer;
		padding: 0.5rem;
	}

	.menu-toggle span {
		width: 24px;
		height: 2px;
		background: white;
		transition: all 0.3s;
	}

	.mobile-menu {
		display: none;
		flex-direction: column;
		background: #001F3F;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
		padding: 1rem 2rem;
	}

	.mobile-link {
		padding: 1rem 0;
		color: rgba(255, 255, 255, 0.9);
		text-decoration: none;
		font-weight: 500;
		border-bottom: 1px solid rgba(255, 255, 255, 0.1);
		transition: color 0.2s;
	}

	.mobile-link:hover,
	.mobile-link.active {
		color: #FFD700;
	}

	.mobile-link.login {
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		padding: 0.75rem 1.5rem;
		border-radius: 4px;
		text-align: center;
		margin-top: 1rem;
		border: none;
	}

	@media (min-width: 1024px) {
		.nav {
			display: block;
		}

		.menu-toggle {
			display: none;
		}

		.mobile-menu {
			display: none !important;
		}
	}

	@media (max-width: 1023px) {
		.header-container {
			padding: 0 1rem;
		}

		.logo-text {
			display: none;
		}

		.menu-toggle {
			display: flex;
		}

		.login-btn {
			display: none;
		}

		.mobile-menu {
			display: flex;
		}
	}
</style>
