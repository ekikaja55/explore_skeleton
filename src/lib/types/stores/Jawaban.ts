// $lib/types/stores/Jawaban.ts

import type { Timestamps } from '$lib';

export type JawabanBenar = 0 | 1;

export interface Jawaban extends Timestamps {
  jawaban_id:number
	soal_id: number;
	jawaban_isi: string;
	jawaban_benar: JawabanBenar;
	jawaban_poin: number;
}

export type InsertJawabanDTO = Omit<Jawaban, 'jawaban_id' | keyof Timestamps>;
export type UpdateJawabanDTO = Partial<InsertJawabanDTO>;
