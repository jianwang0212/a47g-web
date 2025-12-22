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
		featuresEn: ['Principal safety priority', 'Steady growth', 'Options protection strategy', 'Suitable for risk-averse investors'],
		detailedDescription: {
			zh: '缓冲型保本策略采用结构化期权产品设计，通过购买看跌期权和卖出看涨期权的组合，在保证本金100%安全的前提下，获得稳定的收益。该策略的核心特点是牺牲了部分上涨收益空间，但完全消除了本金损失的风险。适合那些将资金安全放在首位的保守型投资者。',
			en: 'The Buffer Capital Protection Strategy uses structured options products, combining purchased put options and sold call options to achieve stable returns while guaranteeing 100% principal safety. The core feature of this strategy is sacrificing some upside potential in exchange for completely eliminating principal loss risk. Suitable for conservative investors who prioritize capital preservation.'
		},
		howItWorks: {
			zh: [
				'通过购买看跌期权保护，确保即使市场下跌，本金也不会受损',
				'同时卖出看涨期权，获得权利金收入，但限制了上涨收益空间',
				'通常设置10-20%的缓冲区间，在此区间内本金完全保护',
				'收益主要来源于期权权利金和标的资产的温和上涨'
			],
			en: [
				'Purchase put options for protection, ensuring principal remains intact even in market downturns',
				'Simultaneously sell call options to generate premium income, but limiting upside potential',
				'Typically sets a 10-20% buffer zone where principal is fully protected',
				'Returns primarily come from option premiums and moderate asset appreciation'
			]
		},
		suitableFor: {
			zh: '适合风险承受能力较低、追求本金安全的投资者，特别是即将退休或需要稳定现金流的投资者。',
			en: 'Suitable for investors with lower risk tolerance who prioritize capital preservation, especially those approaching retirement or needing stable cash flow.'
		}
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
		featuresEn: ['Multi-asset, multi-strategy portfolio', 'Strict risk management', 'Diversified investment', 'Suitable for investors seeking higher returns'],
		detailedDescription: {
			zh: '低风险多空策略通过同时持有看涨和看跌头寸，在不同市场环境下都能获得收益。该策略通过多标的资产、多策略组合的方式，有效分散风险，同时通过严格的风险管理控制回撤。虽然存在一定的回撤风险，但预期收益明显高于保本策略，适合追求更高收益且能承受一定波动的投资者。',
			en: 'The Low-Risk Long-Short Strategy generates returns in various market conditions by simultaneously holding long and short positions. Through multi-asset, multi-strategy diversification, the strategy effectively spreads risk while controlling drawdowns through strict risk management. Although there is some drawdown risk, expected returns are significantly higher than capital protection strategies, suitable for investors seeking higher returns who can tolerate some volatility.'
		},
		howItWorks: {
			zh: [
				'同时构建看涨和看跌头寸，实现市场中性或低相关性',
				'通过多标的资产组合（如SPY、QQQ、个股等）分散风险',
				'采用多种期权策略组合：备兑看涨、保护性看跌、跨式组合等',
				'严格的风险控制：单笔交易风险不超过总资产的2%，总回撤控制在5%以内',
				'动态调整仓位，根据市场波动率调整策略参数'
			],
			en: [
				'Simultaneously construct long and short positions to achieve market neutrality or low correlation',
				'Diversify risk through multi-asset portfolios (e.g., SPY, QQQ, individual stocks)',
				'Employ multiple options strategies: covered calls, protective puts, straddles, etc.',
				'Strict risk control: single trade risk limited to 2% of total assets, total drawdown controlled within 5%',
				'Dynamically adjust positions based on market volatility and strategy parameters'
			]
		},
		suitableFor: {
			zh: '适合有一定风险承受能力、追求更高收益的投资者，特别是对量化策略有一定了解、能够接受短期波动的成长型投资者。',
			en: 'Suitable for investors with moderate risk tolerance seeking higher returns, especially growth-oriented investors who understand quantitative strategies and can accept short-term volatility.'
		}
	}
];

// Strategy Comparison
export const strategyComparison = {
	title: {
		zh: '策略对比',
		en: 'Strategy Comparison'
	},
	comparisonPoints: [
		{
			category: {
				zh: '风险水平',
				en: 'Risk Level'
			},
			buffer: {
				zh: '极低风险 - 本金100%保护',
				en: 'Very Low Risk - 100% Principal Protection'
			},
			longshort: {
				zh: '低风险 - 最大回撤5%',
				en: 'Low Risk - Maximum 5% Drawdown'
			}
		},
		{
			category: {
				zh: '预期收益',
				en: 'Expected Return'
			},
			buffer: {
				zh: '5%-8% 年化收益',
				en: '5%-8% Annualized Return'
			},
			longshort: {
				zh: '15%-25% 年化收益',
				en: '15%-25% Annualized Return'
			}
		},
		{
			category: {
				zh: '收益来源',
				en: 'Return Source'
			},
			buffer: {
				zh: '期权权利金 + 有限上涨收益',
				en: 'Option Premiums + Limited Upside'
			},
			longshort: {
				zh: '多空价差 + 波动率交易',
				en: 'Long-Short Spreads + Volatility Trading'
			}
		},
		{
			category: {
				zh: '市场适应性',
				en: 'Market Adaptability'
			},
			buffer: {
				zh: '适合震荡和温和上涨市场',
				en: 'Suitable for Range-bound and Moderate Bull Markets'
			},
			longshort: {
				zh: '适合各种市场环境',
				en: 'Suitable for Various Market Conditions'
			}
		},
		{
			category: {
				zh: '投资期限',
				en: 'Investment Horizon'
			},
			buffer: {
				zh: '建议1-3年',
				en: 'Recommended 1-3 Years'
			},
			longshort: {
				zh: '建议3-5年',
				en: 'Recommended 3-5 Years'
			}
		},
		{
			category: {
				zh: '适合投资者',
				en: 'Target Investors'
			},
			buffer: {
				zh: '风险厌恶型、保守型投资者',
				en: 'Risk-Averse, Conservative Investors'
			},
			longshort: {
				zh: '追求收益、能承受波动的成长型投资者',
				en: 'Return-Seeking, Growth-Oriented Investors Who Can Tolerate Volatility'
			}
		}
	]
};

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

// Previous Fund - Wolfson Silver Fund
export const previousFund = {
	name: 'Wolfson Silver Fund',
	nameZh: '狼银基金',
	description: {
		zh: 'Wolfson Silver Fund（狼银基金）是LY Quant的前身基金，为我们的投资策略和风险管理体系奠定了坚实基础。该基金采用独特的固定收益与浮动收益相结合的模式，为投资者提供了灵活的投资选择。',
		en: 'Wolfson Silver Fund is the predecessor fund of LY Quant, establishing a solid foundation for our investment strategies and risk management systems. The fund employed a unique combination of fixed and floating return structures, providing investors with flexible investment options.'
	},
	returnStructure: {
		title: {
			zh: '收益结构',
			en: 'Return Structure'
		},
		fixed: {
			title: {
				zh: '固定收益',
				en: 'Fixed Return'
			},
			description: {
				zh: '每年固定15%收益，自投资之日起计算。资金处理周期为7个工作日，总收益计算期为372天（365天+7天处理期）。',
				en: 'Fixed annual return of 15%, calculated from the investment date. Funds require 7 business days for processing, with a total return calculation period of 372 days (365 days + 7-day processing period).'
			}
		},
		floating: {
			title: {
				zh: '浮动收益',
				en: 'Floating Return'
			},
			description: {
				zh: '与基金整体表现完全同步，获得与基金总收益/损失完全相同的收益。投资者可以分享基金的全部投资成果。',
				en: 'Fully synchronized with the fund\'s overall performance, investors receive returns identical to the fund\'s total gains or losses. Investors share in the fund\'s complete investment results.'
			}
		}
	},
	fees: {
		title: {
			zh: '费用结构',
			en: 'Fee Structure'
		},
		items: [
			{
				name: {
					zh: '提现费',
					en: 'Withdrawal Fee'
				},
				amount: {
					zh: '15英镑/次',
					en: '£15 per withdrawal'
				}
			},
			{
				name: {
					zh: '服务器费',
					en: 'Server Fee'
				},
				amount: {
					zh: '100英镑/月（按投资比例分摊）',
					en: '£100 per month (proportional to investment)'
				}
			},
			{
				name: {
					zh: '账户管理费',
					en: 'Account Management Fee'
				},
				amount: {
					zh: '20英镑/月（按投资比例分摊）',
					en: '£20 per month (proportional to investment)'
				}
			}
		],
		note: {
			zh: '所有费用将从最终收益中扣除。服务器费和账户管理费按投资比例分摊，确保费用公平合理。',
			en: 'All fees are deducted from final returns. Server and account management fees are proportionally allocated based on investment amount, ensuring fair and reasonable cost distribution.'
		}
	},
	terms: {
		title: {
			zh: '投资条款',
			en: 'Investment Terms'
		},
		items: [
			{
				zh: '投资频率：每年仅可投资一次',
				en: 'Investment Frequency: Once per year only'
			},
			{
				zh: '投资期限：资金需在基金中停留至少1年',
				en: 'Investment Period: Funds must remain in the fund for a minimum of 1 year'
			},
			{
				zh: '提现处理：提现需要7个工作日处理，提现期间不产生收益',
				en: 'Withdrawal Processing: Withdrawals require 7 business days for processing, no returns accrue during withdrawal period'
			},
			{
				zh: '报告透明度：每月提供详细的Excel报告和月度业绩报告，所有投资者可通过共享驱动器访问',
				en: 'Reporting Transparency: Monthly detailed Excel reports and performance reports available to all investors via shared drive'
			},
			{
				zh: '协作平台：所有成员可在共享驱动器中记录、创建、编辑文档、聊天记录和建议，开放接受建议',
				en: 'Collaborative Platform: All members can record, create, and edit documents, chat history, and suggestions in the shared drive, open to advice and feedback'
			}
		]
	},
	timeline: {
		title: {
			zh: '典型投资时间线',
			en: 'Typical Investment Timeline'
		},
		example: {
			zh: '例如：投资者在6月26日提交资金，经过7天处理期后，投资于7月1日正式开始。投资期限为1年，投资者可在次年7月1日获得本金和收益。',
			en: 'Example: Investor submits funds on June 26, after a 7-day processing period, investment officially begins on July 1. With a 1-year investment period, investors receive principal and returns on July 1 of the following year.'
		}
	}
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

// Partners & Clients - High-profile companies and institutions
export const partners = {
	title: {
		zh: '合作伙伴与客户',
		en: 'Partners & Clients'
	},
	subtitle: {
		zh: '我们为全球领先的科技公司、金融机构和高净值投资者提供专业的量化投资服务',
		en: 'We provide professional quantitative investment services to leading global tech companies, financial institutions, and high-net-worth investors'
	},
	stats: {
		clients: {
			zh: '200+',
			en: '200+'
		},
		countries: {
			zh: '50+',
			en: '50+'
		},
		years: {
			zh: '6年',
			en: '6 Years'
		}
	},
	techCompanies: [
		{ name: 'Apple', nameZh: '苹果', category: 'tech', logo: '/logos/apple.png' },
		{ name: 'Microsoft', nameZh: '微软', category: 'tech', logo: '/logos/microsoft.png' },
		{ name: 'Google', nameZh: '谷歌', category: 'tech', logo: '/logos/google.png' },
		{ name: 'Amazon', nameZh: '亚马逊', category: 'tech', logo: '/logos/amazon.png' },
		{ name: 'Oracle', nameZh: '甲骨文', category: 'tech', logo: '/logos/oracle.png' },
		{ name: 'Meta', nameZh: 'Meta', category: 'tech' },
		{ name: 'Tesla', nameZh: '特斯拉', category: 'tech' },
		{ name: 'NVIDIA', nameZh: '英伟达', category: 'tech' },
		{ name: 'Alibaba', nameZh: '阿里巴巴', category: 'tech' },
		{ name: 'Tencent', nameZh: '腾讯', category: 'tech' },
		{ name: 'ByteDance', nameZh: '字节跳动', category: 'tech' },
		{ name: 'Netflix', nameZh: '奈飞', category: 'tech' }
	],
	financialInstitutions: [
		{ name: 'Goldman Sachs', nameZh: '高盛', category: 'finance', logo: '/logos/goldman-sachs.png' },
		{ name: 'Morgan Stanley', nameZh: '摩根士丹利', category: 'finance' },
		{ name: 'JPMorgan Chase', nameZh: '摩根大通', category: 'finance' },
		{ name: 'BlackRock', nameZh: '贝莱德', category: 'finance' },
		{ name: 'Vanguard', nameZh: '先锋集团', category: 'finance' },
		{ name: 'Citadel', nameZh: '城堡证券', category: 'finance' },
		{ name: 'Bridgewater', nameZh: '桥水基金', category: 'finance' },
		{ name: 'Renaissance', nameZh: '文艺复兴科技', category: 'finance' }
	],
	highNetWorth: [
		{ name: 'Family Office - Silicon Valley', nameZh: '硅谷家族办公室', category: 'hnw' },
		{ name: 'European Private Bank', nameZh: '欧洲私人银行', category: 'hnw' },
		{ name: 'Asian Wealth Management', nameZh: '亚洲财富管理', category: 'hnw' },
		{ name: 'Institutional Investors', nameZh: '机构投资者', category: 'hnw' },
		{ name: 'Pension Funds', nameZh: '养老基金', category: 'hnw' },
		{ name: 'Endowment Funds', nameZh: '捐赠基金', category: 'hnw' }
	],
	universities: [
		{ name: 'University of Queensland', nameZh: '昆士兰大学', category: 'university' },
		{ name: 'University of Oxford', nameZh: '牛津大学', category: 'university' },
		{ name: 'Berklee College of Music', nameZh: '伯克利音乐学院', category: 'university' }
	]
};
