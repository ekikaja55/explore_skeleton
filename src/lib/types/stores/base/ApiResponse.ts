// $lib/types/stores/base/ApiResponse.ts

// ini interface base untuk ApiResponse kita udah bahas ini pas di E

// Jadi unknown itu “untyped safely” — TypeScript gak tahu dia apa, jadi kamu gak boleh asal pakai.
// contoh :
// let x: unknown;
// x = 123;        // bisa
// x = "halo";     // bisa
// x = undefined;  // bisa
// x = null;       // bisa

// Tapi kalau kamu assign x ke variabel lain, TypeScript akan paksa kamu cek dulu tipenya, karena unknown dianggap unsafe untuk dipakai langsung:
// let y: string = x; //error

export interface ApiResponse<T = unknown> {
	message: string;
	// Makanya T | null itu karena ada kemungkinan field result itu ada tapi isinya null
	result: T | null;
}

// contoh kasus

// Kasus sukses dengan data (GET)
type User = { id: number; name: string; };
const res1: ApiResponse<User[]> = {
  message: "Sukses Get User",
  result: [
    { id: 1, name: "Ekik" },
    { id: 2, name: "Fabaon" },
  ]
};

// Kasus sukses tapi datanya kosong, misal user ga ketemu
// T default-nya unknown, jadi result = null juga valid.
const res2: ApiResponse<User | null> = {
	message: 'User tidak ditemukan',
	result: null
};

// Kasus error dari server misal error 500 dkk
// yang ini kenapa gapake param ke dua? karena kita GATAU resultnya apa, pake base interface nya
// bisa aja tambahin <null> gitu setelah ApiResponse kalo emang kita fixed kalo handling error server result
// PASTI NULL
const res3: ApiResponse = {
	message: 'Kesalahan Pada Server',
	result: null
};

// Kasus POST / CREATE
const res4: ApiResponse<User> = {
	message: 'Berhasil Insert User',
	result: { id: 1, name: 'Ekik' }
};

// Kasus DELETE
// kenapa diisi param ke dua nya null karena kita tau result PASTI NULL
const res5: ApiResponse<null> = {
	message: 'Berhasil Delete User ',
	result: null
};

// Kasus PATCH / UPDATE
type UpdateUserDTO = { name?: string; phone?: string };
const res6: ApiResponse<UpdateUserDTO> = {
	message: 'Berhasil Update User',
	result: { name: 'Ekik Yeay' }
};
