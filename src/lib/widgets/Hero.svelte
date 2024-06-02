<script>
	import { onMount } from 'svelte';
	import { TweenMax } from 'gsap';
</script>

<section class=" h-screen w-full flex justify-center items-center overflow-hidden">
	<div class="header flex flex-col justify-center items-center">
		<h1 class="header__initials font-black">Oleg <br/> Medvedev</h1>

		<div class="header__title">
			<!-- DarkDEV -->
			<!-- <h2 class='font-black text-6xl'>Oleg Medvedev</h2> -->
			<p>Creative front-end developer &amp; Boardgames creator</p>
		</div>
	</div>
</section>

<style>
	.header__initials {
		display: inline-block;
		font-size: 20vh;
		line-height: 1.2em;
		letter-spacing: 1.2px;

		color: #e2e6ee;
		background: url('/images/bg-purple.gif');
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-size: contain;
		background-position: center;
	}
	.header__title {
		position: absolute;
		text-align: center;
		right: 25%;
		color: #44149c;
	}
	.header__title h2 {
		letter-spacing: 1.2px;
		margin-bottom: 0;
	}
	.header__title p {
		font-size: 14px;
		letter-spacing: 0.7px;
		margin: 0;
		text-transform: uppercase;
	}
</style>
