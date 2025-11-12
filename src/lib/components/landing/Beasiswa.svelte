<script lang="ts">
  import emblaCarousel from 'embla-carousel';
  import Autoplay from 'embla-carousel-autoplay';
  import { onMount } from 'svelte';
  import { Check, ArrowRight, ChevronLeft, ChevronRight, Award } from '@lucide/svelte';
	import { Banners, Beasiswa } from '$lib';

  let viewport: HTMLElement;
  let emblaApi: any;

  onMount(() => {
    emblaApi = emblaCarousel(viewport, { loop: true }, [Autoplay({ delay: 4000 })]);
    return () => emblaApi.destroy();
  });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();
</script>

<section id="beasiswa" class="relative w-full overflow-hidden bg-gray-50 px-4 py-16 dark:bg-gray-950 md:px-6 md:py-24">

  <div class="absolute inset-0 z-0">
    <div class="h-full w-full" style="background-image:
      linear-gradient(to right, rgb(0 0 0 / 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(0 0 0 / 0.08) 1px, transparent 1px);
      background-size: 60px 60px;">
    </div>

    <div class="absolute inset-0 hidden dark:block" style="background-image:
      linear-gradient(to right, rgb(255 255 255 / 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(255 255 255 / 0.08) 1px, transparent 1px);
      background-size: 60px 60px;">
    </div>
  </div>

  <div class="absolute left-10 top-10 h-20 w-20 border-3 border-black bg-purple-500 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:h-24 md:w-24"></div>
  <div class="absolute bottom-20 right-10 h-16 w-16 border-3 border-black bg-yellow-400 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:h-20 md:w-20"></div>

  <div class="relative z-10 mx-auto max-w-7xl">

    <div class="mb-12 text-center md:mb-16">
      <div class="mb-4 inline-flex items-center gap-2 border-2 border-black bg-yellow-400 px-4 py-2 shadow-[3px_3px_0_#000] dark:border-white dark:shadow-[3px_3px_0_#fff]">
        <Award class="h-5 w-5 text-black" strokeWidth={2.5} />
        <span class="text-sm font-black uppercase tracking-tight text-black">Program Beasiswa</span>
      </div>

      <h2 class="mb-4 text-3xl font-black uppercase leading-tight tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl lg:text-5xl">
        {Beasiswa.title}
      </h2>

      <div class="mx-auto mt-6 flex w-fit items-center gap-3">
        <div class="h-[3px] w-12 bg-black dark:bg-white"></div>
        <div class="h-3 w-3 rotate-45 border-2 border-black dark:border-white"></div>
        <div class="h-[3px] w-12 bg-black dark:bg-white"></div>
      </div>
    </div>

    <div class="grid gap-8 lg:grid-cols-2 lg:gap-12">

      <div class="relative">

        <div class="embla relative overflow-hidden border-3 border-black bg-white shadow-[6px_6px_0_#000] dark:border-white dark:bg-black dark:shadow-[6px_6px_0_#fff]" bind:this={viewport}>
          <div class="embla__container flex">
            {#each Banners as banner}
              <div class="embla__slide relative flex min-w-0 flex-[0_0_100%] items-center justify-center {banner.color}">
                <div class="flex h-full w-full flex-col items-center justify-center p-8 md:p-12">
                  <div class="mb-4 flex h-20 w-20 items-center justify-center border-3 border-black bg-white shadow-[4px_4px_0_#000]">
                    <Award class="h-10 w-10 text-black" strokeWidth={2.5} />
                  </div>
                  <h3 class="text-center text-2xl font-black uppercase text-black md:text-3xl">
                    {banner.title}
                  </h3>
                </div>

              </div>
            {/each}
          </div>
        </div>

        <button
          onclick={scrollPrev}
          class="absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-3 border-black bg-white shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] active:translate-x-[4px] active:translate-y-[calc(-50%+4px)] active:shadow-none dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff] dark:hover:shadow-[6px_6px_0_#fff]"
          aria-label="Previous slide"
        >
          <ChevronLeft class="h-6 w-6 text-black dark:text-white" strokeWidth={3} />
        </button>

        <button
          onclick={scrollNext}
          class="absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-3 border-black bg-white shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] active:translate-x-[4px] active:translate-y-[calc(-50%+4px)] active:shadow-none dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff] dark:hover:shadow-[6px_6px_0_#fff]"
          aria-label="Next slide"
        >
          <ChevronRight class="h-6 w-6 text-black dark:text-white" strokeWidth={3} />
        </button>
      </div>

      <div class="flex flex-col justify-center">

        <p class="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
          {Beasiswa.desc}
        </p>

        <div class="mb-6 space-y-4">
          <div class="mb-4 inline-block border-2 border-black bg-gray-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0_#000] dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_#fff]">
            Keuntungan Beasiswa
          </div>

          {#each Beasiswa.benefit as item}
            <div class="flex items-start gap-3">
              <div class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center border-2 border-black bg-yellow-400 shadow-[2px_2px_0_#000] dark:border-white dark:shadow-[2px_2px_0_#fff]">
                <Check class="h-4 w-4 text-black" strokeWidth={3} />
              </div>

              <p class="text-sm font-semibold text-gray-700 dark:text-gray-300 md:text-base">
                {item}
              </p>
            </div>
          {/each}
        </div>

        <a
          href={Beasiswa.cta.link}
          target="_blank"
          rel="noopener noreferrer"
          class="group/btn inline-flex w-full items-center justify-center gap-2 border-3 border-black bg-yellow-400 px-6 py-4 font-black uppercase tracking-tight text-black shadow-[5px_5px_0_#000] transition-all duration-200 hover:shadow-[7px_7px_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none dark:border-white dark:shadow-[5px_5px_0_#fff] dark:hover:shadow-[7px_7px_0_#fff] dark:active:shadow-none md:w-auto"
        >
          {Beasiswa.cta.text}
          <ArrowRight class="h-5 w-5 transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={3} />
        </a>
      </div>
    </div>
  </div>
</section>

<style>
  .embla {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
  }

  .embla__slide {
    min-height: 400px;
  }

  @media (min-width: 768px) {
    .embla__slide {
      min-height: 500px;
    }
  }
</style>
