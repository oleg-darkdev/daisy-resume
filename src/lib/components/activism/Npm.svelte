<script>
	import { npmPackages } from '../../data/activism/activismData';

	let showFullNpm = false;
</script>

<div class="mt-6 mb-20 flex w-full flex-col ">
	<h2
		class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
	>
		My npm packages
	</h2>
	<div class="mb-6 flex flex-row flex-wrap">
		{#each !showFullNpm ? npmPackages.slice(0, 6) : npmPackages as npm}
			<a href={npm.link} target="_blank" rel="noopener noreferrer">
				<div class="card m-1 w-64 bg-gray-800 shadow-xl hover:bg-gray-900">
					<figure><img async src={npm.img} alt={npm.title} /></figure>
					<div class="card-body">
						<h2 class="card-title -mt-6 text-gray-200">
							{npm.title}
							<div class="badge-error badge">{npm.stack}</div>
						</h2>
						<p class=" mb-2 text-sm text-2xl text-white">
							~{npm.downloads} downloads per week
						</p>
						<div class="card-actions justify-end">
							<button class="btn  gap-2 hover:bg-error hover:text-gray-800">Go to NPM</button>
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
