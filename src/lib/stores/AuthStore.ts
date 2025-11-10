import { api, ErrorHandler, type ApiResponse, type AuthUser, type MessageState } from '$lib';
import type { AxiosResponse } from 'axios';
import { writable, type Writable } from 'svelte/store';

export const loadingAuth: Writable<boolean> = writable<boolean>(false);
export const messageHandleAuth: Writable<MessageState> = writable<MessageState>();
export const authUserStore: Writable<AuthUser> = writable<AuthUser>();

// function handling redirect google
export async function authGoogle() {
	console.log('================================');
	console.log('fn AuthGoogle() -> masuk fn');
	loadingAuth.set(false);

	try {
		console.log('fn AuthGoogle() -> masuk try');
		loadingAuth.set(true);

		const res: AxiosResponse<ApiResponse<null>> =
			await api.get<ApiResponse<null>>('/auth/google');

		messageHandleAuth.set({
			type: 'success',
			message: res.data.message
		});

    // goto("/onboarding")
	} catch (err: unknown) {
		console.log('fn AuthGoogle() -> kena catch');

		messageHandleAuth.set({
			type: 'error',
			message: ErrorHandler(err)
		});
	} finally {
		loadingAuth.set(false);
	}
}

// function handling OnBoarding regist peserta
export function regisPeserta() {}
