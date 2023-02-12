<script lang="ts">
	import '../app.css';
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

	@font-face {
		font-family: 'Cyberway';
		font-style: normal;
		font-weight: 500;

		src: local(''), /* Super Modern Browsers */ url('/fonts/cyberway.woff') format('woff'),
			/* Modern Browsers */ url('/fonts/cyberway.ttf') format('truetype'),
			/* Safari, Android, iOS */ url('/fonts/cyberway.svg') format('svg'); /* Legacy iOS */
	}
</style>
