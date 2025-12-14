<script lang="ts">
	import { language, t } from '$lib/i18n';
	import { team, strategies, performance, philosophy } from '$lib/constants';
	import MarketDashboard from './MarketDashboard.svelte';
	import AIChatbot from './AIChatbot.svelte';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
</script>

<svelte:head>
	<title>LY Quant - Quantitative Investment | 量化投资</title>
	<meta name="description" content="LY Quant is a quantitative investment firm specializing in US options trading with proven track record and professional team." />
</svelte:head>

<!-- Hero Section -->
<section class="hero">
	<div class="hero-content">
		<h1 class="hero-title">
			{currentLang === 'zh' ? 'LY Quant' : 'LY Quantitative Investment'}
		</h1>
		<p class="hero-fullname">
			{currentLang === 'zh' ? '牛菲特和银芒格基金' : 'Buffett & Munger Fund'}
		</p>
		<p class="hero-subtitle">
			{currentLang === 'zh' 
				? '专注于美股期权市场的量化投资' 
				: 'Quantitative Investment Specializing in US Options Market'}
		</p>
		<p class="hero-description">
			{currentLang === 'zh'
				? '利用量化分析和严格的风险管理，追求稳健的风险调整后回报'
				: 'Pursuing steady risk-adjusted returns through quantitative analysis and strict risk management'}
		</p>
		<div class="hero-stats">
			<div class="stat-item">
				<div class="stat-value">{performance.annualizedReturn}</div>
				<div class="stat-label">{currentLang === 'zh' ? '年化收益率' : 'Annualized Return'}</div>
			</div>
			<div class="stat-item">
				<div class="stat-value">{performance.maxDrawdown}</div>
				<div class="stat-label">{currentLang === 'zh' ? '最大回撤' : 'Max Drawdown'}</div>
			</div>
		</div>
		<div class="hero-actions">
			<a href="/strategies" class="btn btn-primary">
				{currentLang === 'zh' ? '了解策略' : 'View Strategies'}
			</a>
			<a href="/team" class="btn btn-secondary">
				{currentLang === 'zh' ? '团队介绍' : 'Our Team'}
			</a>
		</div>
	</div>
</section>

<!-- Investment Strategies Preview -->
<section class="strategies-preview">
	<div class="container">
		<h2 class="section-title">
			{currentLang === 'zh' ? '投资策略' : 'Investment Strategies'}
		</h2>
		<p class="section-subtitle">
			{currentLang === 'zh' 
				? '两款量化投资策略，满足不同投资者的需求'
				: 'Two quantitative investment strategies to meet different investor needs'}
		</p>
		<div class="strategies-grid">
			{#each strategies as strategy}
				<div class="strategy-card">
					<div class="strategy-header">
						<h3>{currentLang === 'zh' ? strategy.name : strategy.nameEn}</h3>
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
					<ul class="strategy-features">
						{#each (currentLang === 'zh' ? strategy.features : strategy.featuresEn) as feature}
							<li>{feature}</li>
						{/each}
					</ul>
					<a href="/strategies" class="strategy-link">
						{currentLang === 'zh' ? '了解更多' : 'Learn More'} →
					</a>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- Investment Philosophy Preview -->
<section class="philosophy-preview">
	<div class="container">
		<div class="philosophy-content">
			<div class="philosophy-text">
				<h2>{currentLang === 'zh' ? philosophy.title : philosophy.titleEn}</h2>
				<p>{currentLang === 'zh' ? philosophy.description : philosophy.descriptionEn}</p>
				<div class="philosophy-principles">
					{#each philosophy.principles as principle}
						<div class="principle-item">
							<h4>{currentLang === 'zh' ? principle.title : principle.titleEn}</h4>
							<p>{currentLang === 'zh' ? principle.description : principle.descriptionEn}</p>
						</div>
					{/each}
				</div>
				<a href="/philosophy" class="btn btn-outline">
					{currentLang === 'zh' ? '深入了解' : 'Learn More'} →
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Team Preview -->
<section class="team-preview">
	<div class="container">
		<h2 class="section-title">
			{currentLang === 'zh' ? '专业团队' : 'Professional Team'}
		</h2>
		<p class="section-subtitle">
			{currentLang === 'zh' ? team.description : team.descriptionEn}
		</p>
		<div class="team-grid">
			{#each team.founders as founder}
				<div class="team-card">
					{#if founder.avatar}
						<img src={founder.avatar} alt={founder.name} class="team-avatar" />
					{:else}
						<div class="team-initial">{founder.initial}</div>
					{/if}
					<h3>{founder.name}</h3>
					<p class="team-title">{currentLang === 'zh' ? founder.title : founder.titleEn}</p>
					<p class="team-education">{currentLang === 'zh' ? founder.education : founder.educationEn}</p>
					<p class="team-experience">{currentLang === 'zh' ? founder.experience : founder.experienceEn}</p>
				</div>
			{/each}
		</div>
		<a href="/team" class="btn btn-outline">
			{currentLang === 'zh' ? '查看完整团队介绍' : 'View Full Team'} →
		</a>
	</div>
</section>

<!-- Market Dashboard -->
<MarketDashboard />

<AIChatbot />

<style>
	.hero {
		background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
		color: white;
		padding: 8rem 2rem 6rem;
		text-align: center;
		position: relative;
		overflow: hidden;
	}

	.hero::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(circle at 30% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
		pointer-events: none;
	}

	.hero-content {
		max-width: 1200px;
		margin: 0 auto;
		position: relative;
		z-index: 1;
	}

	.hero-title {
		font-size: 4rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
		background: linear-gradient(135deg, #FFD700, #D4AF37);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.hero-fullname {
		font-size: 1.8rem;
		margin-bottom: 1rem;
		color: rgba(255, 255, 255, 0.95);
		font-weight: 600;
		letter-spacing: 0.05em;
	}

	.hero-subtitle {
		font-size: 1.5rem;
		margin-bottom: 1rem;
		color: rgba(255, 255, 255, 0.9);
		font-weight: 500;
	}

	.hero-description {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 700px;
		margin: 0 auto 3rem;
		line-height: 1.6;
	}

	.hero-stats {
		display: flex;
		justify-content: center;
		gap: 4rem;
		margin-bottom: 3rem;
		flex-wrap: wrap;
	}

	.stat-item {
		text-align: center;
	}

	.stat-value {
		font-size: 3rem;
		font-weight: 700;
		color: #FFD700;
		display: block;
		margin-bottom: 0.5rem;
	}

	.stat-label {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.7);
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.hero-actions {
		display: flex;
		gap: 1rem;
		justify-content: center;
		flex-wrap: wrap;
	}

	.btn {
		padding: 1rem 2rem;
		border-radius: 4px;
		font-weight: 600;
		text-decoration: none;
		transition: all 0.2s;
		display: inline-block;
	}

	.btn-primary {
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
	}

	.btn-primary:hover {
		transform: translateY(-2px);
		box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
	}

	.btn-secondary {
		background: transparent;
		color: white;
		border: 2px solid white;
	}

	.btn-secondary:hover {
		background: white;
		color: #001F3F;
	}

	.btn-outline {
		background: transparent;
		color: #001F3F;
		border: 2px solid #001F3F;
	}

	.btn-outline:hover {
		background: #001F3F;
		color: white;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
	}

	.section-title {
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		margin-bottom: 1rem;
		color: #001F3F;
	}

	.section-subtitle {
		font-size: 1.1rem;
		text-align: center;
		color: #6B7280;
		margin-bottom: 3rem;
		max-width: 700px;
		margin-left: auto;
		margin-right: auto;
	}

	.strategies-preview {
		padding: 6rem 0;
		background: #F9FAFB;
	}

	.strategies-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.strategy-card {
		background: white;
		padding: 2.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		transition: transform 0.2s, box-shadow 0.2s;
		border-top: 4px solid #D4AF37;
	}

	.strategy-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.strategy-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 0.5rem;
	}

	.strategy-desc {
		color: #6B7280;
		margin-bottom: 1.5rem;
	}

	.strategy-metrics {
		display: flex;
		gap: 2rem;
		margin-bottom: 1.5rem;
		padding-bottom: 1.5rem;
		border-bottom: 1px solid #E5E7EB;
	}

	.metric {
		display: flex;
		flex-direction: column;
	}

	.metric-label {
		font-size: 0.85rem;
		color: #9CA3AF;
		margin-bottom: 0.25rem;
	}

	.metric-value {
		font-size: 1.5rem;
		font-weight: 700;
		color: #D4AF37;
	}

	.strategy-features {
		list-style: none;
		padding: 0;
		margin: 0 0 1.5rem 0;
	}

	.strategy-features li {
		padding: 0.5rem 0;
		color: #374151;
		position: relative;
		padding-left: 1.5rem;
	}

	.strategy-features li::before {
		content: '✓';
		position: absolute;
		left: 0;
		color: #D4AF37;
		font-weight: bold;
	}

	.strategy-link {
		color: #001F3F;
		font-weight: 600;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		transition: color 0.2s;
	}

	.strategy-link:hover {
		color: #D4AF37;
	}

	.philosophy-preview {
		padding: 6rem 0;
		background: white;
	}

	.philosophy-content {
		max-width: 900px;
		margin: 0 auto;
	}

	.philosophy-text h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1.5rem;
		text-align: center;
	}

	.philosophy-text > p {
		font-size: 1.1rem;
		line-height: 1.8;
		color: #374151;
		margin-bottom: 3rem;
		text-align: center;
	}

	.philosophy-principles {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.principle-item {
		padding: 1.5rem;
		background: #F9FAFB;
		border-radius: 8px;
		border-left: 4px solid #D4AF37;
	}

	.principle-item h4 {
		font-size: 1.2rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 0.5rem;
	}

	.principle-item p {
		color: #6B7280;
		line-height: 1.6;
		margin: 0;
	}

	.team-preview {
		padding: 6rem 0;
		background: #F9FAFB;
	}

	.team-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.team-card {
		background: white;
		padding: 2.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		text-align: center;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.team-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.team-initial {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2.5rem;
		font-weight: 700;
		margin: 0 auto 1.5rem;
	}

	.team-avatar {
		width: 80px;
		height: 80px;
		border-radius: 50%;
		object-fit: cover;
		margin: 0 auto 1.5rem;
		border: 3px solid #D4AF37;
		display: block;
	}

	.team-card h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 0.5rem;
	}

	.team-title {
		font-size: 1rem;
		color: #D4AF37;
		font-weight: 600;
		margin-bottom: 1rem;
	}

	.team-education,
	.team-experience {
		font-size: 0.9rem;
		color: #6B7280;
		line-height: 1.6;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		.hero-title {
			font-size: 2.5rem;
		}

		.hero-stats {
			gap: 2rem;
		}

		.strategies-grid,
		.team-grid {
			grid-template-columns: 1fr;
		}

		.philosophy-principles {
			grid-template-columns: 1fr;
		}
	}
</style>
