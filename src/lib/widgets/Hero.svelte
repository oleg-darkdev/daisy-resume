<script>
	import { onMount } from 'svelte';
</script>
<!-- lg:h-screen md:h-screen xl:h-screen  -->
<section class=" flex  w-full items-center justify-center overflow-hidden">
	<div class="header flex flex-col items-center justify-center">
		<h1 class="header__initials font-black">Oleg <br /> Medvedev</h1>

		<div class="header__title ">
			<!-- DarkDEV -->
			<p class=''>Product Web Engineer <br /> &amp; Boardgames creator</p>
		</div>
	</div>
</section>

<style>
	@media screen and (max-width: 480px) {
		.header__initials {
			font-size: 9vh;
			line-height: 1.2em;
			letter-spacing: 1.2px;
			text-align: center;
			padding-top: 10rem;
		}

		.header__title p {
			font-size: 1.8rem;
			letter-spacing: 0.7px;
			text-align: center;
		}

		.header__title {
			margin-top: 14px;
			text-align: center;
		}
	}
	@media screen and (min-width: 480px) {
		.header__initials {
			font-size: 26vh;
			line-height: 1.2em;
			letter-spacing: 1.2px;
		}

		.header__title p {
			font-size: 2rem;
			letter-spacing: 0.7px;
			text-align: center;
		}

		.header__title {
			right: 0%;
			bottom: 63%;
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
