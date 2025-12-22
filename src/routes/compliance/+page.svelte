<script lang="ts">
	import { language } from '$lib/i18n';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
</script>

<svelte:head>
	<title>{currentLang === 'zh' ? '合规声明 - LY Quant' : 'Compliance Statement - LY Quant'}</title>
	<meta name="description" content={currentLang === 'zh' 
		? 'LY Quant合规声明，说明我们的监管合规、风险披露和投资条款。'
		: 'LY Quant Compliance Statement, explaining our regulatory compliance, risk disclosures, and investment terms.'} />
</svelte:head>

<section class="compliance-page">
	<div class="container">
		<h1>{currentLang === 'zh' ? '合规声明' : 'Compliance Statement'}</h1>
		<p class="last-updated">
			{currentLang === 'zh' ? '最后更新：2024年12月19日' : 'Last Updated: December 19, 2024'}
		</p>

		<div class="content">
			{#if currentLang === 'zh'}
				<div class="section">
					<h2>1. 监管合规</h2>
					<p>LY Quant致力于遵守所有适用的法律法规和监管要求。我们：</p>
					<ul>
						<li>遵守反洗钱（AML）和了解您的客户（KYC）要求</li>
						<li>遵循数据保护和隐私法规</li>
						<li>遵守证券和投资相关法规</li>
						<li>定期进行合规审查和审计</li>
						<li>保持透明的业务实践</li>
					</ul>
				</div>

				<div class="section">
					<h2>2. 风险披露</h2>
					<p><strong>重要提示：</strong>投资涉及风险，可能导致本金损失。在做出任何投资决定之前，请仔细考虑以下风险：</p>
					
					<h3>2.1 市场风险</h3>
					<ul>
						<li>市场价格波动可能导致投资价值下降</li>
						<li>期权交易具有高风险，可能导致全部本金损失</li>
						<li>市场条件变化可能影响投资表现</li>
					</ul>

					<h3>2.2 流动性风险</h3>
					<ul>
						<li>某些投资可能难以快速变现</li>
						<li>市场流动性不足可能影响交易执行</li>
					</ul>

					<h3>2.3 操作风险</h3>
					<ul>
						<li>技术故障可能导致交易延迟或失败</li>
						<li>系统错误可能影响投资表现</li>
					</ul>

					<h3>2.4 信用风险</h3>
					<ul>
						<li>交易对手方违约可能导致损失</li>
						<li>市场波动可能增加信用风险</li>
					</ul>

					<h3>2.5 监管风险</h3>
					<ul>
						<li>法律法规变化可能影响投资策略</li>
						<li>监管要求变化可能影响业务运营</li>
					</ul>
				</div>

				<div class="section">
					<h2>3. 投资条款</h2>
					<h3>3.1 合格投资者</h3>
					<p>我们的服务仅面向合格投资者。合格投资者应满足以下条件之一：</p>
					<ul>
						<li>个人净资产或与配偶共同净资产超过一定金额</li>
						<li>年收入达到一定标准</li>
						<li>具备足够的投资经验和知识</li>
					</ul>

					<h3>3.2 最低投资要求</h3>
					<p>我们可能设定最低投资金额要求。具体金额请咨询我们的投资顾问。</p>

					<h3>3.3 费用结构</h3>
					<p>我们的费用结构包括但不限于：</p>
					<ul>
						<li>管理费：按管理资产的一定比例收取</li>
						<li>业绩提成：基于投资表现收取</li>
						<li>其他费用：可能包括交易费用、托管费用等</li>
					</ul>
					<p>具体费用结构将在投资协议中详细说明。</p>

					<h3>3.4 赎回条款</h3>
					<p>投资赎回可能受到以下限制：</p>
					<ul>
						<li>锁定期限制</li>
						<li>赎回通知期要求</li>
						<li>市场条件限制</li>
					</ul>
				</div>

				<div class="section">
					<h2>4. 业绩披露</h2>
					<p>我们披露的历史业绩数据：</p>
					<ul>
						<li>基于历史数据，不代表未来表现</li>
						<li>已扣除相关费用</li>
						<li>可能受到市场条件影响</li>
					</ul>
					<p><strong>重要提示：</strong>过往业绩不代表未来投资结果。投资价值可能上升也可能下降。</p>
				</div>

				<div class="section">
					<h2>5. 利益冲突</h2>
					<p>我们致力于识别和管理潜在的利益冲突：</p>
					<ul>
						<li>我们可能同时管理多个投资组合</li>
						<li>我们可能与关联方进行交易</li>
						<li>我们可能收取多种费用</li>
					</ul>
					<p>我们将采取合理措施确保公平对待所有投资者。</p>
				</div>

				<div class="section">
					<h2>6. 投诉处理</h2>
					<p>如果您对我们的服务有任何投诉或疑虑，请通过以下方式联系我们：</p>
					<ul>
						<li>网站：<a href="/contact">联系我们</a></li>
						<li>电子邮件：compliance@a47g.com</li>
					</ul>
					<p>我们承诺及时、公正地处理所有投诉。</p>
				</div>

				<div class="section">
					<h2>7. 法律声明</h2>
					<p>本合规声明不构成投资建议。在做出任何投资决定之前，您应该：</p>
					<ul>
						<li>仔细阅读所有相关文件</li>
						<li>咨询独立的财务顾问</li>
						<li>充分了解投资风险和条款</li>
						<li>确保投资符合您的风险承受能力</li>
					</ul>
				</div>

				<div class="section warning-box">
					<h2>⚠️ 重要风险提示</h2>
					<p>投资涉及风险，包括可能的本金损失。过往业绩不代表未来表现。在投资之前，请仔细考虑您的投资目标、风险承受能力和财务状况。如有疑问，请咨询专业财务顾问。</p>
				</div>
			{:else}
				<div class="section">
					<h2>1. Regulatory Compliance</h2>
					<p>LY Quant is committed to complying with all applicable laws, regulations, and regulatory requirements. We:</p>
					<ul>
						<li>Comply with Anti-Money Laundering (AML) and Know Your Customer (KYC) requirements</li>
						<li>Follow data protection and privacy regulations</li>
						<li>Comply with securities and investment-related regulations</li>
						<li>Conduct regular compliance reviews and audits</li>
						<li>Maintain transparent business practices</li>
					</ul>
				</div>

				<div class="section">
					<h2>2. Risk Disclosure</h2>
					<p><strong>Important Notice:</strong> Investment involves risks and may result in loss of principal. Please carefully consider the following risks before making any investment decisions:</p>
					
					<h3>2.1 Market Risk</h3>
					<ul>
						<li>Market price fluctuations may cause investment value to decline</li>
						<li>Options trading involves high risk and may result in total loss of principal</li>
						<li>Changes in market conditions may affect investment performance</li>
					</ul>

					<h3>2.2 Liquidity Risk</h3>
					<ul>
						<li>Some investments may be difficult to liquidate quickly</li>
						<li>Insufficient market liquidity may affect trade execution</li>
					</ul>

					<h3>2.3 Operational Risk</h3>
					<ul>
						<li>Technical failures may cause trading delays or failures</li>
						<li>System errors may affect investment performance</li>
					</ul>

					<h3>2.4 Credit Risk</h3>
					<ul>
						<li>Counterparty default may result in losses</li>
						<li>Market volatility may increase credit risk</li>
					</ul>

					<h3>2.5 Regulatory Risk</h3>
					<ul>
						<li>Changes in laws and regulations may affect investment strategies</li>
						<li>Changes in regulatory requirements may affect business operations</li>
					</ul>
				</div>

				<div class="section">
					<h2>3. Investment Terms</h2>
					<h3>3.1 Accredited Investors</h3>
					<p>Our services are only available to accredited investors. Accredited investors should meet one of the following criteria:</p>
					<ul>
						<li>Individual or joint net worth with spouse exceeding a certain amount</li>
						<li>Annual income meeting certain standards</li>
						<li>Sufficient investment experience and knowledge</li>
					</ul>

					<h3>3.2 Minimum Investment Requirements</h3>
					<p>We may set minimum investment amount requirements. Please consult with our investment advisors for specific amounts.</p>

					<h3>3.3 Fee Structure</h3>
					<p>Our fee structure includes but is not limited to:</p>
					<ul>
						<li>Management fees: Charged as a percentage of assets under management</li>
						<li>Performance fees: Charged based on investment performance</li>
						<li>Other fees: May include trading fees, custody fees, etc.</li>
					</ul>
					<p>Specific fee structure will be detailed in the investment agreement.</p>

					<h3>3.4 Redemption Terms</h3>
					<p>Investment redemptions may be subject to the following restrictions:</p>
					<ul>
						<li>Lock-up period restrictions</li>
						<li>Redemption notice period requirements</li>
						<li>Market condition restrictions</li>
					</ul>
				</div>

				<div class="section">
					<h2>4. Performance Disclosure</h2>
					<p>Historical performance data we disclose:</p>
					<ul>
						<li>Based on historical data, does not represent future performance</li>
						<li>Net of relevant fees</li>
						<li>May be affected by market conditions</li>
					</ul>
					<p><strong>Important Notice:</strong> Past performance does not guarantee future investment results. Investment value may rise or fall.</p>
				</div>

				<div class="section">
					<h2>5. Conflicts of Interest</h2>
					<p>We are committed to identifying and managing potential conflicts of interest:</p>
					<ul>
						<li>We may manage multiple investment portfolios simultaneously</li>
						<li>We may transact with related parties</li>
						<li>We may charge various fees</li>
					</ul>
					<p>We will take reasonable measures to ensure fair treatment of all investors.</p>
				</div>

				<div class="section">
					<h2>6. Complaint Handling</h2>
					<p>If you have any complaints or concerns about our services, please contact us:</p>
					<ul>
						<li>Website: <a href="/contact">Contact Us</a></li>
						<li>Email: compliance@a47g.com</li>
					</ul>
					<p>We are committed to handling all complaints promptly and fairly.</p>
				</div>

				<div class="section">
					<h2>7. Legal Disclaimer</h2>
					<p>This compliance statement does not constitute investment advice. Before making any investment decisions, you should:</p>
					<ul>
						<li>Carefully read all relevant documents</li>
						<li>Consult with independent financial advisors</li>
						<li>Fully understand investment risks and terms</li>
						<li>Ensure investments match your risk tolerance</li>
					</ul>
				</div>

				<div class="section warning-box">
					<h2>⚠️ Important Risk Warning</h2>
					<p>Investment involves risks, including possible loss of principal. Past performance does not guarantee future results. Before investing, please carefully consider your investment objectives, risk tolerance, and financial situation. If in doubt, please consult a professional financial advisor.</p>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.compliance-page {
		padding: 4rem 2rem;
		min-height: 80vh;
		background: #F9FAFB;
	}

	.container {
		max-width: 900px;
		margin: 0 auto;
		background: white;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	h1 {
		font-size: 2.5rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 0.5rem;
	}

	.last-updated {
		color: #6B7280;
		font-size: 0.9rem;
		margin-bottom: 2rem;
	}

	.content {
		line-height: 1.8;
		color: #374151;
	}

	.section {
		margin-bottom: 2.5rem;
	}

	.section h2 {
		font-size: 1.5rem;
		font-weight: 600;
		color: #001F3F;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	.section h3 {
		font-size: 1.2rem;
		font-weight: 600;
		color: #374151;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.section p {
		margin-bottom: 1rem;
	}

	.section ul {
		margin-left: 1.5rem;
		margin-bottom: 1rem;
	}

	.section li {
		margin-bottom: 0.5rem;
	}

	.section a {
		color: #001F3F;
		text-decoration: underline;
	}

	.section a:hover {
		color: #D4AF37;
	}

	.warning-box {
		background: #FEF3C7;
		border-left: 4px solid #F59E0B;
		padding: 1.5rem;
		border-radius: 8px;
		margin-top: 2rem;
	}

	.warning-box h2 {
		color: #92400E;
		margin-top: 0;
	}

	.warning-box p {
		color: #78350F;
		margin-bottom: 0;
	}

	@media (max-width: 768px) {
		.container {
			padding: 2rem 1.5rem;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
