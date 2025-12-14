<script lang="ts">
	import { language } from '$lib/i18n';
	
	let currentLang = $state('zh');
	let email = $state('');
	let password = $state('');
	let error = $state('');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
	
	function handleLogin() {
		// Placeholder for login logic
		error = currentLang === 'zh' ? '登录功能开发中' : 'Login feature under development';
	}
</script>

<svelte:head>
	<title>投资者登录 - LY Quant | Investor Login - LY Quant</title>
</svelte:head>

<section class="login-page">
	<div class="container">
		<div class="login-card">
			<h1>{currentLang === 'zh' ? '投资者登录' : 'Investor Login'}</h1>
			<p class="login-subtitle">
				{currentLang === 'zh' 
					? '登录以查看详细的业绩报告和投资数据'
					: 'Login to view detailed performance reports and investment data'}
			</p>
			
			<form onsubmit={(e) => { e.preventDefault(); handleLogin(); }}>
				<div class="form-group">
					<label>{currentLang === 'zh' ? '邮箱' : 'Email'}</label>
					<input type="email" bind:value={email} required />
				</div>
				<div class="form-group">
					<label>{currentLang === 'zh' ? '密码' : 'Password'}</label>
					<input type="password" bind:value={password} required />
				</div>
				{#if error}
					<div class="error">{error}</div>
				{/if}
				<button type="submit" class="btn-login">
					{currentLang === 'zh' ? '登录' : 'Login'}
				</button>
			</form>
		</div>
	</div>
</section>

<style>
	.login-page {
		padding: 4rem 0;
		background: #F9FAFB;
		min-height: 80vh;
		display: flex;
		align-items: center;
	}

	.container {
		max-width: 500px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.login-card {
		background: white;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	.login-card h1 {
		font-size: 2rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 0.5rem;
		text-align: center;
	}

	.login-subtitle {
		text-align: center;
		color: #6B7280;
		margin-bottom: 2rem;
	}

	.form-group {
		margin-bottom: 1.5rem;
	}

	.form-group label {
		display: block;
		margin-bottom: 0.5rem;
		color: #374151;
		font-weight: 500;
	}

	.form-group input {
		width: 100%;
		padding: 0.75rem;
		border: 1px solid #D1D5DB;
		border-radius: 4px;
		font-size: 1rem;
		box-sizing: border-box;
	}

	.form-group input:focus {
		outline: none;
		border-color: #D4AF37;
	}

	.error {
		color: #EF4444;
		margin-bottom: 1rem;
		text-align: center;
	}

	.btn-login {
		width: 100%;
		padding: 1rem;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		border: none;
		border-radius: 4px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: transform 0.2s;
	}

	.btn-login:hover {
		transform: translateY(-2px);
	}
</style>
