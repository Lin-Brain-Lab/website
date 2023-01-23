<script lang="ts">
	export let title = "Lin Brain Lab";
	export let description = "Lin Brain Lab";
	export let image = "";
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	{#if image}
		<meta property="og:image" content={image} />
	{/if}
</svelte:head>

<div class="prose w-full max-w-full break-words py-4" style="hyphens: auto;">
	<slot />
</div>
