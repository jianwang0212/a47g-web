// Enhanced AI Assistant with better intelligence
import { language } from './i18n';

export interface Message {
	role: 'user' | 'assistant';
	content: string;
	timestamp: Date;
}

// Knowledge base for the AI assistant
const knowledgeBase = {
	zh: {
		greetings: ['你好', '您好', 'hi', 'hello', '哈喽', '嗨'],
		strategies: {
			keywords: ['策略', 'strategy', '投资策略', 'investment strategy', '套利', 'arbitrage', '期权', 'option', '价差', 'spread'],
			responses: [
				'我们主要提供三种量化投资策略：\n\n1. **量化跨交易所套利策略**\n   - 利用不同交易所之间的价格差异\n   - 实时监控全球多个交易所\n   - 自动执行买卖操作\n   - 风险相对较低，但需要强大的技术基础设施\n\n2. **量化期权垂直价差策略**\n   - 通过同时买入和卖出不同执行价格的期权\n   - 牛市价差适合看涨市场\n   - 熊市价差适合看跌市场\n   - 使用量化模型优化价差组合，考虑时间价值衰减和波动率\n\n3. **主观宏观资产配置策略**\n   - 基于宏观经济分析\n   - 动态调整资产配置\n   - 结合量化分析和主观判断',
				'我们的策略组合设计考虑了分散投资原则，通过多标的、多策略组合来降低单一市场或资产波动对整体组合的影响。每种策略都有其独特的风险收益特征，我们通过科学的组合管理来优化整体表现。'
			]
		},
		risk: {
			keywords: ['风险', 'risk', '风险管理', 'risk management', '回撤', 'drawdown', '止损', 'stop loss', '风控'],
			responses: [
				'风险管理是我们投资体系的核心。我们采用多层次风险管理框架：\n\n**1. 实时监控系统**\n   - 实时监控持仓和风险指标\n   - 设置止损和仓位限制\n   - 实时风险预警系统\n\n**2. 压力测试**\n   - 定期进行压力测试和情景分析\n   - 评估极端市场条件下的表现\n   - 优化风险参数\n\n**3. 自动风险控制**\n   - 系统能够在异常情况下自动平仓或调整策略\n   - 多层次的止损机制\n   - 动态仓位管理\n\n**4. 历史表现**\n   - 年化收益率：21.38%\n   - 最大回撤：2.5%\n   - 风险调整后回报表现优异',
				'我们的风险管理不仅关注单一策略的风险，更注重整体投资组合的风险控制。通过分散投资、安全边际和稳健的预期收益率，我们追求长期稳定的风险调整后回报。'
			]
		},
		performance: {
			keywords: ['业绩', 'performance', '收益', 'return', '回报', '收益率', '年化', 'annualized', '回撤', 'drawdown'],
			responses: [
				'我们的历史业绩表现：\n\n**核心数据**\n- 年化收益率：21.38%\n- 最大回撤：2.5%\n- 投资期间：2024.06.01 - 2025.05.13（11个月）\n- 最大回撤恢复期：14天\n\n**业绩特点**\n- 风险调整后回报优异\n- 回撤控制良好\n- 收益稳定性高\n\n**重要提示**\n过往业绩不代表未来表现，投资有风险，请谨慎决策。',
				'我们的业绩数据基于实际交易记录，已扣除所有相关费用。我们采用严格的风险管理，确保在追求收益的同时控制回撤。您可以访问"业绩展示"页面查看更详细的业绩报告。'
			]
		},
		team: {
			keywords: ['团队', 'team', '成员', 'member', '创始人', 'founder', '背景', 'background'],
			responses: [
				'我们的团队由专业的数学、计算机和金融背景的成员组成：\n\n**团队特点**\n- 深厚的数学和算法基础\n- 丰富的金融交易经验\n- 强大的技术开发能力\n- 对技术和金融市场充满热情\n\n**工作理念**\n- 智慧工作，通过团队协作创造价值\n- 相互信任，共同成长\n- 持续学习，不断创新\n\n您可以访问"团队介绍"页面了解每位成员的详细信息。'
			]
		},
		technology: {
			keywords: ['技术', 'tech', '技术栈', 'technology', '系统', 'system', '算法', 'algorithm', '基础设施', 'infrastructure'],
			responses: [
				'我们的技术优势包括：\n\n**1. 超低延迟网络基础设施**\n   - 毫秒级交易执行\n   - 全球多交易所直连\n\n**2. 自主研发的交易算法**\n   - 高频交易算法\n   - 量化策略模型\n   - 实时数据处理\n\n**3. 高性能计算平台**\n   - 强大的计算能力\n   - 实时数据分析\n   - 自动化交易系统\n\n**4. 自动化风险管理系统**\n   - 实时风险监控\n   - 自动止损和仓位控制\n   - 智能风险预警\n\n我们完全依靠自有资金和技术进行交易，确保策略的独立性和创新性。'
			]
		},
		contact: {
			keywords: ['联系', 'contact', '咨询', '咨询', 'invest', '投资', '如何', 'how', '怎么', '方式'],
			responses: [
				'如果您对我们的服务感兴趣，可以通过以下方式联系我们：\n\n**联系方式**\n- 网站：访问"联系我们"页面\n- 点击页面上的"立即咨询"按钮\n- 填写联系表单，我们会尽快回复\n\n**服务内容**\n- 投资策略咨询\n- 风险收益分析\n- 定制化投资方案\n\n我们期待与您合作！'
			]
		},
		fees: {
			keywords: ['费用', 'fee', '收费', 'charge', '管理费', 'management fee', '业绩提成', 'performance fee'],
			responses: [
				'我们的费用结构透明合理：\n\n**费用类型**\n- 管理费：按管理资产的一定比例收取\n- 业绩提成：基于投资表现收取\n- 其他费用：可能包括交易费用、托管费用等\n\n**费用优势**\n- 费用结构清晰透明\n- 与业绩挂钩，利益一致\n- 具体费用将在投资协议中详细说明\n\n我们致力于为投资者创造价值，费用设计确保与投资者利益一致。'
			]
		},
		default: [
			'感谢您的问题！作为专业的量化投资公司，我们专注于：\n\n- **量化策略**：跨交易所套利、期权价差等\n- **风险管理**：多层次风险控制体系\n- **技术优势**：超低延迟、高性能计算\n\n如果您有具体问题，可以问我：\n- 投资策略详情\n- 风险管理方法\n- 历史业绩表现\n- 团队和技术\n- 如何联系我们\n\n或者访问我们的网站了解更多信息！'
		]
	},
	en: {
		greetings: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'],
		strategies: {
			keywords: ['strategy', 'strategies', 'investment', 'arbitrage', 'option', 'spread', 'trading'],
			responses: [
				'We offer three main quantitative investment strategies:\n\n1. **Quantitative Cross-Exchange Arbitrage**\n   - Exploits price differences between exchanges\n   - Real-time monitoring of global exchanges\n   - Automated execution\n   - Lower risk, requires strong technical infrastructure\n\n2. **Quantitative Options Vertical Spread**\n   - Simultaneously buying and selling options with different strike prices\n   - Bull spreads for bullish markets\n   - Bear spreads for bearish markets\n   - Optimized using quantitative models considering time decay and volatility\n\n3. **Subjective Macro Asset Allocation**\n   - Based on macroeconomic analysis\n   - Dynamic asset allocation adjustments\n   - Combines quantitative analysis with subjective judgment',
				'Our strategy portfolio follows diversification principles, using multiple assets and strategies to reduce the impact of single market or asset volatility. Each strategy has unique risk-return characteristics, optimized through scientific portfolio management.'
			]
		},
		risk: {
			keywords: ['risk', 'risk management', 'drawdown', 'stop loss', 'risk control'],
			responses: [
				'Risk management is the core of our investment system. We employ a multi-layered risk management framework:\n\n**1. Real-time Monitoring**\n   - Real-time position and risk indicator monitoring\n   - Stop loss and position limits\n   - Real-time risk alerts\n\n**2. Stress Testing**\n   - Regular stress tests and scenario analysis\n   - Performance evaluation under extreme conditions\n   - Risk parameter optimization\n\n**3. Automated Risk Control**\n   - Automatic position closing or strategy adjustment in abnormal situations\n   - Multi-level stop loss mechanisms\n   - Dynamic position management\n\n**4. Historical Performance**\n   - Annualized Return: 21.38%\n   - Max Drawdown: 2.5%\n   - Excellent risk-adjusted returns'
			]
		},
		performance: {
			keywords: ['performance', 'return', 'annualized', 'drawdown', 'results'],
			responses: [
				'Our historical performance:\n\n**Key Metrics**\n- Annualized Return: 21.38%\n- Max Drawdown: 2.5%\n- Period: June 1, 2024 - May 13, 2025 (11 months)\n- Max Drawdown Recovery: 14 days\n\n**Performance Characteristics**\n- Excellent risk-adjusted returns\n- Good drawdown control\n- High return stability\n\n**Important Notice**\nPast performance does not guarantee future results. Investment involves risks.'
			]
		},
		team: {
			keywords: ['team', 'member', 'founder', 'background'],
			responses: [
				'Our team consists of professionals with mathematics, computer science, and finance backgrounds:\n\n**Team Characteristics**\n- Strong mathematical and algorithmic foundation\n- Rich financial trading experience\n- Strong technical development capabilities\n- Passion for technology and financial markets\n\nVisit our "Team" page for detailed member information.'
			]
		},
		technology: {
			keywords: ['technology', 'tech', 'system', 'algorithm', 'infrastructure'],
			responses: [
				'Our technical advantages include:\n\n**1. Ultra-Low Latency Network Infrastructure**\n   - Millisecond-level trade execution\n   - Direct connections to global exchanges\n\n**2. Proprietary Trading Algorithms**\n   - High-frequency trading algorithms\n   - Quantitative strategy models\n   - Real-time data processing\n\n**3. High-Performance Computing Platform**\n   - Powerful computing capabilities\n   - Real-time data analysis\n   - Automated trading systems\n\n**4. Automated Risk Management System**\n   - Real-time risk monitoring\n   - Automatic stop loss and position control\n   - Intelligent risk alerts'
			]
		},
		contact: {
			keywords: ['contact', 'consult', 'invest', 'how', 'way'],
			responses: [
				'If you are interested in our services, you can contact us:\n\n**Contact Methods**\n- Website: Visit "Contact Us" page\n- Click "Get Started" button on the page\n- Fill out the contact form, we will reply soon\n\n**Services**\n- Investment strategy consultation\n- Risk-return analysis\n- Customized investment solutions\n\nWe look forward to working with you!'
			]
		},
		fees: {
			keywords: ['fee', 'charge', 'management fee', 'performance fee', 'cost'],
			responses: [
				'Our fee structure is transparent and reasonable:\n\n**Fee Types**\n- Management Fee: Charged as a percentage of assets under management\n- Performance Fee: Based on investment performance\n- Other Fees: May include trading fees, custody fees, etc.\n\n**Fee Advantages**\n- Clear and transparent structure\n- Performance-aligned, aligned interests\n- Detailed fees will be specified in the investment agreement'
			]
		},
		default: [
			'Thank you for your question! As a professional quantitative investment company, we specialize in:\n\n- **Quantitative Strategies**: Cross-exchange arbitrage, options spreads, etc.\n- **Risk Management**: Multi-layered risk control system\n- **Technical Advantages**: Ultra-low latency, high-performance computing\n\nIf you have specific questions, ask me about:\n- Investment strategy details\n- Risk management methods\n- Historical performance\n- Team and technology\n- How to contact us\n\nOr visit our website for more information!'
		]
	}
};

export async function getAIResponse(userInput: string, history: Message[], currentLang: 'zh' | 'en' = 'zh'): Promise<string> {
	// Try OpenAI API first if available
	const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
	
	if (apiKey) {
		try {
			const systemPrompt = currentLang === 'zh' 
				? '你是一位专业的量化投资和算法交易顾问，代表LY Quant（牛菲特和银芒格基金）。你专门帮助用户理解高频交易、量化策略、风险管理等话题。回答要专业、准确、易懂，可以引用具体数据（如年化收益率21.38%，最大回撤2.5%）。保持友好和专业的语调。'
				: 'You are a professional quantitative investment and algorithmic trading advisor representing LY Quant (Buffett & Munger Fund). You specialize in helping users understand high-frequency trading, quantitative strategies, risk management, etc. Answers should be professional, accurate, and easy to understand, and can cite specific data (such as 21.38% annualized return, 2.5% max drawdown). Maintain a friendly and professional tone.';
			
			const response = await fetch('https://api.openai.com/v1/chat/completions', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${apiKey}`
				},
				body: JSON.stringify({
					model: 'gpt-4o-mini',
					messages: [
						{ role: 'system', content: systemPrompt },
						...history.slice(-5).map(msg => ({
							role: msg.role,
							content: msg.content
						})),
						{ role: 'user', content: userInput }
					],
					temperature: 0.7,
					max_tokens: 800
				})
			});

			if (response.ok) {
				const data = await response.json();
				return data.choices[0]?.message?.content || getSmartResponse(userInput, currentLang);
			}
		} catch (error) {
			console.error('OpenAI API error:', error);
		}
	}

	// Fallback to smart response system
	return getSmartResponse(userInput, currentLang);
}

function getSmartResponse(input: string, lang: 'zh' | 'en'): string {
	const lowerInput = input.toLowerCase().trim();
	const kb = knowledgeBase[lang];
	
	// Check for greetings
	if (kb.greetings.some(g => lowerInput.includes(g.toLowerCase()))) {
		return lang === 'zh' 
			? '你好！我是LY Quant的AI交易助手。我可以帮你解答关于量化投资、算法交易、风险管理等方面的问题。有什么我可以帮助你的吗？'
			: 'Hello! I am LY Quant\'s AI trading assistant. I can help answer questions about quantitative investment, algorithmic trading, risk management, etc. How can I help you?';
	}
	
	// Check each category
	const categories = ['strategies', 'risk', 'performance', 'team', 'technology', 'contact', 'fees'] as const;
	
	for (const category of categories) {
		const categoryData = kb[category];
		if (categoryData.keywords.some(keyword => lowerInput.includes(keyword.toLowerCase()))) {
			const responses = categoryData.responses;
			return responses[Math.floor(Math.random() * responses.length)];
		}
	}
	
	// Default response
	return kb.default[0];
}

