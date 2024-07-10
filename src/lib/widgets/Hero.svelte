<script>
	import { onMount } from 'svelte';
</script>


<section  class="home-hero">
	<div class="padding-horizontal padding-medium">
	<div class="grid-large">
		<div id="hero-wrap" class="home-hero-block">
		<div id="hero-intro-wrap" class="home-hero-intro">
			<!-- lg:h-screen md:h-screen xl:h-screen  -->
			<div class=" flex  w-full items-center justify-center overflow-hidden">
				<div class="header flex flex-col items-center justify-center">
					<h1 class="header__initials font-black text-[#e2e6ee]">Oleg <br /> Dark <span class='text-violet-800 '>DEV</span> </h1>

					<div class="header__title ">
						<!-- DarkDEV -->
						<p class='z-10'>Product Web Engineer </p>
						<!-- <span style='text-align: start; color: #44149c; font-size: 9vh; z-index: 0;' class='-left-8 -top-3 absolute z-0' >&amp; </span>  -->
						<p class='z-10' style='text-align: start;'>Game designer</p>

					</div>
				</div>
			</div>
		</div>
		</div>
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

	@media screen and (min-width: 640px) {
		.header__initials {
			font-size: 19vh;
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

  @media screen and (min-width: 920px) {
	.header__initials {
		font-size: 26vh;
	}
}
.header__initials {
	display: inline-block;
  background: url('/images/bg-purple.gif');
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-size: contain;
  background-position: center;
}

	.header__title {

		text-align: center;
		color: #fff;
		/* #44149c */
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
