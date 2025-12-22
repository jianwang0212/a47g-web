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
	<title>{currentLang === 'zh' ? '隐私政策 - LY Quant' : 'Privacy Policy - LY Quant'}</title>
	<meta name="description" content={currentLang === 'zh' 
		? 'LY Quant隐私政策，说明我们如何收集、使用和保护您的个人信息。'
		: 'LY Quant Privacy Policy, explaining how we collect, use and protect your personal information.'} />
</svelte:head>

<section class="privacy-page">
	<div class="container">
		<h1>{currentLang === 'zh' ? '隐私政策' : 'Privacy Policy'}</h1>
		<p class="last-updated">
			{currentLang === 'zh' ? '最后更新：2024年12月19日' : 'Last Updated: December 19, 2024'}
		</p>

		<div class="content">
			{#if currentLang === 'zh'}
				<div class="section">
					<h2>1. 信息收集</h2>
					<p>LY Quant（"我们"、"我们的"）致力于保护您的隐私。本隐私政策说明了我们如何收集、使用、披露和保护您的个人信息。</p>
					<p>我们可能收集以下类型的信息：</p>
					<ul>
						<li><strong>个人信息：</strong>姓名、电子邮件地址、电话号码、邮寄地址等</li>
						<li><strong>财务信息：</strong>投资金额、交易记录、账户信息等（仅用于提供服务）</li>
						<li><strong>技术信息：</strong>IP地址、浏览器类型、设备信息、访问时间等</li>
						<li><strong>使用信息：</strong>您在我们网站上的浏览行为、偏好设置等</li>
					</ul>
				</div>

				<div class="section">
					<h2>2. 信息使用</h2>
					<p>我们使用收集的信息用于以下目的：</p>
					<ul>
						<li>提供、维护和改进我们的服务</li>
						<li>处理您的投资申请和交易</li>
						<li>与您沟通，包括发送重要通知和更新</li>
						<li>遵守法律法规要求</li>
						<li>防止欺诈和确保安全</li>
						<li>进行数据分析和研究</li>
					</ul>
				</div>

				<div class="section">
					<h2>3. 信息共享</h2>
					<p>我们不会出售、交易或出租您的个人信息。我们可能在以下情况下共享您的信息：</p>
					<ul>
						<li><strong>服务提供商：</strong>与帮助我们运营业务的服务提供商共享（如托管、支付处理等）</li>
						<li><strong>法律要求：</strong>当法律要求或为了保护我们的权利时</li>
						<li><strong>业务转让：</strong>在合并、收购或资产出售的情况下</li>
						<li><strong>经您同意：</strong>在您明确同意的情况下</li>
					</ul>
				</div>

				<div class="section">
					<h2>4. 数据安全</h2>
					<p>我们采用行业标准的安全措施来保护您的个人信息，包括：</p>
					<ul>
						<li>加密传输（SSL/TLS）</li>
						<li>安全的数据存储</li>
						<li>访问控制和身份验证</li>
						<li>定期安全审计</li>
					</ul>
					<p>尽管我们采取了合理的安全措施，但无法保证100%的安全。您有责任保护您的账户密码和访问凭据。</p>
				</div>

				<div class="section">
					<h2>5. Cookie和跟踪技术</h2>
					<p>我们使用Cookie和类似技术来改善用户体验、分析网站使用情况。您可以通过浏览器设置管理Cookie偏好。</p>
				</div>

				<div class="section">
					<h2>6. 您的权利</h2>
					<p>根据适用的数据保护法律，您可能拥有以下权利：</p>
					<ul>
						<li>访问您的个人信息</li>
						<li>更正不准确的信息</li>
						<li>删除您的个人信息</li>
						<li>限制处理您的信息</li>
						<li>数据可移植性</li>
						<li>反对处理</li>
					</ul>
					<p>要行使这些权利，请通过 <a href="/contact">联系我们</a> 页面与我们联系。</p>
				</div>

				<div class="section">
					<h2>7. 数据保留</h2>
					<p>我们只会在必要的时间内保留您的个人信息，以满足本隐私政策中所述的目的，或遵守法律要求。</p>
				</div>

				<div class="section">
					<h2>8. 儿童隐私</h2>
					<p>我们的服务不面向18岁以下的个人。我们不会故意收集儿童的个人信息。</p>
				</div>

				<div class="section">
					<h2>9. 国际数据传输</h2>
					<p>您的信息可能被传输到您所在国家/地区以外的地方进行处理和存储。我们会确保采取适当的安全措施。</p>
				</div>

				<div class="section">
					<h2>10. 政策更新</h2>
					<p>我们可能会不时更新本隐私政策。重大变更将通过网站通知或电子邮件告知您。</p>
				</div>

				<div class="section">
					<h2>11. 联系我们</h2>
					<p>如果您对本隐私政策有任何问题或疑虑，请通过以下方式联系我们：</p>
					<ul>
						<li>网站：<a href="/contact">联系我们</a></li>
						<li>电子邮件：privacy@a47g.com</li>
					</ul>
				</div>
			{:else}
				<div class="section">
					<h2>1. Information Collection</h2>
					<p>LY Quant ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and protect your personal information.</p>
					<p>We may collect the following types of information:</p>
					<ul>
						<li><strong>Personal Information:</strong> Name, email address, phone number, mailing address, etc.</li>
						<li><strong>Financial Information:</strong> Investment amounts, transaction records, account information, etc. (only for providing services)</li>
						<li><strong>Technical Information:</strong> IP address, browser type, device information, access times, etc.</li>
						<li><strong>Usage Information:</strong> Your browsing behavior on our website, preferences, etc.</li>
					</ul>
				</div>

				<div class="section">
					<h2>2. Information Use</h2>
					<p>We use the collected information for the following purposes:</p>
					<ul>
						<li>Provide, maintain, and improve our services</li>
						<li>Process your investment applications and transactions</li>
						<li>Communicate with you, including sending important notices and updates</li>
						<li>Comply with legal and regulatory requirements</li>
						<li>Prevent fraud and ensure security</li>
						<li>Conduct data analysis and research</li>
					</ul>
				</div>

				<div class="section">
					<h2>3. Information Sharing</h2>
					<p>We do not sell, trade, or rent your personal information. We may share your information in the following circumstances:</p>
					<ul>
						<li><strong>Service Providers:</strong> Share with service providers who help us operate our business (such as hosting, payment processing, etc.)</li>
						<li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
						<li><strong>Business Transfers:</strong> In case of merger, acquisition, or asset sale</li>
						<li><strong>With Your Consent:</strong> When you explicitly consent</li>
					</ul>
				</div>

				<div class="section">
					<h2>4. Data Security</h2>
					<p>We employ industry-standard security measures to protect your personal information, including:</p>
					<ul>
						<li>Encrypted transmission (SSL/TLS)</li>
						<li>Secure data storage</li>
						<li>Access controls and authentication</li>
						<li>Regular security audits</li>
					</ul>
					<p>Although we take reasonable security measures, we cannot guarantee 100% security. You are responsible for protecting your account password and access credentials.</p>
				</div>

				<div class="section">
					<h2>5. Cookies and Tracking Technologies</h2>
					<p>We use cookies and similar technologies to improve user experience and analyze website usage. You can manage cookie preferences through your browser settings.</p>
				</div>

				<div class="section">
					<h2>6. Your Rights</h2>
					<p>Under applicable data protection laws, you may have the following rights:</p>
					<ul>
						<li>Access your personal information</li>
						<li>Correct inaccurate information</li>
						<li>Delete your personal information</li>
						<li>Restrict processing of your information</li>
						<li>Data portability</li>
						<li>Object to processing</li>
					</ul>
					<p>To exercise these rights, please contact us through our <a href="/contact">Contact Us</a> page.</p>
				</div>

				<div class="section">
					<h2>7. Data Retention</h2>
					<p>We will only retain your personal information for as long as necessary to fulfill the purposes described in this Privacy Policy or to comply with legal requirements.</p>
				</div>

				<div class="section">
					<h2>8. Children's Privacy</h2>
					<p>Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.</p>
				</div>

				<div class="section">
					<h2>9. International Data Transfers</h2>
					<p>Your information may be transferred to locations outside your country/region for processing and storage. We will ensure appropriate security measures are taken.</p>
				</div>

				<div class="section">
					<h2>10. Policy Updates</h2>
					<p>We may update this Privacy Policy from time to time. Material changes will be notified through website notices or email.</p>
				</div>

				<div class="section">
					<h2>11. Contact Us</h2>
					<p>If you have any questions or concerns about this Privacy Policy, please contact us:</p>
					<ul>
						<li>Website: <a href="/contact">Contact Us</a></li>
						<li>Email: privacy@a47g.com</li>
					</ul>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.privacy-page {
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

	@media (max-width: 768px) {
		.container {
			padding: 2rem 1.5rem;
		}

		h1 {
			font-size: 2rem;
		}
	}
</style>
