<script lang="ts">
	import { onMount, onDestroy } from "svelte";
	import { fade } from "svelte/transition";

	export let images: string[] = [];
	export let autoplay: number = 3000;

	let current = 0;
	let interval: number;

	onMount(() => {
		if (autoplay > 0) {
			interval = setInterval(() => {
				current = (current + 1) % images.length;
			}, autoplay) as unknown as number;
		}
	});

	onDestroy(() => {
		if (interval) {
			clearInterval(interval);
		}
	});
</script>

<div class="h-40 w-full rounded-md lg:h-60">
	{#each images as src, i (src)}
		{#if i === current}
			<div
				class="absolute h-full w-full"
				in:fade={{ duration: 300 }}
				out:fade={{ duration: 300 }}
			>
				<img {src} alt={src} class="m-auto h-full rounded-md object-cover" />
			</div>
		{/if}
	{/each}
</div>

<div class="mt-2 flex w-full justify-center">
	{#each images as src, i (src)}
		<button
			class="btn-ghost min-h-8 btn h-8 w-8 rounded-md p-1 sm:mx-1"
			class:btn-outline={i === current}
			on:click={() => ((current = i), clearInterval(interval))}
		>
			{i + 1}
		</button>
	{/each}
</div>
