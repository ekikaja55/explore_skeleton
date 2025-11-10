// $lib/types/stores/TipeUjian.ts

import type { Timestamps } from '$lib';

export interface TipeUjian extends Timestamps {
	tipe_id: number;
	time_nama: string;
}

export type InsertTipeUjianDTO = Omit<TipeUjian, 'tipe_id'>;
export type UpdateTipeUjianDTO = Partial<InsertTipeUjianDTO>;
