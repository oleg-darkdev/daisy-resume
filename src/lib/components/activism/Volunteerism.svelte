<script>
	import { volunteerism } from '../../data/activism/activismData';

	let showFullVol = false;
</script>

<h2
	data-aos="fade-up"
	data-aos-delay="80"
	data-aos-duration="400"
	data-aos-once="true"
	data-aos-mirror="true"
	class="mb-2 rounded-xl bg-gray-800 p-4 text-5xl font-bold text-white md:w-8/12 lg:w-8/12 xl:w-8/12"
>
	My story of volunteering
</h2>

<ul
	data-aos="fade-up"
	data-aos-delay="80"
	data-aos-duration="800"
	data-aos-once="true"
	data-aos-mirror="true"
	class="steps steps-vertical "
>
	{#each volunteerism as vol (vol.id)}
		<li
			data-aos="fade-up"
			data-aos-delay="80"
			data-aos-duration="800"
			data-aos-once="false"
			data-aos-mirror="true"
			class="step-info step "
		>
			<div class="card m-1 w-auto max-w-2xl bg-gray-800 shadow-xl hover:bg-gray-900">
				<div class="card-body">
					<h2 class="card-title text-gray-200">{@html vol.title}</h2>
					<p class="text-start text-sm dark:text-gray-400">
						{vol.dates[0]} - {vol.dates[1]}
					</p>
					{#each vol.desc as desc}
						<p class="text-start text-gray-200">{@html desc}</p>
					{/each}
				</div>
			</div>
		</li>
	{/each}
</ul>
