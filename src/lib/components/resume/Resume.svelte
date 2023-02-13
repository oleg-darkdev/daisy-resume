<script>
	import resumeData from '../../data/resume/resume';
	import languages from '../../data/resume/languages';
	import Statistics from '../Statistics.svelte';
	import statisticsData from '../../data/statistics';
  import experienceData from '../../data/resume/experience';

	let active = 0, showFull = false;
</script>

<Statistics statisticsData={statisticsData.commercial} />
<Statistics statisticsData={statisticsData.social} />

<!-- добавить ссылку на скачивание резюме для печати -->

<div class="mb-12 mt-6 flex w-full flex-row flex-wrap justify-center">
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

<div class="tabs">
	<a
		class="tab tab-lifted tab-lg hover:text-white {active
			? 'text-gray-800'
			: 'tab-active text-white'}"
		on:click={() => (active = 0)}>My Skills</a
	>
	<a
		class="tab tab-lifted tab-lg hover:text-white {active
			? 'tab-active text-white'
			: 'text-gray-800'}"
		on:click={() => (active = 1)}>My stack</a
	>
</div>

<div class="container relative mb-20 flex w-full flex-row flex-wrap pr-14">
	{#each active ? resumeData.toolsList : resumeData.skillsList as item}
		<div class="box relative m-2 mb-10 rounded-lg bg-gray-800 hover:border hover:border-2">
			<div class="imgBx">
				<img src={item.img} />
			</div>
			<div class="content">
				<div>
					<h2>{item.text}</h2>
					<p>{item.description}</p>
				</div>
			</div>
		</div>
	{/each}
</div>

<div class="flex flex-col mt-6">
	<h2 class="mb-2 text-5xl font-bold text-gray-800">My experience</h2>
	<div class="mb-2 flex flex-row flex-wrap">
		{#each !showFull ? experienceData.slice(0, 4) : experienceData as experience}
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
	<button class="btn-active btn-lg btn max-w-md" on:click={() => (showFull = !showFull)}
		>{!showFull ? 'Show' : 'Hide'} full experience</button
	>
</div>

<style>
	.container {
		transform-style: preserve-3d;
		perspective: 500px;
		margin: auto;
	}

	.container:hover .box {
		transform: rotateY(25deg);
	}
	.container .box:hover ~ .box {
		transform: rotateY(-25deg);
	}
	.container .box:hover {
		transform: rotateY(0deg) scale(1.25);
		z-index: 1;
		box-shadow: 0 6px 40px rgba(54, 211, 153);
	}
	.container .box .imgBx {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	.container .box .imgBx:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(180deg, #34ffb5, #353535);
		z-index: 1;
		opacity: 0;
		transition: 0.5s;
		mix-blend-mode: multiply;
	}
	.container .box:hover .imgBx:before {
		opacity: 1;
	}
	.container .box .imgBx img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.container .box .content {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1;
		display: flex;
		padding: 20px;
		align-items: flex-end;
		box-sizing: border-box;
	}

	@media (max-width: 540px) {
		.container .box {
			width: 110px;
			height: 110px;
		}
		.container .box .content h2 {
			display: none;
		}

		.container .box .content p {
			display: none;
		}
	}

	@media (min-width: 780px) {
		.container .box {
			width: 180px;
			height: 180px;
		}
		.container .box .content h2 {
			color: #fff;
			transition: 0.5s;
			text-transform: uppercase;
			margin-bottom: 5px;
			font-size: 20px;
			transform: translateY(200px);
			transition-delay: 0.3s;
		}
		.container .box:hover .content h2 {
			transform: translateY(0px);
		}
		.container .box .content p {
			color: #fff;
			transition: 0.5s;
			font-size: 14px;
			transform: translateY(200px);
			transition-delay: 0.4s;
		}
		.container .box:hover .content p {
			transform: translateY(0px);
		}
	}

	.container .box {
		transition: 0.5s;
		transform-style: preserve-3d;
		overflow: hidden;
	}
</style>
