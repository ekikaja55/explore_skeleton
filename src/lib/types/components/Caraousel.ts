import type { FieldSlide } from '$lib';

export type Slide =
	| {
			type: 'intro' | 'done';
			title: string;
			desc: string;
			button: string;
	  }
	| {
			type: 'form';
			title: string;
			desc: string;
			button: string;
			fields: FieldSlide[];
	  };
