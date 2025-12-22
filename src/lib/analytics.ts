// Google Analytics Integration
// Replace 'G-XXXXXXXXXX' with your actual Google Analytics Measurement ID

export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your GA4 Measurement ID

export function initGoogleAnalytics() {
	if (typeof window === 'undefined') return;
	
	// Only load in production
	if (window.location.hostname !== 'www.a47g.com' && window.location.hostname !== 'a47g.com') {
		return;
	}

	// Load gtag.js
	const script1 = document.createElement('script');
	script1.async = true;
	script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
	document.head.appendChild(script1);

	// Initialize gtag
	window.dataLayer = window.dataLayer || [];
	function gtag(...args: any[]) {
		window.dataLayer.push(args);
	}
	(window as any).gtag = gtag;

	gtag('js', new Date());
	gtag('config', GA_MEASUREMENT_ID, {
		page_path: window.location.pathname,
		page_title: document.title,
	});
}

export function trackPageView(path: string, title?: string) {
	if (typeof window === 'undefined' || !(window as any).gtag) return;
	
	(window as any).gtag('config', GA_MEASUREMENT_ID, {
		page_path: path,
		page_title: title || document.title,
	});
}

export function trackEvent(eventName: string, eventParams?: Record<string, any>) {
	if (typeof window === 'undefined' || !(window as any).gtag) return;
	
	(window as any).gtag('event', eventName, eventParams);
}

// Common event tracking functions
export const analytics = {
	// Track button clicks
	trackButtonClick: (buttonName: string, location?: string) => {
		trackEvent('button_click', {
			button_name: buttonName,
			location: location || window.location.pathname,
		});
	},

	// Track form submissions
	trackFormSubmit: (formName: string) => {
		trackEvent('form_submit', {
			form_name: formName,
		});
	},

	// Track link clicks
	trackLinkClick: (linkText: string, linkUrl: string) => {
		trackEvent('link_click', {
			link_text: linkText,
			link_url: linkUrl,
		});
	},

	// Track downloads
	trackDownload: (fileName: string) => {
		trackEvent('file_download', {
			file_name: fileName,
		});
	},

	// Track calculator usage
	trackCalculatorUse: (calculatorType: string) => {
		trackEvent('calculator_use', {
			calculator_type: calculatorType,
		});
	},

	// Track language switch
	trackLanguageSwitch: (language: string) => {
		trackEvent('language_switch', {
			language: language,
		});
	},
};

// Declare gtag types for TypeScript
declare global {
	interface Window {
		dataLayer: any[];
		gtag: (...args: any[]) => void;
	}
}

