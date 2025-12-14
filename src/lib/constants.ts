// Brand Colors - Deep Blue + Gold
export const colors = {
	primary: {
		blue: '#001F3F',
		blueLight: '#003366',
		blueDark: '#000D1A'
	},
	accent: {
		gold: '#D4AF37',
		goldLight: '#FFD700',
		goldDark: '#B8941E'
	}
};

// Team Information from PDF
export const team = {
	name: 'LY Quant',
	fullName: 'LY Quantitative Investment',
	founders: [
		{
			initial: 'L',
			name: 'Junling Liu',
			title: '策略风控负责人',
			titleEn: 'Strategy & Risk Management Lead',
			education: '重庆大学本硕计算机与科学硕士',
			educationEn: 'M.S. Computer Science, Chongqing University',
			experience: '前阿里巴巴天猫技术部研发员 | 5年美股期权量化交易经验',
			experienceEn: 'Former Alibaba Tmall Tech Developer | 5 years of US options quantitative trading experience'
		},
		{
			initial: 'Y',
			name: 'Zi Yin',
			title: '策略研发负责人',
			titleEn: 'Strategy Development Lead',
			education: '牛津大学金融系硕士',
			educationEn: 'M.S. Finance, University of Oxford',
			experience: '前Citadel城堡证券交易员 | 多市场交易经验',
			experienceEn: 'Former Citadel Securities Trader | Multi-market trading experience',
			avatar: '/111122.png',
			linkedin: 'https://www.linkedin.com/in/zi-yin-96a61772/',
			zhihu: 'https://www.zhihu.com/people/zi-yin-96'
		}
	],
	established: '2022',
	description: '团队创建3年，成员2人，拥有深厚的量化研究经验和丰富的技术开发能力。凭借全球视野与本地市场的深刻洞察，我们致力于为投资者提供卓越的策略服务，帮助他们实现厚坡长雪的长期的成功投资。',
	descriptionEn: 'Founded 3 years ago with 2 members, we possess deep quantitative research experience and rich technical development capabilities. With global vision and deep insights into local markets, we are committed to providing excellent strategy services to investors.'
};

// Investment Strategies
export const strategies = [
	{
		id: 'buffer',
		name: '缓冲型保本策略',
		nameEn: 'Buffer Capital Protection Strategy',
		description: '以限制收益上限为代价，保证本金安全',
		descriptionEn: 'Guarantees principal safety at the cost of limiting upside returns',
		expectedReturn: '5%-8%',
		expectedReturnEn: '5%-8% annualized',
		maxDrawdown: '0%',
		maxDrawdownEn: '0% (principal protected)',
		features: ['本金安全优先', '稳健增长', '期权保护策略', '适合风险厌恶型投资者'],
		featuresEn: ['Principal safety priority', 'Steady growth', 'Options protection strategy', 'Suitable for risk-averse investors']
	},
	{
		id: 'longshort',
		name: '低风险多空策略',
		nameEn: 'Low-Risk Long-Short Strategy',
		description: '预期更高收益，存在回撤',
		descriptionEn: 'Higher expected returns with drawdown risk',
		expectedReturn: '15%-25%',
		expectedReturnEn: '15%-25% annualized',
		maxDrawdown: '5%',
		maxDrawdownEn: '5% expected maximum',
		features: ['多标的、多策略组合', '严格的风险管理', '分散投资', '适合追求更高收益的投资者'],
		featuresEn: ['Multi-asset, multi-strategy portfolio', 'Strict risk management', 'Diversified investment', 'Suitable for investors seeking higher returns']
	}
];

// Performance Data
export const performance = {
	period: '2024.06.01 - 2025.05.13',
	periodEn: 'June 1, 2024 - May 13, 2025',
	duration: '11个月',
	durationEn: '11 months',
	return: '19.6%',
	annualizedReturn: '21.38%',
	maxDrawdown: '2.5%',
	maxDrawdownPeriod: '2024.08.01 - 2024.08.05',
	maxDrawdownRecovery: '14天',
	maxDrawdownRecoveryEn: '14 days'
};

// Investment Philosophy
export const philosophy = {
	title: '投资理念',
	titleEn: 'Investment Philosophy',
	description: '我们专注于美股期权市场，利用量化分析和严格的风险管理，追求稳健的风险调整后回报。我们以分散投资、安全边际、稳健的预期收益率为核心理念，通过科学的策略组合为投资者提供长期的资本增值。',
	descriptionEn: 'We focus on the US options market, utilizing quantitative analysis and strict risk management to pursue steady risk-adjusted returns.',
	principles: [
		{
			title: '分散投资',
			titleEn: 'Diversification',
			description: '通过多标的、多策略组合设计，降低单一市场或资产波动对整体组合的影响',
			descriptionEn: 'Reduce the impact of single market or asset volatility on the overall portfolio'
		},
		{
			title: '安全边际',
			titleEn: 'Safety Margin',
			description: '核心期权策略相较于直接持股，预留了充足的安全边际',
			descriptionEn: 'Core options strategies provide sufficient safety margins compared to direct stock holdings'
		},
		{
			title: '稳健收益',
			titleEn: 'Steady Returns',
			description: '通过科学的策略组合和严格的风险管理，追求稳健的风险调整后回报',
			descriptionEn: 'Pursue steady risk-adjusted returns through scientific strategy combinations'
		}
	]
};
