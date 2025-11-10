<script lang="ts">
	import {
		BikeIcon,
		BookIcon,
		HouseIcon,
		PanelLeftClose,
		PanelRightClose,
		TreePalmIcon
	} from '@lucide/svelte';
	import { Navigation } from '@skeletonlabs/skeleton-svelte';
	let { children, role } = $props();

	const linksPeserta = [
		{ label: 'Home', href: '/dashboard/peserta', icon: HouseIcon },
		{ label: 'Menu 1', href: '/dashboard/peserta/menu1', icon: BookIcon },
		{ label: 'Menu 2', href: '/dashboard/peserta/menu2', icon: BikeIcon },
		{ label: 'Menu 3', href: '/dashboard/peserta/menu3', icon: TreePalmIcon }
	];

	const linksAdmin = [
		{ label: 'Home', href: '/dashboard/peserta', icon: HouseIcon },
		{ label: 'Menu 1 Admin', href: '/dashboard/peserta/menu1', icon: BookIcon },
		{ label: 'Menu 2 Admin', href: '/dashboard/peserta/menu2', icon: BikeIcon },
		{ label: 'Menu 3 Admin', href: '/dashboard/peserta/menu3', icon: TreePalmIcon }
	];

	let layoutRail = $state(false);

	function toggleLayout() {
		layoutRail = !layoutRail;
	}
</script>

<div class="grid h-auto w-full grid-cols-[auto_1fr] items-stretch ">
	<Navigation class="sticky top-[97px] flex h-[calc(100vh-100px)] flex-col justify-start ">
		<Navigation.Header>
			<button
				type="button"
				onclick={toggleLayout}
				class="flex w-full items-center p-2.5 transition-all duration-200"
			>
				<div class="flex p-3 rounded-2xl items-center justify-center  hover:bg-gray-700 hover:text-white">
					{#if layoutRail}
						<PanelRightClose class="size-5 shrink-0" />
					{:else}
						<PanelLeftClose class="size-5 shrink-0" />
					{/if}
				</div>
			</button>
		</Navigation.Header>
		<Navigation.Content>
			<Navigation.Menu class="flex flex-col  items-center gap-5 py-4 ">
				{#each role === 'admin' ? linksAdmin : linksPeserta as link (link)}
					{@const Icon = link.icon}
					<a
						href={link.href}
						class="group flex w-full items-center rounded-2xl p-3 transition-all duration-200 hover:bg-gray-700 hover:text-white"
					>
						<div class="flex w-10 items-center justify-center">
							<Icon class="size-5 shrink-0" />
						</div>
						<span
							class={`overflow-hidden whitespace-nowrap transition-all duration-200 ${
								layoutRail ? 'w-0 opacity-0' : 'w-auto opacity-100'
							}`}
						>
							{link.label}
						</span>
					</a>
				{/each}
			</Navigation.Menu>
		</Navigation.Content>
	</Navigation>
	<div class="flex flex-col p-5 mt-[10vh]">
		{@render children?.()}
	</div>
</div>
