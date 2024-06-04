<script>
	import { i } from '@inlang/sdk-js';
	// import {HeadHrefLangs} from '$shared';
	import { Hero, Footer, Aside, PdfViewer } from '$widgets';
	import { ProgectCard } from '$entities';
	import { portfolio, skillsTools } from '$shared';
</script>

<svelte:head>
	<title>Oleg_DarkDEV</title>
	<!-- <HeadHrefLangs /> -->
</svelte:head>
<!-- `
<h1 class="text-5xl font-extralight">{i('welcome')}</h1>
<p>{@html i('description')}</p>` -->

<Hero />

<Aside />


<a name="about"></a>

<section class="flex flex-col justify-center lg:p-10 p-4">
	{#each portfolio as portfolioData}
		<div class="mx-auto mt-20">
			<div class="mb-10 flex flex-shrink-0 flex-col border-b border-[#44149c] px-4 pb-6 md:w-64">
				<strong
					class="text-thin flex text-left text-3xl font-thin leading-none text-[#44149c] lg:text-4xl"
				>
					{portfolioData.year} <span class="text-sm">year</span>
				</strong>
				<!-- <span class="mt-1 text-xs font-normal leading-relaxed text-gray-700">{portfolioData.subTitle}</span> -->
			</div>
			<div class="grid lg:grid-cols-2 grid-cols-1 lg:gap-x-8 gap-x-2 gap-y-20 xl:pt-16 lg:pt-16 pt-4">
				{#each portfolioData.progects as progect}
					<ProgectCard {progect} />
				{/each}
			</div>
		</div>
	{/each}



  <!-- npm пакеты -->
	<!-- <div class="mx-auto mt-20">
		<div class="mb-10 flex flex-shrink-0 flex-col border-b border-[#44149c] px-4 pb-6 md:w-64">
			<strong
				class="text-thin flex text-left text-3xl font-thin leading-none text-[#44149c] lg:text-4xl"
			>
				2019 <span class="text-sm">year</span>
			</strong>
		</div>
		<div class="grid grid-cols-2 gap-x-8 pt-16">
			{#each portfolioData.progects as progect}
				<ProgectCard {progect} />
			{/each}
		</div>
	</div> -->
</section>


<section class='py-16'>
	<div class="mb-10 flex flex-shrink-0 flex-col border-b border-[#44149c] px-4 pb-6 mx-auto max-w-4xl">
		<strong
			class="mx-auto flex text-center text-3xl font-thin leading-none text-[#44149c] lg:text-4xl"
		>
			Technological stack
		</strong>
	</div>
	<div class="max-w-4xl mx-auto flex justify-center flex-row flex-wrap">
		{#each skillsTools as stack}
			<figure class='mx-2'>
				<img src="{stack.img}" class='h-20 w-20' alt="{stack.text} logo">
				<figcaption class='text-[#44149c]'>{stack.text}</figcaption>
			</figure>
		{/each}
	</div>
</section>

<a name="cv" />
<!-- <PdfViewer /> -->

<Footer />
