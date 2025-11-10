<script lang="ts">
	import SidebarDashboard from '$lib/components/navigations/SidebarDashboard.svelte';
	let { children } = $props();
</script>

<div class="flex min-h-screen gap-3">
	<!-- <SidebarDashboard role ="peserta">
		{@render children?.()}
	</SidebarDashboard> -->
  <SidebarDashboard role ="admin">
		{@render children?.()}
	</SidebarDashboard>
</div>
