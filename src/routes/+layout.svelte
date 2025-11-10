<script lang="ts">
	import '../app.css';
	import { cekPath, openSidebarMain, isDashboard } from '$lib';
	import { afterNavigate } from '$app/navigation';
	import { page } from '$app/state';
	import favicon from '$lib/assets/logoISTTS.png';
	import Navbar from '$lib/components/navigations/Navbar.svelte';
	import SidebarMain from '$lib/components/navigations/SidebarMain.svelte';
	import Footer from '$lib/components/navigations/Footer.svelte';
	let { children } = $props();

	$effect((): void => {
		const url: string = page.url.pathname;
		isDashboard.set(cekPath(url));
	});
	afterNavigate(() => openSidebarMain.set(false));
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<script>
		mode = localStorage.getItem('mode') || 'light';
		document.documentElement.setAttribute('data-mode', mode);
	</script>
</svelte:head>

<div class="min-h-screen ">
	<Navbar />

	<main class="grid min-w-screen grid-cols-[auto_1fr]  ">
		{#if $openSidebarMain }
			<SidebarMain />
		{/if}

		<div class="relative z-10 min-w-screen  ">
			{@render children?.()}
			{#if $isDashboard}
				<Footer />
			{/if}
			{#if $openSidebarMain}
				<div class="absolute inset-0 z-20 bg-black/80 backdrop-blur-sm lg:hidden"></div>
			{/if}
		</div>
	</main>
</div>
