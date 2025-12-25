<script lang="ts">
	import { language, t } from '$lib/i18n';
	import { team, strategies, performance, philosophy } from '$lib/constants';
	import MarketDashboard from './MarketDashboard.svelte';
	import AIChatbot from './AIChatbot.svelte';
	import CompoundInterestCalculator from '$lib/components/CompoundInterestCalculator.svelte';
	import PartnersShowcase from '$lib/components/PartnersShowcase.svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';
	import ContactModal from '$lib/components/ContactModal.svelte';
	import { generateSEOTags, generateOrganizationSchema, generateServiceSchema, generateWebsiteSchema } from '$lib/seo';
	
	let showContactModal = $state(false);
	
	function openContactModal() {
		showContactModal = true;
	}
	
	function closeContactModal() {
		showContactModal = false;
	}
	
	let currentLang = $state('zh');
	
	// Generate SEO tags
	const seoTags = $derived(generateSEOTags({
		title: currentLang === 'zh' ? 'LY Quant - 量化投资 | 专注于美股期权市场' : 'LY Quant - Quantitative Investment | US Options Market',
		description: currentLang === 'zh'
			? 'LY Quant专注于美股期权市场的量化投资，年化收益率21.38%，最大回撤2.5%。专业团队，严格风险管理。'
			: 'LY Quant specializes in quantitative investment in US options market. 21.38% annualized return, 2.5% max drawdown. Professional team with strict risk management.',
		url: 'https://www.a47g.com',
		type: 'website'
	}, currentLang));
	
	// Generate structured data
	const organizationSchema = $derived(generateOrganizationSchema(currentLang));
	const serviceSchema = $derived(generateServiceSchema(currentLang));
	const websiteSchema = $derived(generateWebsiteSchema(currentLang));
	
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
	<meta name="keywords" content="量化投资, quantitative investment, 美股期权, US options, 投资策略, investment strategies, 风险管理, risk management, LY Quant, 牛菲特和银芒格基金" />
	<meta name="author" content="LY Quant" />
	
	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://www.a47g.com/" />
	<meta property="og:title" content="LY Quant - Quantitative Investment | 量化投资" />
	<meta property="og:description" content="LY Quant is a quantitative investment firm specializing in US options trading with proven track record and professional team." />
	<meta property="og:image" content="https://www.a47g.com/favicon.png" />
	<meta property="og:locale" content={currentLang === 'zh' ? 'zh_CN' : 'en_US'} />
	<meta property="og:site_name" content="LY Quant" />
	
	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://www.a47g.com/" />
	<meta name="twitter:title" content="LY Quant - Quantitative Investment | 量化投资" />
	<meta name="twitter:description" content="LY Quant is a quantitative investment firm specializing in US options trading with proven track record and professional team." />
	<meta name="twitter:image" content="https://www.a47g.com/favicon.png" />
	
	<!-- Structured Data (JSON-LD) -->
	{@html `<script type="application/ld+json">
	{
		"@context": "https://schema.org",
		"@type": "FinancialService",
		"name": "LY Quant",
		"alternateName": "牛菲特和银芒格基金",
		"description": "${currentLang === 'zh' ? '专注于美股期权市场的量化投资公司' : 'Quantitative Investment firm specializing in US Options Market'}",
		"url": "https://www.a47g.com",
		"logo": "https://www.a47g.com/favicon.png",
		"foundingDate": "2024",
		"areaServed": {
			"@type": "Place",
			"name": "Global"
		},
		"serviceType": "Quantitative Investment",
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "4.8",
			"reviewCount": "150"
		},
		"offers": {
			"@type": "Offer",
			"name": "${currentLang === 'zh' ? '量化投资策略' : 'Quantitative Investment Strategies'}",
			"description": "${currentLang === 'zh' ? '专业的量化投资服务，年化收益率21.38%，最大回撤2.5%' : 'Professional quantitative investment services with 21.38% annualized return and 2.5% max drawdown'}"
		}
	}
	</script>`}
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
				<div class="stat-value">
					<Typewriter 
						words={['21.38%']}
						wordsZh={['21.38%']}
						speed={50}
						deleteSpeed={30}
						delay={3000}
						loop={false}
						className="stat-typewriter"
					/>
				</div>
				<div class="stat-label">{currentLang === 'zh' ? '年化收益率' : 'Annualized Return'}</div>
			</div>
			<div class="stat-item">
				<div class="stat-value">
					<Typewriter 
						words={['2.5%']}
						wordsZh={['2.5%']}
						speed={50}
						deleteSpeed={30}
						delay={3000}
						loop={false}
						className="stat-typewriter"
					/>
				</div>
				<div class="stat-label">{currentLang === 'zh' ? '最大回撤' : 'Max Drawdown'}</div>
			</div>
		</div>
		<div class="hero-actions">
			<button class="btn btn-primary" onclick={openContactModal}>
				{currentLang === 'zh' ? '立即咨询' : 'Get Started'}
			</button>
			<a href="/strategies" class="btn btn-secondary">
				{currentLang === 'zh' ? '了解策略' : 'View Strategies'}
			</a>
			<a href="/team" class="btn btn-outline">
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
						<img src={founder.avatar} alt={founder.name} class="team-avatar" loading="lazy" />
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

<!-- Partners Showcase -->
<PartnersShowcase />

<!-- Compound Interest Calculator -->
<section class="calculator-section">
	<div class="container">
		<CompoundInterestCalculator />
	</div>
</section>

<!-- Market Dashboard -->
<MarketDashboard />

<AIChatbot />

<ContactModal bind:isOpen={showContactModal} onClose={closeContactModal} />

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

	.stat-typewriter {
		color: #FFD700;
		font-weight: 700;
		text-shadow: 0 0 10px rgba(255, 215, 0, 0.3);
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

	.calculator-section {
		padding: 6rem 0;
		background: white;
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
