<script>
	export let selectedSection, sections;
</script>

<div class="flex w-full flex-col">
	<div style="width: 300px;" class="wrap ">
		<h2 class="m-1 text-5xl text-white">{selectedSection.text}</h2>
		<ul class="w-full rounded-xl border bg-gray-900 p-1">
			{#each sections as section}
				<li
					class="h-16 w-full  rounded-xl hover:bg-white hover:bg-gray-800 "
					on:click={() => {
						selectedSection = section;
						window.location.href = `#${section.anchor}`;
					}}
				>
					<p class="h-full w-full p-4 text-center text-2xl text-white hover:text-gray-900">
						{section.text}
					</p>
				</li>
				<div class="flex w-full justify-center">
					<hr class="w-20 bg-gray-100 " />
				</div>
			{/each}
		</ul>
	</div>
</div>

<style>
	.wrap {
		position: fixed;
		right: 16%;
		top: 16%;
		display: fixed;
	}
</style>
