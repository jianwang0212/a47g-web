<script lang="ts">
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>牛菲特和银芒格</title>
	<meta name="description" content="专注于高频交易算法开发与实现" />
</svelte:head>

<h1>牛菲特和银芒格</h1>
<p class="subtitle">专注于创新的算法交易解决方案</p>

<section class="who-we-are">
	<h2>关于我们</h2>
	<div class="content">
		<p>我们是一家算法交易公司，专注于自主研发和技术创新。作为自营交易公司，我们完全依靠自有资金进行交易：我们的想法，我们的资金，我们的技术。这一切都由我们的团队精心打造。</p>
		<p>我们利用自主研发的技术在全球金融市场进行交易。我们的大多数策略都基于高频交易(HFT)算法，依赖于超低延迟网络来实现最优运行。</p>
	</div>
</section>

<section class="team">
	<h2>我们的团队</h2>
	<div class="content">
		<p>我们的团队由数学家、开发者和工程师组成，他们都对技术和金融市场充满热情。我们相信努力工作，但更相信智慧工作。智慧工作意味着相互信任，团队协作，相信过程。</p>
	</div>
</section>

<style>
	section {
		padding: 4rem 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	.hero {
		height: 80vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		background-color: #f8f9fa;
	}

	h1 {
		font-size: 3.5rem;
		margin-bottom: 1rem;
		color: #1a1a1a;
	}

	.subtitle {
		font-size: 1.5rem;
		color: #666;
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

	.who-we-are, .team {
		background-color: white;
	}

	@media (max-width: 768px) {
		h1 {
			font-size: 2.5rem;
		}

		h2 {
			font-size: 2rem;
		}

		.content {
			font-size: 1rem;
		}
	}
</style>
