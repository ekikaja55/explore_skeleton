// $lib/types/stores/Nilai.ts

import type { Timestamps } from '$lib';

export interface Nilai extends Timestamps {
	nilai_id: number;
	user_id: number;
	hsoal_id: number;
	nilai_user: number;
	random_soal: string;
	posisi_soal: number;
}

export type InsertNilaiDTO = Omit<Nilai, 'nilai_id'>;
export type UpdateNilaiDTO = Partial<InsertNilaiDTO>;
