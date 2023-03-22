<script>
  export let gallery;
</script>

{#each gallery as photo}
	<div
		style="max-height: 450px;"
		class="card mb-4 max-w-3xl bg-base-100 p-12 shadow-xl lg:card-side"
	>
		<figure><img async src={photo.img} alt="Sopot goverment" /></figure>
		<div class="card-body">
			<h2 class="card-title text-gray-200">{photo.title}</h2>
			<p class="text-gray-400">{photo.desc}</p>
		</div>
	</div>
{/each}
