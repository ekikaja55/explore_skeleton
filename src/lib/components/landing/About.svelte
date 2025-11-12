<script lang="ts">
  import CarouselVertical from '$lib/components/caraousels/CarouselVertical.svelte';
</script>

<section id="about" class="relative w-full overflow-hidden bg-gray-50 py-16 dark:bg-gray-950 md:py-24">

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

  <div class="absolute right-10 top-10 h-20 w-20 border-3 border-black bg-blue-500 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:h-24 md:w-24"></div>
  <div class="absolute bottom-20 left-10 h-16 w-16 border-3 border-black bg-yellow-400 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:h-20 md:w-20"></div>

  <div class="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
    <div class="grid items-center gap-12 md:grid-cols-2 md:gap-16">

      <div class="flex flex-col items-center text-center md:items-end md:text-right">

        <div class="space-y-4">
          <h2 class="text-2xl font-bold uppercase leading-tight tracking-tight text-gray-900 dark:text-gray-100 md:text-3xl">
            Apa yang bisa kamu temukan di
          </h2>

          <div class="inline-block border-3 border-black bg-white px-5 py-2 shadow-[4px_4px_0_#000] dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff]">
            <span class="text-2xl font-black uppercase tracking-tight text-black dark:text-white md:text-3xl">
              iSTTS<span class="text-blue-600 dark:text-blue-400">-exam</span>
            </span>
          </div>
        </div>

        <p class="mt-6 max-w-md text-base leading-relaxed text-gray-700 dark:text-gray-300 md:max-w-lg md:text-lg">
          Platform ujian resmi iSTTS yang memudahkan kamu mengikuti TOEFL dan TPA
          dengan sistem modern, cepat, dan terintegrasi langsung dengan tim PMB.
        </p>

        <div class="mt-8 flex items-center gap-3">
          <div class="h-[3px] w-16 bg-black dark:bg-white"></div>
          <div class="h-3 w-3 rotate-45 border-2 border-black dark:border-white"></div>
          <div class="h-[3px] w-16 bg-black dark:bg-white"></div>
        </div>
      </div>

      <div class="flex justify-center md:justify-start">
        <CarouselVertical delay={4000} />
      </div>

    </div>
  </div>
</section>
