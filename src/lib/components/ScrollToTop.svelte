<script lang="ts">
	import { onMount } from 'svelte';
	
	let isVisible = $state(false);
	let buttonElement = $state<HTMLButtonElement | null>(null);
	
	onMount(() => {
		const handleScroll = () => {
			isVisible = window.scrollY > 300;
		};
		
		// 检查AI聊天按钮和窗口状态，调整位置
		const adjustPosition = () => {
			if (!buttonElement) return;
			
			// 检查聊天窗口是否打开（更精确的检测）
			const chatWindow = document.querySelector('.chat-window');
			const chatToggle = document.querySelector('.chat-toggle');
			
			// 获取聊天按钮的实际位置和尺寸
			let chatButtonBottom = 0;
			let chatButtonHeight = 0;
			if (chatToggle) {
				const rect = chatToggle.getBoundingClientRect();
				chatButtonBottom = window.innerHeight - rect.bottom;
				chatButtonHeight = rect.height;
			}
			
			// 获取聊天窗口的实际高度
			let chatWindowHeight = 0;
			if (chatWindow) {
				const rect = chatWindow.getBoundingClientRect();
				chatWindowHeight = rect.height;
			}
			
			// ScrollToTop按钮高度
			const scrollButtonHeight = 50;
			const spacing = 20; // 最小间距
			
			// 计算需要的底部位置
			if (chatWindow && chatWindowHeight > 0) {
				// 聊天窗口打开时，ScrollToTop应该在窗口上方
				// 窗口底部距离页面底部 = chatButtonBottom + chatButtonHeight + chatWindowHeight
				// ScrollToTop应该在窗口上方，所以是窗口底部 + spacing
				const windowBottom = chatButtonBottom + chatButtonHeight + chatWindowHeight;
				buttonElement.style.bottom = `${windowBottom + spacing}px`;
			} 
			// 如果聊天按钮存在（即使窗口未打开），也需要避免重叠
			else if (chatToggle && chatButtonHeight > 0) {
				// 聊天按钮在bottom: 2rem，高度60px
				// ScrollToTop按钮高度50px，需要至少20px间距
				// 所以ScrollToTop应该在 聊天按钮顶部 + spacing
				const chatButtonTop = chatButtonBottom + chatButtonHeight;
				buttonElement.style.bottom = `${chatButtonTop + spacing}px`;
			} else {
				// 默认位置
				buttonElement.style.bottom = '2rem';
			}
		};
		
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		
		// 使用MutationObserver监听DOM变化，更准确地检测聊天窗口状态
		const observer = new MutationObserver(() => {
			// 延迟执行，确保DOM更新完成
			setTimeout(adjustPosition, 50);
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ['class', 'style']
		});
		
		// 监听窗口大小变化
		window.addEventListener('resize', adjustPosition);
		
		// 定期检查（作为备用）
		const interval = setInterval(adjustPosition, 500);
		
		// 初始调整 - 多次尝试确保正确
		setTimeout(adjustPosition, 100);
		setTimeout(adjustPosition, 300);
		setTimeout(adjustPosition, 600);
		setTimeout(adjustPosition, 1000);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
			window.removeEventListener('resize', adjustPosition);
			observer.disconnect();
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
		bind:this={buttonElement}
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
			right: 1.5rem;
			width: 45px;
			height: 45px;
			font-size: 1.3rem;
			/* bottom位置由JS动态设置 */
		}
	}
</style>

