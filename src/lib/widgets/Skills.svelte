<script>
	import {  ServiceCard, CurverNav } from '$entities';
	import { skillsTools  } from '$shared';


  let showSkills = false;
</script>

<section class="skils-wrap my-6" on:click={()=> showSkills = !showSkills} >
    <div class="padding-horizontal padding-small">
        <div class="grid-large">
        <div class="home-service-block services-wrap">
            <CurverNav link="#skills"/>


            <div class="{showSkills ? 'padding-top padding-huge': ''} ">
            <div class="padding-horizontal padding-medium">
                
                {#if showSkills}
                <div class="home-service-top">
                    <div class="home-service-intro">
                    <div class="text-size-large text-align-center">
                        I worked with businesses & NGO of all sizes to create stunning web-sites, web-apps and designs that capture their products identity.</div>
                        <a href="#contact" class="button is-light w-inline-block">
                        <div class="text-size-xsmall">Contact</div>
                    </a>
                    </div>
                </div>
                {/if}
            </div>

            <a name='skills' />

            
            <div class="home-service">
                <div class="font-optiker">
                Skills
                </div>

                <div class="padding-horizontal padding-large">
                <div class="home-service_base">
                    {#if showSkills}
                        <div class="home-skils-list flex flex-row flex-wrap justify-center pb-20">
                            {#each skillsTools as skill}
                                <img src="{skill.img}" class='w-40 mx-4 my-6 grayscale hover:grayscale-0 hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out' alt="{skill.text} skill"/>
                            {/each}
                        </div>
                    {/if}
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    </div>
</section>




<style>
  .home-skils-list {
    border-top: 1px #e7eeee;
    margin-left: -2rem;
    margin-right: -2rem;
    padding-top: 4rem;
  }

  .services-wrap {
  grid-area: 1 / 1 / 2 / 4;
}


.skils-wrap {
  z-index: 25;
  position: relative;
}
</style>