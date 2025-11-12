<script lang="ts">
  import emblaCarousel from 'embla-carousel';
  import Autoplay from 'embla-carousel-autoplay';
  import { onMount } from 'svelte';
  import { FileText, ChartBar, LayoutDashboard, ShieldCheck, GraduationCap } from '@lucide/svelte';

  export let delay: number = 3000;
  export let loop: boolean = true;

  const data = [
    {
      title: 'Ujian Digital Terintegrasi',
      desc: 'Platform ujian terpadu yang memudahkan mahasiswa dan dosen dalam mengelola, mengerjakan, serta menilai ujian secara efisien.',
      color: 'bg-yellow-400',
      icon: FileText
    },
    {
      title: 'Analisis Hasil yang Akurat',
      desc: 'Setiap jawaban diproses otomatis dengan sistem evaluasi cerdas untuk memberikan hasil yang cepat dan objektif.',
      color: 'bg-blue-500',
      icon: ChartBar
    },
    {
      title: 'Dashboard Pembelajaran Interaktif',
      desc: 'Pantau progres akademik, riwayat ujian, dan statistik performa dalam tampilan visual yang informatif.',
      color: 'bg-red-500',
      icon: LayoutDashboard
    },
    {
      title: 'Sistem Keamanan Akademik',
      desc: 'Data pengguna dan hasil ujian dilindungi dengan enkripsi tingkat tinggi untuk menjamin integritas akademik.',
      color: 'bg-green-400',
      icon: ShieldCheck
    },
    {
      title: 'Dukungan Pembelajaran Berkelanjutan',
      desc: 'Dirancang untuk membantu mahasiswa memahami materi, bukan sekadar lulus ujian.',
      color: 'bg-purple-500',
      icon: GraduationCap
    }
  ];

  let viewport: HTMLElement;

  onMount(() => {
    const embla = emblaCarousel(viewport, { loop, axis: 'y' }, [Autoplay({ delay })]);
    return () => embla.destroy();
  });
</script>

<div class="embla relative w-full overflow-hidden md:w-auto" bind:this={viewport}>
  <div class="embla__container flex flex-col">
    {#if data.length > 0}
      {#each data as item, i (i)}
        <div class="embla__slide flex h-full flex-[0_0_100%] items-center justify-start">

          <div class="group relative w-full border-3 border-black bg-white p-6 shadow-[6px_6px_0_#000] transition-all duration-300 hover:shadow-[8px_8px_0_#000] dark:border-white dark:bg-black dark:shadow-[6px_6px_0_#fff] dark:hover:shadow-[8px_8px_0_#fff] md:p-8">

            <div class="absolute left-0 top-0 h-full w-2 {item.color}"></div>

            <div class="mb-4 inline-flex items-center justify-center border-2 border-black bg-white p-3 shadow-[3px_3px_0_#000] dark:border-white dark:bg-black dark:shadow-[3px_3px_0_#fff]">
              <svelte:component this={item.icon} class="h-6 w-6 text-black dark:text-white" strokeWidth={2.5} />
            </div>

            <div class="pl-4">
              <h3 class="mb-3 text-xl font-bold uppercase tracking-tight text-gray-900 dark:text-gray-100 md:text-2xl">
                {item.title}
              </h3>

              <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-base">
                {item.desc}
              </p>
            </div>

            <!-- Corner Decoration -->
            <div class="absolute bottom-2 right-2 h-3 w-3 border-2 border-black dark:border-white"></div>
          </div>

        </div>
      {/each}
    {:else}
      <div class="flex h-64 flex-[0_0_100%] items-center justify-center border-3 border-black bg-white text-gray-500 dark:border-white dark:bg-black">
        No Data available
      </div>
    {/if}
  </div>
</div>

<style>
  .embla {
    max-width: 100%;
    margin: auto;
    --slide-height: 20rem;
    --slide-spacing: 1rem;
    --slide-size: 100%;
  }

  .embla__container {
    display: flex;
    touch-action: pan-y pinch-zoom;
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

  @media (min-width: 768px) {
    .embla {
      max-width: 48rem;
    }
  }
</style>
