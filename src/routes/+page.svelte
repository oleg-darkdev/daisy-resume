<script>
	import { Hero, Footer, BoardgamesList, Aside, SectionWrap, Gallery, Skills, Timeline, MyStory, TextDivider, Feedback, Faq, Gamification, Header, Services, PdfViewer, About } from '$widgets';
	import { ProgectCard,  TextBlock } from '$entities';
	import { portfolio, theStoriesBoardgames, agileFansBoardgames, antiSystemsBoardgames, otherBoardgames, } from '$shared';


let showFaqSection = false, showTimelineSection = false, showAboutSection = false, showServicesSection = false, showSkillsSection = false;
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
  <main class="main-wrapper">

    <Hero />

    <!-- <Services /> -->
   
    <SectionWrap showSection={showServicesSection} title="Services"  anchor='services'>
      <div slot='text-block'>
        <TextBlock title='I worked with businesses & NGO of all sizes to create stunning web-sites, web-apps and designs that capture their products identity.' link='#contact' btnTitle='Get in touch'/>
      </div>

      <div slot='content'>
         <Services />
      </div>
    </SectionWrap> 
 

   
    <SectionWrap showSection={showSkillsSection} title="Skills"  anchor='skills'>
      <div slot='text-block'>
        <TextBlock title='I worked with businesses & NGO of all sizes to create stunning web-sites, web-apps and designs that capture their products identity.' link='#contact' btnTitle='Get in touch'/>
      </div>

      <div slot='content'>
         <Skills />
      </div>
    </SectionWrap>


    <TextDivider title="Work" subTitle="Web Design, Web Development, Creative Development">
        <!-- <img src="/images/screenshotes/voteWise/1.webp" loading="lazy" more="image" alt="" class="c-more-image">
        <img src="/images/screenshotes/antiSystem/1.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-1">
        <img src="/images/screenshotes/graffityChronicles/2.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-2">
        <img src="/images/screenshotes/itingo/1.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-3">
        <img src="/images/screenshotes/footprintsFate/1.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-4">
        <img src="/images/screenshotes/44games/1.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-5"> -->
        <img src="/gif/antiSystem.webp" loading="lazy" more="image" alt="" class="c-more-image">
        <img src="/gif/darkdevFoundation.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-1">
        <img src="/gif/graffityChronicles.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-2">
        <img src="/gif/itingo.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-3">
        <img src="/gif/lgbtqia.webp" loading="lazy" more="image" alt="" class="c-more-image bit-title-4">
        <img src="/gif/antiSystem.webp " loading="lazy" more="image" alt="" class="c-more-image bit-title-5">
      </TextDivider>
    
    <section class="home-about">
      <div class="padding-horizontal lg:padding-small md:padding-small xl:padding-small">
         <a name="works" />

        <div class="grid-large">
          <div id="servicet-wrap" class="padding-vertical padding-xlarge">
            <div id="home-work-wrap" class="home-work-block">
              <!-- <div class="home-work-top">
                <div class="home-service-intro">
                  <div class="text-size-large text-align-center">I worked with businesses & NGO  of all sizes to create stunning websites and designs that capture their products identity.</div>
                  <a href="#contact" class="button w-inline-block">
                    <div class="text-size-xsmall">Contact</div>
                  </a>
                </div>
              </div> -->

              <div class="home-work-bottom">
                <div class="home-work-list w-dyn-list">
                  <div role="list" class="home-work-cms w-dyn-items">
                   
                      {#each portfolio as portfolioData}

                      <div class="mx-auto ">
                        <div class="mb-8 lg:mt-10 xl:mt-10 md:mt-10 mt-16 lg:ml-40 flex flex-shrink-0 flex-col  border-white px-4 pb-6 lg:w-96 xl:w-96 md:w-96 w-64 border-b-4">
                          <strong
                            class="text-thin heading-style-h3 flex text-left text-3xl font-thin leading-none  lg:text-4xl"
                          >
                            {portfolioData.year} <span class="text-sm">year</span>
                          </strong>
                          <!-- <span class="mt-1 text-xs font-normal leading-relaxed text-gray-700">{portfolioData.subTitle}</span> -->
                        </div>
                        <div class="flex flex-row justify-between flex-wrap lg:w-10/12 md:w-10/12 xl:w-10/12 mx-auto ">
                          <div class="flex flex-col">
                          {#each portfolioData.projects.slice(0, portfolioData.projects.length / 2) as project}
                          <!-- item-even -->
                            <div  class=" w-dyn-item">
                              <ProgectCard {project} />
                              </div>
                            {/each}
                            </div>
                            <div class="flex flex-col lg:pt-40 xl:pt-40 md:pt-0 md:pt-0">
                          {#each portfolioData.projects.slice( portfolioData.projects.length / 2, portfolioData.projects.length) as project}
                            <div  class=" w-dyn-item">
                              <ProgectCard {project} />
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


    <Gamification />

    <!-- <TextDivider title="Games" subTitle="Gamification, Hybrid board games, Educational board games.">
        <img src="/images/logos/boardgames/the-stories/bg.svg" loading="lazy" more="image" alt="" class="c-more-image">
        <img src="/images/logos/boardgames/anti-systems/bg.png" loading="lazy" more="image" alt="" class="c-more-image bit-title-1">
        <img src="/images/logos/boardgames/agile-fans/bg.png" loading="lazy" more="image" alt="" class="c-more-image bit-title-2">
        <img src="/images/logos/boardgames/agile-fans/bg.png" loading="lazy" more="image" alt="" class="c-more-image bit-title-3">
        <img src="" loading="lazy" more="image" alt="" class="c-more-image bit-title-4">
        <img src="" loading="lazy" more="image" alt="" class="c-more-image bit-title-5">
    </TextDivider> -->

    <a name='boardgames' />
    <!-- <section class="home-about">
      <div class="padding-horizontal lg:padding-small md:padding-small xl:padding-small">
        <div class="grid-large">
          <div id="servicet-wrap" class="padding-vertical padding-xlarge">
            <div id="home-work-wrap" class="home-work-block">

              <a name='boardgames' />
              <div class="home-work-bottom">
                <div class="home-work-list w-dyn-list">
                  <div role="list" class="home-work-cms w-dyn-items">
                  <BoardgamesList boardgamesProgects={theStoriesBoardgames} startPosition={0}/>
                  <BoardgamesList boardgamesProgects={agileFansBoardgames} startPosition={theStoriesBoardgames.boardgames.length}/>
                  <BoardgamesList boardgamesProgects={antiSystemsBoardgames} startPosition={antiSystemsBoardgames.boardgames.length + theStoriesBoardgames.boardgames.length + antiSystemsBoardgames.boardgames.length}/>
                  <BoardgamesList boardgamesProgects={otherBoardgames} startPosition={antiSystemsBoardgames.boardgames.length + theStoriesBoardgames.boardgames.length + antiSystemsBoardgames.boardgames.length + agileFansBoardgames.boardgames.length}/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section> -->

    <TextDivider title="About" subTitle="Lorem Ipsum is simply dummy text of the printing and typesetting industry.">
        <!-- <img src="/images/logos/boardgames/the-stories/bg.svg" loading="lazy" more="image" alt="" class="c-more-image">
        <img src="/images/logos/boardgames/anti-systems/bg.png" loading="lazy" more="image" alt="" class="c-more-image bit-title-1">
        <img src="/images/logos/boardgames/agile-fans/bg.png" loading="lazy" more="image" alt="" class="c-more-image bit-title-2"> -->
        <!-- <img src="/images/logos/boardgames/agile-fans/bg.png" loading="lazy" more="image" alt="" class="c-more-image bit-title-3">
        <img src="" loading="lazy" more="image" alt="" class="c-more-image bit-title-4">
        <img src="" loading="lazy" more="image" alt="" class="c-more-image bit-title-5"> -->
    </TextDivider>


    <SectionWrap showSection={showAboutSection} title="My story" customClasses='mt-20 mb-32' anchor='my-story'>
      <div slot='text-block'>
        <TextBlock title='With years of experience in the industry, I have worked with businesses of all sizes.' link='#contact' btnTitle='Get in touch'/>
      </div>

      <div slot='content'>
        <MyStory />
      </div>
    </SectionWrap>
    
    

    <Gallery />
 
    
    
    <SectionWrap showSection={showTimelineSection} title="Timeline" anchor='timeline'>
      <div slot='text-block'>
        <TextBlock title='I worked with businesses & NGO of all sizes to create stunning web-sites, web-apps and designs that capture their products identity.' link='#contact' btnTitle='Get in touch'/>
      </div>

      <div slot='content'>
        <Timeline />
      </div>
    </SectionWrap>

    <SectionWrap showSection={showFaqSection} title="QUESTIONS" anchor='faq'>
      <div slot='text-block'>
        <TextBlock title='If you have any questions, the F.A.Q. below should help you - or you can give them to me personally.' link='#contact' btnTitle='Get in touch'/>
      </div>

      <div slot='content'>
        <Faq />
      </div>
    </SectionWrap>


     <!-- <Faq /> -->
    <!-- <section class="home-about">
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
                    <div class="text-size-large text-align-center">If you have any questions, the F.A.Q. below should help you - or you can give them to me personally.</div>
                    <a href="#contact" class="button is-light w-inline-block">
                      <div class="text-size-xsmall">Get in touch</div>
                    </a>
                  </div>
                </div>
              </div>
              <div class="home-service">

                <Faq />

            </div>
          </div>
        </div>
      </div>
    </section> -->
  

    <Footer />
    
  </main>
</div>

<style>
  .c-more-image {
    border-radius: 16px;
    width: 18.75em;
    height: 10em;
    position: absolute;
  }
  .c-more-image.bit-title-1 {
    margin-bottom: -3.9375em;
    margin-left: -5.6em;
  }
  .c-more-image.bit-title-2 {
    margin-top: -6.3em;
    margin-right: -5.75em;
  }
  .c-more-image.bit-title-3 {
    margin-bottom: -5.75em;
  }
  .c-more-image.bit-title-4 {
    margin-right: -8em;
  }
  .c-more-image.bit-title-5 {
    margin-top: -2.75em;
    margin-left: -2.5625em;
  }


  @media screen and (max-width: 991px) {
      .c-more-image.bit-title-1,
  .c-more-image.bit-title-2,
  .c-more-image.bit-title-3,
  .c-more-image.bit-title-4,
  .c-more-image.bit-title-5 {
    z-index: 2;
  }
  .c-more-image {
    z-index: 1;
    width: 100%;
    max-width: 180px;
    height: auto;
  }
}

@media screen and (max-width: 767px) {
  .c-more-image {
      display: none;
  }
}
</style>
