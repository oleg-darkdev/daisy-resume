<script>
	// import {   } from '$entities';
	import { skillsTools  } from '$shared';
</script>

<div class="padding-horizontal padding-bottom padding-large">
  <div class="home-skils-list flex flex-row flex-wrap justify-center ">
      {#each skillsTools as skill}
          <img src="{skill.img}" class='w-40 mx-4 my-6 grayscale hover:grayscale-0 hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out' alt="{skill.text} skill"/>
      {/each}
  </div>
</div>


<style>
  .home-skils-list {
    border-top: 1px #e7eeee;
    margin-left: -2rem;
    margin-right: -2rem;
    padding-top: 4rem;
  }
</style>