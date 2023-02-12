<script>
	import Nav from '../lib/components/Nav.svelte';
	import Hello from '../lib/components/Hello.svelte';
	// import GamesList from "../lib/components/GamesList.svelte";
	import { fade } from 'svelte/transition';
	let sections = [
		{
			text: 'Hello',
			color: '#661AE6'
			// #E91E63
		},
		{
			text: 'About',
			color: '#673AB7'
		},
		{
			text: 'Resume',
			color: '#009688'
		},
		{
			text: 'Portfolio',
			color: '#4CAF50'
		},
		{
			text: 'Activism',
			color: '#4CAF50'
		},
		{
			text: 'Contact',
			color: '#FF5722'
		}
	];

	let selectedSection = sections[0];
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

{#if selectedSection.text == sections[0].text}
	<section class="flex w-full flex-wrap justify-center bg-primary  p-4 text-primary-content">
		<div class="h-full w-9/12 ">
			<!-- -->
			<Hello bind:selectedSection {sections} />
		</div>
		<div style="width: 300px;" class="flex h-full items-center  ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[1].text}
	<section
		class="flex w-full flex-wrap justify-center bg-primary bg-secondary p-4  text-secondary-content "
	>
		<div class="h-full w-9/12">text 2</div>
		<!--  -->
		<div style="width: 300px;" class="flex h-full items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[2].text}
	<section class="flex w-full flex-wrap justify-center bg-success p-4  text-success-content ">
		<div class="h-full w-9/12">
			<!-- <GamesList /> -->
		</div>
		<div style="width: 300px;" class="flex h-full items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[3].text}
	<section class="flex w-full flex-wrap justify-center bg-warning p-4  text-warning-content ">
		<div class="h-full w-9/12">
			<!-- <GamesList /> -->
		</div>
		<div style="width: 300px;" class="flex h-full items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[4].text}
	<section class="flex w-full flex-wrap justify-center  bg-info p-4  text-info-content ">
		<div class="h-full w-9/12">
			<!-- <GamesList /> -->
		</div>
		<div style="width: 300px;" class="flex h-full items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{:else if selectedSection.text == sections[5].text}
	<section class="flex w-full flex-wrap justify-center bg-error p-4 text-error-content ">
		<div class="h-full w-9/12">
			<!-- <GamesList /> -->
		</div>
		<div style="width: 300px;" class="flex h-full items-center ">
			<Nav bind:selectedSection {sections} />
		</div>
	</section>
{/if}

<style>
	section {
		min-height: 100vh;
	}
</style>
