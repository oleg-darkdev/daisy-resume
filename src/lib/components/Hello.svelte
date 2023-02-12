<script>
	export let sections, selectedSection;
</script>

<div class="flex h-full w-full flex-row flex-wrap items-center justify-center">
	<div class="card avatar card-compact rounded-xl bg-base-100 shadow-xl" />

	<div class=" flex flex-col" style="">
		<h1 class="mb-4 max-w-xl text-6xl">Hi 👐, I`m Oleg Medvedev</h1>
		<h2 class="m-1 text-4xl">🛠 Engineer</h2>
		<h2 class="m-1 text-4xl">📟 IT enthusiast</h2>
		<h2 class="m-1 text-4xl">🎲
			<a href="#boardgames" on:click={() => (selectedSection = sections[4])} class="link text-white"
				>Boardgames creator</a
			>
		</h2>
		<h2 class="m-1 text-4xl">
			👍 Supporter <a href="https://github.com/oleg-darkdev" class="link">open-source</a>
		</h2>
		<h2 class="m-1 text-4xl">
			🤖 Founder of <a href="https://44hackerspace.vercel.app/" class="link-warning link"
				>@44FabLab</a
			>
		</h2>
		<h2 class="m-1 text-4xl">
			🏴 Social
			<a href="#boardgames" on:click={() => (selectedSection = sections[5])} class="link">
				Activist
			</a>
		</h2>
<p class="text-2xl m-2 max-w-sm">💙 Comfortable in turquoise model of the organizations or organizations with a flat structure.</p>
<p class="text-2xl m-2 max-w-sm">Opportunity to evolve , a chance to showcase my talents and creative thinking 🧠</p>



	</div>
</div>

<style>
	.avatar {
		min-height: 650px;
		height: auto;
	}

	.avatar {
		border: 2px solid #fff;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		margin: 0 15px 15px 0;
		min-width: 365px;
		max-width: 390px;
		width: auto;
		background-image: url(https://raw.githubusercontent.com/oleg-darkdev/CV---Resume/master/src/lib/images/photo//my_photo_1.png);
	}
</style>
