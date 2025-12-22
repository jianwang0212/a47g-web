<script lang="ts">
	import { language } from '../i18n';
	
	interface Props {
		words: string[];
		wordsZh?: string[];
		speed?: number;
		deleteSpeed?: number;
		delay?: number;
		loop?: boolean;
		className?: string;
	}
	
	let { 
		words = [],
		wordsZh = [],
		speed = 100,
		deleteSpeed = 50,
		delay = 2000,
		loop = true,
		className = ''
	}: Props = $props();
	
	let currentLang = $state('zh');
	let displayedText = $state('');
	let currentWordIndex = $state(0);
	let isDeleting = $state(false);
	let isPaused = $state(false);
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
			// 重置打字机效果
			displayedText = '';
			currentWordIndex = 0;
			isDeleting = false;
			isPaused = false;
		});
		return unsubscribe;
	});
	
	$effect(() => {
		const wordList = currentLang === 'zh' && wordsZh.length > 0 ? wordsZh : words;
		if (wordList.length === 0) return;
		
		let timeoutId: ReturnType<typeof setTimeout>;
		
		const type = () => {
			if (isPaused) return;
			
			const currentWord = wordList[currentWordIndex];
			
			if (isDeleting) {
				// 删除字符
				displayedText = currentWord.substring(0, displayedText.length - 1);
				
				if (displayedText === '') {
					isDeleting = false;
					currentWordIndex = (currentWordIndex + 1) % wordList.length;
					timeoutId = setTimeout(type, speed);
				} else {
					timeoutId = setTimeout(type, deleteSpeed);
				}
			} else {
				// 添加字符
				displayedText = currentWord.substring(0, displayedText.length + 1);
				
				if (displayedText === currentWord) {
					// 单词完成，等待后删除
					if (loop || currentWordIndex < wordList.length - 1) {
						timeoutId = setTimeout(() => {
							isDeleting = true;
							type();
						}, delay);
					}
				} else {
					timeoutId = setTimeout(type, speed);
				}
			}
		};
		
		// 延迟开始，让组件先渲染
		timeoutId = setTimeout(type, 500);
		
		return () => {
			clearTimeout(timeoutId);
		};
	});
</script>

<span class="typewriter {className}">
	{displayedText}
	<span class="cursor">|</span>
</span>

<style>
	.typewriter {
		display: inline-block;
		position: relative;
	}
	
	.cursor {
		display: inline-block;
		margin-left: 2px;
		animation: blink 1s infinite;
		color: #FFD700;
		font-weight: 300;
	}
	
	@keyframes blink {
		0%, 50% {
			opacity: 1;
		}
		51%, 100% {
			opacity: 0;
		}
	}
</style>

