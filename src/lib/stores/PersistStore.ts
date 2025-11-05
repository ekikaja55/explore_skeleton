import { persisted, type Persisted } from 'svelte-persisted-store';

export const openModal:Persisted<boolean> =persisted('openModal',false)

export const modeWeb:Persisted<string> = persisted('modeWeb','light')
