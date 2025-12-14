<script lang="ts">
	import { language } from '$lib/i18n';
	
	let currentLang = $state('zh');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});

	// 研究洞察文章数据
	const insights = [
		{
			title: {
				zh: '巴菲特与芒格的价值投资核心：寻找经济护城河',
				en: 'Buffett & Munger\'s Value Investing Core: Finding Economic Moats'
			},
			date: '2025-01-15',
			summary: {
				zh: '巴菲特和芒格认为，最优秀的投资是那些拥有"经济护城河"的公司。这些护城河可能来自强大的品牌、成本优势、网络效应或监管壁垒。通过识别并投资于这些具有持久竞争优势的企业，投资者可以在长期内获得超越市场的回报。',
				en: 'Buffett and Munger believe that the best investments are companies with "economic moats." These moats may come from strong brands, cost advantages, network effects, or regulatory barriers. By identifying and investing in businesses with durable competitive advantages, investors can achieve market-beating returns over the long term.'
			},
			tags: {
				zh: ['价值投资', '经济护城河', '竞争优势'],
				en: ['Value Investing', 'Economic Moats', 'Competitive Advantage']
			}
		},
		{
			title: {
				zh: '长期视角：复利的力量与耐心投资',
				en: 'Long-Term Perspective: The Power of Compounding and Patient Investing'
			},
			date: '2025-01-10',
			summary: {
				zh: '巴菲特和芒格强调，投资不是追求即时满足，而是着眼于长期成功。他们通过持有优质公司数十年，让复利效应充分发挥作用。这种长期视角要求投资者具备极大的耐心，并能够抵御短期市场波动的诱惑。',
				en: 'Buffett and Munger emphasize that investing is not about seeking instant gratification, but focusing on long-term success. By holding quality companies for decades, they allow the power of compounding to fully manifest. This long-term perspective requires immense patience and the ability to resist the temptation of short-term market fluctuations.'
			},
			tags: {
				zh: ['长期投资', '复利', '耐心'],
				en: ['Long-Term Investing', 'Compounding', 'Patience']
			}
		},
		{
			title: {
				zh: '理性决策：克服投资中的心理偏见',
				en: 'Rational Decision-Making: Overcoming Psychological Biases in Investing'
			},
			date: '2025-01-05',
			summary: {
				zh: '芒格特别强调理性在投资决策中的重要性。他提醒投资者要警惕确认偏误、损失厌恶、从众心理等常见偏见。通过保持客观和理性，投资者可以做出更明智的决策，避免情绪驱动的错误。',
				en: 'Munger particularly emphasizes the importance of rationality in investment decisions. He warns investors to beware of common biases such as confirmation bias, loss aversion, and herd mentality. By maintaining objectivity and rationality, investors can make wiser decisions and avoid emotion-driven mistakes.'
			},
			tags: {
				zh: ['行为金融', '心理偏见', '理性投资'],
				en: ['Behavioral Finance', 'Psychological Biases', 'Rational Investing']
			}
		},
		{
			title: {
				zh: '多学科思维模型：芒格的智慧框架',
				en: 'Multidisciplinary Mental Models: Munger\'s Framework of Wisdom'
			},
			date: '2024-12-28',
			summary: {
				zh: '查理·芒格倡导从多个学科领域汲取智慧，构建思维模型。他运用心理学、经济学、历史学等不同领域的知识来评估投资机会。这种多学科方法帮助投资者获得更全面的视角，做出更准确的判断。',
				en: 'Charlie Munger advocates drawing wisdom from multiple disciplines to build mental models. He applies knowledge from psychology, economics, history, and other fields to evaluate investment opportunities. This multidisciplinary approach helps investors gain a more comprehensive perspective and make more accurate judgments.'
			},
			tags: {
				zh: ['思维模型', '多学科', '决策框架'],
				en: ['Mental Models', 'Multidisciplinary', 'Decision Framework']
			}
		},
		{
			title: {
				zh: '公司估值精粹：现金流与安全边际',
				en: 'The Essence of Company Valuation: Cash Flow and Margin of Safety'
			},
			date: '2024-12-20',
			summary: {
				zh: '巴菲特和芒格在评估公司价值时，重点关注自由现金流、商业模式的可理解性以及安全边际。他们强调，只有当能够理解一家公司的商业模式，并且能够以显著低于内在价值的价格买入时，才应该进行投资。',
				en: 'When evaluating company value, Buffett and Munger focus on free cash flow, the understandability of the business model, and the margin of safety. They emphasize that investments should only be made when one can understand a company\'s business model and purchase it at a price significantly below its intrinsic value.'
			},
			tags: {
				zh: ['估值', '现金流', '安全边际'],
				en: ['Valuation', 'Cash Flow', 'Margin of Safety']
			}
		},
		{
			title: {
				zh: '品质优先：投资于优秀的管理团队和商业模式',
				en: 'Quality First: Investing in Excellent Management Teams and Business Models'
			},
			date: '2024-12-15',
			summary: {
				zh: '巴菲特和芒格优先投资于拥有优秀管理团队、稳健盈利能力和可持续竞争优势的高质量公司。他们相信，这样的企业更有可能在经济低迷时期保持韧性，并在长期内提供稳定的回报。',
				en: 'Buffett and Munger prioritize investing in high-quality companies with excellent management teams, robust earnings, and sustainable competitive advantages. They believe such businesses are more likely to remain resilient during economic downturns and provide consistent returns over the long term.'
			},
			tags: {
				zh: ['品质投资', '管理团队', '商业模式'],
				en: ['Quality Investing', 'Management Team', 'Business Model']
			}
		},
		{
			title: {
				zh: '道德与诚信：长期成功的基石',
				en: 'Ethics and Integrity: The Foundation of Long-Term Success'
			},
			date: '2024-12-10',
			summary: {
				zh: '巴菲特和芒格高度重视道德和诚信，无论是在自己的实践中还是在所投资的公司中。他们相信，拥有强大道德基础的企业更具韧性，更有可能在长期内取得成功。诚信不仅是道德要求，也是明智的商业决策。',
				en: 'Buffett and Munger place great importance on ethics and integrity, both in their own practices and in the companies they invest in. They believe that businesses with strong ethical foundations are more resilient and more likely to succeed in the long term. Integrity is not just a moral requirement, but also a wise business decision.'
			},
			tags: {
				zh: ['商业道德', '诚信', '长期价值'],
				en: ['Business Ethics', 'Integrity', 'Long-Term Value']
			}
		},
		{
			title: {
				zh: '巴菲特与芒格对科技股的投资思考',
				en: 'Buffett & Munger\'s Thoughts on Technology Stock Investing'
			},
			date: '2024-12-05',
			summary: {
				zh: '虽然巴菲特和芒格传统上避免投资他们不理解的技术公司，但近年来他们也开始投资苹果等科技巨头。这反映了他们对价值投资原则的灵活应用：当科技公司展现出强大的经济护城河和可理解的商业模式时，它们同样值得投资。',
				en: 'Although Buffett and Munger traditionally avoided investing in technology companies they didn\'t understand, in recent years they have also invested in tech giants like Apple. This reflects their flexible application of value investing principles: when technology companies demonstrate strong economic moats and understandable business models, they are equally worthy of investment.'
			},
			tags: {
				zh: ['科技股', '价值投资', '投资进化'],
				en: ['Technology Stocks', 'Value Investing', 'Investment Evolution']
			}
		}
	];
</script>

<svelte:head>
	<title>研究洞察 - LY Quant | Market Insights - LY Quant</title>
</svelte:head>

<section class="insights-page">
	<div class="container">
		<div class="page-header">
			<h1>{currentLang === 'zh' ? '研究洞察' : 'Market Insights'}</h1>
			<p class="page-subtitle">
				{currentLang === 'zh' 
					? '专业的市场分析和投资观点'
					: 'Professional market analysis and investment perspectives'}
			</p>
		</div>

		<div class="insights-grid">
			{#each insights as insight}
				<article class="insight-card">
					<div class="insight-header">
						<h2 class="insight-title">{currentLang === 'zh' ? insight.title.zh : insight.title.en}</h2>
						<span class="insight-date">{insight.date}</span>
					</div>
					<p class="insight-summary">
						{currentLang === 'zh' ? insight.summary.zh : insight.summary.en}
					</p>
					<div class="insight-tags">
						{#each (currentLang === 'zh' ? insight.tags.zh : insight.tags.en) as tag}
							<span class="tag">{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>
	</div>
</section>

<style>
	.insights-page {
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
	}

	.insights-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
		gap: 2rem;
		margin-bottom: 3rem;
	}

	.insight-card {
		background: white;
		padding: 2rem;
		border-radius: 12px;
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
		transition: transform 0.3s ease, box-shadow 0.3s ease;
		display: flex;
		flex-direction: column;
	}

	.insight-card:hover {
		transform: translateY(-4px);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
	}

	.insight-header {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		margin-bottom: 1rem;
		gap: 1rem;
	}

	.insight-title {
		font-size: 1.5rem;
		font-weight: 600;
		color: #001F3F;
		margin: 0;
		flex: 1;
		line-height: 1.4;
	}

	.insight-date {
		font-size: 0.875rem;
		color: #9CA3AF;
		white-space: nowrap;
		flex-shrink: 0;
	}

	.insight-summary {
		font-size: 1rem;
		color: #4B5563;
		line-height: 1.7;
		margin-bottom: 1.5rem;
		flex: 1;
	}

	.insight-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 0.5rem;
		margin-top: auto;
	}

	.tag {
		display: inline-block;
		padding: 0.375rem 0.75rem;
		background: linear-gradient(135deg, #FFD700, #D4AF37);
		color: #001F3F;
		font-size: 0.75rem;
		font-weight: 500;
		border-radius: 6px;
	}

	@media (max-width: 768px) {
		.insights-grid {
			grid-template-columns: 1fr;
		}

		.insight-header {
			flex-direction: column;
		}

		.insight-date {
			align-self: flex-start;
		}

		.page-header h1 {
			font-size: 2rem;
		}
	}
</style>
