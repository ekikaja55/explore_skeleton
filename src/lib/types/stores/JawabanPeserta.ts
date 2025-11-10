// $lib/types/stores/JawabanPeserta.ts

import type { Timestamps } from '$lib';

export interface JawabanPeserta extends Timestamps {
	jawaban_peserta_id: number;
	user_id: number;
	soal_id: number;
	jawaban_peserta_pg: number;
	jawaban_peserta_uraian: string;
}

export type InsertJawabanPesertaDTO = Omit<JawabanPeserta, 'jawaban_peserta_id'>;
export type UpdateJawabanPesertaDTO = Partial<InsertJawabanPesertaDTO>;
