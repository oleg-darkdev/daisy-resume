<script>
	import { gamesList } from '../../data/resume/resumeData';
</script>

{#each gamesList as game}
	<div class="card image-full m-1 h-96 w-full bg-base-100 shadow-xl md:max-w-xl lg:max-w-xl">
		<figure>
			<img src={game.img} alt={game.title} />
		</figure>
		<div class="card-body">
			<h2 class="card-title">{game.title}</h2>
			<p>{game.description}</p>
			<div class="card-actions justify-end">
				<button class="btn-primary btn-lg btn w-48">More</button>
			</div>
		</div>
	</div>
{/each}
