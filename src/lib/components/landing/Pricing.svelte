<script lang="ts">
  import { Check, ArrowRight, Lightbulb } from '@lucide/svelte';
	import { Programs } from '$lib';
	import { formatPrice } from '$lib';

</script>

<section id="price" class="relative w-full overflow-hidden bg-gray-50 px-4 py-16 dark:bg-gray-950 md:px-6 md:py-24">

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

  <div class="absolute left-0 top-20 h-20 w-20 border-3 border-black bg-red-500 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:h-24 md:w-24"></div>
  <div class="absolute bottom-20 right-0 h-16 w-16 border-3 border-black bg-green-400 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:h-20 md:w-20"></div>

  <div class="relative z-10 mx-auto max-w-7xl">

    <div class="mb-12 text-center md:mb-16">
      <h2 class="mb-4 text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
        Pilih Program Ujianmu
      </h2>
      <p class="mx-auto max-w-2xl text-base font-semibold text-gray-700 dark:text-gray-300 md:text-lg">
        Dua pilihan tes standar untuk membuka peluang akademik dan profesionalmu
      </p>

      <div class="mx-auto mt-6 flex w-fit items-center gap-3">
        <div class="h-[3px] w-12 bg-black dark:bg-white"></div>
        <div class="h-3 w-3 rotate-45 border-2 border-black dark:border-white"></div>
        <div class="h-[3px] w-12 bg-black dark:bg-white"></div>
      </div>
    </div>

    <div class="grid gap-8 md:grid-cols-2 lg:gap-12">
      {#each Programs as program, i}
        <div class="group relative">

          <div class="relative border-3 border-black bg-white shadow-[6px_6px_0_#000] transition-all duration-300 hover:shadow-[8px_8px_0_#000] dark:border-white dark:bg-black dark:shadow-[6px_6px_0_#fff] dark:hover:shadow-[8px_8px_0_#fff]">

            <div class="relative border-b-3 border-black p-6 {program.color} dark:border-white md:p-8">
              <h3 class="mb-2 text-3xl font-black uppercase tracking-tight text-black md:text-4xl">
                {program.title}
              </h3>

              <div class="mt-4 inline-block border-2 border-black bg-white px-4 py-2 shadow-[3px_3px_0_#000]">
                <span class="text-2xl font-black text-black md:text-3xl">
                  {formatPrice(program.price)}
                </span>
              </div>
            </div>

            <div class="p-6 md:p-8">

              <p class="mb-6 text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-base">
                {program.desc}
              </p>

              <div class="mb-6 space-y-3">
                <div class="mb-4 inline-block border-2 border-black bg-gray-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-black shadow-[2px_2px_0_#000] dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_#fff]">
                  Yang Kamu Dapatkan
                </div>

                {#each program.benefit as item}
                  <div class="flex items-start gap-3">
                    <!-- Check Icon -->
                    <div class="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border-2 border-black bg-white dark:border-white dark:bg-black">
                      <Check class="h-3 w-3 text-black dark:text-white" strokeWidth={3} />
                    </div>

                    <p class="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item}
                    </p>
                  </div>
                {/each}
              </div>

              <button class="group/btn flex w-full items-center justify-center gap-2 border-3 border-black bg-black px-6 py-3 font-bold uppercase tracking-tight text-white shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[6px_6px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:border-white dark:bg-white dark:text-black dark:shadow-[4px_4px_0_#fff] dark:hover:shadow-[6px_6px_0_#fff] dark:active:shadow-none">
                Daftar Sekarang
                <ArrowRight class="h-5 w-5 transition-transform duration-200 group-hover/btn:translate-x-1" strokeWidth={2.5} />
              </button>
            </div>

            <div class="absolute bottom-2 left-2 h-3 w-3 border-2 border-black dark:border-white"></div>
            <div class="absolute right-2 top-2 h-3 w-3 border-2 border-black dark:border-white"></div>
          </div>

          {#if i === 0}
            <div class="absolute -right-2 -top-2 rotate-3 border-2 border-black bg-red-500 px-3 py-1 text-xs font-black uppercase text-white shadow-[3px_3px_0_#000] dark:border-white dark:shadow-[3px_3px_0_#fff]">
              Populer
            </div>
          {/if}
        </div>
      {/each}
    </div>

    <div class="mt-12 text-center md:mt-16">
      <div class="inline-block border-3 border-black bg-white px-6 py-4 shadow-[4px_4px_0_#000] dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff]">
        <p class="text-sm font-bold text-gray-900 dark:text-gray-100 flex gap-2">
          <Lightbulb/> <span class="uppercase">Harga sudah termasuk</span> Sertifikat digital, dan konsultasi hasil
        </p>
      </div>
    </div>
  </div>
</section>
