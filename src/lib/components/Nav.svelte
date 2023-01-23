<script lang="ts">
	import { page } from "$app/stores";
	import { preload } from "$lib/preload";
	import { onMount } from "svelte";
	import Icon from "@iconify/svelte";

	const navigation: Item[] = [
		[
			"Research",
			"/research",
			[
				["Magnetic resonance imaging (MRI)", "/research/mri"],
				["MEG and EEG", "/research/meg-and-eeg"],
				["Connectivity", "/research/connectivity"],
			],
		],
		[
			"Publications",
			"/publications",
			[
				["Journal papers", "/publications/journal-papers"],
				["Conference abstracts", "/publications/conference-abstracts"],
				["Patents", "/publications/patents"],
				["Book chapters/thesis", "/publications/book-chapters-thesis"],
			],
		],
		["Tools", "/tools", []],
		["Members", "/members", []],
	];

	type Item = [string, string] | [string, string, Item[]];

	let toggle = false;

	onMount(() => {
		preload(
			navigation.map((x) => x[1]),
			1000,
		);
	});
</script>

<nav class="navbar z-10">
	<div class="flex-1">
		<a class="btn-ghost btn text-xl normal-case" href="/">Lin Brain Lab</a>
	</div>
	<div class="flex-none md:hidden">
		<label for="nav-drawer" class="btn-ghost btn-square btn">
			<Icon icon="carbon:menu" />
		</label>
	</div>
	<div class="hidden flex-none md:block">
		<ul class="menu menu-horizontal px-1">
			{#each navigation as [name, href, children]}
				<li tabindex="-1" class="p-1">
					<a
						{href}
						class="border border-transparent"
						class:!border-primary={$page.url.pathname.startsWith(href)}
						on:mouseenter={() => {
							preload([href, ...(children || []).map((x) => x[1])], 0);
						}}
					>
						{name}
						{#if children?.length}
							<Icon icon="carbon:chevron-down" />
						{/if}
					</a>
					{#if children?.length}
						<ul class="bg-base-100 p-2">
							{#each children as [name, href]}
								<li class="p-1">
									<a
										{href}
										class="border border-transparent"
										class:!border-primary={$page.url.pathname.startsWith(href)}
									>
										{name}
									</a>
								</li>
							{/each}
						</ul>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
</nav>

<div
	class="drawer pointer-events-none fixed top-0 left-0 z-20 md:hidden"
	class:pointer-events-auto={toggle}
>
	<input id="nav-drawer" type="checkbox" class="drawer-toggle" bind:checked={toggle} />
	<div class="drawer-side">
		<label for="nav-drawer" class="drawer-overlay" />
		<ul class="menu w-80 bg-base-100 p-4">
			{#each navigation as [name, href, children]}
				<li tabindex="-1" class="p-1">
					<a
						{href}
						class="border-primary"
						class:border={$page.url.pathname === href}
						on:click={() => {
							toggle = false;
						}}
					>
						{name}
					</a>
				</li>
				{#if children?.length}
					{#each children as [name, href]}
						<li tabindex="-1" class="p-1 text-sm opacity-70">
							<a
								{href}
								class="border-primary"
								class:border={$page.url.pathname.startsWith(href)}
								on:click={() => {
									toggle = false;
								}}
							>
								{name}
							</a>
						</li>
					{/each}
				{/if}
			{/each}
		</ul>
	</div>
</div>
