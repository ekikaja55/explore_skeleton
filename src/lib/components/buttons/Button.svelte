<script lang="ts">
	import type { ButtonProps } from '$lib';
	import { LoaderCircle } from '@lucide/svelte';

	let {
		href = null,
		icon = null,
		type = 'button',
		label,
		imgSrc,
		classCustom = '',
		loading = false,
		disabled = false,
		onClick = () => {}
	}: ButtonProps = $props();

	let hover = $state(false);
</script>

{#if href}
	<a
		{href}
		onmouseenter={() => (hover = true)}
		onmouseleave={() => (hover = false)}
		class={`relative block w-auto overflow-hidden border-[3px] border-black bg-white p-3 text-center text-base font-bold text-black uppercase shadow-[5px_5px_0_#000] transition-all duration-200
	before:absolute before:top-0 before:left-[-100%]
	before:h-full before:w-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)] before:transition-all before:duration-700 before:content-[''] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:border-[#296fbb] hover:bg-[#296fbb]
	hover:text-white hover:shadow-[7px_7px_0_#000] hover:shadow-[7px_7px_0_#004280] hover:before:left-[100%]
	active:translate-x-[5px] active:translate-y-[5px] active:shadow-none disabled:pointer-events-none disabled:opacity-60
	dark:border-[#60a5fa] dark:bg-[#0f172a] dark:text-[#f1f5f9] dark:shadow-[5px_5px_0_#3b82f6]
dark:before:bg-[linear-gradient(120deg,transparent,rgba(96,165,250,0.2),transparent)]
dark:hover:-translate-x-[3px] dark:hover:-translate-y-[3px]
dark:hover:border-[#93c5fd] dark:hover:bg-[#1e3a8a] dark:hover:text-[#ffffff]
dark:hover:shadow-[8px_8px_0_#60a5fa]
dark:active:translate-x-[5px] dark:active:translate-y-[5px] dark:active:shadow-none
	${classCustom}`}
	>
		<span class="flex items-center justify-center gap-3">
			{label}
			{#if icon}
				{@const Icon = icon}
				<Icon
					class={`h-5 w-5 transition-all duration-300 ${
						hover ? 'translate-x-2 opacity-100' : 'opacity-70'
					}`}
				/>
			{:else if imgSrc}
				<span
					class="inline-block transition-all duration-300"
					class:opacity-90={!hover}
					class:opacity-100={hover}
					class:translate-x-2={hover}
				>
					<img src={imgSrc} alt="icon" class="h-5 w-5 object-contain" />
				</span>
			{/if}
		</span>
	</a>
{:else}
	<button
		{type}
		disabled={disabled || loading}
		onclick={onClick}
		onmouseenter={() => (hover = true)}
		onmouseleave={() => (hover = false)}
		class={`relative block w-auto overflow-hidden border-[3px] border-black bg-white p-3 text-center text-base font-bold text-black uppercase shadow-[5px_5px_0_#000] transition-all duration-200
	before:absolute before:top-0 before:left-[-100%]
	before:h-full before:w-full before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)] before:transition-all before:duration-700 before:content-[''] hover:-translate-x-[2px] hover:-translate-y-[2px] hover:border-[#296fbb] hover:bg-[#296fbb]
	hover:text-white hover:shadow-[7px_7px_0_#000] hover:shadow-[7px_7px_0_#004280] hover:before:left-[100%]
	active:translate-x-[5px] active:translate-y-[5px] active:shadow-none disabled:pointer-events-none disabled:opacity-60
	dark:border-[#60a5fa] dark:bg-[#0f172a] dark:text-[#f1f5f9] dark:shadow-[5px_5px_0_#3b82f6]
dark:before:bg-[linear-gradient(120deg,transparent,rgba(96,165,250,0.2),transparent)]
dark:hover:-translate-x-[3px] dark:hover:-translate-y-[3px]
dark:hover:border-[#93c5fd] dark:hover:bg-[#1e3a8a] dark:hover:text-[#ffffff]
dark:hover:shadow-[8px_8px_0_#60a5fa]
dark:active:translate-x-[5px] dark:active:translate-y-[5px] dark:active:shadow-none
	${classCustom}`}
	>
		{#if loading}
			<span class="flex items-center justify-center gap-2">
				loading
				<LoaderCircle class="animate-spin" />
			</span>
		{:else}
			<span class="flex items-center justify-center gap-3">
				{label}
				{#if icon}
					{@const Icon = icon}
					<Icon
						class={`h-5 w-5 transition-all duration-300 ${
							hover ? 'translate-x-2 opacity-100' : 'opacity-70'
						}`}
					/>
				{:else if imgSrc}
					<span
						class="inline-block transition-all duration-300"
						class:opacity-90={!hover}
						class:opacity-100={hover}
						class:translate-x-2={hover}
					>
						<img src={imgSrc} alt="icon" class="h-5 w-5 object-contain" />
					</span>
				{/if}
			</span>
		{/if}
	</button>
{/if}
