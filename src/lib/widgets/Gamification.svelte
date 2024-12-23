<script>
	import { CurverNav, ProgectCard } from '$entities';
	import { boardgames } from '$shared';

	let showBoardgames = false;
</script>

<section class="home-about group">
	<div class="padding-horizontal padding-small">
		<div class="grid-large">
			<div class="home-about-block about-wrap">
				<CurverNav  />

				<div class="padding-horizontal padding-medium">
					<div class="home-about-top">
						<div  class="padding-vertical padding-xlarge">
							<div class="home-about-intro">
								<div class="text-size-xlarge text-align-center">
									Help you with creating gamification of the learning process - on absolutely any
									topic.
								</div>
								<div
									on:click={() => {
										showBoardgames = true;
									}}
									class="button is-light w-inline-block cursor-pointer"
								>
									<a href='#boardgames' class="text-size-xsmall">Explore my boardgames portfolio</a>
								</div>
							</div>
						</div>
						<!-- <div  class="font-optiker"> -->
						<!-- Since 2018. -->
						<!-- </div> -->
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class='home-about'>
	{#if showBoardgames}
		<div id="boardgames" class="mx-auto flex flex-row flex-wrap justify-between md:w-10/12 lg:w-10/12 xl:w-10/12">
			{#each boardgames as project}
				<ProgectCard {project} />
			{/each}
		</div>
	{/if}
</section>

<style>
	.about-wrap {
		grid-area: 1 / 1 / 2 / 4;
	}
</style>
