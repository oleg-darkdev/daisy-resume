<script>
	import SocialProjects from './SocialProjects.svelte';
	import Statistics from '../Statistics.svelte';
	import Npm from './Npm.svelte';
	import Volunteerism from './Volunteerism.svelte';
  import Gallery from './Gallery.svelte';
  
	import statisticsData from '../../data/statistics';
	import { gallery } from '../../data/activism/activismData';
</script>

<Statistics statisticsData={statisticsData.social} />


<div
	id="activism"
	class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12"
>
	<Npm />
</div>

<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<Volunteerism />
</div>

<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<SocialProjects />
</div>

<!-- <div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
  <Gallery {gallery} />
</div> -->
