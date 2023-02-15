<script>
	import Header from '../lib/components/Header.svelte';
	import Nav from '../lib/components/Nav.svelte';
	import Hello from '../lib/components/Hello.svelte';
	import Resume from '../lib/components/resume/Resume.svelte';
	import Activism from '../lib/components/activism/Activism.svelte';
	import Contact from '../lib/components/Contact.svelte';
	import About from '../lib/components/about/About.svelte';

	let sections = [
		{
			text: 'Hello',
			color: 'bg-primary text-primary-content'
		},
		{
			text: 'About',
			color: 'bg-secondary text-secondary-content '
		},
		{
			text: 'Resume',
			color: 'bg-success text-success-content'
		},
		// {
		// 	text: 'Portfolio',
		// 	color: 'bg-warning text-warning-content'
		// },
		{
			text: 'Activism',
			color: 'text-info-content bg-info '
		},
		{
			text: 'Contact',
			color: 'bg-error text-error-content'
		}
	];

	let selectedSection = sections[0];
</script>

<svelte:head>
	<title>Oleg DarkDev</title>
</svelte:head>

<Header bind:selectedSection {sections} />
{#if selectedSection.text == sections[0].text}
	<section class="hero flex w-full flex-wrap justify-center  p-4  ">
		<div class="w-full md:w-7/12 lg:w-7/12 xl:w-8/12">
			<Hello bind:selectedSection {sections} />
		</div>
		<div style="width: 300px;" class="nav flex items-center  ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else}
	<section class="flex w-full flex-wrap justify-center p-4 {selectedSection.color}  ">
		<div
			style="height: 100%;"
			class="flex w-full flex-col justify-start md:w-7/12 lg:w-7/12  xl:w-8/12"
		>
			<a name="about" /> <a name="resume" />
			<a name="activism" />

			{#if selectedSection.text == sections[1].text}
				<About />
			{:else if selectedSection.text == sections[2].text}
				<Resume />
			{:else if selectedSection.text == sections[3].text}
				<Activism />
			{:else if selectedSection.text == sections[4].text}
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
