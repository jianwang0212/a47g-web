import { writable } from 'svelte/store';

export type Language = 'zh' | 'en';

export const language = writable<Language>('zh');

export const translations = {
	zh: {
		nav: {
			home: '首页',
			team: '团队介绍',
			strategies: '投资策略',
			performance: '业绩展示',
			insights: '研究洞察',
			philosophy: '投资理念',
			contact: '联系我们',
			login: '投资者登录'
		}
	},
	en: {
		nav: {
			home: 'Home',
			team: 'Team',
			strategies: 'Strategies',
			performance: 'Performance',
			insights: 'Insights',
			philosophy: 'Philosophy',
			contact: 'Contact',
			login: 'Investor Login'
		}
	}
};

export function t(key: string, lang?: Language | string): string {
	const selectedLang = (lang === 'zh' || lang === 'en') ? lang : 'zh';
	const keys = key.split('.');
	let value: any = translations[selectedLang as Language];
	
	for (const k of keys) {
		if (value && typeof value === 'object') {
			value = value[k];
		} else {
			return key;
		}
	}
	
	return typeof value === 'string' ? value : key;
}
