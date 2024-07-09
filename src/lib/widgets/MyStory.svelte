<script>
  import {
    CurverNav
  } from '$entities';
  // import {   } from '$shared';
  let showMyStory = false;
</script>

<section class="story-wrap mt-20 mb-32" on:click={()=> showMyStory = !showMyStory} > 
<div class="padding-horizontal padding-small">
    <div class="grid-large">
      <div class="home-service-block services-wrap">
        <CurverNav  link="#my-story"/>

        <a name="my-story" />

        <div class="{showMyStory ? 'padding-top padding-huge': ''}">
          <div class="padding-horizontal padding-medium"> 
            {#if showMyStory}
                <div class="home-service-top">
                    <div class="home-service-intro">
                        <div class="text-size-large text-align-center">
                            With years of experience in the industry, I have worked with businesses of all sizes. 
                        </div>
                            <a href="#contact" class="button is-light w-inline-block">
                                <div class="text-size-xsmall">Get in touch</div>
                            </a>
                        </div>    
                    </div>
                {/if}
            </div>
            
            <div class="home-service">
                <div  class="about-body-block  radius-regular my-story-wrapper">
                    <div class="padding-horizontal padding-large">
                        <div class="">
                            <div class="font-optiker">
                    My Story
                </div>
                        </div>
                        {#if showMyStory}
                        <div class="padding-bottom">
                            <div class="padding-top">
                                <div class="about-history-block">
                                    <div  class="about-history-left">
                                        <div  class="about-history-image radius-regular">
                                            <div  class="rotate-card">
                                                <div class="rotate-card-item">
                                                    <div class="rotate-card-image radius-regular">
                                                        <div class="rotate-card-height"></div>
                                                        <img src="images/oleg_medvedev.png" loading="lazy" alt="Oleg Medvedev photo #1" class="grayscale hover:grayscale-0 hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out image-fill">
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div  class="about-history-list">
                                            <div class="about-story-right">
                                                <div  class="margin-bottom margin-medium">
                                                    <div class="margin-bottom margin-small">
                                                        <div class="title-tag">
                                                            <div class="circle"></div>
                                                            <div class="text-size-tiny text-style-allcaps">About me</div>
                                                        </div>
                                                    </div>
                                                    <p class="text-size-xlarge">Engineer-IT enthusiast from #3Miasto</p>
                                                </div>
                                                <div  class="about-story-paragraph">
                                                    <p class="text-size-regular text-color-grey mb-4">
                                Digital maker, games designer, javascript programmer with 4 years of experience in board games development and 3 years of experience in web application development on various technologies in startups and opensource projects. 
                            </p>
                                                    <p class="text-size-regular text-color-grey mb-4">
                                Evangelist svelteJS, have experience on VueJS and NodeJS, setup LinuxOS, AWS & BASH, rapid prototyping of interfaces using modern design systems and last UI trends: Material Design, Carbon Design, NeoBrutalism, Glassmorphism and Neumorphism
                            </p>
                                                    <p class="text-size-regular text-color-grey mb-4">
                                Certified Specialist in Kanban Management (KMP-1), experience with scrum and Management3.0. and very extensive experience using various tools for communication, planning and prioritizing in team.
                            </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>{/if}
                        </div>
                         
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</section>


<style>
.my-story-wrapper {
  grid-area: 1 / 1 / 2 / 4;
}

.story-wrap {
  z-index: 25;
  position: relative;
}

.services-wrap {
  grid-area: 1 / 1 / 2 / 4;
}

  </style>

      