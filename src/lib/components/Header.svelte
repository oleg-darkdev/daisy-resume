<script>
	export let selectedSection, sections;
</script>

<header>
	<div class="navbar bg-base-100">
		<div class="navbar-start">
			<div class="dropdown">
				<label tabindex="0" class="btn-ghost btn-circle btn">
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
				<ul
					tabindex="0"
					class="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
				>
					<li
						on:click={() => (selectedSection = sections[0])}
						class="{selectedSection == sections[0]
							? 'bg-gray-800 '
							: 'bg-primary text-primary-content'} text-1xl h-10 p-1 text-white place-content-center rounded-t-xl"
					>
						Hello
					</li>
					<li
						on:click={() => (selectedSection = sections[1])}
						class="{selectedSection == sections[1]
							? 'bg-gray-800 '
							: 'bg-secondary text-secondary-content'} text-1xl h-10 text-white  p-1 place-content-center"
					>
						About
					</li>
					<li
						on:click={() => (selectedSection = sections[2])}
						class="{selectedSection == sections[2]
							? 'bg-gray-800 '
							: 'bg-success text-success-content '} text-1xl h-10 text-white  p-1 place-content-center"
					>
						Resume
					</li>
					<li
						on:click={() => (selectedSection = sections[3])}
						class="{selectedSection == sections[3]
							? 'bg-gray-800 '
							: 'bg-info text-info-content'} text-1xl h-10 p-1 text-white  place-content-center"
					>
						Activism
					</li>
					<li
						on:click={() => (selectedSection = sections[4])}
						class="{selectedSection == sections[4]
							? 'bg-gray-800 '
							: 'bg-error text-error-content'} text-1xl h-10 p-1 text-white  place-content-center"
					>
						Contact
					</li>
				</ul>
			</div>
		</div>
		<div class="navbar-center">
			<a class="btn-ghost btn text-xl normal-case">daisyUI</a>
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
	</div>
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
