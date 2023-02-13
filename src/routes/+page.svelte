<script>
	import Nav from '../lib/components/Nav.svelte';
	import Hello from '../lib/components/Hello.svelte';
	import Resume from '../lib/components/Resume.svelte';
	// import GamesList from "../lib/components/GamesList.svelte";
	import { fade } from 'svelte/transition';
	import Activism from '../lib/components/Activism.svelte';
	import Contact from '../lib/components/Contact.svelte';
	import About from '../lib/components/About.svelte';

	let sections = [
		{
			text: 'Hello',
			color: '#661AE6'
			// #E91E63
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
	<title>Home</title>
</svelte:head>

{#if selectedSection.text == sections[0].text}
	<section class="hero flex w-full flex-wrap justify-center  p-4  ">
		<div class="w-7/12 ">
			<Hello bind:selectedSection {sections} />
		</div>
		<div style="width: 300px;" class="nav flex items-center  ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else}
	<section class="flex w-full flex-wrap justify-center p-4 {selectedSection.color}  ">
		<div style="height: 100%;" class="flex w-7/12 flex-col  justify-start">
			{#if selectedSection.text == sections[1].text}
				<About />
			{:else if selectedSection.text == sections[2].text}
				<Resume />
				<!-- {:else if selectedSection.text == sections[3].text} -->
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

<!--
{:else if selectedSection.text == sections[1].text}
	<section class="flex w-full flex-wrap justify-center bg-secondary p-4  text-secondary-content ">
		<div class="w-w-7/12">text 2</div>
		<div style="width: 300px;" class="flex items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[2].text}
	<section class="flex w-full flex-wrap justify-center bg-success p-4  text-success-content ">
		<div class="w-7/12">
			<Resume />
		</div>
		<div style="width: 300px;" class="flex items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[3].text}
	<section class="flex w-full flex-wrap justify-center bg-warning p-4  text-warning-content ">
		<div class="w-w-7/12">
		</div>
		<div style="width: 300px;" class="flex items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[4].text}
	<section class="flex w-full flex-wrap justify-center  bg-info p-4  text-info-content ">
		<div class="w-w-7/12">
		</div>
		<div style="width: 300px;" class="flex items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[5].text}
	<section class="flex w-full flex-wrap justify-center bg-error p-4 text-error-content ">
		<div class="w-w-7/12">
		</div>
		<div style="width: 300px;" class="flex items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{/if} -->
<style>
	section {
		min-height: 100vh;
	}
	@media (max-width: 780px) {
		.nav {
			display: none;
		}
		.hero {
			background-position: left center;
			background: url(/images/hero.png);
			top: 0;
			left: 0;
		}
	}

	@media (min-width: 780px) {
		.hero {
			background: url(/images/hero.png);
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
