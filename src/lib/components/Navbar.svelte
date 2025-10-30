<script lang="ts">
	import { ArrowRight, LogIn, MenuIcon } from '@lucide/svelte';
	import { AppBar } from '@skeletonlabs/skeleton-svelte';
	import LightSwitch from './LightSwitch.svelte';
  let openSidebar =false
</script>

<AppBar
	class="sticky top-0 z-[100] border-b border-surface-200/50 bg-surface-50/80 text-primary-950 backdrop-blur-xl transition-all duration-300 dark:bg-surface-900/60 dark:text-white"
>
	<AppBar.Toolbar
		class="grid grid-cols-[auto_1fr_auto] items-center px-4 py-2 sm:px-8 lg:grid-cols-[1fr_auto_auto]"
	>
		<AppBar.Lead class="flex items-center gap-3">
			<button
				type="button"
				class="btn-icon btn transition-transform duration-300 hover:scale-110 hover:preset-tonal lg:hidden"
				aria-label="Toggle menu"
			>
				<MenuIcon class="size-6" />
			</button>
			<a href="/" class="text-2xl font-extrabold tracking-tight"> ISTTS.edu </a>
		</AppBar.Lead>

		<AppBar.Trail class="flex items-center justify-end gap-4">
			<nav
				class="hidden items-center gap-8 font-medium tracking-wide text-surface-700 md:flex dark:text-surface-300"
			>
				{#each [{ href: '/', label: 'Home' }, { href: '/about', label: 'About' }, { href: '/contact', label: 'Contact' }] as link}
					<a
						href={link.href}
						class="group relative after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:bg-surface-600 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full dark:after:bg-surface-50"
					>
						<span
							class="transition-colors duration-300 group-hover:text-surface-700 dark:group-hover:text-surface-50"
							>{link.label}</span
						>
					</a>
				{/each}
			</nav>

			<button
				type="button"
				class="group hidden items-center gap-2 rounded-xl px-4 py-2 font-semibold text-surface-900 transition-all duration-300 hover:bg-surface-200/80 lg:flex dark:text-surface-100 dark:hover:bg-surface-800/60"
			>
				<a href="/login" class="flex items-center gap-2">
					<span class="transition-transform duration-300 group-hover:translate-x-1">Sign In</span>
					<LogIn
						class="size-5 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
					/>
				</a>
			</button>

			<button
				type="button"
				class="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-primary-600 to-secondary-500 px-5 py-2 font-semibold text-white shadow-md transition-all duration-300 hover:shadow-xl hover:brightness-110 lg:flex"
			>
				<a href="/get-started" class="flex items-center gap-2">
					<span class="transition-transform duration-300 group-hover:-translate-x-1"
						>Get Started</span
					>
					<ArrowRight
						class="size-5 translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
					/>
				</a>
			</button>

			<div class="pl-2">
				<LightSwitch />
			</div>
		</AppBar.Trail>
	</AppBar.Toolbar>
</AppBar>
