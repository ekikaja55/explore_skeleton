// $lib/types/stores/HeaderSoal.ts

import type { Timestamps } from '$lib';

export type HsoalRandomSoal = 0 | 1;
export type HsoalRandomGrup = 0 | 1;
export interface HeaderSoal extends Timestamps {
	hsoal_id: number;
	tipe_id: number;
	hsoal_nama: string;
	hsoal_desk: string;
	hsoal_durasi_ujian: number;
	hsoal_durasi_persoal: number;
	hsoal_jumlah_perhalaman: number;
	hsoal_random_soal: HsoalRandomSoal;
	hsoal_random_grup: HsoalRandomGrup;
}

export type InsertHeaderSoalDTO = Omit<HeaderSoal, 'hsoal_id'>;
export type UpdateHeaderSoalDTO = Partial<InsertHeaderSoalDTO>;
