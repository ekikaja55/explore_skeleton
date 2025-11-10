import type { PesertaUjian, Timestamps } from '$lib';

export type UserJenis = 'Guru' | 'Siswa';

export interface User extends Timestamps {
	user_id: number;
	user_username: string;
	user_password: string;
	user_nama: string;
	user_email: string;
	user_notelp: string;
	user_jenis: UserJenis;
	user_qrcode_toefl: string;
	user_qrcode_tpa: string;
}

//Ini type khusus Auth user  ketika sukses auth, karena kan kita gabisa ngasi password tuh jadi pas mainan cookie bisa pakai type ini
//kenapa aku pakai partial baru di omit? karena kalo diliat alur Auth kita, abis continue with google misal dia peserta baru posisi belum
//isi nama dan no telp, otomatis dua field itu bisa kosong kan? makanya aku pake partial
//ahh iya apa aku baru nangkep gada field refresh_token di db ya berarti emang ga gitu mainannya?
export type AuthUser = Partial<Omit<User, 'user_password'>>;

//Pick itu HANYA ngambil field spesifik btw aku pakai disini RegisUserDTO khusus di role user pas Register pertama kali setelah
export type RegisUserDTO = Pick<User, 'user_nama' | 'user_notelp'>;

// type handling list user di admin panel, karena kembaliannya pakai join harusnya ada tambahan data peserta_ujian, dan tipe ujian

export type ListUser = AuthUser & {
	peserta_ujian: PesertaUjian;
};

export type UpdateListUserDTO = Partial<Omit<ListUser, 'user_id' | keyof Timestamps>>;

type Listuser = {
	//data user kecuali password
	//tipe_ujian yang diambil : "TPA"
	//status_beli : "Belum Bayar"
};
