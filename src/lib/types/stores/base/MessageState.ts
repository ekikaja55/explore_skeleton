// src/lib/types/MessageState.ts
type typeMessage = 'success' | 'error';
export interface MessageState {
	type: typeMessage;
	message: string;
}
