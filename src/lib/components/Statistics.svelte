<script>
	export let statisticsData;
</script>

<div
	data-aos="fade-up"
	data-aos-delay="80"
	data-aos-duration="600"
	data-aos-once="true"
	data-aos-mirror="true"
	class="no-sm stats  mb-4 shadow {statisticsData.length <= 2
		? 'xl::max-w-2xl md:max-w-2xl lg:max-w-2xl '
		: ''}"
>
	{#each statisticsData as stat}
		<div class="stat ">
			<div class="stat-title">{stat.title}</div>
			<div class="stat-value">{stat.value}</div>
			<div class="stat-desc">{@html stat.desc}</div>
		</div>
	{/each}
</div>

<div
	data-aos="fade-up"
	data-aos-delay="80"
	data-aos-duration="600"
	data-aos-once="true"
	data-aos-mirror="true"
	class="sm stats stats-vertical mb-4 w-full shadow"
>
	{#each statisticsData as stat}
		<div class="stat ">
			<div class="stat-title">{stat.title}</div>
			<div class="stat-value">{stat.value}</div>
			<div class="stat-desc">{@html stat.desc}</div>
		</div>
	{/each}
</div>

<style>
	@media (max-width: 780px) {
		.no-sm {
			display: none;
		}
	}

	@media (min-width: 780px) {
		.sm {
			display: none;
		}
	}
</style>
