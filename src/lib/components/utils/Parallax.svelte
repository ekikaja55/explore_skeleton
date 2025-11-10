<script lang="ts">
	import { onMount } from 'svelte';

	export let imageUrl = '';
	export let speed = 0.3;
	export let viewHeight = 90;
	let parallaxEl: HTMLDivElement | null = null;

	onMount(() => {
		const handleScroll = () => {
			const offset = window.scrollY * speed;
			if (parallaxEl) {
				parallaxEl.style.transform = `translateY(${offset}px)`;
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<section
	class="relative flex items-center justify-center overflow-hidden mt-[10vh]"
	style={`height: ${viewHeight}vh;`}
>
	<div
		bind:this={parallaxEl}
		class="absolute inset-0 bg-cover bg-center transition-transform duration-75 will-change-transform"
		style={`background-image: url(${imageUrl});`}
	></div>

	<div class="relative z-10 text-white">
		<slot></slot>
	</div>

	<div class="absolute inset-0 z-5 bg-black/50"></div>
</section>
