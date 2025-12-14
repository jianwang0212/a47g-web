<script lang="ts">
	interface MarketData {
		symbol: string;
		name: string;
		price: number;
		change: number;
		changePercent: number;
		volume: number;
	}

	let marketData = $state<MarketData[]>([
		{ symbol: 'SPY', name: '标普500 ETF', price: 0, change: 0, changePercent: 0, volume: 0 },
		{ symbol: 'QQQ', name: '纳斯达克100 ETF', price: 0, change: 0, changePercent: 0, volume: 0 },
		{ symbol: 'BTC', name: '比特币', price: 0, change: 0, changePercent: 0, volume: 0 }
	]);

	let lastUpdate = $state<Date | null>(null);
	let isConnected = $state(false);

	// 模拟实时数据更新
	function updateMarketData() {
		marketData = marketData.map(item => {
			// 模拟价格波动（实际应用中应该从API获取）
			const basePrice = getBasePrice(item.symbol);
			const volatility = 0.02; // 2% 波动
			const randomChange = (Math.random() - 0.5) * 2 * volatility;
			const newPrice = basePrice * (1 + randomChange);
			const change = newPrice - basePrice;
			const changePercent = (change / basePrice) * 100;

			return {
				...item,
				price: Number(newPrice.toFixed(2)),
				change: Number(change.toFixed(2)),
				changePercent: Number(changePercent.toFixed(2)),
				volume: Math.floor(Math.random() * 10000000) + 1000000
			};
		});
		lastUpdate = new Date();
	}

	function getBasePrice(symbol: string): number {
		const basePrices: Record<string, number> = {
			'SPY': 450,
			'QQQ': 380,
			'BTC': 45000
		};
		return basePrices[symbol] || 100;
	}

	// 初始化数据 - 使用标志确保只在组件挂载时运行一次，避免无限循环
	let hasInitialized = false;
	
	$effect(() => {
		// 只在首次挂载时初始化，避免重复运行
		if (hasInitialized) return;
		hasInitialized = true;

		// 初始化市场数据（使用初始值，不依赖当前 marketData）
		const initialData: MarketData[] = [
			{ symbol: 'SPY', name: '标普500 ETF', price: 0, change: 0, changePercent: 0, volume: 0 },
			{ symbol: 'QQQ', name: '纳斯达克100 ETF', price: 0, change: 0, changePercent: 0, volume: 0 },
			{ symbol: 'BTC', name: '比特币', price: 0, change: 0, changePercent: 0, volume: 0 }
		];

		marketData = initialData.map(item => {
			const basePrice = getBasePrice(item.symbol);
			return {
				...item,
				price: basePrice,
				change: 0,
				changePercent: 0,
				volume: Math.floor(Math.random() * 10000000) + 1000000
			};
		});
		lastUpdate = new Date();
		isConnected = true;

		// 每3秒更新一次数据（模拟实时数据流）
		const interval = setInterval(() => {
			updateMarketData();
		}, 3000);

		return () => clearInterval(interval);
	});

	function formatNumber(num: number): string {
		if (num >= 1000000) {
			return (num / 1000000).toFixed(2) + 'M';
		}
		if (num >= 1000) {
			return (num / 1000).toFixed(2) + 'K';
		}
		return num.toFixed(2);
	}

	function formatTime(date: Date): string {
		return date.toLocaleTimeString('zh-CN', { 
			hour: '2-digit', 
			minute: '2-digit',
			second: '2-digit'
		});
	}
</script>

<section class="market-dashboard">
	<div class="dashboard-header">
		<h2>实时市场数据</h2>
		<div class="status">
			<span class="status-indicator {isConnected ? 'connected' : 'disconnected'}"></span>
			<span class="status-text">{isConnected ? '已连接' : '未连接'}</span>
			{#if lastUpdate}
				<span class="update-time">最后更新: {formatTime(lastUpdate)}</span>
			{/if}
		</div>
	</div>

	<div class="market-grid">
		{#each marketData as item (item.symbol)}
			<div class="market-card">
				<div class="card-header">
					<div class="symbol-info">
						<h3>{item.symbol}</h3>
						<span class="asset-name">{item.name}</span>
					</div>
				</div>
				
				<div class="card-body">
					<div class="price-section">
						<div class="price">${item.price.toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
						<div class="change {item.change >= 0 ? 'positive' : 'negative'}">
							<span class="change-value">
								{item.change >= 0 ? '↑' : '↓'} {Math.abs(item.change).toFixed(2)}
							</span>
							<span class="change-percent">
								({item.changePercent >= 0 ? '+' : ''}{item.changePercent.toFixed(2)}%)
							</span>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>

	<div class="dashboard-footer">
		<p>数据更新频率: 每3秒 | 数据仅供参考，不构成投资建议</p>
	</div>
</section>

<style>
	.market-dashboard {
		background: white;
		border-radius: 12px;
		padding: 2rem;
		margin: 2rem auto;
		max-width: 1200px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.dashboard-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 2rem;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.dashboard-header h2 {
		margin: 0;
		font-size: 2rem;
		color: #1a1a1a;
	}

	.status {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
	}

	.status-indicator {
		width: 10px;
		height: 10px;
		border-radius: 50%;
		animation: pulse 2s infinite;
	}

	.status-indicator.connected {
		background: #4caf50;
	}

	.status-indicator.disconnected {
		background: #f44336;
	}

	@keyframes pulse {
		0%, 100% {
			opacity: 1;
		}
		50% {
			opacity: 0.5;
		}
	}

	.status-text {
		font-weight: 600;
		color: #666;
	}

	.update-time {
		color: #999;
		font-size: 0.85rem;
	}

	.market-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 1.5rem;
		margin-bottom: 2rem;
	}

	.market-card {
		background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		padding: 1.5rem;
		transition: transform 0.2s, box-shadow 0.2s;
	}

	.market-card:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	}

	.card-header {
		margin-bottom: 1rem;
	}

	.symbol-info h3 {
		margin: 0 0 0.25rem 0;
		font-size: 1.5rem;
		color: #1a1a1a;
		font-weight: 700;
	}

	.asset-name {
		font-size: 0.85rem;
		color: #666;
	}

	.price-section {
		margin-bottom: 1rem;
	}

	.price {
		font-size: 2rem;
		font-weight: 700;
		color: #1a1a1a;
		margin-bottom: 0.5rem;
	}

	.change {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 1rem;
		font-weight: 600;
	}

	.change.positive {
		color: #4caf50;
	}

	.change.negative {
		color: #f44336;
	}

	.change-value {
		display: flex;
		align-items: center;
	}


	.dashboard-footer {
		text-align: center;
		padding-top: 1.5rem;
		border-top: 1px solid #e0e0e0;
		color: #999;
		font-size: 0.85rem;
	}

	@media (max-width: 768px) {
		.market-dashboard {
			padding: 1rem;
			margin: 1rem;
		}

		.dashboard-header {
			flex-direction: column;
			align-items: flex-start;
		}

		.market-grid {
			grid-template-columns: 1fr;
		}

		.price {
			font-size: 1.5rem;
		}
	}
</style>
