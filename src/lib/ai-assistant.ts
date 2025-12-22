// Enhanced AI Assistant with better intelligence
import { language } from './i18n';

export interface Message {
	role: 'user' | 'assistant';
	content: string;
	timestamp: Date;
}

// Enhanced knowledge base with more comprehensive coverage
const knowledgeBase = {
	zh: {
		greetings: ['你好', '您好', 'hi', 'hello', '哈喽', '嗨', '早上好', '下午好', '晚上好', 'good morning', 'good afternoon', 'good evening'],
		strategies: {
			keywords: ['策略', 'strategy', '投资策略', 'investment strategy', '套利', 'arbitrage', '期权', 'option', '价差', 'spread', '保本', 'buffer', '多空', 'long short', '对冲', 'hedge', '交易策略', 'trading strategy', '投资方法', 'investment method', '怎么投资', '如何投资', '投资什么', '投资方式', '做什么', '投资哪些', '有哪些', '策略类型', '策略种类', '垂直价差', '跨交易所', '套利策略', '保本策略', '期权策略', '量化策略', 'quantitative strategy', '交易方法', 'trading method', '投资产品', 'investment product', '做什么投资', '投资方向', '投资标的', '投资品种', '策略介绍', 'strategy introduction', '策略详情', 'strategy details', '策略说明', 'strategy explanation', '策略优势', 'strategy advantage', '策略特点', 'strategy features', '策略收益', 'strategy return', '策略风险', 'strategy risk', '跨市场', 'cross market', '套利机会', 'arbitrage opportunity', '价差交易', 'spread trading', '期权交易', 'options trading', '保本投资', 'capital protection', '本金保护', 'principal protection', '稳健投资', 'stable investment', '低风险', 'low risk', '高收益', 'high return', '投资组合', 'portfolio', '资产配置', 'asset allocation'],
			responses: [
				'我们主要提供三种量化投资策略：\n\n**1. 量化跨交易所套利策略**\n   - 利用不同交易所之间的价格差异\n   - 实时监控全球多个交易所\n   - 自动执行买卖操作\n   - 风险相对较低，但需要强大的技术基础设施\n   - 适合追求稳定收益的投资者\n\n**2. 量化期权垂直价差策略**\n   - 通过同时买入和卖出不同执行价格的期权\n   - 牛市价差适合看涨市场\n   - 熊市价差适合看跌市场\n   - 使用量化模型优化价差组合，考虑时间价值衰减和波动率\n   - 预期年化收益率15%-25%\n\n**3. 缓冲型保本策略**\n   - 保证本金100%安全\n   - 预期年化收益率5%-8%\n   - 适合风险厌恶型投资者\n   - 通过期权组合实现本金保护',
				'我们的策略组合设计考虑了分散投资原则，通过多标的、多策略组合来降低单一市场或资产波动对整体组合的影响。每种策略都有其独特的风险收益特征，我们通过科学的组合管理来优化整体表现。\n\n**策略特点：**\n- 多标的分散：投资多个不同的标的资产\n- 多策略组合：同时运行多种策略\n- 严格风控：每个策略都有独立的风险控制\n- 动态调整：根据市场情况动态调整策略参数',
				'如果您想了解具体策略的详细运作方式，我可以为您介绍：\n\n- **跨交易所套利**：如何捕捉价格差异\n- **期权价差策略**：如何构建价差组合\n- **保本策略**：如何实现本金保护\n\n您对哪种策略更感兴趣？'
			]
		},
		risk: {
			keywords: ['风险', 'risk', '风险管理', 'risk management', '回撤', 'drawdown', '止损', 'stop loss', '风控', '风险控制', '安全', 'safe', '保本', '本金', 'principal', '亏损', 'loss', '最大亏损', 'max loss', '风险等级', 'risk level', '风险承受', 'risk tolerance', '风险控制', 'risk control', '风险防范', 'risk prevention', '风险预警', 'risk warning', '风险监控', 'risk monitoring', '风险限额', 'risk limit', '风险指标', 'risk indicator', '风险分析', 'risk analysis', '风险评估', 'risk assessment', '风险分散', 'risk diversification', '风险对冲', 'risk hedging', '风险敞口', 'risk exposure', '风险偏好', 'risk preference', '保守', 'conservative', '稳健', 'stable', '激进', 'aggressive', '风险厌恶', 'risk averse', '风险中性', 'risk neutral', '风险承受能力', 'risk capacity', '最大回撤', 'maximum drawdown', '回撤控制', 'drawdown control', '回撤恢复', 'drawdown recovery', '止损点', 'stop loss point', '止损策略', 'stop loss strategy', '仓位控制', 'position control', '仓位管理', 'position management', '风险价值', 'var', 'value at risk', '压力测试', 'stress test', '情景分析', 'scenario analysis', '风险模型', 'risk model', '风险度量', 'risk measurement', '风险报告', 'risk report', '风险披露', 'risk disclosure', '投资风险', 'investment risk', '市场风险', 'market risk', '流动性风险', 'liquidity risk', '操作风险', 'operational risk'],
			responses: [
				'风险管理是我们投资体系的核心。我们采用多层次风险管理框架：\n\n**1. 实时监控系统**\n   - 实时监控持仓和风险指标\n   - 设置止损和仓位限制\n   - 实时风险预警系统\n   - 24/7不间断监控\n\n**2. 压力测试**\n   - 定期进行压力测试和情景分析\n   - 评估极端市场条件下的表现\n   - 优化风险参数\n   - 模拟各种市场情况\n\n**3. 自动风险控制**\n   - 系统能够在异常情况下自动平仓或调整策略\n   - 多层次的止损机制\n   - 动态仓位管理\n   - 实时风险限额控制\n\n**4. 历史表现**\n   - 年化收益率：21.38%\n   - 最大回撤：2.5%（非常低）\n   - 风险调整后回报表现优异\n   - 最大回撤恢复期仅14天',
				'我们的风险管理不仅关注单一策略的风险，更注重整体投资组合的风险控制。通过分散投资、安全边际和稳健的预期收益率，我们追求长期稳定的风险调整后回报。\n\n**风险控制措施：**\n- 单策略最大回撤限制\n- 整体组合风险限额\n- 实时VaR（风险价值）监控\n- 自动止损机制\n- 仓位动态调整',
				'对于不同风险偏好的投资者，我们提供不同策略：\n\n- **保守型**：缓冲型保本策略，最大回撤0%，年化收益5%-8%\n- **稳健型**：低风险多空策略，最大回撤5%，年化收益15%-25%\n\n您属于哪种风险偏好？'
			]
		},
		performance: {
			keywords: ['业绩', 'performance', '收益', 'return', '回报', '收益率', '年化', 'annualized', '回撤', 'drawdown', '历史表现', 'historical', '数据', 'data', '结果', 'results', '表现', 'track record', '21.38', '2.5', '盈利', 'profit', '赚钱', '赚多少', '收益多少', '回报率', '年化收益', '最大回撤', '历史数据', '交易记录', '投资结果', '投资回报', '收益率多少', '能赚多少', '收益如何', '表现如何', '投资业绩', 'investment performance', '历史业绩', 'historical performance', '业绩数据', 'performance data', '业绩报告', 'performance report', '业绩图表', 'performance chart', '收益曲线', 'return curve', '净值曲线', 'nav curve', '累计收益', 'cumulative return', '月度收益', 'monthly return', '季度收益', 'quarterly return', '年度收益', 'annual return', '收益率排名', 'return ranking', '业绩对比', 'performance comparison', '业绩基准', 'performance benchmark', '超额收益', 'excess return', 'alpha', 'beta', '夏普比率', 'sharpe ratio', '索提诺比率', 'sortino ratio', '信息比率', 'information ratio', '卡玛比率', 'calmar ratio', '最大回撤率', 'maximum drawdown rate', '回撤恢复期', 'drawdown recovery period', '胜率', 'win rate', '盈亏比', 'profit loss ratio', '平均收益', 'average return', '波动率', 'volatility', '标准差', 'standard deviation', '风险调整收益', 'risk adjusted return', '投资回报', 'investment return', '投资结果', 'investment result', '投资效果', 'investment effect', '投资表现', 'investment performance', '赚钱能力', 'profitability', '盈利能力', 'earning ability', '收益稳定性', 'return stability', '收益持续性', 'return sustainability', '业绩持续性', 'performance sustainability', '历史回测', 'historical backtest', '回测结果', 'backtest result', '模拟交易', 'simulated trading', '实盘交易', 'live trading', '交易记录', 'trading record', '交易明细', 'trading details', '交易统计', 'trading statistics'],
			responses: [
				'我们的历史业绩表现：\n\n**核心数据**\n- 年化收益率：**21.38%**\n- 最大回撤：**2.5%**（非常低）\n- 投资期间：2024.06.01 - 2025.05.13（11个月）\n- 最大回撤恢复期：14天\n- 夏普比率：优秀\n\n**业绩特点**\n- ✅ 风险调整后回报优异\n- ✅ 回撤控制良好（仅2.5%）\n- ✅ 收益稳定性高\n- ✅ 快速恢复能力（14天）\n\n**重要提示**\n过往业绩不代表未来表现，投资有风险，请谨慎决策。',
				'我们的业绩数据基于实际交易记录，已扣除所有相关费用。我们采用严格的风险管理，确保在追求收益的同时控制回撤。\n\n**为什么我们的业绩优秀？**\n1. 专业的量化模型\n2. 严格的风险控制\n3. 多策略分散投资\n4. 实时监控和调整\n\n您可以访问"业绩展示"页面查看更详细的业绩报告和图表。',
				'相比市场平均水平，我们的表现：\n\n- **年化收益率21.38%** vs 市场平均约8-10%\n- **最大回撤2.5%** vs 市场平均约15-20%\n- **风险调整后回报**：显著优于市场\n\n这得益于我们的量化策略和严格风控。'
			]
		},
		team: {
			keywords: ['团队', 'team', '成员', 'member', '创始人', 'founder', '背景', 'background', '谁', 'who', '人员', 'staff', 'Junling', 'Zi Yin', '刘俊凌', '尹子', '经验', 'experience', '学历', 'education', '牛津', 'oxford', '阿里巴巴', 'alibaba', 'citadel', '团队介绍', 'team introduction', '团队成员', 'team members', '核心团队', 'core team', '管理团队', 'management team', '投资团队', 'investment team', '研究团队', 'research team', '技术团队', 'technical team', '团队背景', 'team background', '团队经验', 'team experience', '团队实力', 'team strength', '团队优势', 'team advantage', '团队能力', 'team capability', '专业团队', 'professional team', '资深团队', 'experienced team', '精英团队', 'elite team', '团队规模', 'team size', '团队构成', 'team composition', '团队成员介绍', 'team member introduction', '创始人介绍', 'founder introduction', '核心成员', 'core members', '关键人员', 'key personnel', '投资经理', 'investment manager', '策略经理', 'strategy manager', '风控经理', 'risk manager', '研究总监', 'research director', '技术总监', 'technical director', '交易员', 'trader', '量化研究员', 'quantitative researcher', '算法工程师', 'algorithm engineer', '数据分析师', 'data analyst', '金融工程师', 'financial engineer', '量化分析师', 'quantitative analyst', '投资顾问', 'investment advisor', '投资专家', 'investment expert', '金融专家', 'financial expert', '量化专家', 'quantitative expert', '交易专家', 'trading expert', '期权专家', 'options expert', '套利专家', 'arbitrage expert', '风险管理专家', 'risk management expert', '教育背景', 'educational background', '工作经历', 'work experience', '职业经历', 'career experience', '从业经验', 'professional experience', '行业经验', 'industry experience', '交易经验', 'trading experience', '投资经验', 'investment experience', '量化经验', 'quantitative experience', '期权经验', 'options experience', '套利经验', 'arbitrage experience', '风险管理经验', 'risk management experience', '技术经验', 'technical experience', '研究经验', 'research experience', '学术背景', 'academic background', '专业资质', 'professional qualification', '认证资格', 'certification', '专业证书', 'professional certificate', '从业资格', 'professional qualification', '投资资格', 'investment qualification', '交易资格', 'trading qualification'],
			responses: [
				'我们的团队由专业的数学、计算机和金融背景的成员组成：\n\n**核心成员**\n\n**Junling Liu（刘俊凌）**\n- 职位：策略风控负责人\n- 教育：重庆大学本硕计算机与科学硕士\n- 经验：前阿里巴巴天猫技术部研发员 | 5年美股期权量化交易经验\n\n**Zi Yin（尹子）**\n- 职位：策略研发负责人\n- 教育：牛津大学金融系硕士\n- 经验：前Citadel城堡证券交易员 | 多市场交易经验\n\n**团队特点**\n- 深厚的数学和算法基础\n- 丰富的金融交易经验\n- 强大的技术开发能力\n- 对技术和金融市场充满热情\n\n您可以访问"团队介绍"页面了解每位成员的详细信息。',
				'我们的团队创建3年，成员2人，拥有深厚的量化研究经验和丰富的技术开发能力。凭借全球视野与本地市场的深刻洞察，我们致力于为投资者提供卓越的策略服务。\n\n**工作理念**\n- 智慧工作，通过团队协作创造价值\n- 相互信任，共同成长\n- 持续学习，不断创新\n\n**团队优势**\n- 技术+金融双重背景\n- 大厂+顶级金融机构经验\n- 实战交易经验丰富'
			]
		},
		technology: {
			keywords: ['技术', 'tech', '技术栈', 'technology', '系统', 'system', '算法', 'algorithm', '基础设施', 'infrastructure', '软件', 'software', '平台', 'platform', '怎么实现', 'how it works', '技术优势', 'technical', '开发', 'development', '编程', 'programming'],
			responses: [
				'我们的技术优势包括：\n\n**1. 超低延迟网络基础设施**\n   - 毫秒级交易执行\n   - 全球多交易所直连\n   - 优化的网络路由\n   - 减少延迟的技术架构\n\n**2. 自主研发的交易算法**\n   - 高频交易算法\n   - 量化策略模型\n   - 实时数据处理\n   - 机器学习优化\n\n**3. 高性能计算平台**\n   - 强大的计算能力\n   - 实时数据分析\n   - 自动化交易系统\n   - 分布式计算架构\n\n**4. 自动化风险管理系统**\n   - 实时风险监控\n   - 自动止损和仓位控制\n   - 智能风险预警\n   - 多维度风险分析\n\n我们完全依靠自有资金和技术进行交易，确保策略的独立性和创新性。',
				'我们的技术栈包括：\n\n- **编程语言**：Python, C++, Java\n- **数据处理**：实时数据流处理\n- **机器学习**：策略优化和预测\n- **基础设施**：云服务器+专用交易服务器\n- **监控系统**：24/7实时监控和告警\n\n所有系统都是自主研发，确保安全性和性能。'
			]
		},
		contact: {
			keywords: ['联系', 'contact', '咨询', '咨询', 'invest', '投资', '如何', 'how', '怎么', '方式', '电话', 'phone', '邮箱', 'email', '地址', 'address', '微信', 'wechat', '合作', 'cooperation', '开始', 'start', '加入', 'join', '开户', 'open account', '怎么联系', '如何联系', '怎么咨询', '如何咨询', '怎么投资', '如何投资', '怎么开始', '如何开始', '投资流程', '开户流程', '联系方式', '咨询方式', '投资步骤'],
			responses: [
				'如果您对我们的服务感兴趣，可以通过以下方式联系我们：\n\n**联系方式**\n- 网站：访问"联系我们"页面\n- 点击页面上的"立即咨询"按钮\n- 填写联系表单，我们会尽快回复（通常在24小时内）\n\n**服务内容**\n- 投资策略咨询\n- 风险收益分析\n- 定制化投资方案\n- 账户开设指导\n\n**投资流程**\n1. 填写咨询表单\n2. 我们评估您的需求\n3. 提供定制化方案\n4. 签署投资协议\n5. 开始投资\n\n我们期待与您合作！',
				'想要开始投资？很简单：\n\n1. **点击"立即咨询"按钮**，填写基本信息\n2. **我们会在24小时内联系您**，了解您的投资需求和风险偏好\n3. **提供定制化方案**，包括策略选择、预期收益、风险说明\n4. **签署协议**，开始投资\n\n整个过程透明、专业、高效。'
			]
		},
		fees: {
			keywords: ['费用', 'fee', '收费', 'charge', '管理费', 'management fee', '业绩提成', 'performance fee', '成本', 'cost', '多少钱', 'how much', '费率', 'rate', '佣金', 'commission'],
			responses: [
				'我们的费用结构透明合理：\n\n**费用类型**\n- **管理费**：按管理资产的一定比例收取（通常1-2%）\n- **业绩提成**：基于投资表现收取（通常20%）\n- **其他费用**：可能包括交易费用、托管费用等（透明披露）\n\n**费用优势**\n- ✅ 费用结构清晰透明\n- ✅ 与业绩挂钩，利益一致\n- ✅ 具体费用将在投资协议中详细说明\n- ✅ 无隐藏费用\n\n我们致力于为投资者创造价值，费用设计确保与投资者利益一致。只有您赚钱，我们才赚钱。',
				'我们的收费模式是"2+20"模式：\n\n- **2%管理费**：用于覆盖运营成本\n- **20%业绩提成**：只有在盈利时才收取\n\n这意味着：\n- 如果亏损，我们只收取管理费\n- 如果盈利，我们分享20%的利润\n- 确保我们的利益与您一致'
			]
		},
		about: {
			keywords: ['关于', 'about', '公司', 'company', '介绍', 'introduction', '是什么', 'what is', 'ly quant', '牛菲特', '银芒格', 'buffett', 'munger', '基金', 'fund'],
			responses: [
				'LY Quant（牛菲特和银芒格基金）是一家专注于量化投资的金融科技公司。\n\n**公司定位**\n- 专注于美股期权市场的量化投资\n- 利用量化分析和严格的风险管理\n- 追求稳健的风险调整后回报\n\n**核心优势**\n- 年化收益率21.38%\n- 最大回撤仅2.5%\n- 专业团队（牛津+阿里巴巴背景）\n- 自主研发的量化策略\n\n**投资理念**\n我们相信通过科学的量化方法、严格的风险控制和持续的技术创新，可以为投资者创造长期稳定的回报。',
				'LY Quant成立于2022年，是一家专业的量化投资公司。\n\n**为什么选择我们？**\n1. **专业团队**：牛津大学+阿里巴巴背景\n2. **优秀业绩**：21.38%年化收益，2.5%最大回撤\n3. **技术优势**：自主研发的量化策略和交易系统\n4. **严格风控**：多层次风险管理体系\n\n我们致力于成为您最值得信赖的量化投资伙伴。'
			]
		},
		default: [
			'感谢您的问题！作为专业的量化投资公司，LY Quant专注于：\n\n**核心业务**\n- **量化策略**：跨交易所套利、期权价差等\n- **风险管理**：多层次风险控制体系\n- **技术优势**：超低延迟、高性能计算\n\n**关键数据**\n- 年化收益率：21.38%\n- 最大回撤：2.5%\n- 投资期间：11个月\n\n**我可以帮您了解：**\n- 📊 投资策略详情\n- 🛡️ 风险管理方法\n- 📈 历史业绩表现\n- 👥 团队和技术\n- 📞 如何联系我们\n- 💰 费用结构\n\n请告诉我您想了解哪个方面，或者访问我们的网站了解更多信息！',
			'您好！我是LY Quant的AI助手。我可以为您解答关于量化投资的各种问题。\n\n**常见问题：**\n1. 你们的投资策略是什么？\n2. 风险如何控制？\n3. 历史业绩怎么样？\n4. 团队背景如何？\n5. 如何开始投资？\n6. 费用是多少？\n\n请直接问我任何问题，我会尽力为您解答！',
			'很高兴为您服务！LY Quant是一家专业的量化投资公司，专注于美股期权市场。\n\n**我们的优势：**\n✅ 年化收益率21.38%\n✅ 最大回撤仅2.5%\n✅ 专业团队（牛津+阿里巴巴背景）\n✅ 严格的风险管理\n\n**想了解更多？**\n- 问："你们的策略是什么？"\n- 问："风险如何控制？"\n- 问："如何开始投资？"\n\n或者直接告诉我您关心的问题！'
		]
	},
	en: {
		greetings: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
		strategies: {
			keywords: ['strategy', 'strategies', 'investment', 'arbitrage', 'option', 'spread', 'trading', 'buffer', 'long short', 'hedge', 'how to invest', 'investment method', 'what to invest', 'what strategies', 'strategy types', 'vertical spread', 'cross exchange', 'capital protection', 'options strategy'],
			responses: [
				'We offer three main quantitative investment strategies:\n\n**1. Quantitative Cross-Exchange Arbitrage**\n   - Exploits price differences between exchanges\n   - Real-time monitoring of global exchanges\n   - Automated execution\n   - Lower risk, requires strong technical infrastructure\n   - Suitable for investors seeking stable returns\n\n**2. Quantitative Options Vertical Spread**\n   - Simultaneously buying and selling options with different strike prices\n   - Bull spreads for bullish markets\n   - Bear spreads for bearish markets\n   - Optimized using quantitative models considering time decay and volatility\n   - Expected annualized return: 15%-25%\n\n**3. Buffer Capital Protection Strategy**\n   - 100% principal protection\n   - Expected annualized return: 5%-8%\n   - Suitable for risk-averse investors\n   - Achieved through options combinations',
				'Our strategy portfolio follows diversification principles, using multiple assets and strategies to reduce the impact of single market or asset volatility. Each strategy has unique risk-return characteristics, optimized through scientific portfolio management.\n\n**Strategy Features:**\n- Multi-asset diversification: Investing in multiple different assets\n- Multi-strategy portfolio: Running multiple strategies simultaneously\n- Strict risk control: Each strategy has independent risk controls\n- Dynamic adjustment: Adjusting strategy parameters based on market conditions'
			]
		},
		risk: {
			keywords: ['risk', 'risk management', 'drawdown', 'stop loss', 'risk control', 'safe', 'principal', 'loss', 'max loss', 'risk level', 'risk tolerance'],
			responses: [
				'Risk management is the core of our investment system. We employ a multi-layered risk management framework:\n\n**1. Real-time Monitoring**\n   - Real-time position and risk indicator monitoring\n   - Stop loss and position limits\n   - Real-time risk alerts\n   - 24/7 continuous monitoring\n\n**2. Stress Testing**\n   - Regular stress tests and scenario analysis\n   - Performance evaluation under extreme conditions\n   - Risk parameter optimization\n   - Simulating various market conditions\n\n**3. Automated Risk Control**\n   - Automatic position closing or strategy adjustment in abnormal situations\n   - Multi-level stop loss mechanisms\n   - Dynamic position management\n   - Real-time risk limit controls\n\n**4. Historical Performance**\n   - Annualized Return: 21.38%\n   - Max Drawdown: 2.5% (very low)\n   - Excellent risk-adjusted returns\n   - Max drawdown recovery: only 14 days'
			]
		},
		performance: {
			keywords: ['performance', 'return', 'annualized', 'drawdown', 'results', 'historical', 'data', 'track record', '21.38', '2.5', 'profit', 'returns', 'how much return', 'annual return', 'max drawdown', 'historical data', 'trading results', 'investment returns', 'how much profit', 'performance data'],
			responses: [
				'Our historical performance:\n\n**Key Metrics**\n- Annualized Return: **21.38%**\n- Max Drawdown: **2.5%** (very low)\n- Period: June 1, 2024 - May 13, 2025 (11 months)\n- Max Drawdown Recovery: 14 days\n- Sharpe Ratio: Excellent\n\n**Performance Characteristics**\n- ✅ Excellent risk-adjusted returns\n- ✅ Good drawdown control (only 2.5%)\n- ✅ High return stability\n- ✅ Fast recovery ability (14 days)\n\n**Important Notice**\nPast performance does not guarantee future results. Investment involves risks.'
			]
		},
		team: {
			keywords: ['team', 'member', 'founder', 'background', 'who', 'staff', 'experience', 'education', 'oxford', 'alibaba', 'citadel'],
			responses: [
				'Our team consists of professionals with mathematics, computer science, and finance backgrounds:\n\n**Core Members**\n\n**Junling Liu**\n- Position: Strategy & Risk Management Lead\n- Education: M.S. Computer Science, Chongqing University\n- Experience: Former Alibaba Tmall Tech Developer | 5 years of US options quantitative trading experience\n\n**Zi Yin**\n- Position: Strategy Development Lead\n- Education: M.S. Finance, University of Oxford\n- Experience: Former Citadel Securities Trader | Multi-market trading experience\n\n**Team Characteristics**\n- Strong mathematical and algorithmic foundation\n- Rich financial trading experience\n- Strong technical development capabilities\n- Passion for technology and financial markets\n\nVisit our "Team" page for detailed member information.'
			]
		},
		technology: {
			keywords: ['technology', 'tech', 'system', 'algorithm', 'infrastructure', 'software', 'platform', 'how it works', 'technical', 'development'],
			responses: [
				'Our technical advantages include:\n\n**1. Ultra-Low Latency Network Infrastructure**\n   - Millisecond-level trade execution\n   - Direct connections to global exchanges\n   - Optimized network routing\n   - Low-latency technical architecture\n\n**2. Proprietary Trading Algorithms**\n   - High-frequency trading algorithms\n   - Quantitative strategy models\n   - Real-time data processing\n   - Machine learning optimization\n\n**3. High-Performance Computing Platform**\n   - Powerful computing capabilities\n   - Real-time data analysis\n   - Automated trading systems\n   - Distributed computing architecture\n\n**4. Automated Risk Management System**\n   - Real-time risk monitoring\n   - Automatic stop loss and position control\n   - Intelligent risk alerts\n   - Multi-dimensional risk analysis\n\nWe rely entirely on our own capital and technology for trading, ensuring strategy independence and innovation.'
			]
		},
		contact: {
			keywords: ['contact', 'consult', 'invest', 'how', 'way', 'phone', 'email', 'address', 'cooperation', 'start', 'join', 'open account', 'how to contact', 'how to invest', 'how to start', 'contact method', 'investment process', 'account opening', 'investment steps', 'get started'],
			responses: [
				'If you are interested in our services, you can contact us:\n\n**Contact Methods**\n- Website: Visit "Contact Us" page\n- Click "Get Started" button on the page\n- Fill out the contact form, we will reply soon (usually within 24 hours)\n\n**Services**\n- Investment strategy consultation\n- Risk-return analysis\n- Customized investment solutions\n- Account opening guidance\n\n**Investment Process**\n1. Fill out consultation form\n2. We assess your needs\n3. Provide customized solution\n4. Sign investment agreement\n5. Start investing\n\nWe look forward to working with you!'
			]
		},
		fees: {
			keywords: ['fee', 'charge', 'management fee', 'performance fee', 'cost', 'how much', 'rate', 'commission'],
			responses: [
				'Our fee structure is transparent and reasonable:\n\n**Fee Types**\n- **Management Fee**: Charged as a percentage of assets under management (typically 1-2%)\n- **Performance Fee**: Based on investment performance (typically 20%)\n- **Other Fees**: May include trading fees, custody fees, etc. (fully disclosed)\n\n**Fee Advantages**\n- ✅ Clear and transparent structure\n- ✅ Performance-aligned, aligned interests\n- ✅ Detailed fees specified in investment agreement\n- ✅ No hidden fees\n\nWe are committed to creating value for investors, with fee design ensuring alignment with investor interests. We only make money when you make money.'
			]
		},
		about: {
			keywords: ['about', 'company', 'introduction', 'what is', 'ly quant', 'buffett', 'munger', 'fund'],
			responses: [
				'LY Quant (Buffett & Munger Fund) is a fintech company specializing in quantitative investment.\n\n**Company Positioning**\n- Specializing in quantitative investment in US options market\n- Utilizing quantitative analysis and strict risk management\n- Pursuing steady risk-adjusted returns\n\n**Core Advantages**\n- 21.38% annualized return\n- Only 2.5% max drawdown\n- Professional team (Oxford + Alibaba background)\n- Proprietary quantitative strategies\n\n**Investment Philosophy**\nWe believe that through scientific quantitative methods, strict risk control, and continuous technological innovation, we can create long-term stable returns for investors.'
			]
		},
		default: [
			'Thank you for your question! As a professional quantitative investment company, LY Quant specializes in:\n\n**Core Business**\n- **Quantitative Strategies**: Cross-exchange arbitrage, options spreads, etc.\n- **Risk Management**: Multi-layered risk control system\n- **Technical Advantages**: Ultra-low latency, high-performance computing\n\n**Key Data**\n- Annualized Return: 21.38%\n- Max Drawdown: 2.5%\n- Investment Period: 11 months\n\n**I can help you understand:**\n- 📊 Investment strategy details\n- 🛡️ Risk management methods\n- 📈 Historical performance\n- 👥 Team and technology\n- 📞 How to contact us\n- 💰 Fee structure\n\nPlease tell me what you\'d like to know, or visit our website for more information!'
		]
	}
};

// Enhanced matching function with fuzzy matching, context awareness, and better scoring
function findBestMatch(input: string, lang: 'zh' | 'en', history: Message[] = []): string {
	const lowerInput = input.toLowerCase().trim();
	const kb = knowledgeBase[lang];
	
	// Remove common filler words for better matching
	const fillerWords = lang === 'zh' 
		? ['的', '了', '吗', '呢', '啊', '呀', '吧', '请问', '我想', '我想问', '能不能', '可不可以', '什么', '怎么', '如何', '怎样']
		: ['the', 'a', 'an', 'is', 'are', 'was', 'were', 'can', 'could', 'would', 'should', 'please', 'tell me', 'i want to know', 'what', 'how'];
	
	let cleanedInput = lowerInput;
	fillerWords.forEach(word => {
		cleanedInput = cleanedInput.replace(new RegExp(`\\b${word}\\b`, 'gi'), ' ').replace(/\s+/g, ' ').trim();
	});
	
	// Check for greetings first
	if (kb.greetings.some(g => cleanedInput.includes(g.toLowerCase()) || lowerInput.includes(g.toLowerCase()))) {
		return lang === 'zh' 
			? '你好！我是LY Quant的AI交易助手。我可以帮你解答关于量化投资、算法交易、风险管理等方面的问题。有什么我可以帮助你的吗？'
			: 'Hello! I am LY Quant\'s AI trading assistant. I can help answer questions about quantitative investment, algorithmic trading, risk management, etc. How can I help you?';
	}
	
	// Extract context from recent conversation history
	const recentContext = history.slice(-3).map(msg => msg.content.toLowerCase()).join(' ');
	const fullContext = (cleanedInput + ' ' + recentContext).toLowerCase();
	
	// Score each category based on keyword matches with context awareness
	const categories = ['strategies', 'risk', 'performance', 'team', 'technology', 'contact', 'fees', 'about'] as const;
	let bestCategory: typeof categories[number] | null = null;
	let bestScore = 0;
	
	for (const category of categories) {
		const categoryData = kb[category];
		let score = 0;
		
		// Count keyword matches (exact and partial) in both current input and context
		for (const keyword of categoryData.keywords) {
			const keywordLower = keyword.toLowerCase();
			const keywordWords = keywordLower.split(/\s+/);
			
			// Exact match gets highest score
			if (cleanedInput.includes(keywordLower) || lowerInput.includes(keywordLower)) {
				score += 4; // Increased from 3
			}
			// Partial match (keyword contains multiple words, check if all words appear)
			else if (keywordWords.length > 1) {
				const allWordsMatch = keywordWords.every(word => 
					cleanedInput.includes(word) || lowerInput.includes(word)
				);
				if (allWordsMatch) {
					score += 3; // Good partial match
				}
			}
			// Single word partial match (fuzzy matching)
			else if (keywordWords.length === 1) {
				const word = keywordWords[0];
				// Check if the word appears as a substring in input
				if (word.length >= 3 && (cleanedInput.includes(word) || lowerInput.includes(word))) {
					score += 2; // Partial word match
				}
			}
			
			// Check in context (recent conversation) - increased weight
			if (recentContext.includes(keywordLower)) {
				score += 2; // Increased from 1 - context is important
			}
		}
		
		// Bonus for multiple keyword matches
		const matchCount = categoryData.keywords.filter(k => {
			const kLower = k.toLowerCase();
			return cleanedInput.includes(kLower) || lowerInput.includes(kLower) || recentContext.includes(kLower);
		}).length;
		if (matchCount > 1) {
			score += matchCount * 2; // Increased bonus multiplier from 1.5 to 2
		}
		
		// Additional bonus for question words that indicate intent
		const questionWords = lang === 'zh' 
			? ['什么', '怎么', '如何', '为什么', '哪个', '哪些', '多少', '多久', '什么时候', '哪里', '谁']
			: ['what', 'how', 'why', 'which', 'when', 'where', 'who', 'how much', 'how many', 'how long'];
		const hasQuestionWord = questionWords.some(qw => lowerInput.includes(qw));
		if (hasQuestionWord && matchCount > 0) {
			score += 3; // Bonus for questions with matching keywords
		}
		
		// Special handling for specific number mentions (performance indicators)
		if (category === 'performance') {
			if (lowerInput.includes('21.38') || lowerInput.includes('21') || lowerInput.includes('38')) {
				score += 5;
			}
			if (lowerInput.includes('2.5') || lowerInput.includes('2.5%')) {
				score += 5;
			}
		}
		
		// Special handling for team member names
		if (category === 'team') {
			if (lowerInput.includes('junling') || lowerInput.includes('刘俊凌') || lowerInput.includes('liu')) {
				score += 4;
			}
			if (lowerInput.includes('zi yin') || lowerInput.includes('尹子') || lowerInput.includes('yin')) {
				score += 4;
			}
			if (lowerInput.includes('oxford') || lowerInput.includes('牛津')) {
				score += 3;
			}
			if (lowerInput.includes('alibaba') || lowerInput.includes('阿里巴巴')) {
				score += 3;
			}
			if (lowerInput.includes('citadel')) {
				score += 3;
			}
		}
		
		if (score > bestScore) {
			bestScore = score;
			bestCategory = category;
		}
	}
	
	// If we found a good match, return a response from that category
	// Lowered threshold from 2 to 1 to catch more matches
	if (bestCategory && bestScore > 1) {
		const responses = kb[bestCategory].responses;
		
		// Try to avoid repeating the same response from recent history
		const recentResponses = history.slice(-5).filter(msg => msg.role === 'assistant').map(msg => msg.content);
		let selectedResponse = responses[Math.floor(Math.random() * responses.length)];
		
		// If the selected response was recently used, try another one
		if (recentResponses.includes(selectedResponse) && responses.length > 1) {
			const otherResponses = responses.filter(r => !recentResponses.includes(r));
			if (otherResponses.length > 0) {
				selectedResponse = otherResponses[Math.floor(Math.random() * otherResponses.length)];
			}
		}
		
		return selectedResponse;
	}
	
	// If score is low but we have some context, try to provide a helpful default
	if (bestScore > 0 && bestCategory) {
		const responses = kb[bestCategory].responses;
		return responses[0]; // Return first response for low-confidence matches
	}
	
	// Default response - provide more helpful guidance based on context
	// If we have some context but low confidence, try to provide a contextual response
	if (bestCategory && bestScore > 0) {
		const responses = kb[bestCategory].responses;
		return responses[0]; // Return first response even for very low confidence
	}
	
	// If user asked a question but we couldn't match, provide helpful guidance
	const questionWords = lang === 'zh' 
		? ['什么', '怎么', '如何', '为什么', '哪个', '哪些', '多少', '多久', '什么时候', '哪里', '谁', '？', '?']
		: ['what', 'how', 'why', 'which', 'when', 'where', 'who', 'how much', 'how many', 'how long', '?'];
	const isQuestion = questionWords.some(qw => lowerInput.includes(qw));
	
	if (isQuestion) {
		return lang === 'zh'
			? '感谢您的问题！我是LY Quant的AI交易助手。我可以帮您解答关于：\n\n📊 **投资策略**：跨交易所套利、期权价差、保本策略等\n🛡️ **风险管理**：风险控制方法、回撤管理、止损策略等\n📈 **历史业绩**：年化收益率21.38%，最大回撤2.5%\n👥 **团队介绍**：牛津+阿里巴巴背景的专业团队\n💻 **技术优势**：自主研发的量化交易系统\n💰 **费用结构**：透明的费用体系\n📞 **联系方式**：如何开始投资\n\n请告诉我您想了解哪个方面，我会为您详细解答！'
			: 'Thank you for your question! I am LY Quant\'s AI trading assistant. I can help you with:\n\n📊 **Investment Strategies**: Cross-exchange arbitrage, options spreads, capital protection, etc.\n🛡️ **Risk Management**: Risk control methods, drawdown management, stop-loss strategies, etc.\n📈 **Historical Performance**: 21.38% annualized return, 2.5% max drawdown\n👥 **Team Introduction**: Professional team with Oxford + Alibaba background\n💻 **Technical Advantages**: Proprietary quantitative trading system\n💰 **Fee Structure**: Transparent fee system\n📞 **Contact**: How to get started\n\nPlease tell me what you\'d like to know, and I\'ll provide detailed answers!';
	}
	
	// Final default response
	const defaultResponses = kb.default;
	return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

export async function getAIResponse(userInput: string, history: Message[], currentLang: 'zh' | 'en' = 'zh'): Promise<string> {
	// Enhanced system prompt with more context
	const enhancedSystemPrompt = currentLang === 'zh' 
		? `你是一位专业的量化投资和算法交易顾问，代表LY Quant（牛菲特和银芒格基金）。你专门帮助用户理解高频交易、量化策略、风险管理等话题。

**公司信息：**
- 年化收益率：21.38%
- 最大回撤：2.5%
- 投资期间：2024.06.01 - 2025.05.13（11个月）
- 团队：Junling Liu（前阿里巴巴，5年期权交易经验），Zi Yin（牛津大学金融硕士，前Citadel交易员）

**主要策略：**
1. 量化跨交易所套利策略
2. 量化期权垂直价差策略（预期收益15%-25%，最大回撤5%）
3. 缓冲型保本策略（预期收益5%-8%，最大回撤0%）

**回答要求：**
- 专业、准确、易懂
- 引用具体数据（如年化收益率21.38%，最大回撤2.5%）
- 保持友好和专业的语调
- 如果用户问题不清楚，主动询问更多信息
- 可以结合对话历史提供更相关的回答`
		: `You are a professional quantitative investment and algorithmic trading advisor representing LY Quant (Buffett & Munger Fund). You specialize in helping users understand high-frequency trading, quantitative strategies, risk management, etc.

**Company Information:**
- Annualized Return: 21.38%
- Max Drawdown: 2.5%
- Period: June 1, 2024 - May 13, 2025 (11 months)
- Team: Junling Liu (Former Alibaba, 5 years options trading), Zi Yin (Oxford Finance Master, Former Citadel Trader)

**Main Strategies:**
1. Quantitative Cross-Exchange Arbitrage
2. Quantitative Options Vertical Spread (Expected return 15%-25%, Max drawdown 5%)
3. Buffer Capital Protection Strategy (Expected return 5%-8%, Max drawdown 0%)

**Response Requirements:**
- Professional, accurate, and easy to understand
- Cite specific data (e.g., 21.38% annualized return, 2.5% max drawdown)
- Maintain a friendly and professional tone
- If user questions are unclear, proactively ask for more information
- Can combine conversation history to provide more relevant answers`;

	// Try OpenAI API first if available
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
						{ role: 'system', content: enhancedSystemPrompt },
						...history.slice(-6).map(msg => ({
							role: msg.role,
							content: msg.content
						})),
						{ role: 'user', content: userInput }
					],
					temperature: 0.7,
					max_tokens: 1000
				})
			});

			if (response.ok) {
				const data = await response.json();
				const aiResponse = data.choices[0]?.message?.content;
				if (aiResponse && aiResponse.trim().length > 10) {
					return aiResponse;
				}
			}
		} catch (error) {
			console.error('OpenAI API error:', error);
		}
	}

	// Fallback to enhanced smart response system with conversation history
	return findBestMatch(userInput, currentLang, history);
}
