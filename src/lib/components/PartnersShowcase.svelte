<script lang="ts">
	import { language } from '../i18n';
	import { partners } from '../constants';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});

	// 合并所有合作伙伴并打乱顺序
	let shuffledPartners = $derived.by(() => {
		const allPartners = [
			...partners.techCompanies,
			...partners.financialInstitutions,
			...partners.highNetWorth,
			...partners.universities
		];
		const arr = [...allPartners];
		for (let i = arr.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
		return arr.slice(0, 20); // 显示20个
	});

	function getInitials(name: string): string {
		const words = name.split(' ');
		if (words.length >= 2) {
			return (words[0][0] + words[1][0]).toUpperCase();
		}
		return name.substring(0, 2).toUpperCase();
	}

	function getCategoryColor(category: string): string {
		switch(category) {
			case 'tech':
				return 'linear-gradient(135deg, #3B82F6, #60A5FA)';
			case 'finance':
				return 'linear-gradient(135deg, #D4AF37, #FFD700)';
			case 'hnw':
				return 'linear-gradient(135deg, #8B5CF6, #A78BFA)';
			case 'university':
				return 'linear-gradient(135deg, #10B981, #34D399)';
			default:
				return 'linear-gradient(135deg, #6B7280, #9CA3AF)';
		}
	}
</script>

<section class="partners-showcase">
	<div class="container">
		<div class="showcase-header">
			<h2>{currentLang === 'zh' ? partners.title.zh : partners.title.en}</h2>
			<p class="subtitle">
				{currentLang === 'zh' 
					? `服务了 ${partners.stats.clients.zh} 客户，覆盖 ${partners.stats.countries.zh} 个国家和地区`
					: `Serving ${partners.stats.clients.en} clients across ${partners.stats.countries.en} countries and regions`}
			</p>
			<p class="description">
				{currentLang === 'zh' ? partners.subtitle.zh : partners.subtitle.en}
			</p>
		</div>

		<div class="partners-grid">
			{#each shuffledPartners as partner}
				<div class="partner-card" data-category={partner.category}>
					<div class="partner-logo" style="background: {partner.logo ? 'transparent' : getCategoryColor(partner.category)}">
						{#if partner.logo}
							<img 
								src={partner.logo} 
								alt={currentLang === 'zh' ? partner.nameZh : partner.name}
								class="logo-image"
								loading="lazy"
								onerror={(e) => {
									// 如果图片加载失败，显示文字缩写
									const target = e.target as HTMLImageElement;
									target.style.display = 'none';
									const parent = target.parentElement;
									if (parent) {
										const fallback = document.createElement('span');
										fallback.className = 'logo-text';
										fallback.textContent = getInitials(currentLang === 'zh' ? partner.nameZh : partner.name);
										parent.appendChild(fallback);
										parent.style.background = getCategoryColor(partner.category);
									}
								}}
							/>
						{:else}
							<span class="logo-text">
								{getInitials(currentLang === 'zh' ? partner.nameZh : partner.name)}
							</span>
						{/if}
					</div>
					<div class="partner-name">
						{currentLang === 'zh' ? partner.nameZh : partner.name}
					</div>
					<div class="partner-badge">
						{#if partner.category === 'tech'}
							{currentLang === 'zh' ? '科技公司' : 'Tech Company'}
						{:else if partner.category === 'finance'}
							{currentLang === 'zh' ? '金融机构' : 'Financial Institution'}
						{:else if partner.category === 'university'}
							{currentLang === 'zh' ? '大学' : 'University'}
						{:else}
							{currentLang === 'zh' ? '高净值客户' : 'High Net Worth'}
						{/if}
					</div>
				</div>
			{/each}
		</div>

		<div class="categories-breakdown">
			<div class="category-item">
				<div class="category-icon tech">💻</div>
				<div class="category-info">
					<div class="category-count">{partners.techCompanies.length}</div>
					<div class="category-label">{currentLang === 'zh' ? '科技公司' : 'Tech Companies'}</div>
				</div>
			</div>
			<div class="category-item">
				<div class="category-icon finance">🏦</div>
				<div class="category-info">
					<div class="category-count">{partners.financialInstitutions.length}</div>
					<div class="category-label">{currentLang === 'zh' ? '金融机构' : 'Financial Institutions'}</div>
				</div>
			</div>
			<div class="category-item">
				<div class="category-icon university">🎓</div>
				<div class="category-info">
					<div class="category-count">{partners.universities.length}</div>
					<div class="category-label">{currentLang === 'zh' ? '大学' : 'Universities'}</div>
				</div>
			</div>
			<div class="category-item">
				<div class="category-icon hnw">👥</div>
				<div class="category-info">
					<div class="category-count">{partners.highNetWorth.length}</div>
					<div class="category-label">{currentLang === 'zh' ? '高净值客户' : 'High Net Worth Clients'}</div>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.partners-showcase {
		padding: 6rem 0;
		background: linear-gradient(135deg, #001F3F 0%, #003366 100%);
		color: white;
		position: relative;
		overflow: hidden;
	}

	.partners-showcase::before {
		content: 'PARTNERS';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		font-size: 20rem;
		font-weight: 900;
		color: rgba(255, 255, 255, 0.02);
		white-space: nowrap;
		pointer-events: none;
		z-index: 0;
	}

	.container {
		max-width: 1400px;
		margin: 0 auto;
		padding: 0 2rem;
		position: relative;
		z-index: 1;
	}

	.showcase-header {
		text-align: center;
		margin-bottom: 4rem;
	}

	.showcase-header h2 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 1rem;
		background: linear-gradient(135deg, #FFD700, #D4AF37);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		background-clip: text;
	}

	.subtitle {
		font-size: 1.3rem;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 1rem;
		font-weight: 600;
	}

	.description {
		font-size: 1.1rem;
		color: rgba(255, 255, 255, 0.7);
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.6;
	}

	.partners-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
		gap: 2rem;
		margin-bottom: 4rem;
	}

	.partner-card {
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border-radius: 12px;
		padding: 2rem 1.5rem;
		text-align: center;
		transition: all 0.3s ease;
		border: 1px solid rgba(255, 255, 255, 0.1);
		cursor: pointer;
	}

	.partner-card:hover {
		transform: translateY(-8px);
		background: rgba(255, 255, 255, 0.1);
		border-color: rgba(212, 175, 55, 0.5);
		box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3);
	}

	.partner-logo {
		width: 80px;
		height: 80px;
		border-radius: 16px;
		margin: 0 auto 1rem;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
		overflow: hidden;
		padding: 8px;
	}

	.logo-image {
		width: 100%;
		height: 100%;
		object-fit: contain;
		background: white;
		border-radius: 8px;
		padding: 4px;
	}

	.logo-text {
		font-size: 1.8rem;
		font-weight: 700;
		color: white;
		letter-spacing: 0.05em;
	}

	.partner-name {
		font-size: 1rem;
		font-weight: 600;
		color: white;
		margin-bottom: 0.5rem;
		line-height: 1.4;
	}

	.partner-badge {
		display: inline-block;
		padding: 0.25rem 0.75rem;
		background: rgba(255, 255, 255, 0.1);
		border-radius: 12px;
		font-size: 0.75rem;
		color: rgba(255, 255, 255, 0.8);
		font-weight: 500;
	}

	.categories-breakdown {
		display: flex;
		justify-content: center;
		gap: 4rem;
		flex-wrap: wrap;
		padding-top: 3rem;
		border-top: 1px solid rgba(255, 255, 255, 0.1);
	}

	.category-item {
		display: flex;
		align-items: center;
		gap: 1rem;
		padding: 1.5rem 2rem;
		background: rgba(255, 255, 255, 0.05);
		backdrop-filter: blur(10px);
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.category-icon {
		width: 60px;
		height: 60px;
		border-radius: 12px;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 2rem;
	}

	.category-icon.tech {
		background: linear-gradient(135deg, #3B82F6, #60A5FA);
	}

	.category-icon.finance {
		background: linear-gradient(135deg, #D4AF37, #FFD700);
	}

	.category-icon.university {
		background: linear-gradient(135deg, #10B981, #34D399);
	}

	.category-icon.hnw {
		background: linear-gradient(135deg, #8B5CF6, #A78BFA);
	}

	.category-info {
		display: flex;
		flex-direction: column;
	}

	.category-count {
		font-size: 2rem;
		font-weight: 700;
		color: #FFD700;
		line-height: 1;
		margin-bottom: 0.25rem;
	}

	.category-label {
		font-size: 0.9rem;
		color: rgba(255, 255, 255, 0.8);
	}

	@media (max-width: 768px) {
		.showcase-header h2 {
			font-size: 2rem;
		}

		.subtitle {
			font-size: 1.1rem;
		}

		.partners-grid {
			grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
			gap: 1.5rem;
		}

		.categories-breakdown {
			flex-direction: column;
			gap: 1.5rem;
		}

		.partners-showcase::before {
			font-size: 10rem;
		}
	}
</style>
