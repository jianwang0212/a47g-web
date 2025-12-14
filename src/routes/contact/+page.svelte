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
	<title>联系我们 - LY Quant | Contact - LY Quant</title>
</svelte:head>

<section class="contact-page">
	<div class="container">
		<div class="page-header">
			<h1>{currentLang === 'zh' ? '联系我们' : 'Contact Us'}</h1>
			<p class="page-subtitle">
				{currentLang === 'zh' 
					? '欢迎与我们联系，了解更多投资机会'
					: 'Get in touch to learn more about investment opportunities'}
			</p>
		</div>

		<div class="contact-info">
			<div class="info-card">
				<div class="info-icon">📧</div>
				<h3>{currentLang === 'zh' ? '邮箱' : 'Email'}</h3>
				<p class="contact-value">
					<a href="mailto:info@a47g.com">info@a47g.com</a>
				</p>
			</div>

			<div class="info-card">
				<div class="info-icon">📱</div>
				<h3>{currentLang === 'zh' ? '电话' : 'Phone'}</h3>
				<p class="contact-value">
					<a href="tel:+16178882513">+1 (617) 888-2513</a>
				</p>
			</div>

			<div class="info-card">
				<div class="info-icon">📍</div>
				<h3>{currentLang === 'zh' ? '联系地址' : 'Contact Address'}</h3>
				<p class="contact-value">
					Harju maakond, Tallinn,<br>
					Kesklinna linnaosa,<br>
					Ahtri tn 12, 15551<br>
					{currentLang === 'zh' ? '爱沙尼亚' : 'Estonia'}
				</p>
			</div>
		</div>

		<div class="contact-note">
			<p>
				{currentLang === 'zh' 
					? '我们会在收到您的消息后尽快回复。对于投资者咨询，请提供您的姓名和联系方式。'
					: 'We will respond to your message as soon as possible. For investor inquiries, please provide your name and contact information.'}
			</p>
		</div>
	</div>
</section>

<style>
	.contact-page {
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

	.contact-info {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.info-card {
		background: white;
		padding: 2.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		text-align: center;
		transition: transform 0.2s, box-shadow 0.2s;
		border-top: 4px solid #D4AF37;
	}

	.info-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.info-icon {
		font-size: 3rem;
		margin-bottom: 1rem;
	}

	.info-card h3 {
		font-size: 1.3rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 1rem;
	}

	.contact-value {
		color: #374151;
		font-size: 1.1rem;
		line-height: 1.8;
		margin: 0;
	}

	.contact-value a {
		color: #001F3F;
		text-decoration: none;
		transition: color 0.2s;
	}

	.contact-value a:hover {
		color: #D4AF37;
		text-decoration: underline;
	}

	.contact-note {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		text-align: center;
	}

	.contact-note p {
		color: #6B7280;
		line-height: 1.8;
		margin: 0;
	}
</style>
