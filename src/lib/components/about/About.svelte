<script>
	import SocialProjects from '../activism/SocialProjects.svelte';
	import Statistics from '../Statistics.svelte';
	import statisticsData from '../../data/statistics';
	import interests from '../../data/about/interests';
	import educationData from '../../data/about/educationData';
  import coursesData from '../../data/about/coursesData';

	// добавить фото с хакатонов, выступлений и т.д.
	// const gallery = [
	// 	{
	// 		img: '',
	// 		title: '',
	// 		desc: ''
	// 	},
	// 	{
	// 		img: '',
	// 		title: '',
	// 		desc: ''
	// 	},
	// 	{
	// 		img: '',
	// 		title: '',
	// 		desc: ''
	// 	},
	// 	{
	// 		img: '',
	// 		title: '',
	// 		desc: ''
	// 	},
	// 	{
	// 		img: '',
	// 		title: '',
	// 		desc: ''
	// 	},
	// 	{
	// 		img: '',
	// 		title: '',
	// 		desc: ''
	// 	}
	// ];


	let showFullCourses = false;
</script>

<Statistics statisticsData={statisticsData.personal} />

<!-- <SocialProjects /> -->
<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-8/12 lg:w-8/12 xl:w-9/12">
	<h2
		class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
	>
		Interests
	</h2>
	<div class="flex max-w-md flex-row flex-wrap items-center justify-center">
		{#each interests as interest}
			<div class="avatar m-1 rounded-xl  hover:bg-secondary">
				<div class="w-32 rounded">
					<img src={interest.img} alt={interest.title} />
				</div>
			</div>
		{/each}
	</div>
</div>

<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<h2
		class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
	>
		Education
	</h2>
	<div class="flex flex-row flex-wrap">
		{#each educationData as edu}
			<div class="card  m-1 w-96  bg-gray-800 shadow-xl">
				<div class="card-body">
					<h2 class="card-title text-error">{edu.title}</h2>
					<p class=" text-sm dark:text-gray-400">
						{edu.dates[0]} - {edu.dates[1]}
					</p>
					<!-- <p class="">{edu.institution}</p> -->
					<p class="text-1xl text-white">
						<span class="text-error">Specialization:</span>
						{edu.profession}
					</p>
            <p class="text-white">{edu.desc}</p>
				</div>
			</div>
		{/each}
	</div>
	<h2
		class="mb-2 mt-14 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
	>
		Training courses
	</h2>

	<div class="flex mb-4 flex-row flex-wrap">
		{#each !showFullCourses ? coursesData.slice(0, 2) : coursesData as course}
			<div class="card  m-1 w-96  bg-gray-800 shadow-xl">
				<div class="card-body">
					<h2 class="card-title text-error">{course.title}</h2>
					<p class=" text-sm dark:text-gray-400">
						{course.dates[0]} - {course.dates[1]}
					</p>
					<!-- <p class="text-white">{course.institution}</p> -->
					<p class="text-1xl text-white">
						<span class="text-error">Specialization:</span>
						{course.profession}
					</p>
					<p class="text-white">{course.desc}</p>
				</div>
			</div>
		{/each}
	</div>
	<button class="btn-error btn-lg btn w-full " on:click={() => (showFullCourses = !showFullCourses)}
		>{!showFullCourses ? 'Show' : 'Hide'} full cources</button
	>
</div>

<!-- <div class="mb-8 flex max-w-2xl flex-row flex-wrap">
		{#each gallery as photo}
			<div class="card-compact card m-1 w-80 bg-base-100 shadow-xl">
				<figure><img src={photo.img} alt={photo.title} /></figure>
				<div class="card-body">
					<h2 class="card-title">{photo.title}</h2>
					<p>{photo.desc}</p>
				</div>
			</div>
		{/each}
	</div> -->
