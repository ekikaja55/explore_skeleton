<script lang="ts">
	import emblaCarousel from 'embla-carousel';
	import Autoplay from 'embla-carousel-autoplay';
	import { onMount } from 'svelte';

	export let classCustom: string = '';
	export let delay: number = 3000;
	export let loop: boolean = true;
	export let axis: 'x' | 'y' = 'x';

	const data = [
		{
			title: 'Ujian Digital Terintegrasi',
			desc: 'Platform ujian terpadu yang memudahkan mahasiswa dan dosen dalam mengelola, mengerjakan, serta menilai ujian secara efisien.'
		},
		{
			title: 'Analisis Hasil yang Akurat',
			desc: 'Setiap jawaban diproses otomatis dengan sistem evaluasi cerdas untuk memberikan hasil yang cepat dan objektif.'
		},
		{
			title: 'Dashboard Pembelajaran Interaktif',
			desc: 'Pantau progres akademik, riwayat ujian, dan statistik performa dalam tampilan visual yang informatif.'
		},
		{
			title: 'Sistem Keamanan Akademik',
			desc: 'Data pengguna dan hasil ujian dilindungi dengan enkripsi tingkat tinggi untuk menjamin integritas akademik.'
		},
		{
			title: 'Dukungan Pembelajaran Berkelanjutan',
			desc: 'Dirancang untuk membantu mahasiswa memahami materi, bukan sekadar lulus ujian.'
		}
	];

	let viewport: HTMLElement;

	onMount(() => {
		const embla = emblaCarousel(viewport, { loop, axis }, [Autoplay({ delay })]);
		return () => embla.destroy();
	});
</script>

<div class={`embla relative overflow-hidden ${classCustom}`} bind:this={viewport}>
	<div class={`embla__container flex ${axis === 'y' ? 'flex-col' : 'flex-row'}`}>
		{#if data.length > 0}
			{#each data as item, i (i)}
				<div
					class={`embla__slide flex-[0_0_100%] ${
						axis === 'y' ? 'h-full' : 'w-full'
					} flex items-center justify-start `}
				>
					<div class="flex w-70 flex-col gap-5 md:w-[70%]">
						<div class="mx-auto">
							<div class="relative rounded-2xl  p-8 backdrop-blur-xl dark:bg-gray-800">
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

									<h2 class="mb-2 text-xl  lg:text-3xl font-bold ">{item.title}</h2>

									<p class="mb-8 text-sm lg:text-lg">
										{item.desc}
									</p>
								</div>
							</div>
						</div>

					</div>
				</div>
			{/each}
		{:else}
			<div class="flex h-64 flex-[0_0_100%] items-center justify-center text-gray-500">
				No Data available
			</div>
		{/if}
	</div>
</div>

<style>
	.embla {
		max-width: 48rem;
		margin: auto;
		--slide-height: 19rem;
		--slide-spacing: 0.5rem;
		--slide-size: 100%;
	}
	.embla__viewport {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
		touch-action: pan-x pinch-zoom;
		margin-top: calc(var(--slide-spacing) * -1);
		height: calc(var(--slide-spacing) + var(--slide-height));
		flex-direction: column;
	}
	.embla__slide {
		transform: translate3d(0, 0, 0);
		flex: 0 0 var(--slide-size);
		min-height: 0;
		padding-top: var(--slide-spacing);
	}
	.embla__slide__number {
		box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
		border-radius: 1.8rem;
		font-size: 4rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100%;
		user-select: none;
	}
	.embla__controls {
		display: grid;
		grid-template-columns: auto 1fr;
		justify-content: space-between;
		gap: 1.2rem;
		margin-top: 1.8rem;
	}
	.embla__buttons {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: 0.6rem;
		align-items: center;
	}
	.embla__button {
		-webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
		-webkit-appearance: none;
		appearance: none;
		background-color: transparent;
		touch-action: manipulation;
		display: inline-flex;
		text-decoration: none;
		cursor: pointer;
		border: 0;
		padding: 0;
		margin: 0;
		box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
		width: 3.6rem;
		height: 3.6rem;
		z-index: 1;
		border-radius: 50%;
		color: var(--text-body);
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.embla__button:disabled {
		color: var(--detail-high-contrast);
	}
	.embla__button__svg {
		width: 35%;
		height: 35%;
	}
	.embla__dots {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		align-items: center;
		margin-right: calc((2.6rem - 1.4rem) / 2 * -1);
	}
	.embla__dot {
		-webkit-tap-highlight-color: rgba(var(--text-high-contrast-rgb-value), 0.5);
		-webkit-appearance: none;
		appearance: none;
		background-color: transparent;
		touch-action: manipulation;
		display: inline-flex;
		text-decoration: none;
		cursor: pointer;
		border: 0;
		padding: 0;
		margin: 0;
		width: 2.6rem;
		height: 2.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
	}
	.embla__dot:after {
		box-shadow: inset 0 0 0 0.2rem var(--detail-medium-contrast);
		width: 1.4rem;
		height: 1.4rem;
		border-radius: 50%;
		display: flex;
		align-items: center;
		content: '';
	}
	.embla__dot--selected:after {
		box-shadow: inset 0 0 0 0.2rem var(--text-body);
	}
</style>
