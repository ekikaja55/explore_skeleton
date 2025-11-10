<script lang="ts">
	import { ArrowLeft, ArrowRight } from '@lucide/svelte';
	import EmblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
	import { onMount } from 'svelte';
	import Button from '../buttons/Button.svelte';

	let embla: EmblaCarouselType;
	let viewport: HTMLElement;

	const data = [
		{
			title: 'Title 1: ',
			desc: 'Platform ujian terpadu yang memudahkan mahasiswa dan dosen dalam mengelola, mengerjakan, serta menilai ujian secara efisien.'
		},
		{
			title: 'Title 2:',
			desc: 'Setiap jawaban diproses otomatis dengan sistem evaluasi cerdas untuk memberikan hasil yang cepat dan objektif.'
		},
		{
			title: 'Title 3:',
			desc: 'Pantau progres akademik, riwayat ujian, dan statistik performa dalam tampilan visual yang informatif.'
		},
		{
			title: 'Title 4:',
			desc: 'Data pengguna dan hasil ujian dilindungi dengan enkripsi tingkat tinggi untuk menjamin integritas akademik.'
		},
		{
			title: 'Title 5:',
			desc: 'Dirancang untuk membantu mahasiswa memahami materi, bukan sekadar lulus ujian.'
		}
	];
	onMount(() => {
		embla = EmblaCarousel(viewport, { loop: false });
		return () => embla.destroy();
	});
</script>

<div class="relative overflow-hidden" bind:this={viewport}>
	<div class="flex p-6">
		{#each data as item, i}
			<div class="flex-[0_0_55%] lg:flex-[0_0_50%] min-w-0 w-25 md:w-38 lg:w-auto min-h-50 px-2 ">
				<div class="mx-auto ">
					<div
						class="relative rounded-2xl bg-surface-50 p-8  backdrop-blur-xl dark:bg-surface-900 h-60  lg:-h-auto  "
					>
						<div
							class="absolute top-0 left-0 h-20 w-25 rounded-tl-2xl border-t-2 border-l-5 border-indigo-500"
						></div>
						<div
							class="absolute top-0 right-0 h-20 w-20 rounded-tr-2xl border-t-2 border-r-5 border-red-400"
						></div>
						<div
							class="absolute bottom-0 left-0 h-20 w-20 rounded-bl-2xl border-b-2 border-l-5 border-yellow-500"
						></div>
						<div
							class="absolute right-0 bottom-0 h-20 w-20 rounded-br-2xl border-r-2 border-b-5 border-pink-500"
						></div>

						<div class="relative tracking-wide">
							<div
								class="text-sm md:text-md absolute -top-12 left-0 rounded-full bg-indigo-600 px-6 py-2
	 font-semibold text-white "
							>
								Step {i + 1}
							</div>
							<h2 class="mb-2 text-xl  lg:text-3xl font-bold">{item.title}</h2>

							<p class="mb-8 text-sm lg:text-lg">
								{item.desc}
							</p>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="flex gap-6">
	<Button onClick={() => embla.scrollPrev()} variant="neutral" icon={ArrowLeft} />
	<Button onClick={() => embla.scrollNext()} variant="neutral" icon={ArrowRight} />
</div>
