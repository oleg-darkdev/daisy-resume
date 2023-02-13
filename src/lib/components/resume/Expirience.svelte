<script>
	import experienceData from '../../data/resume/experience';

	let showFullExp = false;
</script>


	<h2
		class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
	>
		My experience
	</h2>
	<div class="mb-2 flex flex-row flex-wrap">
		{#each !showFullExp ? experienceData.slice(0, 4) : experienceData as experience}
			<div class="card m-1 w-96 bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title text-gray-200">{experience.title}</h2>
					<p class="text-gray-200">{experience.desc}</p>
					<p class="mb-2  text-sm text-warning dark:text-gray-400">
						{experience.dates[0]} - {experience.dates[1]}
					</p>
					<div class="card-actions justify-end">
						{#each experience.stack as stack}
							<button class="btn  gap-2 hover:bg-warning hover:text-gray-800"> {stack} </button>
						{/each}
					</div>
				</div>
			</div>
		{/each}
	</div>
	<button class="btn-active btn-lg btn max-w-md" on:click={() => (showFullExp = !showFullExp)}
		>{!showFullExp ? 'Show' : 'Hide'} full experience</button
	>


<style>

</style>
