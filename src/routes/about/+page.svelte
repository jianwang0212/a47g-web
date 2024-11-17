<svelte:head>
	<title>投资策略</title>
	<meta name="description" content="我们的量化交易策略与投资方法" />
</svelte:head>

<div class="strategy-column">
	<h1>投资策略</h1>

	<div class="strategy-section">
		<h2>量化跨交易所套利策略</h2>
		<p>
			运用先进的数据分析技术，实施自动化的算法交易，精确识别并利用全球交易所之间的微小价格差异，通过无风险套利获取稳定收益。此策略依托于大数据处理能力和实时交易执行系统，确保能在第一时间捕捉并执行套利机会。
		</p>
	</div>

	<div class="strategy-section">
		<h2>量化期权垂直价差交易策略</h2>
		<p>
			通过精细构造期权组合，如牛市价差(Bull Spreads)或熊市价差(Bear Spreads)，来表达对未来市场方向的判断，同时利用期权的时间价值衰减和隐含波动率的变化来优化投资组合的风险/回报特性。
		</p>
	</div>

	<div class="strategy-section">
		<h2>主观宏观资产配置策略</h2>
		<p>
			基于对全球宏观经济趋势、政策环境变化以及市场流动性状况的深入分析，通过动态调整不同资产类别（如股票、债券、大宗商品, ETF (KLIP, JEPY, QQQY)等）在投资组合中的权重，来适应市场变化并寻求最优风险调整后回报。
		</p>
	</div>
</div>

<style>
	.strategy-column {
		max-width: 800px;
		margin: 0 auto;
		padding: 2rem;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 3rem;
		color: #1a1a1a;
		text-align: center;
	}

	.strategy-section {
		margin-bottom: 3rem;
		padding: 2rem;
		background-color: #f8f9fa;
		border-radius: 8px;
		box-shadow: 0 2px 4px rgba(0,0,0,0.1);
	}

	h2 {
		font-size: 1.5rem;
		color: #333;
		margin-bottom: 1rem;
	}

	p {
		line-height: 1.6;
		color: #444;
		font-size: 1.1rem;
	}

	@media (max-width: 768px) {
		.strategy-column {
			padding: 1rem;
		}

		h1 {
			font-size: 2rem;
		}

		.strategy-section {
			padding: 1.5rem;
		}
	}
</style>
