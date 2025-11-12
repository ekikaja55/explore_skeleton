<script lang="ts">
  import { MessageCircle, X } from '@lucide/svelte';

  let isExpanded = $state(false);
  let isVisible = $state(false);

  const phoneNumber = '6281333555070';
  const defaultMessage = `Halo PMB iSTTS! 👋

Saya tertarik untuk mendaftar ujian TOEFL/TPA melalui iSTTS-exam.

Mohon informasi lebih lanjut mengenai:
- Jadwal ujian tersedia
- Proses pendaftaran
- Metode pembayaran

Terima kasih! 🙏`;

  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  $effect(() => {
    const handleScroll = () => {
      isVisible = window.scrollY > 300;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  });

  const toggleExpand = () => {
    isExpanded = !isExpanded;
  };
</script>

{#if isVisible}
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-300 md:bottom-8 md:right-8">

    {#if isExpanded}
      <div class="brutalist-card animate-slideIn w-64 border-3 border-black bg-white p-4 shadow-[6px_6px_0_#000] dark:border-white dark:bg-black dark:shadow-[6px_6px_0_#fff] md:w-80">

        <div class="mb-3 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <div class="flex h-10 w-10 items-center justify-center border-2 border-black bg-green-500 shadow-[2px_2px_0_#000] dark:border-white dark:shadow-[2px_2px_0_#fff]">
              <MessageCircle class="h-5 w-5 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <p class="text-sm font-black uppercase tracking-tight text-gray-900 dark:text-gray-100">
                PMB iSTTS
              </p>
              <p class="text-xs font-semibold text-green-600 dark:text-green-400">
                ● Online
              </p>
            </div>
          </div>

          <button
            onclick={toggleExpand}
            class="flex h-6 w-6 items-center justify-center border-2 border-black bg-white transition-all duration-200 hover:bg-gray-100 dark:border-white dark:bg-black dark:hover:bg-gray-900"
            aria-label="Close"
          >
            <X class="h-4 w-4 text-black dark:text-white" strokeWidth={2.5} />
          </button>
        </div>

        <div class="mb-3 h-[2px] bg-black dark:bg-white"></div>

        <div class="mb-4 space-y-2">
          <p class="text-xs font-bold text-gray-900 dark:text-gray-100">
            Butuh bantuan pendaftaran?
          </p>
          <p class="text-xs leading-relaxed text-gray-700 dark:text-gray-300">
            Chat dengan tim PMB untuk info ujian TOEFL & TPA, jadwal, dan proses pendaftaran.
          </p>
        </div>

        <a
          href={waLink}
          target="_blank"
          rel="noopener noreferrer"
          class="group flex w-full items-center justify-center gap-2 border-3 border-black bg-green-500 px-4 py-3 font-bold uppercase tracking-tight text-white shadow-[4px_4px_0_#000] transition-all duration-200 hover:shadow-[5px_5px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:border-white dark:shadow-[4px_4px_0_#fff] dark:hover:shadow-[5px_5px_0_#fff] dark:active:shadow-none"
        >
          <MessageCircle class="h-4 w-4" strokeWidth={2.5} />
          <span class="text-xs">Chat Sekarang</span>
        </a>

        <div class="mt-3 border-2 border-black bg-gray-50 px-2 py-1 dark:border-white dark:bg-gray-900">
          <p class="text-center text-xs font-bold text-gray-900 dark:text-gray-100">
            +62 813 3355 5070
          </p>
        </div>

        <div class="absolute bottom-2 right-2 h-2 w-2 border-2 border-black dark:border-white"></div>
      </div>
    {/if}

    <button
      onclick={toggleExpand}
      class="brutalist-button group relative flex h-14 w-14 items-center justify-center border-3 border-black bg-green-500 shadow-[5px_5px_0_#000] transition-all duration-300 hover:shadow-[7px_7px_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none dark:border-white dark:shadow-[5px_5px_0_#fff] dark:hover:shadow-[7px_7px_0_#fff] dark:active:shadow-none md:h-16 md:w-16"
      aria-label="WhatsApp PMB iSTTS"
    >
      <div class="absolute inset-0 -z-10 animate-ping border-3 border-green-500 opacity-20"></div>

      <MessageCircle class="h-7 w-7 text-white md:h-8 md:w-8" strokeWidth={2.5} />

      <div class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center border-2 border-black bg-red-500 shadow-[2px_2px_0_#000] dark:border-white dark:shadow-[2px_2px_0_#fff]">
        <span class="text-xs font-black text-white">1</span>
      </div>

      <div class="absolute bottom-1 left-1 h-2 w-2 border-2 border-white"></div>
    </button>

    {#if !isExpanded}
      <div class="pointer-events-none mr-2 border-2 border-black bg-white px-3 py-1 shadow-[3px_3px_0_#000] opacity-0 transition-opacity duration-300 group-hover:opacity-100 dark:border-white dark:bg-black dark:shadow-[3px_3px_0_#fff]">
        <p class="text-xs font-bold text-gray-900 dark:text-gray-100">
          Ada pertanyaan?
        </p>
      </div>
    {/if}
  </div>
{/if}

<style>
  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px) translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0) translateX(0);
    }
  }

  .animate-slideIn {
    animation: slideIn 0.3s ease-out;
  }

  @keyframes ping {
    75%, 100% {
      transform: scale(1.2);
      opacity: 0;
    }
  }

  .animate-ping {
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .brutalist-button {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .brutalist-card {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
