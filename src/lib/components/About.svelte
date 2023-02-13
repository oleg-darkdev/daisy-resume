<script>
  import SocialProjects from "./SocialProjects.svelte";
	// добавить фото с хакатонов, выступлений и т.д.
	const gallery = [
		{
			img: '',
			title: '',
			desc: ''
		},
		{
			img: '',
			title: '',
			desc: ''
		},
		{
			img: '',
			title: '',
			desc: ''
		},
		{
			img: '',
			title: '',
			desc: ''
		},
		{
			img: '',
			title: '',
			desc: ''
		},
		{
			img: '',
			title: '',
			desc: ''
		}
	];
</script>

<SocialProjects />

<div class="mb-8 flex max-w-2xl flex-row flex-wrap">
	{#each gallery as photo}
		<div class="card card-compact m-1 w-80 bg-base-100 shadow-xl">
			<figure><img src={photo.img} alt={photo.title} /></figure>
			<div class="card-body">
				<h2 class="card-title">{photo.title}</h2>
				<p>{photo.desc}</p>
			</div>
		</div>
	{/each}
</div>
