<script lang="ts">
	import { language } from '$lib/i18n';
	import { getAIResponse, type Message } from '$lib/ai-assistant';

	let messages = $state<Message[]>([]);
	let input = $state('');
	let isLoading = $state(false);
	let isOpen = $state(false);
	let currentLang = $state<'zh' | 'en'>('zh');

	// 初始化欢迎消息
	let hasInitialized = false;
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang === 'zh' ? 'zh' : 'en';
		});
		return unsubscribe;
	});
	
	$effect(() => {
		if (hasInitialized || messages.length > 0) return;
		hasInitialized = true;
		
		messages = [{
			role: 'assistant',
			content: currentLang === 'zh'
				? '你好！我是LY Quant的AI交易助手。我可以帮你解答关于量化投资、算法交易、风险管理等方面的问题。有什么我可以帮助你的吗？'
				: 'Hello! I am LY Quant\'s AI trading assistant. I can help answer questions about quantitative investment, algorithmic trading, risk management, etc. How can I help you?',
			timestamp: new Date()
		}];
	});

	async function sendMessage() {
		if (!input.trim() || isLoading) return;

		const userMessage: Message = {
			role: 'user',
			content: input.trim(),
			timestamp: new Date()
		};

		messages = [...messages, userMessage];
		const currentInput = input;
		input = '';
		isLoading = true;

		// Auto scroll to bottom
		setTimeout(() => {
			const messagesContainer = document.getElementById('messages');
			if (messagesContainer) {
				messagesContainer.scrollTop = messagesContainer.scrollHeight;
			}
		}, 100);

		try {
			const response = await getAIResponse(currentInput, messages.slice(0, -1), currentLang);
			messages = [
				...messages,
				{
					role: 'assistant',
					content: response,
					timestamp: new Date()
				}
			];
			
			// Auto scroll after response
			setTimeout(() => {
				const messagesContainer = document.getElementById('messages');
				if (messagesContainer) {
					messagesContainer.scrollTop = messagesContainer.scrollHeight;
				}
			}, 100);
		} catch (error) {
			messages = [
				...messages,
				{
					role: 'assistant',
					content: currentLang === 'zh' 
						? '抱歉，我遇到了一些技术问题。请稍后再试。'
						: 'Sorry, I encountered a technical issue. Please try again later.',
					timestamp: new Date()
				}
			];
		} finally {
			isLoading = false;
		}
	}

	function formatTime(date: Date): string {
		return date.toLocaleTimeString(currentLang === 'zh' ? 'zh-CN' : 'en-US', { 
			hour: '2-digit', 
			minute: '2-digit' 
		});
	}

	function toggleChat() {
		isOpen = !isOpen;
	}
</script>

<div class="chatbot-container">
	<button class="chat-toggle" onclick={toggleChat} aria-label="打开/关闭聊天">
		{#if isOpen}
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M18 6L6 18M6 6l12 12" />
			</svg>
		{:else}
			<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
				<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
			</svg>
			<span class="badge">AI</span>
		{/if}
	</button>

	{#if isOpen}
		<div class="chat-window">
			<div class="chat-header">
				<h3>{currentLang === 'zh' ? 'AI 交易助手' : 'AI Trading Assistant'}</h3>
				<button class="close-btn" onclick={toggleChat} aria-label={currentLang === 'zh' ? '关闭' : 'Close'}>×</button>
			</div>
			
			<div class="messages-container" id="messages">
				{#each messages as message (message.timestamp.getTime())}
					<div class="message {message.role}">
						<div class="message-content">
							{message.content}
						</div>
						<div class="message-time">{formatTime(message.timestamp)}</div>
					</div>
				{/each}
				
				{#if isLoading}
					<div class="message assistant">
						<div class="message-content loading">
							<span></span>
							<span></span>
							<span></span>
						</div>
					</div>
				{/if}
			</div>
			
			<form class="input-container" onsubmit={(e) => { e.preventDefault(); sendMessage(); }}>
				<input
					type="text"
					bind:value={input}
					placeholder={currentLang === 'zh' ? '输入你的问题...' : 'Enter your question...'}
					disabled={isLoading}
					onkeydown={(e) => {
						if (e.key === 'Enter' && !e.shiftKey) {
							e.preventDefault();
							sendMessage();
						}
					}}
				/>
				<button type="submit" disabled={isLoading || !input.trim()} aria-label="发送消息">
					<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
						<path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
					</svg>
				</button>
			</form>
		</div>
	{/if}
</div>

<style>
	.chatbot-container {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		z-index: 1000;
	}
	
	/* 当聊天窗口打开时，调整ScrollToTop位置避免重叠 */
	.chat-window {
		/* 当窗口打开时，通知ScrollToTop调整位置 */
	}

	.chat-toggle {
		width: 60px;
		height: 60px;
		border-radius: 50%;
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		border: none;
		color: white;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
		transition: transform 0.2s, box-shadow 0.2s;
		position: relative;
	}

	.chat-toggle:hover {
		transform: scale(1.1);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
	}

	.chat-toggle svg {
		width: 24px;
		height: 24px;
	}

	.badge {
		position: absolute;
		top: -5px;
		right: -5px;
		background: #ff3e00;
		color: white;
		font-size: 10px;
		padding: 2px 6px;
		border-radius: 10px;
		font-weight: bold;
	}

	.chat-window {
		position: absolute;
		bottom: 80px;
		right: 0;
		width: 400px;
		height: 600px;
		background: white;
		border-radius: 16px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
		display: flex;
		flex-direction: column;
		overflow: hidden;
		animation: slideUp 0.3s ease;
	}
	
	@keyframes slideUp {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.chat-header {
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		color: white;
		padding: 1rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.chat-header h3 {
		margin: 0;
		font-size: 1.1rem;
		font-weight: 600;
	}

	.close-btn {
		background: none;
		border: none;
		color: white;
		font-size: 1.5rem;
		cursor: pointer;
		width: 30px;
		height: 30px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: background 0.2s;
	}

	.close-btn:hover {
		background: rgba(255, 255, 255, 0.2);
	}

	.messages-container {
		flex: 1;
		overflow-y: auto;
		padding: 1rem;
		display: flex;
		flex-direction: column;
		gap: 1rem;
		background: #f8f9fa;
	}

	.message {
		display: flex;
		flex-direction: column;
		max-width: 80%;
		animation: fadeIn 0.3s;
	}

	.message.user {
		align-self: flex-end;
	}

	.message.assistant {
		align-self: flex-start;
	}

	.message-content {
		padding: 0.75rem 1rem;
		border-radius: 12px;
		line-height: 1.5;
		word-wrap: break-word;
	}

	.message.user .message-content {
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		color: white;
		border-bottom-right-radius: 4px;
	}

	.message.assistant .message-content {
		background: white;
		color: var(--color-text);
		border: 1px solid #e0e0e0;
		border-bottom-left-radius: 4px;
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
	}

	.message-time {
		font-size: 0.75rem;
		color: #999;
		margin-top: 0.25rem;
		padding: 0 0.5rem;
	}

	.message.user .message-time {
		text-align: right;
	}

	.loading {
		display: flex;
		gap: 4px;
		padding: 1rem !important;
	}

	.loading span {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		background: #999;
		animation: bounce 1.4s infinite ease-in-out;
	}

	.loading span:nth-child(1) {
		animation-delay: -0.32s;
	}

	.loading span:nth-child(2) {
		animation-delay: -0.16s;
	}

	@keyframes bounce {
		0%, 80%, 100% {
			transform: scale(0);
		}
		40% {
			transform: scale(1);
		}
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.input-container {
		display: flex;
		padding: 1rem;
		gap: 0.5rem;
		background: white;
		border-top: 1px solid #e0e0e0;
	}

	.input-container input {
		flex: 1;
		padding: 0.75rem;
		border: 1px solid #e0e0e0;
		border-radius: 8px;
		font-size: 0.9rem;
		outline: none;
		transition: border-color 0.2s;
	}

	.input-container input:focus {
		border-color: var(--color-theme-1);
	}

	.input-container input:disabled {
		background: #f5f5f5;
		cursor: not-allowed;
	}

	.input-container button {
		padding: 0.75rem 1rem;
		background: linear-gradient(135deg, var(--color-theme-1), var(--color-theme-2));
		color: white;
		border: none;
		border-radius: 8px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		transition: opacity 0.2s;
	}

	.input-container button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	.input-container button:hover:not(:disabled) {
		opacity: 0.9;
	}

	.input-container button svg {
		width: 20px;
		height: 20px;
	}

	@media (max-width: 768px) {
		.chatbot-container {
			bottom: 1rem;
			right: 1rem;
		}

		.chat-window {
			width: calc(100vw - 2rem);
			height: calc(100vh - 120px);
			right: -1rem;
			bottom: 80px;
		}
	}
</style>
