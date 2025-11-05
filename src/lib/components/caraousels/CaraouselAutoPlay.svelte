<script lang="ts">
	import emblaCarousel from 'embla-carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import { onMount } from 'svelte';

	export let images: string[] = [];
	export let classCustom: string = '';
	export let delay: number = 3000;
	export let loop: boolean = true;

	let viewport: HTMLElement | null = null;

	onMount(() => {
		if (!viewport) return;
		const embla = emblaCarousel(viewport, { loop }, [Autoplay({ delay })]);
		return () => embla.destroy();
	});
</script>

<div class={`overflow-hidden relative ${classCustom}` } bind:this={viewport}>
	<div class="flex">
		{#if images.length > 0}
			{#each images as src, i (i)}
				<div class="flex-[0_0_100%] min-w-0 min-h-screen">
					<img
						src={src}
						alt={`slide-${i}`}
						class="w-full h-full object-cover select-none"
						draggable="false"
					/>
				</div>
			{/each}
		{:else}
			<div class="flex-[0_0_100%] min-w-0 h-64 flex items-center justify-center text-gray-500">
				No images available
			</div>
		{/if}
	</div>
</div>
