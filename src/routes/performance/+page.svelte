<script lang="ts">
	import { language } from '$lib/i18n';
	import { performance, previousFund } from '$lib/constants';
	
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

		<!-- Previous Fund Section -->
		<div class="previous-fund-card">
			<div class="fund-header">
				<div class="fund-badge">
					{currentLang === 'zh' ? '前身基金' : 'Predecessor Fund'}
				</div>
				<h2>
					{currentLang === 'zh' 
						? `${previousFund.nameZh} (${previousFund.name})`
						: previousFund.name}
				</h2>
				<p class="fund-description">
					{currentLang === 'zh' ? previousFund.description.zh : previousFund.description.en}
				</p>
			</div>

			<div class="fund-content">
				<!-- Return Structure -->
				<div class="fund-section">
					<h3>{currentLang === 'zh' ? previousFund.returnStructure.title.zh : previousFund.returnStructure.title.en}</h3>
					<div class="return-types">
						<div class="return-card fixed">
							<div class="return-icon">📊</div>
							<h4>{currentLang === 'zh' ? previousFund.returnStructure.fixed.title.zh : previousFund.returnStructure.fixed.title.en}</h4>
							<p>{currentLang === 'zh' ? previousFund.returnStructure.fixed.description.zh : previousFund.returnStructure.fixed.description.en}</p>
							<div class="return-highlight">15% {currentLang === 'zh' ? '年化收益' : 'Annual Return'}</div>
						</div>
						<div class="return-card floating">
							<div class="return-icon">📈</div>
							<h4>{currentLang === 'zh' ? previousFund.returnStructure.floating.title.zh : previousFund.returnStructure.floating.title.en}</h4>
							<p>{currentLang === 'zh' ? previousFund.returnStructure.floating.description.zh : previousFund.returnStructure.floating.description.en}</p>
							<div class="return-highlight">{currentLang === 'zh' ? '与基金同步' : 'Synced with Fund'}</div>
						</div>
					</div>
				</div>

				<!-- Fees -->
				<div class="fund-section">
					<h3>{currentLang === 'zh' ? previousFund.fees.title.zh : previousFund.fees.title.en}</h3>
					<div class="fees-list">
						{#each previousFund.fees.items as fee}
							<div class="fee-item">
								<div class="fee-name">{currentLang === 'zh' ? fee.name.zh : fee.name.en}</div>
								<div class="fee-amount">{currentLang === 'zh' ? fee.amount.zh : fee.amount.en}</div>
							</div>
						{/each}
					</div>
					<p class="fee-note">
						{currentLang === 'zh' ? previousFund.fees.note.zh : previousFund.fees.note.en}
					</p>
				</div>

				<!-- Terms -->
				<div class="fund-section">
					<h3>{currentLang === 'zh' ? previousFund.terms.title.zh : previousFund.terms.title.en}</h3>
					<ul class="terms-list">
						{#each previousFund.terms.items as term}
							<li>{currentLang === 'zh' ? term.zh : term.en}</li>
						{/each}
					</ul>
				</div>

				<!-- Timeline -->
				<div class="fund-section timeline-section">
					<h3>{currentLang === 'zh' ? previousFund.timeline.title.zh : previousFund.timeline.title.en}</h3>
					<div class="timeline-example">
						<p>{currentLang === 'zh' ? previousFund.timeline.example.zh : previousFund.timeline.example.en}</p>
					</div>
				</div>
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

	.previous-fund-card {
		background: white;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		margin-top: 3rem;
		border-top: 4px solid #D4AF37;
	}

	.fund-header {
		text-align: center;
		margin-bottom: 3rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid #E5E7EB;
	}

	.fund-badge {
		display: inline-block;
		padding: 0.5rem 1.5rem;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		border-radius: 20px;
		font-size: 0.85rem;
		font-weight: 600;
		margin-bottom: 1rem;
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.fund-header h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.fund-description {
		font-size: 1.1rem;
		color: #6B7280;
		line-height: 1.8;
		max-width: 800px;
		margin: 0 auto;
	}

	.fund-content {
		display: flex;
		flex-direction: column;
		gap: 3rem;
	}

	.fund-section {
		padding: 2rem;
		background: #F9FAFB;
		border-radius: 8px;
	}

	.fund-section h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1.5rem;
		border-left: 4px solid #D4AF37;
		padding-left: 1rem;
	}

	.return-types {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.return-card {
		background: white;
		padding: 2rem;
		border-radius: 8px;
		text-align: center;
		transition: transform 0.2s, box-shadow 0.2s;
		border: 2px solid #E5E7EB;
	}

	.return-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.return-card.fixed {
		border-color: #D4AF37;
	}

	.return-card.floating {
		border-color: #3B82F6;
	}

	.return-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.return-card h4 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.return-card p {
		color: #6B7280;
		line-height: 1.6;
		margin-bottom: 1.5rem;
	}

	.return-highlight {
		display: inline-block;
		padding: 0.5rem 1.5rem;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		border-radius: 20px;
		font-weight: 700;
		font-size: 1.1rem;
	}

	.return-card.floating .return-highlight {
		background: linear-gradient(135deg, #3B82F6, #60A5FA);
		color: white;
	}

	.fees-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
		margin-bottom: 1.5rem;
	}

	.fee-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem 1.5rem;
		background: white;
		border-radius: 8px;
		border-left: 3px solid #D4AF37;
	}

	.fee-name {
		font-weight: 600;
		color: #001F3F;
	}

	.fee-amount {
		color: #6B7280;
		font-weight: 500;
	}

	.fee-note {
		color: #6B7280;
		font-size: 0.9rem;
		line-height: 1.6;
		margin: 0;
		padding: 1rem;
		background: white;
		border-radius: 8px;
		border-left: 3px solid #3B82F6;
	}

	.terms-list {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.terms-list li {
		padding: 1rem 1.5rem;
		background: white;
		border-radius: 8px;
		color: #374151;
		line-height: 1.6;
		position: relative;
		padding-left: 2.5rem;
	}

	.terms-list li::before {
		content: '✓';
		position: absolute;
		left: 1rem;
		color: #D4AF37;
		font-weight: bold;
		font-size: 1.2rem;
	}

	.timeline-section {
		background: linear-gradient(135deg, #001F3F, #003366);
		color: white;
	}

	.timeline-section h3 {
		color: #FFD700;
		border-left-color: #FFD700;
	}

	.timeline-example {
		background: rgba(255, 255, 255, 0.1);
		padding: 1.5rem;
		border-radius: 8px;
		border-left: 4px solid #FFD700;
	}

	.timeline-example p {
		color: rgba(255, 255, 255, 0.95);
		line-height: 1.8;
		margin: 0;
		font-size: 1rem;
	}

	@media (max-width: 768px) {
		.return-types {
			grid-template-columns: 1fr;
		}

		.fund-header h2 {
			font-size: 2rem;
		}

		.fee-item {
			flex-direction: column;
			align-items: flex-start;
			gap: 0.5rem;
		}
	}
</style>
