<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ButtonProps } from '../../../types';
	import Button from '../../buttons/Button.svelte';
	let {
		variant,
		label,
		imgSrc = null,
		loading = false,
		icon = null
	}: ButtonProps = $props();

	function handleGoogle() {
		loading = true;
		setTimeout(() => {
			loading = false;
			goto('/auth');
		}, 2000);
	}
</script>

<Button
	{label}
	{imgSrc}
	{variant}
	onClick={handleGoogle}
	{loading}
	disabled={loading}
	{icon}
/>
