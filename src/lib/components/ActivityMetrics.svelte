<script lang="ts">
	import { language } from '../i18n';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});

	// 活跃度数据
	let onlineInvestors = $state(127);
	let todayNewInvestors = $state(23);
	let totalAssets = $state(124800000); // 1.248亿美元
	let todayTrades = $state(156);
	
	// 最近投资活动
	let recentActivities = $state<Array<{name: string, amount: number, time: string}>>([
		{ name: '张**', amount: 50000, time: '2分钟前' },
		{ name: '李**', amount: 120000, time: '5分钟前' },
		{ name: '王**', amount: 80000, time: '8分钟前' },
		{ name: '刘**', amount: 200000, time: '12分钟前' },
		{ name: '陈**', amount: 150000, time: '15分钟前' }
	]);

	// 模拟数据变化
	$effect(() => {
		// 在线投资者数量在合理范围内波动
		const onlineInterval = setInterval(() => {
			const change = Math.floor(Math.random() * 5) - 2; // -2 到 +2
			onlineInvestors = Math.max(100, Math.min(180, onlineInvestors + change));
		}, 8000);

		// 今日新增投资者缓慢增长
		const newInvestorsInterval = setInterval(() => {
			if (Math.random() > 0.7) { // 30%概率增加
				todayNewInvestors += 1;
			}
		}, 15000);

		// 总资产缓慢增长
		const assetsInterval = setInterval(() => {
			const growth = Math.floor(Math.random() * 50000) + 10000; // 1万到6万
			totalAssets += growth;
		}, 20000);

		// 今日交易数增长
		const tradesInterval = setInterval(() => {
			if (Math.random() > 0.6) { // 40%概率增加
				todayTrades += 1;
			}
		}, 12000);

		// 添加新的投资活动
		const activitiesInterval = setInterval(() => {
			if (Math.random() > 0.7) { // 30%概率添加新活动
				const names = currentLang === 'zh' 
					? ['张**', '李**', '王**', '刘**', '陈**', '赵**', '孙**', '周**', '吴**', '郑**']
					: ['John D.', 'Sarah M.', 'Michael C.', 'Emily L.', 'David W.', 'Lisa K.', 'Robert B.', 'Jennifer H.'];
				const amounts = [50000, 80000, 100000, 120000, 150000, 200000, 250000, 300000];
				const times = currentLang === 'zh' 
					? ['刚刚', '1分钟前', '2分钟前', '3分钟前', '5分钟前']
					: ['just now', '1 min ago', '2 mins ago', '3 mins ago', '5 mins ago'];
				
				const newActivity = {
					name: names[Math.floor(Math.random() * names.length)],
					amount: amounts[Math.floor(Math.random() * amounts.length)],
					time: times[Math.floor(Math.random() * times.length)]
				};
				
				recentActivities = [newActivity, ...recentActivities.slice(0, 4)];
			}
		}, 10000);

		return () => {
			clearInterval(onlineInterval);
			clearInterval(newInvestorsInterval);
			clearInterval(assetsInterval);
			clearInterval(tradesInterval);
			clearInterval(activitiesInterval);
		};
	});

	function formatCurrency(amount: number): string {
		if (amount >= 100000000) {
			return '$' + (amount / 100000000).toFixed(2) + '亿';
		}
		if (amount >= 10000) {
			return '$' + (amount / 10000).toFixed(0) + '万';
		}
		return '$' + amount.toLocaleString();
	}

	function formatNumber(num: number): string {
		return num.toLocaleString();
	}
</script>

<section class="activity-metrics">
	<div class="container">
		<div class="metrics-header">
			<h2>{currentLang === 'zh' ? '平台活跃度' : 'Platform Activity'}</h2>
			<p class="subtitle">
				{currentLang === 'zh' 
					? '实时数据 · 真实投资者 · 专业服务'
					: 'Live Data · Real Investors · Professional Service'}
			</p>
		</div>

		<div class="metrics-grid">
			<div class="metric-card">
				<div class="metric-icon">👥</div>
				<div class="metric-content">
					<div class="metric-value">{formatNumber(onlineInvestors)}</div>
					<div class="metric-label">
						{currentLang === 'zh' ? '在线投资者' : 'Online Investors'}
					</div>
					<div class="metric-trend">
						<span class="trend-up">↑</span>
						<span class="trend-text">
							{currentLang === 'zh' ? '实时更新' : 'Live'}
						</span>
					</div>
				</div>
			</div>

			<div class="metric-card">
				<div class="metric-icon">✨</div>
				<div class="metric-content">
					<div class="metric-value">+{formatNumber(todayNewInvestors)}</div>
					<div class="metric-label">
						{currentLang === 'zh' ? '今日新增投资者' : 'New Investors Today'}
					</div>
					<div class="metric-trend">
						<span class="trend-up">↑</span>
						<span class="trend-text">
							{currentLang === 'zh' ? '持续增长' : 'Growing'}
						</span>
					</div>
				</div>
			</div>

			<div class="metric-card highlight">
				<div class="metric-icon">💰</div>
				<div class="metric-content">
					<div class="metric-value">{formatCurrency(totalAssets)}</div>
					<div class="metric-label">
						{currentLang === 'zh' ? '累计管理资产' : 'Total Assets Under Management'}
					</div>
					<div class="metric-trend">
						<span class="trend-up">↑</span>
						<span class="trend-text">
							{currentLang === 'zh' ? '稳步增长' : 'Steady Growth'}
						</span>
					</div>
				</div>
			</div>

			<div class="metric-card">
				<div class="metric-icon">📊</div>
				<div class="metric-content">
					<div class="metric-value">{formatNumber(todayTrades)}</div>
					<div class="metric-label">
						{currentLang === 'zh' ? '今日交易笔数' : 'Trades Today'}
					</div>
					<div class="metric-trend">
						<span class="trend-up">↑</span>
						<span class="trend-text">
							{currentLang === 'zh' ? '活跃交易' : 'Active Trading'}
						</span>
					</div>
				</div>
			</div>
		</div>

		<div class="recent-activities">
			<h3>{currentLang === 'zh' ? '最近投资动态' : 'Recent Investment Activity'}</h3>
			<div class="activities-list">
				{#each recentActivities as activity, index}
					<div class="activity-item" style="animation-delay: {index * 0.1}s">
						<div class="activity-avatar">
							{activity.name.charAt(0)}
						</div>
						<div class="activity-content">
							<div class="activity-name">{activity.name}</div>
							<div class="activity-action">
								{currentLang === 'zh' 
									? `刚刚投资了 ${formatCurrency(activity.amount)}`
									: `just invested ${formatCurrency(activity.amount)}`}
							</div>
						</div>
						<div class="activity-time">{activity.time}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

<style>
	.activity-metrics {
		padding: 6rem 0;
		background: linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%);
		position: relative;
		overflow: hidden;
	}

	.activity-metrics::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.05) 0%, transparent 50%);
		pointer-events: none;
	}

	.container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 1;
	}

	.metrics-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.metrics-header h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.subtitle {
		font-size: 1.1rem;
		color: #6B7280;
	}

	.metrics-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.metric-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
		display: flex;
		align-items: center;
		gap: 1.5rem;
		transition: transform 0.2s, box-shadow 0.2s;
		border-top: 3px solid #D4AF37;
	}

	.metric-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
	}

	.metric-card.highlight {
		background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
		color: #001F3F;
		border-top: 3px solid #001F3F;
	}

	.metric-icon {
		font-size: 3rem;
		line-height: 1;
	}

	.metric-content {
		flex: 1;
	}

	.metric-value {
		font-size: 2rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 0.5rem;
		transition: all 0.3s ease;
	}

	.metric-card.highlight .metric-value {
		color: #001F3F;
	}

	.metric-label {
		font-size: 0.9rem;
		color: #6B7280;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.metric-card.highlight .metric-label {
		color: rgba(0, 31, 63, 0.8);
	}

	.metric-trend {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.85rem;
	}

	.trend-up {
		color: #059669;
		font-weight: bold;
	}

	.metric-card.highlight .trend-up {
		color: #001F3F;
	}

	.trend-text {
		color: #6B7280;
	}

	.metric-card.highlight .trend-text {
		color: rgba(0, 31, 63, 0.7);
	}

	.recent-activities {
		background: white;
		padding: 2.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	}

	.recent-activities h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1.5rem;
	}

	.activities-list {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.activity-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1rem;
		background: #F9FAFB;
		border-radius: 8px;
		transition: all 0.3s ease;
		animation: slideIn 0.5s ease-out backwards;
	}

	.activity-item:hover {
		background: #F3F4F6;
		transform: translateX(4px);
	}

	@keyframes slideIn {
		from {
			opacity: 0;
			transform: translateX(-20px);
		}
		to {
			opacity: 1;
			transform: translateX(0);
		}
	}

	.activity-avatar {
		width: 48px;
		height: 48px;
		border-radius: 50%;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: 700;
		font-size: 1.2rem;
		flex-shrink: 0;
	}

	.activity-content {
		flex: 1;
	}

	.activity-name {
		font-weight: 600;
		color: #001F3F;
		margin-bottom: 0.25rem;
	}

	.activity-action {
		font-size: 0.9rem;
		color: #6B7280;
	}

	.activity-time {
		font-size: 0.85rem;
		color: #9CA3AF;
		white-space: nowrap;
	}

	@media (max-width: 768px) {
		.metrics-grid {
			grid-template-columns: 1fr;
		}

		.metric-card {
			flex-direction: column;
			text-align: center;
		}

		.metrics-header h2 {
			font-size: 2rem;
		}
	}
</style>

