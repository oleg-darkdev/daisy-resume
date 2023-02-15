<script>
	import { experience } from '../../data/resume/resumeData';

	let showFullExp = false;
</script>

<h2
	data-aos="fade-up"
	data-aos-delay="80"
	data-aos-duration="400"
	data-aos-once="true"
	data-aos-mirror="true"
	class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
>
	My experience
</h2>
<div
	data-aos="fade-up"
	data-aos-delay="80"
	data-aos-duration="800"
	data-aos-once="true"
	data-aos-mirror="true"
	class="mb-6 flex flex-row flex-wrap "
>
	{#each !showFullExp ? experience.slice(0, 2) : experience as exp (exp.id)}
		<div
			class="card m-1 w-96 bg-gray-800 hover:bg-gray-900 {exp.showFullDesc
				? 'h-auto'
				: 'max-h-630'}  shadow-xl"
		>
			<div class="card-body">
				<h2 class="card-title text-gray-200">{@html exp.title}</h2>
				<p class=" text-sm dark:text-gray-400">
					{exp.dates[0]} - {exp.dates[1]}
				</p>
				{#each exp.showFullDesc ? exp.desc : exp.desc.slice(0, 2) as desc}
					<p class="text-gray-200">{@html desc}</p>
				{/each}
				<button
					class="btn-info btn-md btn mb-4 max-w-md"
					on:click={() => (exp.showFullDesc = !exp.showFullDesc)}
					>{!exp.showFullDesc ? 'Show' : 'Hide'} full description</button
				>
				<div class="card-actions mt-2 justify-end">
					{#each exp.stack as stack}
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
		max-height: 650px;
	}
</style>
