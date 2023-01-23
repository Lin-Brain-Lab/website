<script lang="ts">
	import { Particle } from "$lib/particle";
	import { onMount } from "svelte";

	let canvas: HTMLCanvasElement;
	let ctx: CanvasRenderingContext2D;
	const particles = new Set<Particle>();
	const count = 30;

	onMount(() => {
		const element = document.querySelector<HTMLCanvasElement>("#background-canvas");
		if (element) {
			canvas = element;
			ctx = canvas.getContext("2d")!;
			start();
		}
	});

	function start() {
		let width = (canvas.width = window.innerWidth);
		let height = (canvas.height = window.innerHeight);
		let unit = Math.min(width, height) / 100;

		window.addEventListener("resize", () => {
			width = canvas.width = window.innerWidth;
			height = canvas.height = window.innerHeight;
			unit = Math.min(width, height) / 100;
		});

		let last = Date.now();

		function render() {
			requestAnimationFrame(render);

			if (particles.size < count) {
				const pos: [number, number] = [
					Math.random() * 0.5 * width + 0.25 * width,
					Math.random() * 0.5 * height + 0.25 * height,
				];
				const vel: [number, number] = [
					(Math.random() * 4 * unit + 1 * unit) * (Math.random() > 0.5 ? 1 : -1),
					(Math.random() * 4 * unit + 1 * unit) * (Math.random() > 0.5 ? 1 : -1),
				];
				const particle = new Particle(pos, vel);
				particles.add(particle);
			}

			ctx.clearRect(0, 0, width, height);

			const done = new Set<Particle>();
			const t = (Date.now() - last) / 1000;
			last = Date.now();
			for (const particle of particles) {
				particle.update(t);

				for (const other of particles) {
					if (particle === other || done.has(other)) {
						continue;
					}

					const distance = Math.sqrt(
						Math.pow(particle.pos[0] - other.pos[0], 2) +
							Math.pow(particle.pos[1] - other.pos[1], 2),
					);

					if (distance < 20 * unit) {
						ctx.beginPath();
						ctx.moveTo(particle.pos[0], particle.pos[1]);
						ctx.lineTo(other.pos[0], other.pos[1]);
						ctx.strokeStyle = `rgba(0, 0, 0, ${(1 - distance / (20 * unit)) * 0.5})`;
						ctx.lineWidth = 0.15 * unit;
						ctx.stroke();
					}
				}

				if (
					particle.pos[0] < 0 ||
					particle.pos[0] > width ||
					particle.pos[1] < 0 ||
					particle.pos[1] > height
				) {
					particles.delete(particle);
				} else {
					particle.draw(ctx, 0.3 * unit, "rgba(0, 0, 0, 1)");
					done.add(particle);
				}
			}
		}

		render();
	}
</script>

<canvas id="background-canvas" class="h-full w-full opacity-20" />
