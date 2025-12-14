<script lang="ts">
	import { language } from '$lib/i18n';
	import { performance } from '$lib/constants';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
</script>

<svelte:head>
	<title>业绩展示 - LY Quant | Performance - LY Quant</title>
</svelte:head>

<section class="performance-page">
	<div class="container">
		<div class="page-header">
			<h1>{currentLang === 'zh' ? '业绩展示' : 'Performance'}</h1>
			<p class="page-subtitle">
				{currentLang === 'zh' 
					? '历史净值表现（需要登录查看详细数据）'
					: 'Historical Performance (Login required for detailed data)'}
			</p>
		</div>

		<div class="performance-card">
			<h2>{currentLang === 'zh' ? '策略基本情况' : 'Strategy Overview'}</h2>
			<p class="period">
				{currentLang === 'zh' 
					? `运行时间：${performance.duration}（${performance.period}）`
					: `Track Record: ${performance.durationEn} (${performance.periodEn})`}
			</p>
			
			<div class="metrics-grid">
				<div class="metric-card">
					<div class="metric-label">{currentLang === 'zh' ? '累计收益率' : 'Total Return'}</div>
					<div class="metric-value">{performance.return}</div>
				</div>
				<div class="metric-card">
					<div class="metric-label">{currentLang === 'zh' ? '年化收益率' : 'Annualized Return'}</div>
					<div class="metric-value">{performance.annualizedReturn}</div>
				</div>
				<div class="metric-card">
					<div class="metric-label">{currentLang === 'zh' ? '最大回撤' : 'Max Drawdown'}</div>
					<div class="metric-value">{performance.maxDrawdown}</div>
				</div>
				<div class="metric-card">
					<div class="metric-label">{currentLang === 'zh' ? '回撤修复时间' : 'Recovery Time'}</div>
					<div class="metric-value">{currentLang === 'zh' ? performance.maxDrawdownRecovery : performance.maxDrawdownRecoveryEn}</div>
				</div>
			</div>

			<div class="login-prompt">
				<p>{currentLang === 'zh' ? '登录以查看详细业绩报告和净值曲线' : 'Login to view detailed performance reports and NAV curves'}</p>
				<a href="/login" class="btn-login">
					{currentLang === 'zh' ? '投资者登录' : 'Investor Login'}
				</a>
			</div>
		</div>
	</div>
</section>

<style>
	.performance-page {
		padding: 4rem 0;
		background: #F9FAFB;
		min-height: 80vh;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.page-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.page-header h1 {
		font-size: 3rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.page-subtitle {
		font-size: 1.2rem;
		color: #6B7280;
	}

	.performance-card {
		background: white;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	.performance-card h2 {
		font-size: 1.8rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.period {
		color: #6B7280;
		margin-bottom: 2rem;
	}

	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.metric-card {
		text-align: center;
		padding: 2rem;
		background: #F9FAFB;
		border-radius: 8px;
	}

	.metric-label {
		font-size: 0.9rem;
		color: #9CA3AF;
		margin-bottom: 0.5rem;
	}

	.metric-value {
		font-size: 2.5rem;
		font-weight: 700;
		color: #D4AF37;
	}

	.login-prompt {
		text-align: center;
		padding: 2rem;
		background: #F9FAFB;
		border-radius: 8px;
	}

	.login-prompt p {
		color: #6B7280;
		margin-bottom: 1.5rem;
	}

	.btn-login {
		display: inline-block;
		padding: 1rem 2rem;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		text-decoration: none;
		border-radius: 4px;
		font-weight: 600;
		transition: transform 0.2s;
	}

	.btn-login:hover {
		transform: translateY(-2px);
	}
</style>
