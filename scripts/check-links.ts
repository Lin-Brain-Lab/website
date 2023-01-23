// Check if any external links are broken
import { spawn } from "node:child_process";
import { Crawler, hyperlinks } from "@jacoblincool/crawler";
import { Pool } from "@jacoblincool/puddle";

main();

async function main() {
	const server = await serve();

	const crawler = new Crawler();
	const { links } = await crawler.start({
		entry: "http://localhost:4173/",
		depth: 4,
		actors: {
			links: {
				match: /http:\/\/localhost:4173\//,
				action: async ({ page, targets }) => {
					console.log(`Crawling ${page.url()}`);
					const links = await hyperlinks(page);
					console.log(`Found ${links.length} links`);
					links.forEach((link) => targets.add(link));
					return links;
				},
			},
		},
		prune(url) {
			return !url.includes("localhost:4173");
		},
	});
	await crawler.stop();

	const targets = new Set(
		[...links.values()].flat().filter((link) => {
			try {
				new URL(link);
				return true;
			} catch {
				return false;
			}
		}),
	);

	console.log("Checking links, targets:", targets.size);

	const pool = new Pool(8);
	for (const link of targets) {
		pool.push(async () => {
			try {
				const res = await fetch(link);
				if (!res.ok) {
					console.error(`NOT OK | ${link} returned ${res.status}`);
				} else {
					console.log(`OK | ${link} returned ${res.status}`);
				}
			} catch (err) {
				console.error(`NOT OK | ${link} error: ${err}`);
			}
		});
	}
	await pool.run();

	server.kill();
	process.exit(0);
}

async function serve() {
	const server = spawn("pnpm", ["preview"], {
		stdio: "pipe",
	});

	await new Promise<void>((resolve) => {
		server.stdout?.once("data", resolve);
		server.stderr?.once("data", resolve);
	});

	return server;
}
