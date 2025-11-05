import { writable, type Writable } from 'svelte/store'

export let openSidebarMain:Writable<boolean> = writable(false)

export * from './PersistStore'
