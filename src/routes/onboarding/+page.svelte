<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '$lib/components/buttons/Button.svelte';
	import InputForm from '$lib/components/forms/InputForm.svelte';
	import { colorVariants } from '$lib/utils';
	import { ArrowRight, CircleCheck, Loader, Sparkles, UserRound } from '@lucide/svelte';
	import emblaCarousel, { type EmblaCarouselType } from 'embla-carousel';
	import { onMount } from 'svelte';
	import type { RegisUserDTO, Slide } from '$lib';

	let viewport: HTMLElement;
	let embla: EmblaCarouselType;
	let slide = $state(0);
	let isLoading = $state(false);

	let formData:RegisUserDTO = $state({
		user_nama: '',
		user_notelp: ''
	});

	const slides:Slide[] = [
		{
			type: 'intro',
			title: 'Selamat Datang di Portal Peserta',
			desc: 'Sebelum memulai perjalanan Anda, mohon isi data pribadi Anda terlebih dahulu.',
			button: 'Mulai Pengisian'
		},
		{
			type: 'form',
			title: 'Data Personal Anda',
			desc: 'Pastikan nama yang Anda masukkan valid dan nomor WhatsApp aktif untuk keperluan konfirmasi.',
			fields: [
				{
					key: 'user_nama',
					label: 'Nama Lengkap',
					type: 'text',
					placeholder: 'Masukkan nama lengkap Anda'
				},
				{ key: 'user_notelp', label: 'Nomor Telepon (WA)', type: 'tel', placeholder: '08xxxxxxxxxx' }
			],
			button: 'Kirim Data'
		},
		{
			type: 'done',
			title: 'Terima Kasih!',
			desc: 'Data Anda telah berhasil disimpan. Silahkan ikuti panduan berikutnya!',
			button: 'Lanjut ke Dashboard'
		}
	];

	onMount(() => {
		embla = emblaCarousel(viewport, { loop: false, watchDrag: false });
		return () => embla.destroy();
	});

	function nextSlide():void {
		if (slide < slides.length - 1) {
			slide++;
			embla.scrollNext();
		}
	}

	function prevSlide():void {
		if (slide > 0) {
			slide--;
			embla.scrollPrev();
		}
	}

	function handleSubmit():void {
		if (!formData.user_nama.trim() || !formData.user_notelp.trim()) {
			alert('Mohon lengkapi data Anda terlebih dahulu.');
			return;
		}
		console.log('Data berhasil dikirim:', { ...formData });
		nextSlide();
	}

	async function handleFinish():Promise<void> {
		isLoading = true;
		await new Promise((r) => setTimeout(r, 1500));
		isLoading = false;
    goto('/dashboard/peserta')
}
</script>

<div
	class="flex min-h-screen items-center justify-center overflow-hidden text-gray-800"
	bind:this={viewport}
>
	<div class="flex h-full w-full">
		{#each slides as s, i}
			<div class="flex flex-[0_0_100%] items-center justify-center">
				{#if i === slide}
					<div
						class={`fade-in flex w-full max-w-md flex-col items-center justify-center space-y-5 rounded-2xl px-6 py-6 text-center sm:px-12 ${colorVariants['neutral']} `}
					>
						{#if s.type === 'intro'}
							<Sparkles class="h-20 w-20 animate-pulse " />
							<h1 class="text-3xl font-semibold sm:text-4xl">{s.title}</h1>
							<p class="text-sm leading-relaxed sm:text-base">{s.desc}</p>
							<Button label={s.button} onClick={nextSlide} classCustom="mt-4 " variant="gradient" icon={ArrowRight} />
						{:else if s.type === 'form'}
							<UserRound class="h-16 w-16 " />
							<h2 class="text-2xl font-semibold sm:text-3xl">{s.title}</h2>
							<p class="text-sm sm:text-base">{s.desc}</p>
							<form onsubmit={handleSubmit} class="mt-4 flex w-full flex-col gap-4">
								{#each s.fields as f}
									<InputForm
										label={f.label}
										type={f.type}
										placeholder={f.placeholder}
										bind:value={formData[f.key]}
									/>
								{/each}
								<div class="mt-4 flex justify-between gap-4">
									<Button label="Kembali" onClick={prevSlide} variant="neutral" />
									<Button label={s.button} icon={ArrowRight} type="submit" variant="neutral" />
								</div>
							</form>
						{:else if s.type === 'done'}
							<CircleCheck class="h-20 w-20 animate-bounce " />
							<h2 class="text-3xl font-semibold">{s.title}</h2>
							<p class="text-sm sm:text-base">{s.desc}</p>
							<Button
								label={isLoading ? 'Memproses...' : s.button}
								onClick={handleFinish}
								disabled={isLoading}
								icon={isLoading ? Loader : ArrowRight}
								variant="gradient"
							/>
						{/if}
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
	.fade-in {
		animation: fadeIn 0.5s ease-out;
	}
</style>
