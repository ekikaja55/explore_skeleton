import type { Component } from 'svelte';

export type Variant =
	| 'primary'
	| 'secondary'
	| 'neutral'
	| 'success'
	| 'warning'
	| 'danger'
	| 'info'
	| 'outline'
	| 'ghost'
	| 'glass'
	| 'gradient'
	| 'minimal'
	| 'link';
export type Type = 'button' | 'submit' | 'reset';
export type Icon = Component | null;

interface ButtonBase {
	variant?: Variant;
	label: string;
	imgSrc?: string | null;
	icon?: Icon;
	classCustom?: string | null;
	loading?: boolean;
	disabled?: boolean;
	hover?: boolean;
}

export interface ActionButtonProps extends ButtonBase {
	type?: Type;
	onClick?: () => void;
	href?: never;
}

export interface LinkButtonProps extends ButtonBase {
	href: string | null;
	onClick?: never;
	type?: never;
}

export type ButtonProps = ActionButtonProps | LinkButtonProps;
