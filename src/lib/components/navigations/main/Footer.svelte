<script lang="ts">
	import { House, Info, Instagram, Mail, MessageCircleMore, School } from '@lucide/svelte';

	const navLinks = [
		{ name: 'Home', href: '/', icon: House },
		{ name: 'About', href: '/about', icon: Info },
		{ name: 'Contact', href: '/contact', icon: Mail }
	];

	const socials = [
		{ href: 'https://istts.ac.id', icon: School, label: 'Web' },
		{ href: 'https://instagram.com/haloistts', icon: Instagram, label: 'Instagram' }
	];
</script>

<footer
	class="w-full border-t border-gray-400 bg-surface-100
	text-gray-800 transition-colors duration-300 dark:border-gray-800 dark:bg-surface-950 dark:text-gray-200 relative bottom-0"
>
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-6 py-12 md:flex-row"
	>
		<div class="flex flex-col items-center text-center md:items-start md:text-left">
			<h2 class="text-2xl font-bold tracking-tight">iSTTS-exam</h2>
			<p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
				Membangun standar evaluasi berbasis inovasi dan keunggulan akademik.
			</p>
		</div>

		<nav class="flex flex-wrap justify-center gap-6 text-sm font-medium md:justify-end">
			{#each navLinks as { name, href, icon }}
				<a
					{href}
					class="flex items-center gap-2 transition-colors duration-200 hover:text-indigo-600 dark:hover:text-indigo-400"
				>
					<svelte:component this={icon} class="size-4" />
					<span>{name}</span>
				</a>
			{/each}
		</nav>
	</div>

	<hr class="mx-6 border-gray-400 dark:border-gray-800" />

	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row"
	>
		<p class="text-sm text-gray-500 dark:text-gray-400">
			© {new Date().getFullYear()} iSTTS. All rights reserved.
		</p>

		<div class="flex gap-4">
			{#each socials as { href, icon, label }}
				<a
					{href}
					target="_blank"
					rel="noopener noreferrer"
					class="rounded-full p-2 transition-colors duration-200 hover:bg-gray-200 dark:hover:bg-gray-800"
					aria-label={label}
				>
					<svelte:component this={icon} class="size-5" />
				</a>
			{/each}
		</div>
	</div>
</footer>
