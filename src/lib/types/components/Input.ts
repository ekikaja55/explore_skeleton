import type { RegisUserDTO } from '$lib';
//base input nya
export interface Input {
  label: string;
	type: 'text' | 'number' | 'email' | 'password' | 'file' | 'tel';
	placeholder: string;
	value: string | number | undefined;
	classCustom?: string ;
}

// Mau hapus properti → Omit<Base, 'field'>
// Mau ubah properti → Omit<Base, 'field'> & { field: NewType }
// tambah tinggal extends

// | Tujuan                | Sintaks      | Catatan                   |
// | --------------------- | ------------ | ------------------------- |
// | interface → interface | `extends`    | umum & direkomendasikan   |
// | interface → type      | `extends`    | bisa asal `type` = object |
// | type → interface      | `&`          | gabungkan bentuk          |
// | class → interface     | `implements` | untuk enforce struktur    |


type FieldKey = keyof RegisUserDTO;
//hapus value tambahin key
export interface FieldSlide extends Omit<Input,'value'> {
	key: FieldKey;
}
