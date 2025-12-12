<script lang="ts">
	interface Message {
		role: 'user' | 'assistant';
		content: string;
		timestamp: Date;
	}

	let messages = $state<Message[]>([]);
	let input = $state('');
	let isLoading = $state(false);
	let isOpen = $state(false);

	// 初始化欢迎消息 - 使用数组重新赋值确保响应性，避免使用 push()
	let hasInitialized = false;
	
	$effect(() => {
		// 只在首次挂载且消息为空时初始化
		if (hasInitialized || messages.length > 0) return;
		hasInitialized = true;
		
		// 使用数组重新赋值而不是 push()，确保 Svelte 5 的响应性正常工作
		messages = [{
			role: 'assistant',
			content: '你好！我是牛菲特和银芒格的AI交易助手。我可以帮你解答关于算法交易、高频交易、量化策略、风险管理等方面的问题。有什么我可以帮助你的吗？',
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

		try {
			const response = await getAIResponse(currentInput, messages.slice(0, -1));
			messages = [
				...messages,
				{
					role: 'assistant',
					content: response,
					timestamp: new Date()
				}
			];
		} catch (error) {
			messages = [
				...messages,
				{
					role: 'assistant',
					content: '抱歉，我遇到了一些技术问题。请稍后再试。',
					timestamp: new Date()
				}
			];
		} finally {
			isLoading = false;
		}
	}

	async function getAIResponse(userInput: string, history: Message[]): Promise<string> {
		// 尝试使用OpenAI API（如果配置了API key）
		const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
		
		if (apiKey) {
			try {
				const response = await fetch('https://api.openai.com/v1/chat/completions', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						'Authorization': `Bearer ${apiKey}`
					},
					body: JSON.stringify({
						model: 'gpt-4o-mini',
						messages: [
							{
								role: 'system',
								content: '你是一位专业的算法交易和量化投资顾问，专门帮助用户理解高频交易、量化策略、风险管理等话题。回答要专业、准确、易懂。'
							},
							...history.map(msg => ({
								role: msg.role,
								content: msg.content
							})),
							{
								role: 'user',
								content: userInput
							}
						],
						temperature: 0.7,
						max_tokens: 500
					})
				});

				if (response.ok) {
					const data = await response.json();
					return data.choices[0]?.message?.content || '抱歉，我无法生成回复。';
				}
			} catch (error) {
				console.error('OpenAI API error:', error);
			}
		}

		// 如果没有API key或API调用失败，使用智能模拟响应
		return getSimulatedResponse(userInput);
	}

	function getSimulatedResponse(input: string): string {
		const lowerInput = input.toLowerCase();
		
		// 关键词匹配的智能响应
		if (lowerInput.includes('高频') || lowerInput.includes('hft')) {
			return '高频交易(HFT)是一种利用高速计算机和算法在极短时间内执行大量交易的策略。我们公司专注于超低延迟网络和算法优化，能够在毫秒级时间内捕捉市场机会。关键要素包括：1) 超低延迟基础设施 2) 先进的算法 3) 实时数据处理 4) 风险控制系统。';
		}
		
		if (lowerInput.includes('套利') || lowerInput.includes('arbitrage')) {
			return '跨交易所套利策略通过识别不同交易所之间的价格差异来获利。我们的系统实时监控全球多个交易所的价格，当发现价差超过交易成本时，自动执行买卖操作。这种策略相对风险较低，但需要强大的技术基础设施来确保快速执行。';
		}
		
		if (lowerInput.includes('期权') || lowerInput.includes('option')) {
			return '期权垂直价差策略通过同时买入和卖出不同执行价格的期权来构建风险可控的投资组合。牛市价差适合看涨市场，熊市价差适合看跌市场。我们使用量化模型来优化价差组合，考虑时间价值衰减(Theta)和波动率(Volatility)等因素。';
		}
		
		if (lowerInput.includes('风险') || lowerInput.includes('risk')) {
			return '风险管理是算法交易的核心。我们采用多层次风险管理：1) 实时监控持仓和风险指标 2) 设置止损和仓位限制 3) 压力测试和情景分析 4) 实时风险预警系统。我们的系统能够在异常情况下自动平仓或调整策略。';
		}
		
		if (lowerInput.includes('策略') || lowerInput.includes('strategy')) {
			return '我们主要采用三种策略：1) 量化跨交易所套利 - 利用价格差异 2) 量化期权垂直价差 - 通过期权组合表达市场观点 3) 主观宏观资产配置 - 基于宏观经济分析调整资产配置。每种策略都有其适用场景和风险特征。';
		}
		
		if (lowerInput.includes('团队') || lowerInput.includes('team')) {
			return '我们的团队由数学家、开发者和工程师组成，每个人都对技术和金融市场充满热情。我们相信智慧工作，通过团队协作和相互信任来创造价值。我们的技术栈包括高性能计算、实时数据处理和先进的算法开发。';
		}
		
		if (lowerInput.includes('技术') || lowerInput.includes('tech')) {
			return '我们的技术优势包括：1) 超低延迟网络基础设施 2) 自主研发的交易算法 3) 实时数据处理系统 4) 高性能计算平台 5) 自动化风险管理系统。我们完全依靠自有资金和技术进行交易，确保策略的独立性和创新性。';
		}
		
		// 默认响应
		return '感谢你的问题！作为专业的算法交易公司，我们专注于高频交易、量化策略和风险管理。如果你有关于具体策略、技术实现或风险控制的问题，我很乐意为你详细解答。你也可以访问我们的"投资策略"页面了解更多信息。';
	}

	function formatTime(date: Date): string {
		return date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
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
				<h3>AI 交易助手</h3>
				<button class="close-btn" onclick={toggleChat} aria-label="关闭">×</button>
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
					placeholder="输入你的问题..."
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
