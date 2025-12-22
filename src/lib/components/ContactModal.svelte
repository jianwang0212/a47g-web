<script lang="ts">
	import { language } from '../i18n';
	
	interface Props {
		isOpen?: boolean;
		onClose?: () => void;
	}
	
	let { isOpen = $bindable(false), onClose }: Props = $props();
	
	let currentLang = $state('zh');
	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let message = $state('');
	let isSubmitting = $state(false);
	let submitStatus = $state<'idle' | 'success' | 'error'>('idle');
	
	$effect(() => {
		const unsubscribe = language.subscribe(lang => {
			currentLang = lang;
		});
		return unsubscribe;
	});
	
	function handleClose() {
		isOpen = false;
		if (onClose) onClose();
		// 重置表单
		name = '';
		email = '';
		phone = '';
		message = '';
		submitStatus = 'idle';
	}
	
	async function handleSubmit(e: Event) {
		e.preventDefault();
		isSubmitting = true;
		submitStatus = 'idle';
		
		// 模拟提交（实际应该调用API）
		try {
			await new Promise(resolve => setTimeout(resolve, 1000));
			submitStatus = 'success';
			setTimeout(() => {
				handleClose();
			}, 2000);
		} catch (error) {
			submitStatus = 'error';
		} finally {
			isSubmitting = false;
		}
	}
	
	function handleBackdropClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			handleClose();
		}
	}
</script>

{#if isOpen}
	<div class="modal-backdrop" onclick={handleBackdropClick}>
		<div class="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
			<button class="close-btn" onclick={handleClose} aria-label="Close">
				×
			</button>
			
			<h2 id="modal-title" class="modal-title">
				{currentLang === 'zh' ? '联系我们' : 'Contact Us'}
			</h2>
			<p class="modal-subtitle">
				{currentLang === 'zh' 
					? '填写以下信息，我们的团队将尽快与您联系' 
					: 'Fill out the form below and our team will contact you soon'}
			</p>
			
			<form onsubmit={handleSubmit} class="contact-form">
				<div class="form-group">
					<label for="name">
						{currentLang === 'zh' ? '姓名' : 'Name'} <span class="required">*</span>
					</label>
					<input 
						type="text" 
						id="name" 
						bind:value={name} 
						required 
						placeholder={currentLang === 'zh' ? '请输入您的姓名' : 'Enter your name'}
					/>
				</div>
				
				<div class="form-group">
					<label for="email">
						{currentLang === 'zh' ? '邮箱' : 'Email'} <span class="required">*</span>
					</label>
					<input 
						type="email" 
						id="email" 
						bind:value={email} 
						required 
						placeholder={currentLang === 'zh' ? 'your.email@example.com' : 'your.email@example.com'}
					/>
				</div>
				
				<div class="form-group">
					<label for="phone">
						{currentLang === 'zh' ? '电话' : 'Phone'} <span class="optional">({currentLang === 'zh' ? '可选' : 'Optional'})</span>
					</label>
					<input 
						type="tel" 
						id="phone" 
						bind:value={phone} 
						placeholder={currentLang === 'zh' ? '请输入您的电话' : 'Enter your phone number'}
					/>
				</div>
				
				<div class="form-group">
					<label for="message">
						{currentLang === 'zh' ? '留言' : 'Message'} <span class="required">*</span>
					</label>
					<textarea 
						id="message" 
						bind:value={message} 
						required 
						rows="4"
						placeholder={currentLang === 'zh' ? '请告诉我们您的需求或问题...' : 'Tell us about your needs or questions...'}
					></textarea>
				</div>
				
				{#if submitStatus === 'success'}
					<div class="alert alert-success">
						{currentLang === 'zh' ? '✓ 提交成功！我们会尽快与您联系。' : '✓ Submitted successfully! We will contact you soon.'}
					</div>
				{:else if submitStatus === 'error'}
					<div class="alert alert-error">
						{currentLang === 'zh' ? '✗ 提交失败，请稍后重试。' : '✗ Submission failed, please try again later.'}
					</div>
				{/if}
				
				<div class="form-actions">
					<button type="button" class="btn btn-cancel" onclick={handleClose}>
						{currentLang === 'zh' ? '取消' : 'Cancel'}
					</button>
					<button type="submit" class="btn btn-submit" disabled={isSubmitting}>
						{isSubmitting 
							? (currentLang === 'zh' ? '提交中...' : 'Submitting...') 
							: (currentLang === 'zh' ? '提交' : 'Submit')}
					</button>
				</div>
			</form>
		</div>
	</div>
{/if}

<style>
	.modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: blur(4px);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10000;
		padding: 2rem;
		animation: fadeIn 0.3s ease;
	}

	.modal-content {
		background: white;
		border-radius: 12px;
		padding: 2.5rem;
		max-width: 600px;
		width: 100%;
		max-height: 90vh;
		overflow-y: auto;
		position: relative;
		animation: slideUp 0.3s ease;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
	}

	.close-btn {
		position: absolute;
		top: 1rem;
		right: 1rem;
		background: none;
		border: none;
		font-size: 2rem;
		color: #6B7280;
		cursor: pointer;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.2s;
	}

	.close-btn:hover {
		background: #F3F4F6;
		color: #001F3F;
	}

	.modal-title {
		font-size: 2rem;
		font-weight: 700;
		color: #001F3F;
		margin-bottom: 0.5rem;
	}

	.modal-subtitle {
		color: #6B7280;
		margin-bottom: 2rem;
		font-size: 1rem;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.form-group label {
		font-weight: 600;
		color: #374151;
		font-size: 0.95rem;
	}

	.required {
		color: #DC2626;
	}

	.optional {
		color: #6B7280;
		font-weight: 400;
		font-size: 0.85rem;
	}

	.form-group input,
	.form-group textarea {
		padding: 0.75rem 1rem;
		border: 2px solid #E5E7EB;
		border-radius: 8px;
		font-size: 1rem;
		font-family: inherit;
		transition: all 0.2s;
	}

	.form-group input:focus,
	.form-group textarea:focus {
		outline: none;
		border-color: #D4AF37;
		box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.1);
	}

	.form-group textarea {
		resize: vertical;
		min-height: 100px;
	}

	.alert {
		padding: 1rem;
		border-radius: 8px;
		font-size: 0.95rem;
	}

	.alert-success {
		background: #D1FAE5;
		color: #065F46;
		border: 1px solid #10B981;
	}

	.alert-error {
		background: #FEE2E2;
		color: #991B1B;
		border: 1px solid #DC2626;
	}

	.form-actions {
		display: flex;
		gap: 1rem;
		justify-content: flex-end;
		margin-top: 1rem;
	}

	.btn {
		padding: 0.75rem 2rem;
		border-radius: 8px;
		font-weight: 600;
		font-size: 1rem;
		cursor: pointer;
		transition: all 0.2s;
		border: none;
	}

	.btn-cancel {
		background: #F3F4F6;
		color: #374151;
	}

	.btn-cancel:hover {
		background: #E5E7EB;
	}

	.btn-submit {
		background: linear-gradient(135deg, #D4AF37, #FFD700);
		color: #001F3F;
	}

	.btn-submit:hover:not(:disabled) {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
	}

	.btn-submit:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		from {
			transform: translateY(20px);
			opacity: 0;
		}
		to {
			transform: translateY(0);
			opacity: 1;
		}
	}

	@media (max-width: 768px) {
		.modal-content {
			padding: 1.5rem;
			margin: 1rem;
		}

		.modal-title {
			font-size: 1.5rem;
		}
	}
</style>

