<script lang="ts">
	import Icon from "@iconify/svelte";

	const current_year = new Date().getFullYear();

	const email = "fhlin[at]sri.utoronto.ca";
	const tel = "+1 416 480 6100 Ext. 85709";
	const location = "Sunnybrook Research Institute";
</script>

<footer class="footer gap-2 p-4 md:gap-10">
	<div class="grid-flow-col items-center">
		<p>Copyright © 2017-{current_year} <span class="font-bold">Lin Brain Lab</span></p>
	</div>
	<div class="md:place-self-center md:justify-self-end">
		<div>
			<p title="email: {email}">
				<Icon icon="carbon:email" class="inline" />
				{email}
			</p>
			<p title="tel: {tel}">
				<Icon icon="carbon:phone-ip" class="inline" />
				{tel}
			</p>
			<p title="location: {location}">
				<a href="/images/sunnybrook_map.png">
					<Icon icon="carbon:location" class="inline" />
					{location}
				</a>
			</p>
			2075 Bayview Ave, S6-69<br />
			Toronto, ON, Canada M4N 3M5
		</div>
	</div>
</footer>
