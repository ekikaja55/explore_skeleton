<script lang="ts">
	import { isDashboard, openSidebarMain } from '$lib';
	import { GroupIcon, HouseIcon, PhoneCall } from '@lucide/svelte';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';

	const linksList = [
		{ href: '/', label: 'Home', icon: HouseIcon },
		{ href: '#about', label: 'About', icon: PhoneCall },
		{ href: '#guide', label: 'Guide', icon: GroupIcon }
	];

	let anchorSidebar =
		'flex items-center gap-3 rounded-lg px-3 py-2 transition-all  duration-200 text-gray-950 hover:bg-surface-200/60 dark:hover:bg-surface-800/60 dark:text-gray-100 hover:text-primary-600 dark:hover:text-primary-400';
</script>

<div
	class="fixed top-[97px] z-100 h-[calc(100vh-100px)] border-e border-surface-200 transition-all duration-300 lg:hidden dark:border-surface-800/50"
>
	<Navigation
		layout="sidebar"
		class="grid grid-rows-[auto_1fr] gap-6  bg-surface-50/80   dark:bg-surface-900/60  "
	>
		<Navigation.Header class="border-b border-surface-200/50 pb-2 dark:border-surface-800/50">
			<a
				href="/"
				class="block text-2xl font-extrabold tracking-tight text-gray-950 dark:text-gray-100"
			>
				iSTTS<span class="text-blue-500">-exam</span>
			</a>
		</Navigation.Header>

		<Navigation.Content class="flex flex-col gap-6">
			<Navigation.Group>
				<Navigation.Menu onclick={() => openSidebarMain.set(false)}>
					{#each linksList as item}
						{#if !$isDashboard }
							{@const Icon = item.icon}
							<a href="/" class={anchorSidebar}>
								<Icon class="size-4 opacity-80" />
								<span>{item.label}</span>
							</a>
						{:else}
							{@const Icon = item.icon}
							<a href={item.href} class={anchorSidebar}>
								<Icon class="size-4 opacity-80" />
								<span>{item.label}</span>
							</a>
						{/if}
					{/each}
				</Navigation.Menu>
			</Navigation.Group>
		</Navigation.Content>
	</Navigation>
</div>
