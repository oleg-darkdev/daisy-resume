<script>
	import resumeData from '../data/resume';

	let active = 0;
</script>

<div class="tabs">
	<a
		class="tab tab-lifted tab-lg text-white {active ? '' : 'tab-active'}"
		on:click={() => (active = 0)}>My Skills</a
	>
	<a
		class="tab tab-lifted tab-lg text-white {active ? 'tab-active' : ''}"
		on:click={() => (active = 1)}>My Tools</a
	>
</div>

<div class="flex flex-row flex-wrap w-full">
	{#each active ? resumeData.toolsList : resumeData.skillsList as item}
		<div
			class="m-2 flex flex-col rounded-lg p-4 hover:border hover:border-2 hover:bg-gray-800 hover:text-white "
			on:click={() => window.open(item.link, '_blank')}
		>
			<a href={item.link}>
				<div style="background-image: url({item.img});" class="skill-img" />
				<h2 class="text-center text-2xl">{item.text}</h2>
			</a>
		</div>
	{/each}
</div>

<style>
	.skill-img {
		max-width: 140px;
		max-height: 140px;
		width: 34vw;
		height: 34vh;
	}
	.skill-toll-wrap {
		margin: 15px 0 0 0;
		width: 100%;
	}

</style>
