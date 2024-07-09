<script>
	import {  ServiceCard, CurverNav } from '$entities';
	import { services } from '$shared';


  let showServices = false;
</script>

<section class="services-wrap"  on:click={()=> showServices = !showServices} >
    <div class="padding-horizontal padding-small">
      <div class="grid-large">
        <div class="home-service-block services-wrap">
          <CurverNav link="#services"/>


          <div class="{showServices ? 'padding-top padding-huge': ''} ">
            <div class="padding-horizontal padding-medium">
              
              {#if showServices}
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

            <a name='services' />

            <div class="home-service">
              <div class="font-optiker">

                      Services

                <!-- <div class="letter-animation">
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-1"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-2"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-3"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-4"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-5"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-6"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-7"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-8"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-9"></div>
                  <div style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-10"></div>
                </div> -->
              </div>
              <div class="padding-horizontal padding-large">
                <div class="home-service_base">
                  {#if showServices}
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

.services-wrap {
  z-index: 25;
  position: relative;
}


</style>