<script>
	import Button from '$lib/components/buttons/Button.svelte';
	import { ArrowRight, Trophy } from '@lucide/svelte';
</script>

<div class="relative min-h-screen w-full overflow-hidden bg-gray-50 dark:bg-gray-950">
	<div class="absolute inset-0 z-0">
		<div
			class="h-full w-full"
			style="background-image:
      linear-gradient(to right, rgb(0 0 0 / 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(0 0 0 / 0.08) 1px, transparent 1px);
      background-size: 60px 60px;"
		></div>

		<div
			class="absolute inset-0 hidden dark:block"
			style="background-image:
      linear-gradient(to right, rgb(255 255 255 / 0.08) 1px, transparent 1px),
      linear-gradient(to bottom, rgb(255 255 255 / 0.08) 1px, transparent 1px);
      background-size: 60px 60px;"
		></div>
	</div>

	<div
		class="absolute top-32 left-0 h-24 w-24 border-3 border-black bg-yellow-400 opacity-40 shadow-[6px_6px_0_rgba(0,0,0,0.3)] md:h-32 md:w-32 lg:left-10 dark:border-white dark:bg-yellow-500 dark:opacity-30 dark:shadow-[6px_6px_0_rgba(255,255,255,0.2)]"
	></div>

	<div
		class="absolute top-48 right-0 h-20 w-20 border-3 border-black bg-blue-500 opacity-40 shadow-[6px_6px_0_rgba(0,0,0,0.3)] md:h-28 md:w-28 lg:right-10 dark:border-white dark:bg-blue-400 dark:opacity-30 dark:shadow-[6px_6px_0_rgba(255,255,255,0.2)]"
	></div>

	<div
		class="absolute bottom-40 left-5 h-20 w-20 border-3 border-black bg-red-500 opacity-40 shadow-[6px_6px_0_rgba(0,0,0,0.3)] md:left-10 md:h-28 md:w-28 dark:border-white dark:bg-red-400 dark:opacity-30 dark:shadow-[6px_6px_0_rgba(255,255,255,0.2)]"
	></div>

	<div
		class="relative z-10 flex min-h-screen items-center justify-center px-4 py-24 md:px-8 md:py-32"
	>
		<div
			class="animate-fade-in flex w-full max-w-5xl flex-col items-center space-y-10 text-center transition-opacity duration-700 ease-out"
		>
			<div class="space-y-6">
			
				<h1
					class="text-4xl leading-tight font-black tracking-tight text-gray-900 uppercase md:text-6xl lg:text-7xl dark:text-gray-100"
				>
					<span class="block">Gali Potensimu di</span>
					<span
						class="mt-6 inline-block border-[3px] border-black bg-white px-6 py-3 font-black tracking-tight text-black uppercase shadow-[5px_5px_0_#000] transition-all duration-200 hover:shadow-[7px_7px_0_#000] active:translate-x-[5px] active:translate-y-[5px] active:shadow-none md:px-8 md:py-4 dark:border-white dark:bg-black dark:text-white dark:shadow-[5px_5px_0_#fff] dark:hover:shadow-[7px_7px_0_#fff] dark:active:shadow-none"
					>
						iSTTS<span class="text-blue-600 dark:text-blue-400">-exam</span>
					</span>
				</h1>
			</div>

			<div class="max-w-2xl">
				<p
					class="text-base leading-relaxed font-semibold text-gray-700 md:text-lg dark:text-gray-300"
				>
					Membangun standar evaluasi berbasis inovasi dan keunggulan akademik — menghadirkan
					evaluasi cerdas untuk masa depan, melalui transformasi cara belajar dan mengukur
					kemampuan.
				</p>
			</div>

			<div class="pt-6">
				<Button label="Pelajari Lebih Lanjut" href="/auth" icon={ArrowRight} />
			</div>

			<div class="flex items-center justify-center gap-3 pt-8 opacity-50">
				<div class="h-[2px] w-12 bg-gray-800 md:w-20 dark:bg-gray-200"></div>
				<div class="h-2 w-2 rotate-45 border-2 border-gray-800 dark:border-gray-200"></div>
				<div class="h-[2px] w-12 bg-gray-800 md:w-20 dark:bg-gray-200"></div>
			</div>
		</div>
	</div>

	<div class="absolute right-0 bottom-0 left-0 flex h-2 border-t-4 border-black dark:border-white">
		<div class="w-1/4 bg-yellow-400"></div>
		<div class="w-1/4 bg-blue-500"></div>
		<div class="w-1/4 bg-red-500"></div>
		<div class="w-1/4 bg-green-400"></div>
	</div>
</div>

<style>
	@keyframes fade-in {
		from {
			opacity: 0;
			transform: translateY(30px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}

	.animate-fade-in {
		animation: fade-in 0.8s ease-out;
	}
</style>
