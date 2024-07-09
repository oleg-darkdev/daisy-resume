<script>
    import {TimelineCard, CurverNav} from '$entities';
    import {timeline as timelineData} from '$shared';

    let showTimeline = false
</script>



<section class="timeline-wrap  mt-8" on:click={()=> showTimeline = !showTimeline} >
      <div class="padding-horizontal padding-small">
        <div class="grid-large">
          <div  class="home-service-block home-service-timeline-wrap">
            <CurverNav link="#timeline"/>

            <div class="{showTimeline ? 'padding-top padding-huge': ''}">
              <div class="home-service">
              <div class="font-optiker">
                Timeline
              </div>


              <a name='timeline' />
            {#if showTimeline}
                <div class="padding-horizontal padding-large">
                    <div class="padding-bottom padding-large">
                        <div class="">
                            <div class="about-history-block">
                            <div class="about-history-left about-history-grid">
                                <div class="about-history-image radius-regular">
                                <div class="rotate-card">
                                    <div class="rotate-card-item">
                                    <div class="rotate-card-image radius-regular">
                                        <div class="rotate-card-height"></div>
                                        <img src="images/speaker/speaker_1.jpg" loading="lazy" alt="Oleg Medvedev photo #2" class="hover:grayscale-0 hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out grayscale image-fill">
                                    </div>
                                    </div>
                                </div>
                                </div>
                                
                                
                            </div>
                            
                            <div  class="about-history-list">
                                <div class="margin-bottom margin-large">
                                    <div class="margin-bottom margin-small">
                                        <div class="title-tag">
                                        <div class="circle"></div>
                                        <div class="text-size-tiny text-style-allcaps">My timeline</div>
                                        </div>
                                    </div>
                                    <div class="about-history-top">
                                        <p class="text-size-xlarge">Over 4 years as a front-end developer</p>
                                    </div>
                                </div>

                                {#each timelineData as timeline}
                                    <TimelineCard {timeline}/>
                                {/each}
                            </div>
                            </div>
                        </div> 
                        </div>    
                    </div>
                {/if}
            </div>
            
             
          </div>
        </div>
      </div>
    </section>



<style>
.timeline-wrap {
  z-index: 25;
  position: relative;
}

.home-service-timeline-wrap {
  grid-area: 1 / 1 / 2 / 4;
}

.about-history-grid {
  grid-area: span 1 / span 1 / span 1 / span 1;
  align-self: start;
}
</style>