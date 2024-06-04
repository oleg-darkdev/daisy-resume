<script>
	import { onMount } from 'svelte';
	import { TweenMax } from 'gsap';
</script>

<section class=" flex lg:h-screen md:h-screen xl:h-screen  w-full items-center justify-center overflow-hidden">
	<div class="header flex flex-col items-center justify-center">
		<h1 class="header__initials font-black">Oleg <br /> Medvedev</h1>

		<div class="header__title">
			<!-- DarkDEV -->
			<!-- <h2 class='font-black text-6xl'>Oleg Medvedev</h2> -->
			<p>Creative front-end developer &amp; Boardgames creator</p>
		</div>
	</div>
</section>

<style>
	@media screen and (max-width: 480px) {
		.header__initials {
			font-size: 8vh;
			line-height: 1.2em;
			letter-spacing: 1.2px;
      text-align: center;
      padding-top: 10rem;
		}

		.header__title p {
			font-size: 14px;
			letter-spacing: 0.7px;
      text-align: center;
		}

		.header__title {
      margin-top: 14px;
      max-width: 240px;
      text-align: center;

		}
	}
	@media screen and (min-width: 480px) {
		.header__initials {
			font-size: 20vh;
			line-height: 1.2em;
			letter-spacing: 1.2px;
		}

		.header__title p {
			font-size: 14px;
			letter-spacing: 0.7px;
		}

		.header__title {
			right: 25%;
      position: absolute;
		}
	}
	.header__initials {
		display: inline-block;
		color: #e2e6ee;
		background: url('/images/bg-purple.gif');
		-webkit-text-fill-color: transparent;
		-webkit-background-clip: text;
		background-size: contain;
		background-position: center;
	}

	.header__title {

		text-align: center;
		color: #44149c;
	}
	.header__title h2 {
		letter-spacing: 1.2px;
		margin-bottom: 0;
	}
	.header__title p {
		margin: 0;
		text-transform: uppercase;
	}
</style>
