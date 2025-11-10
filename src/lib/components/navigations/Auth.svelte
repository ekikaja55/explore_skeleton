<script lang="ts">
	import { type ButtonProps, authGoogle, loadingAuth, messageHandleAuth } from '$lib';
	import Button from '$lib/components/buttons/Button.svelte';
	let {
		variant,
		label,
		imgSrc = null,
		loading = $loadingAuth,
		// loading = false, -> unremark ini + remark loading diatas kalo mau tes loading
		icon = null
	}: ButtonProps = $props();

	// unremark ini kalo cuma mau tes loading nya
	// function testLoading() {
	//   loading = true;
	// 	  setTimeout(() => {
	// 		loading = false;
	// 		goto('/onboarding');
	// 	}, 2000);
	// }

	$effect(() => {
		console.log('$effect di Auth komponen, message auth :', $messageHandleAuth);
	});
</script>

{#if $messageHandleAuth}
  
{/if}
<Button {label} {imgSrc} {variant} onClick={authGoogle} {loading} disabled={loading} {icon} />
