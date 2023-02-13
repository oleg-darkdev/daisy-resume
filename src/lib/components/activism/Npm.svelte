<script>
  import npmPackages from '../../data/activism/npm';

  let showFullNpm = false;
</script>

<div class="mt-6 mb-20 flex w-full flex-col ">
	<h2 class="mb-2 text-5xl font-bold text-gray-800">My npm packages</h2>
	<div class="mb-2 flex flex-row flex-wrap">
		{#each !showFullNpm ? npmPackages.slice(0, 6) : npmPackages as npm}
			<a href={npm.link} target="_blank" rel="noopener noreferrer">
				<div class="card m-1 w-64 bg-base-100 shadow-xl">
					<figure><img async src={npm.img} alt={npm.title} /></figure>
					<div class="card-body">
						<h2 class="card-title -mt-6 text-gray-200">
							{npm.title}
							<div class="badge-error badge">{npm.stack}</div>
						</h2>
						<div class="card-actions justify-end">
							<button class="btn  gap-2 hover:bg-error hover:text-gray-800">read more</button>
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
	<div class="flex w-full justify-center">
		<button
			class="btn-active btn-lg btn w-8/12 max-w-md"
			on:click={() => (showFullNpm = !showFullNpm)}
			>{!showFullNpm ? 'Show' : 'Hide'} npm packages</button
		>
	</div>
</div>
