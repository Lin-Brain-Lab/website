import { mdsvex } from "mdsvex";
import external_links from "rehype-external-links";
import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: [".svelte", ".md"],

	preprocess: [
		vitePreprocess(),
		mdsvex({
			extensions: [".md"],
			rehypePlugins: [
				[external_links, { target: "_blank", rel: ["noopener", "noreferrer"] }],
			],
			layout: "./src/lib/components/MarkdownContainer.svelte",
		}),
	],

	kit: {
		adapter: adapter(),
		alias: {
			content: "./content",
		},
	},
};

export default config;
