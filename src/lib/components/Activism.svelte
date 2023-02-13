<script>
  import SocialProjects from "./SocialProjects.svelte";
  import Statistics from './Statistics.svelte';
  import statisticsData from '../data/statistics';

	const photosList = [
		{
			title: '',
			desc: '',
			img: '/images/activism/sopot_gov.png'
		},
		{
			title: '',
			desc: '',
			img: '/images/activism/sopot_fest.png'
		},
		{
			title: '',
			desc: '',
			img: '/images/activism/archeology.JPG'
		},

		{
			title: '',
			desc: '',
			img: '/images/activism/waw.jpg'
		},
		{
			title: '',
			desc: '',
			img: '/images/activism/emik.jpg'
		}
		// {
		//   title: '',
		//   desc: '',
		//   img: '/images/activism/emik.png'
		// },
	];
</script>

<Statistics statisticsData={statisticsData.social} />

<SocialProjects />

{#each photosList as photo}
	<div style="max-height: 450px;" class="card mb-4 max-w-3xl bg-base-100 shadow-xl lg:card-side">
		<figure><img src={photo.img} alt="Sopot goverment" /></figure>
		<div class="card-body">
			<h2 class="card-title">{photo.title}</h2>
			<p>{photo.desc}</p>
		</div>
	</div>
{/each}
