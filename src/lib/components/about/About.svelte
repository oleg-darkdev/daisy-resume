<script>
	import Statistics from '../Statistics.svelte';
	import statisticsData from '../../data/statistics';
	import { interests, education, courses } from '../../data/about/aboutData';

	let showFullCourses = false;
</script>

<Statistics statisticsData={statisticsData.personal} />

<div
	data-aos="fade-up"
	data-aos-delay="180"
	data-aos-duration="1400"
	data-aos-once="true"
	data-aos-mirror="true"
	class="mt-4 mb-4 flex flex-col rounded-xl bg-gray-700  p-4 md:w-8/12 lg:w-8/12 xl:w-9/12"
>
	<div class="flex flex-row flex-wrap">
		<div style="width: 340px;" class="mb-6 flex flex-col">
			<h2
				class="mb-2 rounded-xl bg-gray-800 p-4 text-4xl  text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
			>
				About me
			</h2>
			<p class="m-1 text-start  text-2xl  text-white hover:text-error">Engineer 🛠</p>
			<p class="m-1 text-start  text-2xl  text-white hover:text-error">Javascript developer 📟</p>
			<p class="m-1 text-start  text-2xl  text-white hover:text-error">
				Belarus <a href="https://yellow-elephant.vercel.app/" class=" link">
					national chess champion
				</a>
			</p>

			<p class="m-1 text-start  text-2xl  text-white hover:text-error">
				Certified kanban master 😎
			</p>
			<p class="m-1 text-start  text-2xl  text-white hover:text-error">Boardgames creator 🎲</p>

			<p class="m-1 text-start  text-2xl  text-white hover:text-error">
				Contributer <a href="https://github.com/oleg-darkdev" class="link">open-source</a> 👍
			</p>
			<p class="m-1 text-start   text-2xl  text-white hover:text-error">Social Activist</p>
			<p class="m-1 text-start  text-2xl text-white hover:text-error">
				Founder of startups:

				<a href="https://44fablab.vercel.app/" class="link-primary link">@44FabLab</a>,
				<a href="https://itingo.vercel.app/" class="link-secondary link">@ITingo</a>,
				<a href="https://darkdev-progect.vercel.app/" class="link-success link">@DarkDev.progect</a
				>,
				<a href="https://kanbanel.vercel.app/" class="link-success link">@kanbanel</a>,
				<a href="https://yellow-elephant.vercel.app" class="link-warning link">@Yellow Elephant</a>
			</p>
		</div>

		<div style="width: 360px;" class="flex flex-col items-center">
			<h2
				class="mb-2 rounded-xl bg-gray-800 p-4 text-4xl  text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
			>
				Interests
			</h2>
			<div class="flex max-w-md flex-row flex-wrap items-center justify-center">
				{#each interests as interest}
					<div class="avatar m-1 rounded-xl  hover:bg-error">
						<div class="w-32 rounded">
							<img src={interest.img} alt={interest.title} />
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="w-full text-white">
		<p class="m-2  text-2xl">
			💙 Comfortable in turquoise model of the organizations or organizations with a flat structure.
			Opportunity to evolve , a chance to showcase my talents and creative thinking 🧠
		</p>
	</div>
</div>

<div class="mt-6 flex flex-col rounded-xl bg-gray-700  p-4 md:w-10/12 lg:w-10/12 xl:w-10/12">
	<h2
		data-aos="fade-up"
		data-aos-delay="80"
		data-aos-duration="400"
		data-aos-once="true"
		data-aos-mirror="true"
		class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl  text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
	>
		Education
	</h2>
	<div
		data-aos="fade-up"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="true"
		data-aos-mirror="true"
		class="flex flex-row flex-wrap"
	>
		{#each education as edu}
			<div class="card  m-1 w-96 bg-gray-800 shadow-xl hover:bg-gray-900">
				<div class="card-body">
					<h2 class="card-title text-error">{edu.title}</h2>
					<p class=" text-sm text-error">
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
		data-aos="fade-up"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="true"
		data-aos-mirror="true"
		class="mb-2 mt-14 rounded-xl bg-gray-800 p-4 text-5xl  text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
	>
		Training courses
	</h2>

	<div
		data-aos="fade-up"
		data-aos-delay="80"
		data-aos-duration="800"
		data-aos-once="true"
		data-aos-mirror="true"
		class="mb-4 flex flex-row flex-wrap"
	>
		{#each !showFullCourses ? courses.slice(0, 2) : courses as course}
			<div class="card  m-1 w-96 bg-gray-800 shadow-xl hover:bg-gray-900">
				<div class="card-body">
					<h2 class="card-title text-error">{course.title}</h2>
					<p class=" text-sm text-error">
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
