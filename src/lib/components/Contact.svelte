<script>
	const cosialList = [
		{
			img: '/images/contact/facebook.svg',
			link: 'https://www.facebook.com/hulio.mondre'
		},
		{
			img: '/images/contact/linkedin.svg',
			link: 'https://www.linkedin.com/in/oleg-darkdev'
		},
		{
			img: '/images/contact/github.svg',
			link: 'https://github.com/oleg-darkdev'
		},
		{
			img: '/images/contact/telegram.svg',
			link: 'https://t.me/polish_cat'
		},
		{
			img: '/images/contact/discord.svg',
			link: 'https://discord.com/users/oleg_DarkDev#8277'
		},
		{
			img: '/images/contact/email.svg',
			link: 'mailto:oleg@darkdev.games'
		}
		// {
		// 	img: '/images/contact/codewars.svg',
		// 	link: 'https://www.codewars.com/users/Oleg_DarkDev'
		// }
	];
</script>

<div
	id="contact"
	style="height: 100vh;"
	class="flex w-full  items-center justify-start md:justify-center lg:justify-center xl:justify-center "
>
	<div class="flex max-w-md flex-col items-center pt-10">
		<h2 class="text-3xl text-white md:text-4xl lg:text-5xl xl:text-5xl">Contact with me 🖤</h2>
		<div class="flex flex-row flex-wrap items-center justify-center">
			{#each cosialList as item}
				<div class="avatar m-1 rounded-xl hover:bg-gray-800">
					<div class="w-32 rounded">
						<a href={item.link} target="_blank">
							<img src={item.img} alt={item.link} />
						</a>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
