<script>
	const boardgamesList = [
		{
			title: 'Lorem ipsum is placeholder ',
			link: 'by-pl.vercel.app',
			img: '/images/boardgames/by-pl_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: '',
			img: '/images/boardgames/graffity_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: 'mks-14.vercel.app',
			img: '/images/boardgames/mks_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: '',
			img: '/images/boardgames/spyral_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: '',
			img: '/images/boardgames/kanbanism_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: '',
			img: '/images/boardgames/fnb_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: 'lgbt-tree.vercel.app',
			img: '/images/boardgames/lgbt_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: '',
			img: '/images/boardgames/gulagUSSR_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: '',
			img: '/images/boardgames/A_logo.svg'
		},
		// {
		// 	title: 'Lorem ipsum is placeholder ',
		// 	link: '',
		// 	img: '/images/boardgames/ggg.svg'
		// }
	];
</script>

<section class="py-6 sm:py-8 lg:py-12 ">
		<div
			data-aos="fade-up"
			data-aos-delay="220"
			data-aos-duration="1200"
			data-aos-once="true"
			data-aos-mirror="true"
			class="px-4 mx-auto md:px-8 mb-12 mt-6 grid gap-4 grid-cols-2 md:gap-6 "
		>
			<!-- product - start -->
			{#each boardgamesList as boardgame}
				<div>
					<a
						href={boardgame.link}
						class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
					>
						<img
							src="{boardgame.img}"
							loading="lazy"
							alt="{boardgame.title} logo"
							class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
						/>

						<div class=" relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
							<span class="text-gray-500 mb-2">{boardgame.title}</span>
							<!-- <span class="text-lg font-bold text-gray-800 lg:text-xl">Business Causual</span> -->
							<div class="flex justify-center">
								<span class="inline-flex items-center text-gray-700 hover:underline">
									More
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke-width="1.5"
										stroke="currentColor"
										class="ml-2 h-5 w-5"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
										/>
									</svg>
								</span>
							</div>
						</div>
					</a>
				</div>
			{/each}
			<!-- product - end -->
		</div>
</section>
