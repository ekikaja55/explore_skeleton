<script lang="ts">
  import { MoonIcon, SunIcon } from '@lucide/svelte';

  let checked = $state(false);

  $effect(() => {
    const mode = localStorage.getItem('mode') || 'light';
    checked = mode === 'dark';
  });

  const toggle = () => {
    checked = !checked;
    const mode = checked ? 'dark' : 'light';
    document.documentElement.setAttribute('data-mode', mode);
    localStorage.setItem('mode', mode);
  };
</script>

<!-- Brutalist Switch Container -->
<button
  onclick={toggle}
  class="group relative inline-flex h-14 w-28 items-center border-4 border-black bg-white p-1 shadow-[4px_4px_0_#000] transition-all duration-150 hover:shadow-[6px_6px_0_#000] active:translate-x-[4px] active:translate-y-[4px] active:shadow-none dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff] dark:hover:shadow-[6px_6px_0_#fff] dark:active:shadow-none"
  aria-label="Toggle dark mode"
  role="switch"
  aria-checked={checked}
>
  <div class="absolute inset-1 bg-gray-200 dark:bg-gray-800"></div>

  <div
    class="absolute inset-1 opacity-20"
    style="background-image:
      linear-gradient(to right, rgb(0 0 0 / 0.2) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(0 0 0 / 0.2) 1px, transparent 1px);
      background-size: 8px 8px;">
  </div>

  <div
    class="relative z-10 flex h-10 w-10 items-center justify-center border-4 border-black bg-white shadow-[3px_3px_0_#000] transition-all duration-300 ease-out dark:border-white dark:bg-black dark:shadow-[3px_3px_0_#fff]"
    style={checked ? 'transform: translateX(48px);' : 'transform: translateX(0px);'}
  >
    {#if checked}
      <SunIcon class="h-5 w-5 text-yellow-500 transition-transform duration-300 group-hover:rotate-90" strokeWidth={3} />
    {:else}
      <MoonIcon class="h-5 w-5 text-blue-600 transition-transform duration-300 group-hover:-rotate-12" strokeWidth={3} />
    {/if}
  </div>

  <div
    class="absolute left-2 top-1/2 -translate-y-1/2 transition-opacity duration-300"
    style={checked ? 'opacity: 0;' : 'opacity: 1;'}
  >
    <div class="h-2 w-2 border-2 border-black bg-yellow-400"></div>
  </div>

  <div
    class="absolute right-2 top-1/2 -translate-y-1/2 transition-opacity duration-300"
    style={checked ? 'opacity: 1;' : 'opacity: 0;'}
  >
    <div class="h-2 w-2 border-2 border-white bg-blue-500"></div>
  </div>

  <!-- Label Text (Optional) -->
  <span class="sr-only">
    {checked ? 'Switch to light mode' : 'Switch to dark mode'}
  </span>
</button>
