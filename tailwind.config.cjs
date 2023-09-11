/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary-100': '#C11271',
				'dark-01': '#151517',
				'dark-02': '#212023',
				'light-01': '#edefe9',
			}
		},
	},
	plugins: [],
}
