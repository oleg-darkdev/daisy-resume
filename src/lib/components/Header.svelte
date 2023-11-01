<script>
	$: showNavPanel = false;

	export let selectedSection, sections;
</script>

<!-- <header> -->
<header class="navbar bg-base-100">
	<div class="navbar-start">
		<div class="dropdown">
			<label tabindex="0"on:click={() => (showNavPanel = !showNavPanel)} class="btn-ghost btn-circle btn">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-5 w-5"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16M4 18h7"
					/></svg
				>
			</label>
			{#if showNavPanel}
				<ul tabindex="0" class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow">
					<li
						on:click={() => (selectedSection = sections[0])}
						class=" text-1xl h-16 place-content-center rounded-t-xl border-b border-gray-600 bg-gray-800 p-1 text-white"
					>
						Hello
					</li>
					<li
						on:click={() => (selectedSection = sections[1])}
						class=" text-1xl h-16 place-content-center  border-b border-gray-600 bg-gray-800  p-1 text-white"
					>
						About
					</li>
					<li
						on:click={() => (selectedSection = sections[2])}
						class=" text-1xl h-16 place-content-center  border-b border-gray-600 bg-gray-800  p-1 text-white"
					>
						Resume
					</li>
					<li
						on:click={() => (selectedSection = sections[3])}
						class=" text-1xl h-16 place-content-center  border-b border-gray-600 bg-gray-800  p-1 text-white"
					>
						Activism
					</li>
					<li
						on:click={() => (selectedSection = sections[4])}
						class=" text-1xl h-16 place-content-center  border-b border-gray-600 bg-gray-800 p-1  text-white"
					>
						Contact
					</li>
				</ul>
			{/if}
		</div>
	</div>
	<div class="navbar-center">
		<!-- <a class=" text-xl normal-case"> -->
			<img src="./images/darkdev-logo.svg" class="btn-ghost btn h-20 w-[240px]" alt="" />
		<!-- </a> -->
	</div>
	<!-- <div class="navbar-end">

			<button class="btn-ghost btn-circle btn">
				<div class="indicator">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
						/></svg
					>
					<span class="badge-primary badge badge-xs indicator-item" />
				</div>
			</button>
		</div> -->
</header>

<style>
	@media (max-width: 780px) {
	}

	@media (min-width: 780px) {
		header {
			display: none;
		}
	}
</style>
