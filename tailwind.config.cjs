/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,svelte,md,js,ts}"],
	theme: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
