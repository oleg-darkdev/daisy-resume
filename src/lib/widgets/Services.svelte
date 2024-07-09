<script>
	import {  ServiceCard } from '$entities';
	import { services } from '$shared';
</script>

<div class="home-service-list pb-0">
  {#each services as service}
  <ServiceCard {service} />
  {/each}
  <!-- <div class="home-service_card end">
    <div class="home-service_top">
      <div class="text-size-small text-style-muted">003</div>
      <div class="home-service_intro">
        <div class="text-size-large">Web development</div>
        <div class="text-size-regular text-style-muted text-style-2lines">This involves designing user interfaces, such as buttons, menus, forms, and other</div>
      </div>
    </div>
    <div class="home-service_image">
      <div class="home-service_height">
        <img src="" loading="lazy" alt="" class="image-fill">
      </div>
    </div>
  </div> -->
</div>




<style>
  .home-skils-list {
    border-top: 1px #e7eeee;
    margin-left: -2rem;
    margin-right: -2rem;
    padding-top: 4rem;
  }
</style>