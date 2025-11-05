<script lang="ts">
	import { ArrowRight } from '@lucide/svelte';
	import CaraouselAutoPlay from '../lib/components/caraousels/CaraouselAutoPlay.svelte';
	import CarouselAutoScroll from '../lib/components/caraousels/CarouselAutoScroll.svelte';
	import Parallax from '../lib/components/utils/Parallax.svelte';
	import Button from '../lib/components/buttons/Button.svelte';
</script>

<Parallax imageUrl="/assets/paralax1.jpg" speed={0.3}>
	<div
		class="animate-fade-in flex flex-col items-center space-y-6 text-center transition-opacity duration-700 ease-out"
	>
		<h1 class="text-4xl font-bold tracking-tight md:text-6xl">
			<span class="text-gray-100 transition-all duration-300"> Gali Potensimu di </span>
			<span class="ml-4 rounded-2xl bg-surface-50 px-5 py-2 tracking-tight text-primary-700">
				iSTTS<span class="text-primary-500">-exam</span>
			</span>
		</h1>

		<p
			class="max-w-xl text-sm leading-relaxed font-semibold text-gray-100 font-stretch-ultra-expanded md:max-w-2xl md:text-base dark:text-gray-200"
		>
			Membangun standar evaluasi berbasis inovasi dan keunggulan akademik — menghadirkan evaluasi
			cerdas untuk masa depan, melalui transformasi cara belajar dan mengukur kemampuan.
		</p>

    <Button  label="Pelajari Lebih Lanjut" href="/auth" variant="glass" icon={ArrowRight}/>
	</div>
</Parallax>

<div class="mb-10 flex flex-col gap-6">
	<CarouselAutoScroll />
	<CaraouselAutoPlay
		images={['/assets/paralax1.jpg', '/assets/paralax2.jpg', '/assets/paralax3.jpg']}
		delay={3000}
		loop={true}
	/>
</div>
