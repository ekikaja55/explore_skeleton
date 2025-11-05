<script lang="ts">
	import { colorVariants, type ButtonProps } from '$lib';
	import { LoaderCircle } from '@lucide/svelte';
	let {
		href = null,
		icon = null,
		type,
		variant = 'primary',
		label,
		imgSrc,
		classCustom,
		loading,
		disabled,
		hover,
		onClick = () => {}
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		{href}
		onmouseenter={() => (hover = true)}
		onmouseleave={() => (hover = false)}
		class={`group flex items-center justify-center gap-3 rounded-full px-6 py-3
		font-semibold shadow-md transition-all duration-300 hover:scale-[1.03]
		hover:shadow-lg ${colorVariants[variant]} ${classCustom}`}
	>
		<span class="flex items-center gap-3">
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
		class={`group flex items-center justify-center gap-3 rounded-full px-6 py-3
		font-semibold shadow-md transition-all duration-300 hover:scale-[1.03]
		hover:shadow-lg ${colorVariants[variant]} ${classCustom}`}
	>
		{#if loading}
			<span class="flex items-center gap-2">
				loading
				<LoaderCircle class="animate-spin" />
			</span>
		{:else}
			<span class="flex items-center gap-3">
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
