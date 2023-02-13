<script>
	export let statisticsData;
</script>

<div
	class="no-sm stats  mb-4 shadow {statisticsData.length <= 2
		? 'md:max-w-2xl lg:max-w-2xl xl::max-w-2xl '
		: ''}"
>
	{#each statisticsData as stat}
		<div class="stat ">
			<div class="stat-title">{stat.title}</div>
			<div class="stat-value">{stat.value}</div>
			<div class="stat-desc">{@html stat.desc}</div>
			<!-- <div class="stat-actions">
				<button class="btn-success btn-sm btn">Add funds</button>
			</div> -->
		</div>
	{/each}
</div>

<div class="sm stats-vertical stats mb-4 shadow w-full">
	{#each statisticsData as stat}
		<div class="stat ">
			<div class="stat-title">{stat.title}</div>
			<div class="stat-value">{stat.value}</div>
			<div class="stat-desc">{@html stat.desc}</div>
			<!-- <div class="stat-actions">
				<button class="btn-success btn-sm btn">Add funds</button>
			</div> -->
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
