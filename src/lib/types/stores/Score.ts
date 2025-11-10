// $lib/types/stores/Score.ts

import type { Timestamps } from '$lib';

export interface Score extends Timestamps {
	score_id: number;
	hsoal_id: number;
	score_jumlah_benar: number;
	score_nilai: number;
}

export type InsertScoreDTO = Omit<Score, 'score_id'>;
export type UpdateScoreDTO = Partial<InsertScoreDTO>;
