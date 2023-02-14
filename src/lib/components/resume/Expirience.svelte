<script>
	import experienceData from '../../data/resume/experience';

	let showFullExp = false, showFullDesc = false;
</script>

<h2
	class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
>
	My experience
</h2>
<div class="mb-6 flex flex-row flex-wrap ">
	{#each showFullExp ? experienceData.slice(0, 2) : experienceData as experience (experience.id)}
		<div class="card m-1 w-96 {experience.showFullDesc ? 'h-auto': 'max-h-630'} bg-base-100 shadow-xl">
			<div class="card-body">
				<h2 class="card-title text-gray-200">{@html experience.title}</h2>
				<p class=" text-sm dark:text-gray-400">
					{experience.dates[0]} - {experience.dates[1]}
				</p>
				{#each experience.showFullDesc ?  experience.desc :  experience.desc.slice(0, 2) as desc}
					<p class="text-gray-200">{@html desc}</p>
				{/each}
        <button class="btn-info btn-md btn max-w-md mb-4" on:click={() => (experience.showFullDesc = !experience.showFullDesc)}
	>{!experience.showFullDesc ? 'Show' : 'Hide'} full description</button
>
				<div class="card-actions justify-end mt-2">
					{#each experience.stack as stack}
						<button class="btn  gap-2 hover:bg-info hover:text-gray-800"> {stack} </button>
					{/each}
				</div>
			</div>
		</div>
	{/each}
</div>
<button class="btn-info btn-lg btn w-full " on:click={() => (showFullExp = !showFullExp)}
	>{!showFullExp ? 'Show' : 'Hide'} full experience</button
>

<style>
  .max-h-630 {
    max-height: 630px;
  }
</style>
