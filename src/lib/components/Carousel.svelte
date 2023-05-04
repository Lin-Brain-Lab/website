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

	let fullscreen: string | null = null;
	function spotlight(src?: string) {
		if (fullscreen) {
			fullscreen = null;
		} else if (src) {
			fullscreen = src;
		}
	}
</script>

<svelte:head>
	{#each images as src}
		<link rel="preload" href={src} as="image" />
	{/each}
</svelte:head>

<div class="h-40 w-full rounded-md md:h-60">
	{#each images as src, i (src)}
		{#if i === current}
			<div
				class="absolute h-full w-full"
				in:fade={{ duration: 300 }}
				out:fade={{ duration: 300 }}
			>
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<img
					{src}
					alt={src}
					class="m-auto h-full cursor-pointer rounded-md bg-base-200 object-cover"
					on:click={() => spotlight(src)}
				/>
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

{#if fullscreen}
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<div
		class="fixed left-0 top-0 z-[100] h-screen w-screen p-4 backdrop-brightness-50"
		on:click={() => spotlight()}
		in:fade={{ duration: 100 }}
		out:fade={{ duration: 100 }}
	>
		<div class="flex h-full w-full items-center justify-center">
			<img
				src={fullscreen}
				alt={fullscreen}
				class="m-auto max-h-full max-w-full cursor-pointer rounded-lg object-contain"
				on:click={() => {
					fullscreen && window.open(fullscreen, "_blank");
				}}
				title="Open in new tab"
			/>
		</div>
	</div>
{/if}
