<script>
	import SocialProjects from './SocialProjects.svelte';
	import Statistics from '../Statistics.svelte';
	import Npm from './Npm.svelte';
	import Volunteerism from './Volunteerism.svelte';

	import statisticsData from '../../data/statistics';
	import { gallery } from '../../data/activism/activismData';
</script>

<Statistics statisticsData={statisticsData.social} />

<div
	id="activism"
	class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12"
>
	<SocialProjects />
</div>

<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<Volunteerism />
</div>

<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<Npm />
</div>

<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	{#each gallery as photo}
		<div style="max-height: 450px;" class="card mb-4 max-w-3xl bg-base-100 shadow-xl lg:card-side">
			<figure><img async src={photo.img} alt="Sopot goverment" /></figure>
			<div class="card-body">
				<h2 class="card-title">{photo.title}</h2>
				<p>{photo.desc}</p>
			</div>
		</div>
	{/each}
</div>
