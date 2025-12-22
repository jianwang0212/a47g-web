<script lang="ts">
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	
	onMount(() => {
		const handleScroll = () => {
			isVisible = window.scrollY > 300;
		};
		
		// 检查AI聊天窗口是否打开，调整位置
		const checkChatWindow = () => {
			const chatWindow = document.querySelector('.chat-window');
			if (chatWindow && isVisible) {
				// 如果聊天窗口打开，调整位置
				const scrollBtn = document.querySelector('.scroll-to-top') as HTMLElement;
				if (scrollBtn) {
					scrollBtn.style.bottom = '8rem';
				}
			} else if (isVisible) {
				const scrollBtn = document.querySelector('.scroll-to-top') as HTMLElement;
				if (scrollBtn) {
					scrollBtn.style.bottom = '2rem';
				}
			}
		};
		
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		
		// 定期检查聊天窗口状态
		const interval = setInterval(checkChatWindow, 500);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
			clearInterval(interval);
		};
	});
	
	function scrollToTop() {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	}
</script>

{#if isVisible}
	<button 
		class="scroll-to-top" 
		onclick={scrollToTop}
		aria-label="Scroll to top"
	>
		↑
	</button>
{/if}

<style>
	.scroll-to-top {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		width: 50px;
		height: 50px;
		border-radius: 50%;
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
		border: none;
		font-size: 1.5rem;
		font-weight: 700;
		cursor: pointer;
		box-shadow: 0 4px 12px rgba(212, 175, 55, 0.4);
		transition: all 0.3s;
		z-index: 999;
		display: flex;
		align-items: center;
		justify-content: center;
		animation: fadeInUp 0.3s ease;
	}
	

	.scroll-to-top:hover {
		transform: translateY(-3px);
		box-shadow: 0 6px 20px rgba(212, 175, 55, 0.6);
		background: linear-gradient(135deg, #FFD700, #D4AF37);
	}

	.scroll-to-top:active {
		transform: translateY(-1px);
	}

	@keyframes fadeInUp {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	@media (max-width: 768px) {
		.scroll-to-top {
			bottom: 1.5rem;
			right: 1.5rem;
			width: 45px;
			height: 45px;
			font-size: 1.3rem;
		}
	}
</style>

