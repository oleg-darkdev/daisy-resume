<script>
	import '../app.css';
	import 'aos/dist/aos.css';
	import AOS from 'aos';
	import { onMount } from 'svelte';
	onMount(() => {
		AOS.init();
	});
</script>

<main class="">
	<slot />
</main>

<style>
	:global(body) {
		overflow-x: hidden;
	}
	:global(.text-cyberway) {
		font-family: 'Cyberway';
		line-height: 1.2;
	}

	:global(.success-dark) {
		background-color: #14c683;
		border: 2px solid #00a667;
	}
	:global(.info-dark) {
		background-color: #0faff4;
		border: 2px solid #04a4e9;
	}

	@font-face {
		font-family: 'Cyberway';
		font-style: normal;
		font-weight: 500;

		src: local(''), /* Super Modern Browsers */ url('/fonts/cyberway.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/cyberway.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/cyberway.svg') format('svg'); /* Legacy iOS */
	}
</style>
