import { writable, type Writable } from 'svelte/store'

export let openSidebarMain:Writable<boolean> = writable(false)
export let isDashboard:Writable<boolean> = writable(false)

export * from './PersistStore'
export * from './AuthStore'
