<script lang="ts">
	import { openSidebarMain } from '$lib';
	import img from '$lib/assets/google-icon.svg';
	import Auth from '$lib/components/navigations/Auth.svelte';
	import LightSwitch from '$lib/components/utils/LightSwitch.svelte';
	import { MenuIcon } from '@lucide/svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';

	const linksList = [
		{ href: '/', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#guide', label: 'Guide' },
		{ href: '#price', label: 'Price' }

		// { href: '/about', label: 'Contact' },
		// { href: '/contact', label: 'About' }
	];

	let open = false;
</script>

<AppBar
	class="fixed top-0 z-100 border-b-success-contrast-light  bg-surface-50/90 text-gray-800 backdrop-blur-xl transition-all duration-300 dark:bg-surface-900/80 dark:text-white "
>
	<AppBar.Toolbar
		class="grid grid-cols-[auto_auto_auto] items-center justify-between px-4 py-2 sm:px-8 "
	>
		<AppBar.Lead class="flex items-center gap-3">
			<button
				onclick={() => openSidebarMain.set((open = !open))}
				type="button"
				class="btn-icon btn transition-transform duration-300 hover:scale-110 hover:preset-tonal md:hidden"
				aria-label="Toggle menu"
			>
				<MenuIcon class="size-6" />
			</button>
			<a
				href="/"
				class="hidden text-2xl font-extrabold tracking-tight text-gray-950 md:block dark:text-gray-100"
			>
				iSTTS<span class="text-blue-500">-exam</span>
			</a>
		</AppBar.Lead>

		<AppBar.Trail class="flex items-center justify-center gap-10">
			<nav
				class="hidden items-center gap-8 font-medium tracking-wide text-gray-950 md:flex dark:text-gray-100"
			>
				{#each linksList as link}
					<a
						href={link.href}
						class="group relative after:absolute after:bottom-0 after:left-1/2 after:h-0.5 after:w-0 after:bg-surface-600 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full dark:after:bg-surface-50"
					>
						<span
							class="transition-colors duration-300 group-hover:text-surface-700 dark:group-hover:text-surface-50"
							>{link.label}</span
						>
					</a>
				{/each}
			</nav>
		</AppBar.Trail>

		<AppBar.Trail class="gap-6">
			<Auth label="Continue" imgSrc={img} variant="neutral" />
			<!-- <TestButton label="test" icon={ArrowRight}/> -->
			<LightSwitch />
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
