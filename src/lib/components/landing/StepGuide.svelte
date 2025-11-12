<script lang="ts">
	import { GuideSteps } from '$lib';
	import { Footprints } from '@lucide/svelte';
</script>

<section
	id="guide"
	class="relative w-full overflow-hidden bg-gray-50 px-4 py-16 md:px-6 md:py-24 dark:bg-gray-950"
>
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
		class="absolute top-10 left-0 h-16 w-16 border-3 border-black bg-yellow-400 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] md:h-20 md:w-20 dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
	></div>
	<div
		class="absolute right-0 bottom-10 h-16 w-16 border-3 border-black bg-blue-500 opacity-20 shadow-[4px_4px_0_rgba(0,0,0,0.3)] md:h-20 md:w-20 dark:border-white dark:opacity-15 dark:shadow-[4px_4px_0_rgba(255,255,255,0.2)]"
	></div>

	<div class="relative z-10 mx-auto max-w-4xl">
		<div class="mb-12 text-center md:mb-16">
			<div
				class="mb-4 inline-flex items-center gap-2 border-2 border-black bg-red-500 px-4 py-2 shadow-[3px_3px_0_#000] dark:border-white dark:shadow-[3px_3px_0_#fff]"
			>
				<Footprints class="h-5 w-5 text-white" strokeWidth={2.5} />
				<span class="text-sm font-black tracking-tight text-white uppercase">GUIDE START</span>
			</div>
			<h2
				class="mb-4 text-3xl font-black tracking-tight text-gray-900 uppercase md:text-4xl dark:text-gray-100"
			>
				Alur Pendaftaran TOEFL & TPA
			</h2>
			<p
				class="mx-auto max-w-2xl text-base font-semibold text-gray-700 md:text-lg dark:text-gray-300"
			>
				Ikuti alur pendaftaran dibawah ini untuk memulai perjalanan akademik Anda di iSTTS
			</p>

			<div class="mx-auto mt-6 flex w-fit items-center gap-3">
				<div class="h-[3px] w-12 bg-black dark:bg-white"></div>
				<div class="h-3 w-3 rotate-45 border-2 border-black dark:border-white"></div>
				<div class="h-[3px] w-12 bg-black dark:bg-white"></div>
			</div>
		</div>

		<div class="relative space-y-6 md:space-y-8">
			<div
				class="absolute top-0 left-6 hidden h-full w-[3px] bg-black md:left-[52px] md:block dark:bg-white"
			></div>

			{#each GuideSteps as step, i (step.id)}
				<div class="group relative flex items-start gap-4 md:gap-6">
					<div
						class="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center border-3 border-black bg-white shadow-[4px_4px_0_#000] transition-all duration-300 group-hover:shadow-[6px_6px_0_#000] md:h-[88px] md:w-[88px] dark:border-white dark:bg-black dark:shadow-[4px_4px_0_#fff] dark:group-hover:shadow-[6px_6px_0_#fff]"
					>
						<span class="text-xl font-black text-black md:text-3xl dark:text-white">
							{i + 1}
						</span>
					</div>

					<div
						class="relative flex-1 border-3 border-black bg-white p-5 shadow-[5px_5px_0_#000] transition-all duration-300 hover:shadow-[7px_7px_0_#000] md:p-6 dark:border-white dark:bg-black dark:shadow-[5px_5px_0_#fff] dark:hover:shadow-[7px_7px_0_#fff]"
					>
						<div
							class="absolute top-0 left-0 h-full w-2 {i === 0
								? 'bg-yellow-400'
								: i === 1
									? 'bg-blue-500'
									: i === 2
										? 'bg-red-500'
										: i === 3
											? 'bg-green-400'
											: 'bg-purple-500'}"
						></div>

						<div
							class="mb-3 inline-block border-2 border-black bg-gray-50 px-3 py-1 text-xs font-bold tracking-wider text-black uppercase shadow-[2px_2px_0_#000] dark:border-white dark:bg-gray-900 dark:text-white dark:shadow-[2px_2px_0_#fff]"
						>
							Step {i + 1}
						</div>

						<h3
							class="mb-3 text-xl font-bold tracking-tight text-gray-900 uppercase md:text-2xl dark:text-gray-100"
						>
							{step.title}
						</h3>

						<p class="text-sm leading-relaxed text-gray-700 md:text-base dark:text-gray-300">
							{step.description}
						</p>

						<div
							class="absolute right-2 bottom-2 h-3 w-3 border-2 border-black dark:border-white"
						></div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
