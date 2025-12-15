<script lang="ts">
	import { language } from '$lib/i18n';
	import { strategies, strategyComparison } from '$lib/constants';
	import CompoundInterestCalculator from '$lib/components/CompoundInterestCalculator.svelte';
	
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

					<div class="strategy-details">
						<div class="detail-section">
							<h3>{currentLang === 'zh' ? '策略详解' : 'Strategy Details'}</h3>
							<p class="detailed-desc">
								{currentLang === 'zh' ? strategy.detailedDescription.zh : strategy.detailedDescription.en}
							</p>
						</div>

						<div class="detail-section">
							<h3>{currentLang === 'zh' ? '运作机制' : 'How It Works'}</h3>
							<ul class="how-it-works">
								{#each (currentLang === 'zh' ? strategy.howItWorks.zh : strategy.howItWorks.en) as point}
									<li>{point}</li>
								{/each}
							</ul>
						</div>

						<div class="detail-section">
							<h3>{currentLang === 'zh' ? '适合人群' : 'Suitable For'}</h3>
							<p class="suitable-for">
								{currentLang === 'zh' ? strategy.suitableFor.zh : strategy.suitableFor.en}
							</p>
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

		<!-- Compound Interest Calculator Section -->
		<div class="calculator-section">
			<CompoundInterestCalculator />
		</div>

		<!-- Strategy Comparison Section -->
		<div class="comparison-section">
			<h2 class="comparison-title">
				{currentLang === 'zh' ? strategyComparison.title.zh : strategyComparison.title.en}
			</h2>
			<div class="comparison-table">
				<div class="comparison-header">
					<div class="comparison-cell header-cell"></div>
					<div class="comparison-cell header-cell">
						{currentLang === 'zh' ? strategies[0].name : strategies[0].nameEn}
					</div>
					<div class="comparison-cell header-cell">
						{currentLang === 'zh' ? strategies[1].name : strategies[1].nameEn}
					</div>
				</div>
				{#each strategyComparison.comparisonPoints as point}
					<div class="comparison-row">
						<div class="comparison-cell category-cell">
							{currentLang === 'zh' ? point.category.zh : point.category.en}
						</div>
						<div class="comparison-cell">
							{currentLang === 'zh' ? point.buffer.zh : point.buffer.en}
						</div>
						<div class="comparison-cell">
							{currentLang === 'zh' ? point.longshort.zh : point.longshort.en}
						</div>
					</div>
				{/each}
			</div>
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

	.strategy-details {
		margin-top: 2rem;
		padding-top: 2rem;
		border-top: 1px solid #E5E7EB;
	}

	.detail-section {
		margin-bottom: 2rem;
	}

	.detail-section h3 {
		font-size: 1.3rem;
		font-weight: 600;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.detailed-desc {
		color: #6B7280;
		line-height: 1.8;
		margin: 0;
	}

	.how-it-works {
		list-style: none;
		padding: 0;
		margin: 0;
	}

	.how-it-works li {
		padding: 0.75rem 0;
		color: #374151;
		position: relative;
		padding-left: 2rem;
		line-height: 1.8;
	}

	.how-it-works li::before {
		content: '→';
		position: absolute;
		left: 0;
		color: #D4AF37;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.suitable-for {
		color: #6B7280;
		line-height: 1.8;
		margin: 0;
		padding: 1rem;
		background: #F9FAFB;
		border-radius: 8px;
		border-left: 3px solid #D4AF37;
	}

	.calculator-section {
		margin-top: 5rem;
		padding-top: 4rem;
		border-top: 2px solid #E5E7EB;
	}

	.comparison-section {
		margin-top: 5rem;
		padding-top: 4rem;
		border-top: 2px solid #E5E7EB;
	}

	.comparison-title {
		font-size: 2.5rem;
		font-weight: 700;
		color: #001F3F;
		text-align: center;
		margin-bottom: 3rem;
	}

	.comparison-table {
		background: white;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		overflow: hidden;
	}

	.comparison-header {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		background: #001F3F;
		color: white;
	}

	.comparison-row {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		border-bottom: 1px solid #E5E7EB;
	}

	.comparison-row:last-child {
		border-bottom: none;
	}

	.comparison-cell {
		padding: 1.5rem;
		display: flex;
		align-items: center;
	}

	.header-cell {
		font-weight: 600;
		font-size: 1.1rem;
	}

	.category-cell {
		font-weight: 600;
		color: #001F3F;
		background: #F9FAFB;
	}

	.comparison-row .comparison-cell:not(.category-cell) {
		color: #374151;
		line-height: 1.6;
	}

	@media (max-width: 768px) {
		.strategy-metrics {
			flex-direction: column;
			gap: 1.5rem;
		}

		.comparison-header,
		.comparison-row {
			grid-template-columns: 1fr;
		}

		.comparison-cell {
			padding: 1rem;
		}

		.category-cell {
			background: #001F3F;
			color: white;
			font-weight: 600;
		}
	}
</style>
