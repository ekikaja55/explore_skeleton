<script lang="ts">
  import { openSidebarMain } from '$lib';
  import img from '$lib/assets/google-icon.svg';
  import Auth from '$lib/components/navigations/Auth.svelte';
  import LightSwitch from '$lib/components/utils/LightSwitch.svelte';
  import { MenuIcon } from '@lucide/svelte';

  const linksList = [
    { href: '/', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#guide', label: 'Guide' },
    { href: '#price', label: 'Price' }
  ];

  let open = false;
</script>

<header class="fixed top-0 z-[100] w-full">
  <div class="relative border-b-4 border-black bg-white backdrop-blur-xl dark:border-white dark:bg-black">

    <div
      class="absolute inset-0 opacity-[0.03]"
      style="background-image:
        linear-gradient(to right, rgb(0 0 0 / 0.5) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(0 0 0 / 0.5) 1px, transparent 1px);
        background-size: 40px 40px;">
    </div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="flex items-center justify-between px-4 py-3 sm:px-6 md:px-8">

        <div class="flex items-center gap-3">
          <button
            onclick={() => openSidebarMain.set((open = !open))}
            type="button"
            class="flex h-10 w-10 items-center justify-center border-3 border-black bg-white shadow-[3px_3px_0_#000] transition-all duration-150 hover:shadow-[4px_4px_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none dark:border-white dark:bg-black dark:shadow-[3px_3px_0_#fff] dark:hover:shadow-[4px_4px_0_#fff] dark:active:shadow-none md:hidden"
            aria-label="Toggle menu"
          >
            <MenuIcon class="h-5 w-5 text-black dark:text-white" strokeWidth={2.5} />
          </button>

          <a
            href="/"
            class="hidden border-3 border-black bg-white px-4 py-2 text-xl font-black uppercase tracking-tight text-black shadow-[3px_3px_0_#000] transition-all duration-150 hover:shadow-[4px_4px_0_#000] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none dark:border-white dark:bg-black dark:text-white dark:shadow-[3px_3px_0_#fff] dark:hover:shadow-[4px_4px_0_#fff] dark:active:shadow-none md:inline-block"
          >
            iSTTS<span class="text-blue-500 dark:text-blue-400">-exam</span>
          </a>
        </div>

        <nav class="hidden items-center gap-1 md:flex">
          {#each linksList as link}
            <a
              href={link.href}
              class="group relative px-4 py-2 font-bold uppercase tracking-tight text-black transition-all duration-150 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-900"
            >
              <span class="absolute bottom-0 left-0 h-[3px] w-0 bg-black transition-all duration-300 group-hover:w-full dark:bg-white"></span>
              {link.label}
            </a>
          {/each}
        </nav>

        <div class="flex items-center gap-6 sm:gap-3">
          <div class="hidden sm:block">
            <Auth label="Continue" imgSrc={img} variant="neutral" />
          </div>
          <div class="sm:hidden">
            <Auth label="" imgSrc={img} variant="neutral" />
          </div>
          <LightSwitch />
        </div>

      </div>
    </div>

  </div>
</header>
