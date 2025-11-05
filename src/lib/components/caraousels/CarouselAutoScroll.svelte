<script lang="ts">
  import emblaCarousel from 'embla-carousel';
	import AutoScroll from 'embla-carousel-auto-scroll';
	import { onMount } from 'svelte';

	let viewport:any;

	onMount(() => {
		const embla = emblaCarousel(viewport, { loop: true }, [AutoScroll()]);
		return () => embla.destroy();
	});
</script>

<div class="overflow-hidden relative min-w-auto" bind:this={viewport}>
	<div class="flex">
		{#each [1, 2, 3] as n}
			<div class="flex-[0_0_100%] min-w-0 ">
				<div
					class="h-100 flex items-center justify-center text-3xl font-semibold text-surface-950 dark:text-surface-50
						{n === 1 ? 'bg-primary-300 dark:bg-primary-500' : n === 2 ? 'bg-secondary-300 dark:bg-secondary-500' : 'bg-tertiary-300 dark:bg-tertiary-500'}">
					Slide {n}
				</div>
			</div>
		{/each}
	</div>
</div>
