<script lang="ts">
	import type { CardProps } from '$lib';
	import { CheckIcon } from '@lucide/svelte';
	import Button from '$lib/components/buttons/Button.svelte';

	let { label = 'ini label', desc = 'ini desc', price = 0 }: CardProps = $props();
</script>

<!-- From Uiverse.io by vishalmet -->
<div class="max-w-4xl mx-auto">
  <div
    class="relative bg-gray-900/50 backdrop-blur-xl rounded-2xl p-8 border border-gray-800"
  >
    <div
      class="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-500 rounded-tl-2xl"
    ></div>
    <div
      class="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-red-400 rounded-tr-2xl"
    ></div>
    <div
      class="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-yellow-500 rounded-bl-2xl"
    ></div>
    <div
      class="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-pink-500 rounded-br-2xl"
    ></div>

    <div class="relative">
      <div
        class="absolute -top-12 left-0 px-6 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 rounded-full text-sm text-white"
      >
        14th April 2024 - Present
      </div>

      <h2 class="text-3xl font-bold mb-2 text-white">Card Title</h2>
      <h3
        class="text-2xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500"
      >
        Subtitle
      </h3>
      <p class="text-lg text-gray-300 mb-8">
        Your card description goes here. Add any content you want to display.
      </p>

      <div class="flex flex-wrap gap-3 mb-8 text-gray-300">
        <span
          class="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer"
        >
          Tag 1
        </span>
        <span
          class="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer"
        >
          Tag 2
        </span>
        <span
          class="px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/10 to-yellow-500/10 hover:bg-gradient-to-r hover:from-pink-500/10 hover:to-yellow-500/40 border border-gray-700 hover:border-yellow-500 hover:scale-110 transition-transform cursor-pointer"
        >
          Tag 3
        </span>
      </div>

      <div class="flex-row md:flex-col space-y-3 gap-10">
        <a
          href="#"
          class="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-t from-pink-500 via-red-400 to-yellow-500 hover:opacity-90 transition-opacity text-white"
        >
          Visit Site
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            class="group-hover:rotate-12 transition-transform duration-300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path
              d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
            ></path>
            <polyline points="15 3 21 3 21 9"></polyline>
            <line x1="10" y1="14" x2="21" y2="3"></line>
          </svg>
        </a>

        <a
          href="#"
          class="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-gray-700 hover:border-pink-500 transition-colors text-white"
        >
          Certificate
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="group-hover:rotate-12 transition-transform duration-300"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <circle cx="12" cy="8" r="7"></circle>
            <polyline
              points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
            ></polyline>
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>
