<script lang="ts">
	import Background from "$lib/components/Background.svelte";
	import Footer from "$lib/components/Footer.svelte";
	import Nav from "$lib/components/Nav.svelte";
	import PageTransition from "$lib/components/PageTransition.svelte";
	import "../app.css";
</script>

<div class="h-full w-full">
	<div class="pointer-events-none fixed top-0 left-0 h-full w-full">
		<Background />
	</div>

	<div class="m-auto h-16 w-full max-w-3xl">
		<Nav />
	</div>

	<div class="m-auto flex h-[calc(100%-4rem)] w-full max-w-3xl flex-col overflow-auto">
		<div class="w-full flex-1 p-4">
			<PageTransition>
				<slot />
			</PageTransition>
		</div>

		<div class="divider mb-0 px-4" />

		<Footer />
	</div>
</div>
