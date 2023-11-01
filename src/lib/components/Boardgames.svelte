<script>
	const boardgamesList = [
		{
			title: 'Lorem ipsum is placeholder ',
			link: 'https://mks-14.vercel.app',
			img: '/images/boardgames/social/mks_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: 'https://lgbt-tree.vercel.app',
			img: '/images/boardgames/social/lgbt_logo.svg'
		},

		{
			title: 'Lorem ipsum is placeholder ',
			link: 'https://by-pl.vercel.app',
			img: '/images/boardgames/social/by-pl_logo.svg'
		},

    // not delivery


		{
			title: 'Lorem ipsum is placeholder ',
			link: 'https://fnb-game.vercel.app/',
			img: '/images/boardgames/social/fnb_logo.svg'
		},

		{
			title: 'Lorem ipsum is placeholder ',
			link: 'https://chaos-theory.vercel.app/',
			img: '/images/boardgames/social/A_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: 'https://graffity-wars.vercel.app/',
			img: '/images/boardgames/social/graffity_logo.svg'
		},
		{
			title: 'Lorem ipsum is placeholder ',
			link: 'https://gulag-ussr.vercel.app/',
			img: '/images/boardgames/social/gulagUSSR_logo.svg'
		},

		// games for bussines

		{
			title: 'Kanbanism',
			link: 'https://agile-fans.vercel.app/products/kanbanel',
			img: '/images/boardgames/bussines/kanbanel/logo.svg'
		},

		{
			title: 'Coast of delay',
			link: 'https://agile-fans.vercel.app/products/coast-of-delay',
			img: '/images/boardgames/bussines/coast-of-delay/logo.svg'
		},
		{
			title: 'Crazy limits',
			link: 'https://agile-fans.vercel.app/products/crazy-wip',
			img: '/images/boardgames/bussines/crazy-wip/logo.svg'
		},
		{
			title: 'Easy Kanban',
			link: 'https://agile-fans.vercel.app/products/easy-kanban',
			img: '/images/boardgames/bussines/easy-kanban/logo.svg'
		},
		{
			title: 'Kanban Riders',
			link: 'https://agile-fans.vercel.app/products/kanban-riders',
			img: '/images/boardgames/bussines/kanban-riders/logo.svg'
		},
		{
			title: '10 Motivators',
			link: 'https://agile-fans.vercel.app/products/ten',
			img: '/images/boardgames/bussines/ten/logo.svg'
		},
		{
			title: 'Pomodoro plan',
			link: 'https://agile-fans.vercel.app/products/pomodoro-plan',
			img: '/images/boardgames/bussines/pomodoro-plan/logo.svg'
		},
{
			title: 'Lorem ipsum is placeholder ',
			link: 'https://spyral-game.vercel.app/',
			img: '/images/boardgames/bussines/spyral-dynamics/logo.svg'
		},
		//
		// {
		// 	title: 'Lorem ipsum is placeholder ',
		// 	link: '',
		// 	img: '/images/boardgames/ggg.svg'
		// },
		// {
		// 	title: 'Lorem ipsum is placeholder ',
		// 	link: '',
		// 	img: '/images/boardgames/ggg.svg'
		// },


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
		class="mx-auto mb-12 mt-6 grid grid-cols-2 gap-4 px-4 md:gap-6 md:px-8 "
	>
		<!-- product - start -->
		{#each boardgamesList as boardgame}
			<div>
				<a
					href={boardgame.link}
					class="group relative flex h-96 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
				>
					<img
						src={boardgame.img}
						loading="lazy"
						alt="{boardgame.title} logo"
						class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
					/>

					<div class=" relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
						<span class="mb-2 text-gray-500">{boardgame.title}</span>
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
