import type { UserConfig } from "vite";
import { sveltekit } from "@sveltejs/kit/vite";

const config: UserConfig = {
	plugins: [sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
	server: {
		host: "0.0.0.0",
	},
};

export default config;
