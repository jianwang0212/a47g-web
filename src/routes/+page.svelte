<script lang="ts">
	import AIChatbot from './AIChatbot.svelte';
	import MarketDashboard from './MarketDashboard.svelte';
</script>

<svelte:head>
	<title>牛菲特和银芒格 - AI驱动的算法交易</title>
	<meta name="description" content="专注于高频交易算法开发与实现，AI驱动的实时交易解决方案" />
</svelte:head>

<div class="hero">
	<h1>牛菲特和银芒格</h1>
	<p class="subtitle">AI驱动的创新算法交易解决方案</p>
	<p class="hero-description">结合人工智能与实时数据分析，为量化交易提供智能决策支持</p>
</div>

<MarketDashboard />

<section class="who-we-are">
	<h2>关于我们</h2>
	<div class="content">
		<p>我们是一家算法交易公司，专注于自主研发和技术创新。作为自营交易公司，我们完全依靠自有资金进行交易：我们的想法，我们的资金，我们的技术。这一切都由我们的团队精心打造。</p>
		<p>我们利用自主研发的技术在全球金融市场进行交易。我们的大多数策略都基于高频交易(HFT)算法，依赖于超低延迟网络来实现最优运行。现在，我们进一步整合AI技术，通过智能分析和实时决策来优化交易策略。</p>
		<div class="features">
			<div class="feature-card">
				<h3>🤖 AI智能分析</h3>
				<p>利用机器学习算法分析市场数据，识别交易机会和风险模式</p>
			</div>
			<div class="feature-card">
				<h3>⚡ 实时数据处理</h3>
				<p>毫秒级数据处理能力，确保在最佳时机执行交易决策</p>
			</div>
			<div class="feature-card">
				<h3>📊 智能策略优化</h3>
				<p>AI持续学习和优化交易策略，适应不断变化的市场环境</p>
			</div>
		</div>
	</div>
</section>

<section class="team">
	<h2>我们的团队</h2>
	<div class="content">
		<p>我们的团队由数学家、开发者和工程师组成，他们都对技术和金融市场充满热情。我们相信努力工作，但更相信智慧工作。智慧工作意味着相互信任，团队协作，相信过程。</p>
		<p>现在，我们的团队正在探索AI在量化交易中的应用，通过结合传统算法交易经验和前沿AI技术，为投资者提供更智能、更高效的交易解决方案。</p>
	</div>
</section>

<AIChatbot />

<style>
	section {
		padding: 4rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero {
		padding: 6rem 2rem;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
		color: white;
		margin-bottom: 3rem;
		border-radius: 0 0 24px 24px;
	}

	h1 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		color: white;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
	}

	.subtitle {
		font-size: 1.5rem;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 0.5rem;
	}

	.hero-description {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.8);
		max-width: 600px;
		margin-top: 1rem;
	}

	h2 {
		font-size: 2.5rem;
		margin-bottom: 2rem;
		color: #1a1a1a;
	}

	.content {
		font-size: 1.1rem;
		line-height: 1.6;
		color: #444;
	}

	.content p {
		margin-bottom: 1.5rem;
	}

	.features {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-top: 3rem;
	}

	.feature-card {
		background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
		padding: 2rem;
		border-radius: 12px;
		border: 1px solid #e0e0e0;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.feature-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.feature-card h3 {
		font-size: 1.3rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	.feature-card p {
		margin: 0;
		color: #666;
		font-size: 1rem;
	}

	.who-we-are, .team {
		background-color: white;
		border-radius: 12px;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
		margin-bottom: 2rem;
	}

	@media (max-width: 768px) {
		.hero {
			padding: 4rem 1.5rem;
		}

		h1 {
			font-size: 2.5rem;
		}

		.subtitle {
			font-size: 1.2rem;
		}

		.hero-description {
			font-size: 1rem;
		}

		h2 {
			font-size: 2rem;
		}

		.content {
			font-size: 1rem;
		}

		.features {
			grid-template-columns: 1fr;
			gap: 1.5rem;
		}
	}
</style>
