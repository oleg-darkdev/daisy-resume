<script>
	export let statisticsData;
</script>

<div
	class="stats mb-4 shadow sm:stats-vertical md:stats-vertical {statisticsData.length <= 2
		? 'md:max-w-2xl lg:max-w-2xl '
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

<style>

</style>
