<script>
	import { Hero, Footer, BoardgamesList, Feedback, Faq, Header, About } from '$widgets';
	import { ProgectCard, ServiceCard,  CurverNav, NavBarLink } from '$entities';
	import { boardgamesProgects, services } from '$shared';
</script>

<svelte:head>
	<title>Oleg_DarkDEV - Boardgames portfolio </title>
</svelte:head>





  <div class="page-wrapper">
      <div class="global-styles w-embed">

      </div>
      <main class="main-wrapper">

        <Hero />
        
        <section class="home-about">
          <div class="padding-horizontal padding-small">
            <div class="grid-large">
                <div id="intro" class="home-about-block about-wrap">
                <div class="curve-block-center">
                    <a id="right" href="#about" class="curve-link w-inline-block">
                    <div class="curve-arrow">
                        <div class="clip">
                        <div class="hover-arrow top">
                            <div class="icon w-embed">
                            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0002 16.172L18.3642 10.808L19.7782 12.222L12.0002 20L4.22217 12.222L5.63617 10.808L11.0002 16.172V4H13.0002V16.172Z" fill="currentColor"></path>
                            </svg>
                            </div>
                        </div>
                        <div class="hover-arrow">
                            <div class="icon w-embed">
                            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.0002 16.172L18.3642 10.808L19.7782 12.222L12.0002 20L4.22217 12.222L5.63617 10.808L11.0002 16.172V4H13.0002V16.172Z" fill="currentColor"></path>
                            </svg>
                            </div>
                        </div>
                        </div>
                    </div>
                    <img src="/images/curver.svg" loading="lazy" alt="Curver img">
                    </a>
                </div>

                <div class="padding-horizontal padding-medium">
                    <div class="home-about-top">
                    <div class="padding-vertical padding-xlarge">
                        <div class="home-about-intro">
                        <div class="text-size-xlarge text-align-center">Help you with creating gamification of the learning process - on absolutely any topic.</div>
                        </div>
                    </div>
                    <!-- <div  class="font-optiker">
                        Since 2019
                    </div> -->

                    
                    </div>
                </div>
                </div>
            </div>
        </div>
        </section>
        <section class="home-about">
          <div class="padding-horizontal lg:padding-small md:padding-small xl:padding-small">
            <div class="grid-large">
              <div id="servicet-wrap" class="padding-vertical padding-xlarge">
                <div id="home-work-wrap" class="home-work-block">
                  <div class="home-work-top">
                    <div class="home-service-intro">
                      <div class="text-size-large text-align-center">I worked with businesses & NGO  of all sizes to create stunning boardgames and gamification for the learning process.</div>
                      <a href="#contact" class="button w-inline-block">
                        <div class="text-size-xsmall">Contact</div>

                      </a>
                    </div>
                  </div>


                  <div class="home-work-bottom">
                    <div class="home-work-list w-dyn-list">
                      <div role="list" class="home-work-cms w-dyn-items">

                      <BoardgamesList {boardgamesProgects} />           
                    </div>
                    <div  class="line line-wrap_topleft">
                      <div style="-webkit-transform:translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(-100%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="line-fill"></div>
                    </div>
                  </div>

                  

                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="home-about">
          <div class="padding-horizontal padding-small">
            <div class="grid-large">
              <div id="services" class="home-service-block services-wrap">
               <div class="curve-block-center">
                  <a id="right" href="#services" class="curve-link w-inline-block">
                  <div class="curve-arrow">
                      <div class="clip">
                      <div class="hover-arrow top">
                          <div class="icon w-embed">
                          <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.0002 16.172L18.3642 10.808L19.7782 12.222L12.0002 20L4.22217 12.222L5.63617 10.808L11.0002 16.172V4H13.0002V16.172Z" fill="currentColor"></path>
                          </svg>
                          </div>
                      </div>
                      <div class="hover-arrow">
                          <div class="icon w-embed">
                          <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.0002 16.172L18.3642 10.808L19.7782 12.222L12.0002 20L4.22217 12.222L5.63617 10.808L11.0002 16.172V4H13.0002V16.172Z" fill="currentColor"></path>
                          </svg>
                          </div>
                      </div>
                      </div>
                  </div>
                  <img src="/images/curver.svg" loading="lazy" alt="Curver img">
                  </a>
                </div>

                <div class="padding-top padding-huge">
                  <!-- <div class="padding-horizontal padding-medium">
                    <div class="home-service-top">
                      <div class="home-service-intro">
                        <div class="text-size-large text-align-center">I worked with businesses & NGO of all sizes to create stunning websites and designs that capture their products identity.</div>
                        <a href="#contact" class="button is-light w-inline-block">

                              <div class="text-size-xsmall">Contact</div>

                        </a>
                      </div>
                    </div>
                  </div> -->
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
                        <div class="home-service-list">
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
                      </div>
                    </div>
                  </div>


                  <!-- <Feedback /> -->


                  <Faq />
                </div>
              </div>
            </div>
          </div>
        </section>


        <!-- <Footer /> -->
      </main>
    </div>

 <style>
 
</style>