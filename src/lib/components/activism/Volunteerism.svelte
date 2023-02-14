<script>
  	import volunteerismData from '../../data/activism/volunteerism';

    let showFullVol = false;
</script>

<h2
	data-aos="fade-up"
	data-aos-delay="80"
	data-aos-duration="400"
	data-aos-once="true"
	data-aos-mirror="true"
	class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
>
	My volunteerism
</h2>
<div
	data-aos="fade-up"
	data-aos-delay="80"
	data-aos-duration="800"
	data-aos-once="true"
	data-aos-mirror="true"
	class="mb-6 flex flex-row flex-wrap "
>
	{#each !showFullVol ? volunteerismData.slice(0, 2) : volunteerismData as vol (vol.id)}
		<div
			class="card m-1 w-96 bg-gray-800 hover:bg-gray-900 {vol.showFullDesc
				? 'h-auto'
				: 'max-h-630'}  shadow-xl"
		>
			<div class="card-body">
				<h2 class="card-title text-gray-200">{@html vol.title}</h2>
				<p class=" text-sm dark:text-gray-400">
					{vol.dates[0]} - {vol.dates[1]}
				</p>
				{#each vol.showFullDesc ? vol.desc : vol.desc.slice(0, 2) as desc}
					<p class="text-gray-200">{@html desc}</p>
				{/each}
				<button
					class="btn-info btn-md btn mb-4 max-w-md"
					on:click={() => (vol.showFullDesc = !vol.showFullDesc)}
					>{!vol.showFullDesc ? 'Show' : 'Hide'} full description</button
				>
			</div>
		</div>
	{/each}
</div>
<button class="btn-info btn-lg btn w-full " on:click={() => (showFullVol = !showFullVol)}
	>{!showFullVol ? 'Show' : 'Hide'} full volunteerism</button
>
