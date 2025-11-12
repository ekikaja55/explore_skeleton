import {
	Phone,
	CreditCard,
	ClipboardList,
	BookOpenCheck,
	Award,
} from '@lucide/svelte';

export const GuideSteps = [
	{
		id: 1,
		title: 'Hubungi PMB iSTTS',
		description:
			'Langkah pertama, hubungi tim PMB iSTTS melalui WhatsApp di nomor 123456789 untuk mendaftar ujian TOEFL atau TPA.',
		icon: Phone
	},
	{
		id: 2,
		title: 'Lakukan Pembayaran',
		description:
			'Setelah terdaftar, lakukan pembayaran sesuai instruksi yang diberikan oleh tim PMB. Pastikan bukti pembayaran tersimpan dengan baik.',
		icon: CreditCard
	},
	{
		id: 3,
		title: 'Konfirmasi Pembayaran',
		description:
			'Kirimkan bukti pembayaran Anda melalui WhatsApp. Tim PMB akan segera memverifikasi transaksi Anda.',
		icon: ClipboardList
	},
	{
		id: 4,
		title: 'Siap Mengikuti Ujian',
		description:
			"Setelah pembayaran dikonfirmasi, status akun Anda akan diubah menjadi 'siap ujian'. Anda kini dapat mengikuti TOEFL atau TPA sesuai jadwal.",
		icon: BookOpenCheck
	},
	{
		id: 5,
		title: 'Dapatkan Sertifikat & Beasiswa',
		description:
			'Selesai ujian? Cek hasil Anda! Peserta dengan skor unggul berkesempatan mendapatkan sertifikat resmi dan potongan beasiswa dari iSTTS.',
		icon: Award
	}
];
