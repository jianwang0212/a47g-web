<script lang="ts">
	import { onMount } from 'svelte';
	
	let progress = $state(0);
	
	onMount(() => {
		const updateProgress = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const scrollableHeight = documentHeight - windowHeight;
			const scrolled = scrollTop / scrollableHeight;
			progress = Math.min(scrolled * 100, 100);
		};
		
		window.addEventListener('scroll', updateProgress);
		updateProgress();
		
		return () => {
			window.removeEventListener('scroll', updateProgress);
		};
	});
</script>

<div class="progress-bar" style="width: {progress}%"></div>

<style>
	.progress-bar {
		position: fixed;
		top: 0;
		left: 0;
		height: 3px;
		background: linear-gradient(90deg, #D4AF37, #FFD700);
		z-index: 10001;
		transition: width 0.1s ease;
		box-shadow: 0 2px 4px rgba(212, 175, 55, 0.3);
	}
</style>

