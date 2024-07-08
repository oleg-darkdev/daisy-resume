<script>
	export let service;
</script>

<div class="home-service_card">
	<div class="home-service_top">
		<!-- <div class="text-size-small text-style-muted">00{service.id}</div> -->
		<div class="home-service_intro">
			<div class="text-size-large">{service.title}</div>
			<div class="text-size-regular text-style-muted ">
				{service.desc}
			</div>
		</div>
	</div>
	<!-- <div class="home-service_image">
		<div class="home-service_height">
			<img src="{service.img}" loading="lazy" alt="" class="image-fill" />
		</div>
	</div> -->
</div>
