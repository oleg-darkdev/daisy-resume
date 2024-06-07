<script>
	import { Hero, Footer, Aside, Feedback, PdfViewer } from '$widgets';
	import { ProgectCard, ServiceCard, FaqCard, CurverNav, NavBarLink } from '$entities';
	import { portfolio, skillsTools } from '$shared';
</script>

<svelte:head>
	<title>Oleg_DarkDEV</title>

</svelte:head>

<!-- <Hero />

<Aside />


<a name="about"></a>


<a name="cv" />

<Footer /> -->


    <div class="page-wrapper">
      <div class="global-styles w-embed">

      </div>
      <main class="main-wrapper">
        <div class="about-hero_navbar">
          <div class="padding-horizontal padding-medium">
            <div id="nav-bar-component-wrap" role="banner" class="navbar w-nav">
              <div class="padding-horizontal">
                <div class="navbar_overlay"></div>
                <div id="nav-bar-component" class="navbar_component">
                  <!-- "#portfolio -->
                  <a href="/" aria-current="page" class="brand w-nav-brand w--current">
                    <div>Portfolio</div>
                  </a>
                  <nav role="navigation" class="navbar_menu w-nav-menu">
                    <a href="#" class="navlink w-inline-block">
                      <div>Hire me</div>
                    </a>
                  </nav>
                  <div class="w-nav-button">
                    <div class="w-icon-nav-menu"></div>
                  </div>
                  <div class="navbar_right">
                    <a href="#contact" class="button hide-mobile-portrait w-inline-block">
                      <div class="text-size-xsmall text-style-allcaps">Contact</div>
                    </a>
                    <div class="navbar_dropdown w-dropdown">
                      <div class="navbar_toggle w-dropdown-toggle">
                        <div class="navbar_line navbar-line-top"></div>
                        <div class="navbar_line navbar-line-bottom"></div>
                      </div>
                      <nav class="navbar_dropdown-list w-dropdown-list">
                        <div class="navbar_drop-content radius-regular">
                          <div class="navbar_link-wrapper">
                            <NavBarLink />
                            <!-- /works  Work -->
                            <!-- /contact  Contact -->
                            <!--  Clone me -->                            
                          </div>
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section  class="home-hero">
          <div class="padding-horizontal padding-medium">
            <div class="grid-large">
              <div id="hero-wrap" class="home-hero-block">
                <div  class="hero-rotate-base">
                  <div  style="opacity:0;-webkit-transform:translate3d(0, 85%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-moz-transform:translate3d(0, 85%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);-ms-transform:translate3d(0, 85%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);transform:translate3d(0, 85%, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)" class="hero-rotate-image">
                    <div style="-webkit-transform:translate3d(0, 0, 0) scale3d(0.65, 0.65, 1) rotateX(0) rotateY(180deg) rotateZ(25deg) skew(0, 0);-moz-transform:translate3d(0, 0, 0) scale3d(0.65, 0.65, 1) rotateX(0) rotateY(180deg) rotateZ(25deg) skew(0, 0);-ms-transform:translate3d(0, 0, 0) scale3d(0.65, 0.65, 1) rotateX(0) rotateY(180deg) rotateZ(25deg) skew(0, 0);transform:translate3d(0, 0, 0) scale3d(0.65, 0.65, 1) rotateX(0) rotateY(180deg) rotateZ(25deg) skew(0, 0);transform-style:preserve-3d" class="hero-rotate-item radius-regular">
                      <div class="hero-rotate-height"></div>
                      <img src="" loading="lazy" alt="" class="image-fill">
                    </div>
                  </div>
                </div>
                <div id="hero-intro-wrap" class="home-hero-intro">
                  <h1 split-text="" class="heading-style-huge text-color-white text-align-center">Oleg Medvedev</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section class="home-about">
          <div class="padding-horizontal padding-small">
            <div class="grid-large">
              <div id="intro" class="home-about-block about-wrap">
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

                <div class="padding-horizontal padding-medium">
                  <div class="home-about-top">
                    <div class="padding-vertical padding-xlarge">
                      <div class="home-about-intro">
                        <div split-text=" " class="text-size-xlarge text-align-center">With years of experience in the industry, I have worked with businesses of all sizes.</div>
                        <a name="about" class="button is-light w-inline-block">

                          <!-- сдеть появляется меню обо мне -->
                           <div class="text-size-xsmall">Explore my story</div>
                        </a>
                      </div>
                    </div>
                    <div data-w-id="45d2a386-614e-c243-8e80-f59ea4859d64" class="row-title-block">
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
              <div id="servicet-wrap" class="padding-vertical padding-xlarge">
                <div id="home-work-wrap" class="home-work-block">
                  <div class="home-work-top">
                    <div class="home-service-intro">
                      <div class="text-size-large text-align-center">I have worked with businesses of all sizes to create stunning websites and designs that capture their brand's identity.</div>
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
                            <div class="mb-8 lg:mt-10 xl:mt-10 md:mt-10 mt-16 lg:ml-40 flex flex-shrink-0 flex-col border-b border-[#44149c] px-4 pb-6 md:w-64">
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
                                <div class="flex flex-col pt-40">
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
                        <div class="text-size-large text-align-center">I have worked with businesses of all sizes to create stunning websites and designs that capture their brand's identity.</div>
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

                          <ServiceCard />


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


                  <div class="padding-horizontal padding-large">
                    <div class="padding-bottom padding-large">
                      <div class="home-service_grid">
                        <div class="padding-top">
                          <div  class="font-optiker">
                            QUESTIONS
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
                            </div>
                        -->
                          </div>
                        </div>
                        <div id="faq-wrap" class="home-faq-block">
                          <div class="home-faq-list radius-regular">
                              <FaqCard />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        <footer class="section-footer1">
          <div class="padding-horizontal padding-small">
            <div class="grid-large">
              <div id="footer-wrap" class="footer-block">
                <div class="padding-vertical padding-huge">
                  <div class="footer-intro">
                    <div class="text-size-large text-align-center text-color-white">Whether you need design or tweak some code, I have the skills and creativity needed to take your project to the next level.</div>
                    
                    <a name='contact' />
         
                  </div>
                </div>
                <div class="padding-horizontal padding-medium">
                  <div class="footer-bottom">
                    <div id="footer-copyright" class="text-size-tiny text-style-allcaps text-color-white">© 2024 <a href="" target="_blank" class="text-style-link light"></a>
                    </div>
                    <div id="footer-nav" class="footer-menu">
                      <a href="/" aria-current="page" class="footer-link w-inline-block w--current">
                        <div class="text-size-tiny text-style-allcaps">Home</div>
                      </a>
                      <a href="#about" class="footer-link w-inline-block">
                        <div class="text-size-tiny text-style-allcaps">About</div>
                      </a>
                      <a href="#portfolio" class="footer-link w-inline-block">
                        <div class="text-size-tiny text-style-allcaps">Projects</div>
                      </a>
                      <a href="#contact" class="footer-link w-inline-block">
                        <div class="text-size-tiny text-style-allcaps">Contact</div>
                      </a>
                    </div>
                    <div class="text-size-tiny text-style-allcaps text-color-white">Created by <a href="" target="_blank" class="text-style-link light">DarkDEV</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>




    
 <style>
  /* Make text look crisper and more legible in all browsers */
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  /* Focus state style for keyboard navigation for the focusable elements */
  *[tabindex]:focus-visible,
  input[type="file"]:focus-visible {
    outline: 0.125rem solid #4d65ff;
    outline-offset: 0.125rem;
  }

  /* Get rid of top margin on first element in any rich text element */
  .w-richtext> :not(div):first-child,
  .w-richtext>div:first-child> :first-child {
    margin-top: 0 !important;
  }

  /* Get rid of bottom margin on last element in any rich text element */
  .w-richtext>:last-child,
  .w-richtext ol li:last-child,
  .w-richtext ul li:last-child {
    margin-bottom: 0 !important;
  }

  /* Prevent all click and hover interaction with an element */
  .pointer-events-off {
    pointer-events: none;
  }

  /* Enables all click and hover interaction with an element */
  .pointer-events-on {
    pointer-events: auto;
  }

  /* Create a class of .div-square which maintains a 1:1 dimension of a div */
  .div-square::after {
    content: "";
    display: block;
    padding-bottom: 100%;
  }

  /* Make sure containers never lose their center alignment */
  .container-medium,
  .container-small,
  .container-large {
    margin-right: auto !important;
    margin-left: auto !important;
  }

  /* Apply "..." after 3 lines of text */
  .text-style-3lines {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  /* Apply "..." after 2 lines of text */
  .text-style-2lines {
    display: -webkit-box;
    overflow: hidden;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  /* Adds inline flex display */
  .display-inlineflex {
    display: inline-flex;
  }

  /* These classes are never overwritten */
  .hide {
    display: none !important;
  }

  @media screen and (max-width: 991px) {

    .hide,
    .hide-tablet {
      display: none !important;
    }
  }

  @media screen and (max-width: 767px) {
    .hide-mobile-landscape {
      display: none !important;
    }
  }

  @media screen and (max-width: 479px) {
    .hide-mobile {
      display: none !important;
    }
  }

  .margin-0 {
    margin: 0rem !important;
  }

  .padding-0 {
    padding: 0rem !important;
  }

  .spacing-clean {
    padding: 0rem !important;
    margin: 0rem !important;
  }

  .margin-top {
    margin-right: 0rem !important;
    margin-bottom: 0rem !important;
    margin-left: 0rem !important;
  }

  .padding-top {
    padding-right: 0rem !important;
    padding-bottom: 0rem !important;
    padding-left: 0rem !important;
  }

  .margin-right {
    margin-top: 0rem !important;
    margin-bottom: 0rem !important;
    margin-left: 0rem !important;
  }

  .padding-right {
    padding-top: 0rem !important;
    padding-bottom: 0rem !important;
    padding-left: 0rem !important;
  }

  .margin-bottom {
    margin-top: 0rem !important;
    margin-right: 0rem !important;
    margin-left: 0rem !important;
  }

  .padding-bottom {
    padding-top: 0rem !important;
    padding-right: 0rem !important;
    padding-left: 0rem !important;
  }

  .margin-left {
    margin-top: 0rem !important;
    margin-right: 0rem !important;
    margin-bottom: 0rem !important;
  }

  .padding-left {
    padding-top: 0rem !important;
    padding-right: 0rem !important;
    padding-bottom: 0rem !important;
  }

  .margin-horizontal {
    margin-top: 0rem !important;
    margin-bottom: 0rem !important;
  }

  .padding-horizontal {
    padding-top: 0rem !important;
    padding-bottom: 0rem !important;
  }

  .margin-vertical {
    margin-right: 0rem !important;
    margin-left: 0rem !important;
  }

  .padding-vertical {
    padding-right: 0rem !important;
    padding-left: 0rem !important;
  }
</style>