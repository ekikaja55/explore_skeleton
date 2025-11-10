<script lang="ts">
	import img from '$lib/assets/paralax1.jpg';

	import Button from '$lib/components/buttons/Button.svelte';
	import CaraouseStep from '$lib/components/caraousels/CarouselStep.svelte';
	import CaraouseVertical from '$lib/components/caraousels/CarouselVertical.svelte';

	import Parallax from '$lib/components/utils/Parallax.svelte';
	import { ArrowRight } from '@lucide/svelte';
	import PriceCard from '../lib/components/cards/PriceCard.svelte';
	import Card from '../lib/components/cards/Card.svelte';
</script>

<!-- wrapper global landing -->
<div class="flex flex-col gap-[5vh] overflow-x-hidden scroll-smooth min-w-screen">
	<!-- Hero section -->
	<Parallax imageUrl={img} speed={0.3}>
		<div
			class="animate-fade-in flex flex-col items-center space-y-6 text-center transition-opacity duration-700 ease-out"
			id="#"
		>
			<h1 class="text-4xl font-bold tracking-wide md:text-6xl">
				<span class="text-gray-100 transition-all duration-300"> Gali Potensimu di </span>
				<span
					class="ml-4 rounded-2xl bg-surface-contrast-950-50 px-5 py-2 tracking-tight text-gray-950 dark:text-gray-100"
				>
					iSTTS<span class="text-blue-500">-exam</span>
				</span>
			</h1>

			<p
				class="max-w-xl text-sm leading-relaxed font-semibold text-gray-100 font-stretch-ultra-expanded md:max-w-2xl md:text-base dark:text-gray-200"
			>
				Membangun standar evaluasi berbasis inovasi dan keunggulan akademik — menghadirkan evaluasi
				cerdas untuk masa depan, melalui transformasi cara belajar dan mengukur kemampuan.
			</p>

			<Button label="Pelajari Lebih Lanjut" href="/auth" variant="glass" icon={ArrowRight} />
		</div>
	</Parallax>

	<!-- About section -->
	<div class="" id="about"></div>
	<div class=" grid min-h-20 grid-cols-[1fr_1fr] gap-6 p-3 md:gap-10">
		<div class="flex flex-col items-end justify-center gap-4 tracking-wide">
			<h1 class="font-bold md:text-xl lg:text-3xl">Apa yang bisa kamu temukan di</h1>
			<span
				class="rounded-2xl bg-surface-contrast-50-950 p-2 text-2xl font-bold tracking-tight text-gray-100 md:text-3xl lg:text-4xl dark:text-gray-950"
			>
				iSTTS<span class="text-blue-500">-exam</span> ?
			</span>
		</div>
		<CaraouseVertical axis="y" delay={4000} />
	</div>

	<!-- Guide Start section -->
	<div class="" id="guide"></div>
	<div class="flex min-h-50 flex-col items-center justify-center gap-6 bg-gray-100 dark:bg-gray-800 p-5">
		<h1 class="text-xl font-bold tracking-wide md:text-xl lg:text-3xl">Guide Start</h1>
		<p class="text-sm tracking-wide text-gray-700 md:text-lg dark:text-gray-50">
			Ikuti panduan dibawah ini untuk mendaftar <span class="font-bold text-blue-500 underline"
				>exam</span
			> pertama kamu !
		</p>
		<CaraouseStep />
	</div>

	<div class="flex min-h-50 flex-col items-center gap-6  ">
		<h1 class="text-xl font-bold tracking-wide md:text-xl lg:text-3xl">Price List</h1>
		<p class="text-sm tracking-wide text-gray-700 md:text-lg dark:text-gray-50">
			Ikuti panduan dibawah ini untuk mendaftar <span class="font-bold text-blue-500 underline"
				>exam</span
			> pertama kamu !
		</p>
		<div class="flex justify-evenly min-w-screen">
			<!-- <PriceCard/> -->
		</div>
	</div>
</div>
