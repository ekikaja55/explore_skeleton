// $lib/types/stores/base/Timestamps.ts

//declare base timestamp biar ga nulis manual satu2 kelamaan
export interface Timestamps {
	createdAt: string;
	updatedAt: string;
	deletedAt?: string; //deletedAt bisa null karena hanya ketriger pas operasi delete
}
