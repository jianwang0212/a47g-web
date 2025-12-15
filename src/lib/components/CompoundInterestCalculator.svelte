<script lang="ts">
	import { language } from '../i18n';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});

	// 输入参数
	let initialAmount = $state(10000);
	let monthlyContribution = $state(1000);
	let annualReturn = $state(8);
	let years = $state(20);

	// 计算结果
	let finalAmount = $derived(calculateCompoundInterest());
	let totalContributions = $derived(initialAmount + monthlyContribution * 12 * years);
	let totalInterest = $derived(finalAmount - totalContributions);

	// 年度数据用于图表
	let yearlyData = $derived(calculateYearlyData());

	function calculateCompoundInterest(): number {
		const monthlyRate = annualReturn / 100 / 12;
		const months = years * 12;
		
		// 初始金额的复利
		const initialFutureValue = initialAmount * Math.pow(1 + monthlyRate, months);
		
		// 每月定投的复利（年金终值）
		const annuityFutureValue = monthlyContribution > 0
			? monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
			: 0;
		
		return initialFutureValue + annuityFutureValue;
	}

	function calculateYearlyData(): Array<{year: number; amount: number; contributions: number}> {
		const data = [];
		const monthlyRate = annualReturn / 100 / 12;
		
		for (let y = 0; y <= years; y++) {
			const months = y * 12;
			const initialFutureValue = initialAmount * Math.pow(1 + monthlyRate, months);
			const annuityFutureValue = monthlyContribution > 0
				? monthlyContribution * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate)
				: 0;
			const totalAmount = initialFutureValue + annuityFutureValue;
			const totalContributions = initialAmount + monthlyContribution * 12 * y;
			
			data.push({
				year: y,
				amount: totalAmount,
				contributions: totalContributions
			});
		}
		
		return data;
	}

	function formatCurrency(amount: number): string {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
			minimumFractionDigits: 0,
			maximumFractionDigits: 0
		}).format(amount);
	}

	function formatNumber(num: number): string {
		return new Intl.NumberFormat('en-US').format(Math.round(num));
	}
</script>

<div class="calculator-container">
	<div class="calculator-header">
		<h2>{currentLang === 'zh' ? '复利计算器' : 'Compound Interest Calculator'}</h2>
		<p class="calculator-subtitle">
			{currentLang === 'zh' 
				? '体验"世界第八大奇迹"——复利的力量'
				: 'Experience the "Eighth Wonder of the World" - The Power of Compound Interest'}
		</p>
		<div class="buffett-quote">
			<p class="quote-text">
				{currentLang === 'zh' 
					? '"复利是世界第八大奇迹。理解它的人，获得它；不理解它的人，付出它。" —— 爱因斯坦'
					: '"Compound interest is the eighth wonder of the world. He who understands it, earns it; he who doesn\'t, pays it." — Einstein'}
			</p>
			<p class="quote-attribution">
				{currentLang === 'zh' 
					? '巴菲特曾说："我的财富来自三个要素：生活在美国、一些幸运的基因、以及复利。"'
					: 'Buffett once said: "My wealth has come from a combination of living in America, some lucky genes, and compound interest."'}
			</p>
		</div>
	</div>

	<div class="calculator-content">
		<div class="inputs-panel">
			<div class="input-group">
				<label for="initial-amount">
					{currentLang === 'zh' ? '初始投资金额' : 'Initial Investment'}
				</label>
				<div class="input-wrapper">
					<span class="currency-symbol">$</span>
					<input
						id="initial-amount"
						type="number"
						bind:value={initialAmount}
						min="0"
						step="100"
						class="number-input"
					/>
				</div>
			</div>

			<div class="input-group">
				<label for="monthly-contribution">
					{currentLang === 'zh' ? '每月追加投资' : 'Monthly Contribution'}
				</label>
				<div class="input-wrapper">
					<span class="currency-symbol">$</span>
					<input
						id="monthly-contribution"
						type="number"
						bind:value={monthlyContribution}
						min="0"
						step="100"
						class="number-input"
					/>
				</div>
			</div>

			<div class="input-group">
				<label for="annual-return">
					{currentLang === 'zh' ? '年化收益率 (%)' : 'Annual Return (%)'}
				</label>
				<div class="input-wrapper">
					<input
						id="annual-return"
						type="number"
						bind:value={annualReturn}
						min="0"
						max="50"
						step="0.1"
						class="number-input"
					/>
					<span class="percent-symbol">%</span>
				</div>
			</div>

			<div class="input-group">
				<label for="years">
					{currentLang === 'zh' ? '投资年限' : 'Investment Years'}
				</label>
				<div class="input-wrapper">
					<input
						id="years"
						type="number"
						bind:value={years}
						min="1"
						max="50"
						step="1"
						class="number-input"
					/>
					<span class="unit-symbol">{currentLang === 'zh' ? '年' : 'years'}</span>
				</div>
			</div>
		</div>

		<div class="results-panel">
			<div class="results-header">
				<h3>{currentLang === 'zh' ? '计算结果' : 'Results'}</h3>
			</div>
			
			<div class="result-card main-result">
				<div class="result-label">
					{currentLang === 'zh' ? '最终资产价值' : 'Final Value'}
				</div>
				<div class="result-value highlight">
					{formatCurrency(finalAmount)}
				</div>
			</div>

			<div class="results-grid">
				<div class="result-card">
					<div class="result-label">
						{currentLang === 'zh' ? '总投入本金' : 'Total Contributions'}
					</div>
					<div class="result-value">
						{formatCurrency(totalContributions)}
					</div>
				</div>

				<div class="result-card">
					<div class="result-label">
						{currentLang === 'zh' ? '复利收益' : 'Compound Interest Earned'}
					</div>
					<div class="result-value profit">
						{formatCurrency(totalInterest)}
					</div>
				</div>

				<div class="result-card">
					<div class="result-label">
						{currentLang === 'zh' ? '收益倍数' : 'Return Multiple'}
					</div>
					<div class="result-value">
						{(finalAmount / totalContributions).toFixed(2)}x
					</div>
				</div>
			</div>

			<div class="chart-container">
				<h4>{currentLang === 'zh' ? '复利增长曲线' : 'Compound Growth Curve'}</h4>
				<div class="chart">
					{#each yearlyData as dataPoint, index}
						{@const maxAmount = yearlyData[yearlyData.length - 1].amount}
						{@const barHeight = (dataPoint.amount / maxAmount) * 100}
						{@const contributionHeight = (dataPoint.contributions / maxAmount) * 100}
						<div class="chart-bar-wrapper">
							<div class="chart-bar-container">
								<div 
									class="chart-bar contribution-bar"
									style="height: {contributionHeight}%"
									title="{currentLang === 'zh' ? '投入本金' : 'Contributions'}: {formatCurrency(dataPoint.contributions)}"
								></div>
								<div 
									class="chart-bar interest-bar"
									style="height: {barHeight - contributionHeight}%"
									title="{currentLang === 'zh' ? '复利收益' : 'Interest'}: {formatCurrency(dataPoint.amount - dataPoint.contributions)}"
								></div>
							</div>
							<div class="chart-label">
								{dataPoint.year % 5 === 0 || dataPoint.year === years ? dataPoint.year : ''}
							</div>
						</div>
					{/each}
				</div>
				<div class="chart-legend">
					<div class="legend-item">
						<div class="legend-color contribution-color"></div>
						<span>{currentLang === 'zh' ? '投入本金' : 'Contributions'}</span>
					</div>
					<div class="legend-item">
						<div class="legend-color interest-color"></div>
						<span>{currentLang === 'zh' ? '复利收益' : 'Compound Interest'}</span>
					</div>
				</div>
			</div>

			<div class="insight-box">
				<h4>{currentLang === 'zh' ? '复利的启示' : 'The Power of Compound Interest'}</h4>
				<p>
					{currentLang === 'zh' 
						? `在${years}年的时间里，您投入了${formatCurrency(totalContributions)}，通过${annualReturn}%的年化收益率，最终获得了${formatCurrency(finalAmount)}。复利收益${formatCurrency(totalInterest)}占总资产的${((totalInterest / finalAmount) * 100).toFixed(1)}%。这就是复利的魔力——时间越长，增长越快！`
						: `Over ${years} years, you contributed ${formatCurrency(totalContributions)}, and with a ${annualReturn}% annual return, you ended up with ${formatCurrency(finalAmount)}. The compound interest of ${formatCurrency(totalInterest)} represents ${((totalInterest / finalAmount) * 100).toFixed(1)}% of your total assets. This is the magic of compound interest - the longer the time, the faster the growth!`}
				</p>
			</div>
		</div>
	</div>
</div>

<style>
	.calculator-container {
		background: white;
		border-radius: 16px;
		padding: 3rem;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
		margin-top: 3rem;
	}

	.calculator-header {
		text-align: center;
		margin-bottom: 3rem;
	}

	.calculator-header h2 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.calculator-subtitle {
		font-size: 1.2rem;
		color: #6B7280;
		margin-bottom: 2rem;
	}

	.buffett-quote {
		background: linear-gradient(135deg, #F9FAFB, #E5E7EB);
		padding: 2rem;
		border-radius: 12px;
		border-left: 4px solid #D4AF37;
		margin-top: 2rem;
	}

	.quote-text {
		font-size: 1.1rem;
		font-style: italic;
		color: #374151;
		margin-bottom: 1rem;
		line-height: 1.8;
	}

	.quote-attribution {
		font-size: 0.95rem;
		color: #6B7280;
		text-align: right;
	}

	.calculator-content {
		display: grid;
		grid-template-columns: 1fr 1.5fr;
		gap: 3rem;
	}

	.inputs-panel {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.input-group {
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.input-group label {
		font-size: 1rem;
		font-weight: 600;
		color: #374151;
	}

	.input-wrapper {
		position: relative;
		display: flex;
		align-items: center;
	}

	.currency-symbol,
	.percent-symbol,
	.unit-symbol {
		position: absolute;
		left: 1rem;
		color: #6B7280;
		font-weight: 600;
		pointer-events: none;
	}

	.percent-symbol,
	.unit-symbol {
		left: auto;
		right: 1rem;
	}

	.number-input {
		width: 100%;
		padding: 1rem 1rem 1rem 2.5rem;
		border: 2px solid #E5E7EB;
		border-radius: 8px;
		font-size: 1.1rem;
		font-weight: 600;
		color: #001F3F;
		transition: all 0.2s;
	}

	.number-input:focus {
		outline: none;
		border-color: #D4AF37;
		box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
	}

	.results-panel {
		display: flex;
		flex-direction: column;
		gap: 2rem;
	}

	.results-header h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.result-card {
		background: #F9FAFB;
		padding: 1.5rem;
		border-radius: 8px;
	}

	.result-card.main-result {
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		padding: 2rem;
	}

	.result-label {
		font-size: 0.9rem;
		color: #6B7280;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	.main-result .result-label {
		color: rgba(0, 31, 63, 0.8);
		font-weight: 600;
	}

	.result-value {
		font-size: 2rem;
		font-weight: 700;
		color: #001F3F;
	}

	.result-value.highlight {
		font-size: 2.5rem;
	}

	.result-value.profit {
		color: #059669;
	}

	.results-grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1rem;
	}

	.chart-container {
		margin-top: 2rem;
	}

	.chart-container h4 {
		font-size: 1.2rem;
		font-weight: 600;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.chart {
		display: flex;
		align-items: flex-end;
		gap: 4px;
		height: 300px;
		padding: 1rem;
		background: #F9FAFB;
		border-radius: 8px;
		margin-bottom: 1rem;
	}

	.chart-bar-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 100%;
		justify-content: flex-end;
	}

	.chart-bar-container {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		position: relative;
	}

	.chart-bar {
		width: 100%;
		transition: all 0.3s ease;
		border-radius: 4px 4px 0 0;
		cursor: pointer;
	}

	.chart-bar:hover {
		opacity: 0.8;
	}

	.contribution-bar {
		background: #D1D5DB;
	}

	.interest-bar {
		background: linear-gradient(180deg, #D4AF37, #FFD700);
	}

	.chart-label {
		font-size: 0.75rem;
		color: #6B7280;
		margin-top: 0.5rem;
		font-weight: 500;
	}

	.chart-legend {
		display: flex;
		justify-content: center;
		gap: 2rem;
		margin-top: 1rem;
	}

	.legend-item {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.9rem;
		color: #374151;
	}

	.legend-color {
		width: 20px;
		height: 20px;
		border-radius: 4px;
	}

	.contribution-color {
		background: #D1D5DB;
	}

	.interest-color {
		background: linear-gradient(135deg, #D4AF37, #FFD700);
	}

	.insight-box {
		background: linear-gradient(135deg, #001F3F, #003366);
		color: white;
		padding: 2rem;
		border-radius: 12px;
		margin-top: 2rem;
	}

	.insight-box h4 {
		font-size: 1.3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		color: #FFD700;
	}

	.insight-box p {
		line-height: 1.8;
		margin: 0;
		font-size: 1rem;
	}

	@media (max-width: 968px) {
		.calculator-content {
			grid-template-columns: 1fr;
		}

		.results-grid {
			grid-template-columns: 1fr;
		}

		.chart {
			height: 200px;
		}
	}
</style>
