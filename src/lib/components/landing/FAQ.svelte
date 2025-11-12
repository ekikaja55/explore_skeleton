<script lang="ts">
  import { Plus, Minus, MessageCircleQuestionMark } from '@lucide/svelte';
	import { FaqSection } from '$lib';
  let openIndex = $state<number | null>(null);
  const toggle = (index: number) => {
    openIndex = openIndex === index ? null : index;
  };
</script>

<section id="faq" class="relative w-full overflow-hidden bg-gray-50 px-4 py-16 dark:bg-gray-950 md:px-6 md:py-24">
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

  <div class="absolute left-0 top-20 h-20 w-20 border-3 border-black bg-green-400 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:h-24 md:w-24"></div>
  <div class="absolute bottom-20 right-0 h-16 w-16 border-3 border-black bg-purple-500 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)] md:h-20 md:w-20"></div>

  <div class="relative z-10 mx-auto max-w-4xl">

    <div class="mb-12 text-center md:mb-16">
      <div class="mb-4 inline-flex items-center gap-2 border-2 border-black bg-blue-500 px-4 py-2 shadow-[3px_3px_0_#000] dark:border-white dark:shadow-[3px_3px_0_#fff]">
        <MessageCircleQuestionMark class="h-5 w-5 text-white" strokeWidth={2.5} />
        <span class="text-sm font-black uppercase tracking-tight text-white">FAQ</span>
      </div>

      <h2 class="mb-4 text-3xl font-black uppercase tracking-tight text-gray-900 dark:text-gray-100 md:text-4xl">
        Pertanyaan yang Sering Diajukan
      </h2>

      <p class="mx-auto max-w-2xl text-base font-semibold text-gray-700 dark:text-gray-300 md:text-lg">
        Temukan jawaban atas pertanyaan umum seputar ujian TOEFL & TPA di iSTTS-exam
      </p>

      <div class="mx-auto mt-6 flex w-fit items-center gap-3">
        <div class="h-[3px] w-12 bg-black dark:bg-white"></div>
        <div class="h-3 w-3 rotate-45 border-2 border-black dark:border-white"></div>
        <div class="h-[3px] w-12 bg-black dark:bg-white"></div>
      </div>
    </div>

    <div class="space-y-4">
      {#each FaqSection as faq, i}
        <div class="group relative">

          <div class="border-3 border-black bg-white shadow-[4px_4px_0_#000] transition-all duration-300 dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff]"
               class:shadow-[6px_6px_0_#000]={openIndex === i}
               class:dark:shadow-[6px_6px_0_#fff]={openIndex === i}>

            <div class="absolute left-0 top-0 h-full w-2 {
              i % 4 === 0 ? 'bg-yellow-400' :
              i % 4 === 1 ? 'bg-blue-500' :
              i % 4 === 2 ? 'bg-red-500' :
              'bg-green-400'
            }"></div>

            <button
              onclick={() => toggle(i)}
              class="flex w-full items-start gap-4 p-5 text-left transition-colors md:p-6"
              aria-expanded={openIndex === i}
            >
              <div class="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black bg-gray-50 shadow-[2px_2px_0_#000] dark:border-white dark:bg-gray-900 dark:shadow-[2px_2px_0_#fff]">
                <span class="text-sm font-black text-black dark:text-white">
                  {i + 1}
                </span>
              </div>

              <span class="flex-1 pr-4 text-base font-bold text-gray-900 dark:text-gray-100 md:text-lg">
                {faq.question}
              </span>

              <div class="flex h-8 w-8 shrink-0 items-center justify-center border-2 border-black bg-white transition-transform duration-300 dark:border-white dark:bg-black"
                   class:rotate-180={openIndex === i}>
                {#if openIndex === i}
                  <Minus class="h-5 w-5 text-black dark:text-white" strokeWidth={3} />
                {:else}
                  <Plus class="h-5 w-5 text-black dark:text-white" strokeWidth={3} />
                {/if}
              </div>
            </button>

            {#if openIndex === i}
              <div class="border-t-3 border-black px-5 pb-5 dark:border-white md:px-6 md:pb-6"
                   style="animation: slideDown 0.3s ease-out;">
                <div class="ml-12 pt-4">
                  <p class="text-sm leading-relaxed text-gray-700 dark:text-gray-300 md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            {/if}

            <div class="absolute bottom-2 right-2 h-3 w-3 border-2 border-black dark:border-white"></div>
          </div>
        </div>
      {/each}
    </div>


  </div>
</section>

<style>
  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
</style>
