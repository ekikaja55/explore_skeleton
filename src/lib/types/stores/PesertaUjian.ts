// $lib/types/stores/PesertaUjian.ts

import type { Timestamps } from '$lib';

export type StatusBeli = 'Belum Bayar' | 'Sudah Bayar' | 'Beasiswa';
export interface PesertaUjian extends Timestamps {
	peserta_ujian_id: number;
	user_id: number;
  tipe_id:number;
	status_beli: StatusBeli;
}

// export type InsertPesertaUjianDTO = Omit<PesertaUjian, 'peserta_ujian_id' | keyof Timestamps>;
// export type UpdatePesertaUjianDTO = Partial<InsertPesertaUjianDTO>;
