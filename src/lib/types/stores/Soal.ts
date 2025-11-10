// $lib/types/stores/Soal.ts

import type { InsertJawabanDTO, Jawaban, Timestamps, UpdateJawabanDTO } from '$lib';

// biasa nya union type di declare diluar interface
export type SoalTipe = 'pilgan' | 'pgk' | 'uraian';
export type JawabanUnion = Jawaban[] | InsertJawabanDTO[] | UpdateJawabanDTO[];

// base interface Soal di extends dari interface Timestamp otomatis punya createdAt dkk
export interface Soal extends Timestamps {
	soal_id: number;
	h_soal: string;
	soal_number: number;
	soal_bacaan?: string;
	soal_isi: string;
	soal_total_jawaban: number;
	soal_tipe: SoalTipe;

	// kenapa aku pakai union? karena aku nangkepnya tiap jawaban itu kan pasti array pada akhirnya, nah kasusnya kalo lagi
	// select data yauda pakai Jawaban[] kalo lagi dipake update yauda UpdateJawabanDTO[] kalo lagi insert yauda InsertJawabanDTO[]
	jawaban: JawabanUnion;
}

// keyof itu operator TypeScript yang dipakai untuk mengambil semua nama properti (key) dari sebuah tipe atau interface.
// kaya ngambil "nama field" nya itu otomatis langsung ngerefer ke interface Timestamps
// disini aku dapet dari anak2 WPU kalo DTO enak pakai type, auto complete nya lebih stabil, katanya gitu
export type InsertSoalDTO = Omit<Soal, 'soal_id' | keyof Timestamps>; // ilagin soal_id sama Timestamp
export type UpdateSoalDTO = Partial<InsertSoalDTO>
