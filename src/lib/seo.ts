// SEO and Meta Tags Helper
export interface SEOData {
	title?: string;
	description?: string;
	image?: string;
	url?: string;
	type?: string;
	siteName?: string;
}

export function generateSEOTags(data: SEOData, lang: 'zh' | 'en' = 'zh') {
	const baseUrl = 'https://www.a47g.com';
	const defaultImage = `${baseUrl}/favicon.png`;
	
	const title = data.title || (lang === 'zh' ? 'LY Quant - 量化投资' : 'LY Quant - Quantitative Investment');
	const description = data.description || (lang === 'zh' 
		? 'LY Quant专注于美股期权市场的量化投资，利用量化分析和严格的风险管理，追求稳健的风险调整后回报。'
		: 'LY Quant specializes in quantitative investment in US options market, pursuing steady risk-adjusted returns through quantitative analysis and strict risk management.');
	const image = data.image || defaultImage;
	const url = data.url || baseUrl;
	const type = data.type || 'website';
	const siteName = data.siteName || 'LY Quant';

	return {
		// Basic Meta Tags
		title,
		description,
		
		// Open Graph Tags
		'og:title': title,
		'og:description': description,
		'og:image': image,
		'og:url': url,
		'og:type': type,
		'og:site_name': siteName,
		'og:locale': lang === 'zh' ? 'zh_CN' : 'en_US',
		
		// Twitter Card Tags
		'twitter:card': 'summary_large_image',
		'twitter:title': title,
		'twitter:description': description,
		'twitter:image': image,
		
		// Additional Meta Tags
		'keywords': lang === 'zh' 
			? '量化投资,期权交易,美股期权,风险管理,投资策略,LY Quant'
			: 'quantitative investment,options trading,US options,risk management,investment strategy,LY Quant',
		'author': 'LY Quant',
		'robots': 'index, follow',
		'language': lang === 'zh' ? 'zh-CN' : 'en-US',
		'revisit-after': '7 days'
	};
}

// Structured Data (JSON-LD) for Organization
export function generateOrganizationSchema(lang: 'zh' | 'en' = 'zh') {
	return {
		'@context': 'https://schema.org',
		'@type': 'FinancialService',
		'name': 'LY Quant',
		'alternateName': lang === 'zh' ? '牛菲特和银芒格基金' : 'Buffett & Munger Fund',
		'url': 'https://www.a47g.com',
		'logo': 'https://www.a47g.com/favicon.png',
		'description': lang === 'zh'
			? '专注于美股期权市场的量化投资公司'
			: 'Quantitative investment firm specializing in US options market',
		'foundingDate': '2024',
		'serviceType': lang === 'zh' ? '量化投资服务' : 'Quantitative Investment Services',
		'areaServed': 'Global',
		'contactPoint': {
			'@type': 'ContactPoint',
			'contactType': 'Customer Service',
			'availableLanguage': ['Chinese', 'English']
		}
	};
}

// Structured Data for Investment Service
export function generateServiceSchema(lang: 'zh' | 'en' = 'zh') {
	return {
		'@context': 'https://schema.org',
		'@type': 'Service',
		'serviceType': lang === 'zh' ? '量化投资服务' : 'Quantitative Investment Service',
		'provider': {
			'@type': 'FinancialService',
			'name': 'LY Quant'
		},
		'description': lang === 'zh'
			? '专注于美股期权市场的量化投资服务，提供稳健的风险调整后回报'
			: 'Quantitative investment service specializing in US options market, providing steady risk-adjusted returns',
		'areaServed': {
			'@type': 'Place',
			'name': 'Global'
		}
	};
}

// Structured Data for WebSite
export function generateWebsiteSchema(lang: 'zh' | 'en' = 'zh') {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		'name': 'LY Quant',
		'url': 'https://www.a47g.com',
		'description': lang === 'zh'
			? 'LY Quant量化投资平台'
			: 'LY Quant Quantitative Investment Platform',
		'inLanguage': lang === 'zh' ? 'zh-CN' : 'en-US',
		'potentialAction': {
			'@type': 'SearchAction',
			'target': {
				'@type': 'EntryPoint',
				'urlTemplate': 'https://www.a47g.com/search?q={search_term_string}'
			},
			'query-input': 'required name=search_term_string'
		}
	};
}

