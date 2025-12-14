<script lang="ts">
	import { language } from '$lib/i18n';
	import { strategies } from '$lib/constants';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
</script>

<svelte:head>
	<title>投资策略 - LY Quant | Investment Strategies - LY Quant</title>
</svelte:head>

<section class="strategies-page">
	<div class="container">
		<div class="page-header">
			<h1>{currentLang === 'zh' ? '投资策略' : 'Investment Strategies'}</h1>
			<p class="page-subtitle">
				{currentLang === 'zh' 
					? '两款量化投资策略，满足不同投资者的需求'
					: 'Two quantitative investment strategies to meet different investor needs'}
			</p>
		</div>

		<div class="strategies-list">
			{#each strategies as strategy}
				<div class="strategy-card">
					<div class="strategy-header">
						<h2>{currentLang === 'zh' ? strategy.name : strategy.nameEn}</h2>
						<p class="strategy-desc">{currentLang === 'zh' ? strategy.description : strategy.descriptionEn}</p>
					</div>
					
					<div class="strategy-metrics">
						<div class="metric">
							<span class="metric-label">{currentLang === 'zh' ? '预期收益率' : 'Expected Return'}</span>
							<span class="metric-value">{currentLang === 'zh' ? strategy.expectedReturn : strategy.expectedReturnEn}</span>
						</div>
						<div class="metric">
							<span class="metric-label">{currentLang === 'zh' ? '最大回撤' : 'Max Drawdown'}</span>
							<span class="metric-value">{currentLang === 'zh' ? strategy.maxDrawdown : strategy.maxDrawdownEn}</span>
						</div>
					</div>

					<div class="strategy-features">
						<h3>{currentLang === 'zh' ? '核心优势' : 'Core Advantages'}</h3>
						<ul>
							{#each (currentLang === 'zh' ? strategy.features : strategy.featuresEn) as feature}
								<li>{feature}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.strategies-page {
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
		margin-bottom: 4rem;
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
		max-width: 800px;
		margin: 0 auto;
	}

	.strategies-list {
		display: grid;
		gap: 3rem;
	}

	.strategy-card {
		background: white;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		border-top: 4px solid #D4AF37;
	}

	.strategy-header h2 {
		font-size: 2rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.strategy-desc {
		font-size: 1.1rem;
		color: #6B7280;
		margin-bottom: 2rem;
	}

	.strategy-metrics {
		display: flex;
		gap: 3rem;
		margin-bottom: 2rem;
		padding: 2rem;
		background: #F9FAFB;
		border-radius: 8px;
	}

	.metric {
		display: flex;
		flex-direction: column;
	}

	.metric-label {
		font-size: 0.9rem;
		color: #9CA3AF;
		margin-bottom: 0.5rem;
	}

	.metric-value {
		font-size: 2rem;
		font-weight: 700;
		color: #D4AF37;
	}

	.strategy-features h3 {
		font-size: 1.3rem;
		font-weight: 600;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.strategy-features ul {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.strategy-features li {
		padding: 0.75rem 0;
		color: #374151;
		position: relative;
		padding-left: 2rem;
		line-height: 1.6;
	}

	.strategy-features li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #D4AF37;
		font-weight: bold;
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		.strategy-metrics {
			flex-direction: column;
			gap: 1.5rem;
		}
	}
</style>
