<script>
	export let selectedSection, sections;
</script>

<div class="flex w-full flex-col">
	<div style="width: 300px;" class="wrap ">
		<h2 class="m-1 text-5xl text-white">{selectedSection.text}</h2>
		<div class="w-full rounded-xl border p-1">
			<div
				on:click={() => {
					selectedSection = sections[0];
				}}
				class="h-16 w-full place-content-center rounded-t-xl bg-primary text-primary-content hover:bg-white hover:bg-gray-800"
			>
				<!-- <a href="#hello"></a> -->
				<h2 class="h-full w-full p-4 text-center text-2xl text-white hover:text-primary">Hello</h2>
			</div>
			<div
				on:click={() => (selectedSection = sections[1])}
				class="h-16 w-full place-content-center bg-secondary text-secondary-content hover:bg-white hover:bg-gray-800"
			>
				<!-- <a href="#hello"></a> -->
				<h2 class="h-full w-full p-4 text-center text-2xl text-white hover:text-secondary">
					About
				</h2>
			</div>
			<div
				on:click={() => (selectedSection = sections[2])}
				class="h-16 w-full place-content-center bg-success text-success-content  hover:bg-gray-800"
			>
				<!-- <a href="#hello"></a> -->
				<h2 class="h-full w-full p-4 text-center text-2xl text-white hover:text-success">Resume</h2>
			</div>
			<div
				on:click={() => (selectedSection = sections[3])}
				class="h-16 w-full place-content-center bg-warning text-warning-content  hover:bg-gray-800"
			>
				<!-- <a href="#hello"></a> -->
				<h2 class="h-full w-full p-4 text-center text-2xl text-white hover:text-warning">
					Portfolio
				</h2>
			</div>
			<div
				on:click={() => (selectedSection = sections[4])}
				class="h-16   w-full place-content-center bg-info text-info-content  hover:bg-gray-800"
			>
				<!-- <a href="#hello"></a> -->
				<h2 class="h-full w-full p-4 text-center text-2xl text-white hover:text-info">Activism</h2>
			</div>
			<div
				on:click={() => (selectedSection = sections[5])}
				class="h-16 w-full  place-content-center rounded-b-xl bg-error text-error-content hover:bg-gray-800"
			>
				<!-- <a href="#hello"></a> -->
				<h2 class="h-full w-full p-4 text-center text-2xl text-white hover:text-error">Contact</h2>
			</div>
		</div>
	</div>
</div>

<style>
	.wrap {
		position: absolute;
		right: 16%;
		top: 20%;
	}
</style>
