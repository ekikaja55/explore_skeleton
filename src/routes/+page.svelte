<script lang="ts">
	import About from '$lib/components/landing/About.svelte';
	import Hero from '$lib/components/landing/Hero.svelte';
	import StepGuide from '$lib/components/landing/StepGuide.svelte';
	import Pricing from '$lib/components/landing/Pricing.svelte';
	import Beasiswa from '$lib/components/landing/Beasiswa.svelte';
	import FAQ from '$lib/components/landing/FAQ.svelte';
	import Whatsapp from '$lib/components/landing/Whatsapp.svelte';
</script>

<div class="flex min-w-screen flex-col mt-[10vh] overflow-x-hidden scroll-smooth">
	<Hero />
	<About />
	<StepGuide />
  <Pricing/>
  <Beasiswa/>
  <FAQ/>
  <Whatsapp/>
</div>
