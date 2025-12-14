<script lang="ts">
	import { language } from '$lib/i18n';
	import { philosophy } from '$lib/constants';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
</script>

<svelte:head>
	<title>投资理念 - LY Quant | Investment Philosophy - LY Quant</title>
</svelte:head>

<section class="philosophy-page">
	<div class="container">
		<div class="page-header">
			<h1>{currentLang === 'zh' ? philosophy.title : philosophy.titleEn}</h1>
			<p class="page-subtitle">
				{currentLang === 'zh' ? philosophy.description : philosophy.descriptionEn}
			</p>
		</div>

		<div class="principles-grid">
			{#each philosophy.principles as principle}
				<div class="principle-card">
					<h3>{currentLang === 'zh' ? principle.title : principle.titleEn}</h3>
					<p>{currentLang === 'zh' ? principle.description : principle.descriptionEn}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<style>
	.philosophy-page {
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

	.principles-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		gap: 2rem;
	}

	.principle-card {
		background: white;
		padding: 2.5rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		border-left: 4px solid #D4AF37;
	}

	.principle-card h3 {
		font-size: 1.5rem;
		font-weight: 700;
		color: #D4AF37;
		margin-bottom: 1rem;
	}

	.principle-card p {
		color: #6B7280;
		line-height: 1.8;
		margin: 0;
	}
</style>
