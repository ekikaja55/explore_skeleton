export const colorVariants = {
	primary: `
		bg-indigo-500 hover:bg-indigo-700
		dark:bg-indigo-600 dark:hover:bg-indigo-500
		text-white dark:text-gray-100
		disabled:bg-indigo-400 disabled:cursor-not-allowed
	`,

	secondary: `
		bg-rose-500 hover:bg-rose-700
		dark:bg-rose-600 dark:hover:bg-rose-500
		text-white dark:text-gray-100
		disabled:bg-rose-400 disabled:cursor-not-allowed
	`,

	neutral: `
		bg-gray-800 hover:bg-gray-900
		dark:bg-gray-100 dark:hover:bg-gray-200
		text-white dark:text-gray-900
		disabled:bg-gray-500 disabled:cursor-not-allowed
	`,

	success: `
		bg-emerald-500 hover:bg-emerald-700
		dark:bg-emerald-600 dark:hover:bg-emerald-500
		text-white dark:text-gray-100
		disabled:bg-emerald-400 disabled:cursor-not-allowed
	`,

	warning: `
		bg-amber-500 hover:bg-amber-600
		dark:bg-amber-600 dark:hover:bg-amber-400
		text-white dark:text-gray-100
		disabled:bg-amber-400 disabled:cursor-not-allowed
	`,

	danger: `
		bg-red-500 hover:bg-red-700
		dark:bg-red-600 dark:hover:bg-red-500
		text-white dark:text-gray-100
		disabled:bg-red-400 disabled:cursor-not-allowed
	`,

	info: `
		bg-sky-500 hover:bg-sky-700
		dark:bg-sky-600 dark:hover:bg-sky-500
		text-white dark:text-gray-100
		disabled:bg-sky-400 disabled:cursor-not-allowed
	`,

	outline: `
		border border-gray-400 text-gray-800 hover:bg-gray-100
		dark:border-gray-500 dark:text-gray-200 dark:hover:bg-gray-700
		disabled:opacity-60 disabled:cursor-not-allowed
		bg-transparent
	`,

	ghost: `
		bg-transparent hover:bg-gray-100 text-gray-800
		dark:hover:bg-gray-800 dark:text-gray-200
		disabled:opacity-50 disabled:cursor-not-allowed
	`,

	glass: `
		bg-white/10 backdrop-blur-md text-white hover:bg-white/30
		dark:bg-black/20 dark:hover:bg-black/40
		border border-white/30
		disabled:opacity-40 disabled:cursor-not-allowed
	`,

	gradient: `
		bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
		hover:from-indigo-600 hover:via-purple-600 hover:to-pink-600
		text-white font-semibold
		disabled:opacity-60 disabled:cursor-not-allowed
	`,

	minimal: `
		bg-transparent text-indigo-600 hover:text-indigo-800
		dark:text-indigo-400 dark:hover:text-indigo-300
		disabled:opacity-50 disabled:cursor-not-allowed
	`,

	link: `
		bg-transparent underline text-indigo-600 hover:text-indigo-800
		dark:text-indigo-400 dark:hover:text-indigo-300
		disabled:opacity-40 disabled:no-underline disabled:cursor-not-allowed
	`
};
