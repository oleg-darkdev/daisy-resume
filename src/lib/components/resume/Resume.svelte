<script>
	import SkillsTabs from './SkillsTabs.svelte';
	import Expirience from './Expirience.svelte';
	import Statistics from '../Statistics.svelte';
	import Npm from '../activism/Npm.svelte';
	import SocialProjects from '../activism/SocialProjects.svelte';
	import GamesList from './GamesList.svelte';

	import { languages } from '../../data/resume/resumeData';
	import statisticsData from '../../data/statistics';
</script>

<Statistics statisticsData={statisticsData.commercial} />
<Statistics statisticsData={statisticsData.social} />

<!-- link to dowload pdf resume -->

<div
	data-aos="fade-up"
	data-aos-delay="220"
	data-aos-duration="1200"
	data-aos-once="true"
	data-aos-mirror="true"
	class="mb-12 mt-6 flex w-full flex-row flex-wrap justify-center md:justify-start lg:justify-start xl:justify-start"
>
	{#each languages as lang}
		<div class="m-2 flex flex-col items-center ">
			<h2 class="text-3xl text-gray-800 ">{lang.title}</h2>
			<div
				class="hover:bg-text-gray-800 radial-progress bg-success  text-gray-800 hover:text-white"
				style="--value: {lang.value}; --size:8rem; --thickness: 1.0rem; "
			>
				<span class="text-5xl">{lang.label}</span>
			</div>
		</div>
	{/each}
</div>
<div
	data-aos="fade-up"
	data-aos-delay="300"
	data-aos-duration="2000"
	data-aos-once="true"
	data-aos-mirror="true"
	class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12"
>
	<SkillsTabs />
</div>
<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<Expirience />
</div>
<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<Npm />
</div>
<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<SocialProjects />
</div>

<!-- <GamesList /> -->
<style>
</style>
