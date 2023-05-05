<script>
	import Header from '../lib/components/Header.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import Hello from '../lib/components/Hello.svelte';
	import Resume from '../lib/components/resume/Resume.svelte';
	import Activism from '../lib/components/activism/Activism.svelte';
	import Portfolio from '../lib/components/Portfolio.svelte';
	import Boardgames from '../lib/components/Boardgames.svelte';
	import Chess from '../lib/components/Chess.svelte';
	import Contact from '../lib/components/Contact.svelte';
	import About from '../lib/components/about/About.svelte';

	let sections = [
		// {
		// 	text: 'Hello',
		// 	anchor: 'hello',
		// 	color: 'bg-primary text-primary-content'
		// },
		{
			text: 'About',
			anchor: 'about',
			color: 'bg-secondary text-secondary-content '
		},
		{
			text: 'Resume',
			anchor: 'resume',
			color: 'bg-success text-success-content'
		},
		{
			text: 'Portfolio',
			anchor: 'portfolio',
			color: 'bg-warning text-warning-content'
		},
		{
			text: 'Boardgames',
			anchor: 'boardgames',
			color: 'text-info-content bg-info '
		},
		// {
		// 	text: 'Chess career',
		// 	anchor: 'chess',
		// 	color: 'text-info-content bg-info '
		// },
		{
			text: 'Activism',
			anchor: 'activism',
			color: 'text-info-content bg-info '
		},

		{
			text: 'Contact',
			anchor: 'contact',
			color: 'bg-error text-error-content'
		}
	];

	let selectedSection = {
		text: 'start'
	};
</script>

<svelte:head>
	<title>Oleg DarkDev</title>
</svelte:head>

<Header bind:selectedSection {sections} />
{#if selectedSection.text == 'start'}
	<section class="hero flex w-full flex-wrap justify-center  p-4  ">
		<div class="w-full md:w-7/12 lg:w-7/12 xl:w-8/12">
			<Hello bind:selectedSection {sections} />
		</div>
		<div style="width: 300px;" class="nav flex items-center  ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else}
	<section class="flex w-full flex-wrap justify-center bg-gray-900 p-4 ">
		<div
			style="height: 100%;"
			class="flex w-full flex-col justify-start md:w-7/12 lg:w-7/12  xl:w-8/12"
		>
			<a name="about" /> <a name="resume" />
			<a name="activism" /> <a name="portfolio" /> <a name="chess" />
			<a name="contact" />

			{#if selectedSection.text == sections[0].text}
				<About />
			{:else if selectedSection.text == sections[1].text}
				<Resume />
			{:else if selectedSection.text == sections[2].text}
				<Portfolio />
			{:else if selectedSection.text == sections[3].text}
				<Boardgames />
			{:else if selectedSection.text == sections[4].text}
				<!-- <Chess />
			{:else if selectedSection.text == sections[5].text} -->
				<Activism />
			{:else if selectedSection.text == sections[5].text}
				<Contact />
			{/if}
		</div>
		<div style="width: 300px;" class="nav flex items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{/if}

<style>
	section {
		min-height: 100vh;
	}

	.hidden {
		display: none;
	}
	@media (max-width: 780px) {
		.nav {
			display: none;
		}
		.hero {
			background-position: left center;
			background: url(/images/hero_1.jpg);
			top: 0;
			left: 0;
		}
	}

	@media (min-width: 780px) {
		.hero {
			background: url(/images/hero_1.jpg);
			top: 0;
			left: 0;
		}
	}

	.hero {
		position: relative;
		width: 100vw;
		height: 100vh;
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center center;
		width: 100%;
		height: 100%;
		/* filter: brightness(80%); */
	}
</style>
