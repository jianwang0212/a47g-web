<script lang="ts">
	import { language } from '$lib/i18n';
	import { team } from '$lib/constants';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
</script>

<svelte:head>
	<title>团队介绍 - LY Quant | Team - LY Quant</title>
</svelte:head>

<section class="team-page">
	<div class="container">
		<div class="page-header">
			<h1>{currentLang === 'zh' ? '团队介绍' : 'Our Team'}</h1>
			<p class="page-subtitle">
				{currentLang === 'zh' ? team.description : team.descriptionEn}
			</p>
		</div>

		<div class="team-members">
			{#each team.founders as founder}
				<div class="member-card">
					<div class="member-header">
						{#if founder.avatar}
							<img src={founder.avatar} alt={founder.name} class="member-avatar" />
						{:else}
							<div class="member-initial">{founder.initial}</div>
						{/if}
						<div class="member-info">
							<h2>{founder.name}</h2>
							<p class="member-title">{currentLang === 'zh' ? founder.title : founder.titleEn}</p>
						</div>
					</div>
					<div class="member-details">
						<div class="detail-section">
							<h3>{currentLang === 'zh' ? '教育背景' : 'Education'}</h3>
							<p>{currentLang === 'zh' ? founder.education : founder.educationEn}</p>
						</div>
						<div class="detail-section">
							<h3>{currentLang === 'zh' ? '工作经历' : 'Experience'}</h3>
							<p>{currentLang === 'zh' ? founder.experience : founder.experienceEn}</p>
						</div>
						{#if founder.linkedin || founder.zhihu}
							<div class="detail-section">
								<h3>{currentLang === 'zh' ? '了解更多' : 'Learn More'}</h3>
								<div class="social-links">
									{#if founder.linkedin}
										<a href={founder.linkedin} target="_blank" rel="noopener noreferrer" class="social-link">
											<svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
												<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
											</svg>
											LinkedIn
										</a>
									{/if}
									{#if founder.zhihu}
										<a href={founder.zhihu} target="_blank" rel="noopener noreferrer" class="social-link">
											<span>📝</span>
											知乎
										</a>
									{/if}
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.team-page {
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
		margin-bottom: 4rem;
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
		max-width: 800px;
		margin: 0 auto;
		line-height: 1.8;
	}

	.team-members {
		display: grid;
		gap: 3rem;
	}

	.member-card {
		background: white;
		padding: 3rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
	}

	.member-header {
		display: flex;
		align-items: center;
		gap: 2rem;
		margin-bottom: 2rem;
		padding-bottom: 2rem;
		border-bottom: 2px solid #E5E7EB;
	}

	.member-initial {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 3rem;
		font-weight: 700;
		flex-shrink: 0;
	}

	.member-avatar {
		width: 100px;
		height: 100px;
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
		border: 3px solid #D4AF37;
	}

	.member-info h2 {
		font-size: 2rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 0.5rem;
	}

	.member-title {
		font-size: 1.2rem;
		color: #D4AF37;
		font-weight: 600;
		margin: 0;
	}

	.member-details {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.detail-section h3 {
		font-size: 1.1rem;
		font-weight: 600;
		color: #001F3F;
		margin-bottom: 0.5rem;
	}

	.detail-section p {
		color: #6B7280;
		line-height: 1.8;
		margin: 0;
	}

	.social-links {
		display: flex;
		gap: 1rem;
		flex-wrap: wrap;
	}

	.social-link {
		display: inline-flex;
		align-items: center;
		gap: 0.5rem;
		padding: 0.5rem 1rem;
		background: #F9FAFB;
		color: #001F3F;
		text-decoration: none;
		border-radius: 6px;
		font-size: 0.9rem;
		font-weight: 500;
		transition: all 0.2s;
		border: 1px solid #E5E7EB;
	}

	.social-link:hover {
		background: #001F3F;
		color: white;
		border-color: #001F3F;
		transform: translateY(-2px);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
	}

	.social-link svg {
		flex-shrink: 0;
	}

	@media (max-width: 768px) {
		.member-header {
			flex-direction: column;
			text-align: center;
		}
	}
</style>
