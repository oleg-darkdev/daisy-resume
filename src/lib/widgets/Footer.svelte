<script>
  import { onMount } from 'svelte';

	onMount(() => {
			const left = document.querySelector(".left");
			const right = document.querySelector(".right");

			left.addEventListener("mouseenter", () => {
				left.style.width = "75%";
				right.style.width = "25%";
			});

			left.addEventListener("mouseleave", () => {
				left.style.width = "50%";
				right.style.width = "50%";
			});

			right.addEventListener("mouseenter", () => {
				right.style.width = "75%";
				left.style.width = "25%";
			});

			right.addEventListener("mouseleave", () => {
				right.style.width = "50%";
				left.style.width = "50%";
			});
	});


</script>

<footer class='h-screen w-12/12 m-0 p-0'>
	<div class="flex flex-row ">
		<div class="split left  
		">
			<h2 class='text-center font-black text-6xl'>Front-end <br/> developer</h2>
			<!-- <a href="#" class="button">Read More</a> -->
		</div>
		<div class="split right ">
			<h2 class='text-center font-black text-6xl'>The Boardgames <br/> creator</h2>
			<!-- <a href="#" class="button">Read More</a> -->
		</div>
	</div>

	<div class="fixed z-40 -bottom-32 -left-32 hidden h-96 w-96 md:block">
		<div class="text-extrabold absolute right-12 top-1/4 z-20 text-start text-xl">
			<span class="text-7xl"> 🎨 </span>
			<p>Got a project ?</p>
			<a href="#" class="underline"> Let&#x27;s talk </a>
		</div>
		<svg viewBox="0 0 200 200" class="absolute h-full w-full" xmlns="http://www.w3.org/2000/svg">
			<path
				fill="#44149c"
				d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,88.5,-0.9C87,14.6,81.4,29.2,74.1,43.2C66.7,57.2,57.6,70.6,45,78.1C32.4,85.6,16.2,87.1,0.7,85.9C-14.8,84.7,-29.6,80.9,-43.9,74.4C-58.3,67.9,-72,58.7,-79.8,45.9C-87.7,33,-89.5,16.5,-88.9,0.3C-88.4,-15.9,-85.4,-31.7,-78.1,-45.4C-70.8,-59.1,-59.1,-70.6,-45.3,-77.9C-31.6,-85.3,-15.8,-88.5,-0.3,-88.1C15.3,-87.6,30.5,-83.5,44.7,-76.4Z"
				transform="translate(100 100)"
			/>
		</svg>
	</div>
</footer>

<style>
	:root {
		--container-bg-color: #333;
		--left-button-hover-color: rgba(161, 11, 11, 0.3);
		--left-bg-color: rgba(10, 10, 10, 0.9);
		--right-bg-color: rgba(68, 20, 156, 0.6);
		--right-button-hover-color: rgba(92, 92, 92, 0.3);
		--hover-width: 75%;
		--other-width: 25%;
		--speed: 1000ms;
	}


	h2 {
		/* font-size: 4rem;
		color: #fff; */
		position: absolute;
		left: 50%;
		top: 20%;
		transform: translateX(-50%);
		white-space: nowrap;
	}

	.split {
		position: absolute;
		width: 50%;
		height: 100%;
		overflow: hidden;
	}

	.split.left {
		left: 0;
		background: url('https://image.ibb.co/m56Czw/designer.jpg') center center no-repeat;
		background-size: cover;
	}

	.split.left:before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: var(--left-bg-color);
	}

	.split.right {
		right: 0;
		background: url('https://image.ibb.co/m3ZbRb/programmer.png') center center no-repeat;
		background-size: cover;
	}

	.split.right:before {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		background: var(--right-bg-color);
	}

	.split.left,
	.split.right,
	.split.right:before,
	.split.left:before {
		transition: var(--speed) all ease-in-out;
	}

	.hover-left .left {
		width: var(--hover-width);
	}

	.hover-left-smalled-right {
		width: var(--other-width);
	}

	.hover-left .right:before {
		z-index: 2;
	}

	.hover-right .right {
		width: var(--hover-width);
	}

	.hover-right .left {
		width: var(--other-width);
	}

	.hover-right .left:before {
		z-index: 2;
	}

	@media (max-width: 800px) {
	 
 
	}

	@media (max-height: 700px) {
	 
	}
</style>
