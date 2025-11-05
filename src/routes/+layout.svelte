<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/navigations/main/Navbar.svelte';
	import SidebarMain from '$lib/components/navigations/main/SidebarMain.svelte';
	import favicon from '$lib/assets/favicon.svg';
	import { openSidebarMain } from '$lib';
	import Footer from '../lib/components/navigations/main/Footer.svelte';
	import { afterNavigate } from '$app/navigation';
	let { children } = $props();

  afterNavigate(()=> openSidebarMain.set(false))

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script>
		mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<div class="min-h-screen">
	<Navbar />

	<main class="grid min-h-screen min-w-screen grid-cols-[auto_1fr]">
		{#if $openSidebarMain}
			<SidebarMain />
		{/if}

		<div class="relative z-10 min-w-screen">
			{@render children?.()}
			<Footer />
			{#if $openSidebarMain}
				<div class="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm lg:hidden"></div>
			{/if}
		</div>
	</main>
</div>
