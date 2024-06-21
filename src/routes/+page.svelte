<script>
	import { Hero, Footer, Aside, Feedback, Faq, Header, PdfViewer, About } from '$widgets';
	import { ProgectCard, ServiceCard, CurverNav, NavBarLink } from '$entities';
	import { portfolio, skillsTools, services } from '$shared';

  
</script>

<svelte:head>
	<title>Oleg_DarkDEV</title>
</svelte:head>

<!-- <Aside /> -->


<!-- <Footer /> -->
<!-- 



<a name="about"></a>


<a name="cv" />

 -->

<!-- <Header /> -->
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
                        <a name="about" class="button is-light w-inline-block">

                            <!-- сдеть появляется меню обо мне -->
                            <a href='/boardgames' class="text-size-xsmall">Explore my boardgames portfolio</a>
                        </a>
                        </div>
                    </div>
                    <!-- <div  class="font-optiker">
                        Since 2019
                    </div> -->

                    <!-- <div data-w-id="45d2a386-614e-c243-8e80-f59ea4859d64" class="row-title-block">
                        <div class="letter-animation">
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
                        </div>
                        <div class="row-title">
                        <div class="row-title-clip">
                            <div class="row-title-text text-align-center">
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-1">S</span>
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-2">i</span>
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-3">n</span>
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-4">c</span>
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-5">e</span>
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-6">2</span>
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-7">0</span>
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-8">1</span>
                            <span style="-webkit-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 100%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="letter-9">4</span>
                            </div>
                        </div>
                        <div class="row-title-bottom"></div>
                        </div>
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
                      <div class="text-size-large text-align-center">I worked with businesses & NGO  of all sizes to create stunning websites and designs that capture their products identity.</div>
                      <a href="#contact" class="button w-inline-block">
                        <div class="text-size-xsmall">Contact</div>

                      </a>
                    </div>
                  </div>
                  <div class="home-work-bottom">
                    <div class="home-work-list w-dyn-list">
                      <div role="list" class="home-work-cms w-dyn-items">


                        <a name="portfolio" />
                          {#each portfolio as portfolioData}
                          <!-- year  -->
                          <div class="mx-auto ">
                            <div class="mb-8 lg:mt-10 xl:mt-10 md:mt-10 mt-16 lg:ml-40 flex flex-shrink-0 flex-col  border-[#44149c] px-4 pb-6 lg:w-96 xl:w-96 md:w-96 w-64 border-b-4">
                              <strong
                                class="text-thin heading-style-h3 flex text-left text-3xl font-thin leading-none  lg:text-4xl"
                              >
                                {portfolioData.year} <span class="text-sm">year</span>
                              </strong>
                              <!-- <span class="mt-1 text-xs font-normal leading-relaxed text-gray-700">{portfolioData.subTitle}</span> -->
                            </div>
                            <div class="flex flex-row justify-between flex-wrap lg:w-10/12 md:w-10/12 xl:w-10/12 mx-auto ">
                              <div class="flex flex-col">
                              {#each portfolioData.progects.slice(0, portfolioData.progects.length / 2) as progect}
                              <!-- item-even -->
                                <div  class=" w-dyn-item">
                                  <ProgectCard {progect} />
                                  </div>
                                {/each}
                                </div>
                                <div class="flex flex-col lg:pt-40 xl:pt-40 md:pt-0 md:pt-0">
                              {#each portfolioData.progects.slice( portfolioData.progects.length / 2, portfolioData.progects.length) as progect}
                                <div  class=" w-dyn-item">
                                  <ProgectCard {progect} />
                                  </div>
                                {/each}
                                </div>
                              </div>
                           </div>
                          {/each}
                        </div>



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
                  <div class="padding-horizontal padding-medium">
                    <div class="home-service-top">
                      <div class="home-service-intro">
                        <div class="text-size-large text-align-center">I worked with businesses & NGO of all sizes to create stunning websites and designs that capture their products identity.</div>
                        <a href="#contact" class="button is-light w-inline-block">

                              <div class="text-size-xsmall">Contact</div>

                        </a>
                      </div>
                    </div>
                  </div>
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


        <Footer />
      </main>
    </div>





 <style>
 
</style>
