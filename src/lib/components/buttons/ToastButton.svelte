<script lang="ts">
	import { Toast, createToaster } from '@skeletonlabs/skeleton-svelte';
	import type { Component } from 'svelte';

	export let position: 'top-start' | 'top' | 'top-end' | 'bottom-start' | 'bottom' | 'bottom-end' =
		'bottom-end';
	export let type: 'info' | 'success' | 'warning' | 'error' = 'info';
	export let variant: 'primary' | 'secondary' | 'neutral' | 'success' | 'warning' = 'primary';
	export let title: string = 'Judul';
	export let label: string = 'Label';
	export let message: string = 'Pesan';
	export let classCustom: string = '';
	export let icon: Component | null = null;

	let hover = false;

	const toaster = createToaster({
		placement: position,
		max: 5
	});

	const variantClasses = {
		primary: `
		bg-indigo-500 hover:bg-indigo-700
		dark:bg-indigo-600 dark:hover:bg-indigo-500
		text-white dark:text-gray-100
	`,

		secondary: `
		bg-rose-500 hover:bg-rose-700
		dark:bg-rose-600 dark:hover:bg-rose-500
		text-white dark:text-gray-100
	`,

		neutral: `
		bg-gray-800 hover:bg-gray-900
		dark:bg-gray-100 dark:hover:bg-gray-200
		text-white dark:text-gray-900
	`,

		success: `
		bg-emerald-500 hover:bg-emerald-700
		dark:bg-emerald-600 dark:hover:bg-emerald-500
		text-white dark:text-gray-100
	`,

		warning: `
		bg-amber-500 hover:bg-amber-600
		dark:bg-amber-600 dark:hover:bg-amber-400
		text-white dark:text-gray-100
	`
	};

	function cekType(type: string) {
		switch (type) {
			case 'info':
				toaster.info({
					title: title,
					description: message
				});
				break;
			case 'success':
				toaster.success({
					title: title,
					description: message
				});
				break;
			case 'warning':
				toaster.warning({
					title: title,
					description: message
				});
				break;
			case 'error':
				toaster.error({
					title: title,
					description: message
				});
				break;

			default:
				toaster.info({
					title: title,
					description: message
				});
				break;
		}
	}
</script>

<button
	onmouseenter={() => (hover = true)}
	onmouseleave={() => (hover = false)}
	class={`group btn flex items-center justify-between gap-4 font-semibold shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-lg ${variantClasses[variant]} ${classCustom}`}
	onclick={cekType(type)}
>
	<span>{label}</span>

	{#if icon}
		<span
			class="inline-block transition-all duration-300"
			class:opacity-70={!hover}
			class:opacity-100={hover}
			class:translate-x-2={hover}
		>
			<svelte:component this={icon} class="h-5 w-5" />
		</span>
	{/if}
</button>

<Toast.Group {toaster}>
	{#snippet children(toast)}
		<Toast {toast}>
			<Toast.Message>
				<Toast.Title>{toast.title}</Toast.Title>
				<Toast.Description>{toast.description}</Toast.Description>
			</Toast.Message>
			<Toast.CloseTrigger />
		</Toast>
	{/snippet}
</Toast.Group>
