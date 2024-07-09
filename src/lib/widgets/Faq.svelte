<script>
	import { FaqCard, CurverNav } from '$entities';
	import { services } from '$shared';

  const faq = [
        {
        id: '1',
        title: `How long do projects typically take?`,
        desc: [`This involves creating a custom solution for clients who want an online presence tailored to their specific needs. The process involves understanding the client's requirements, analyzing existing solutions, and then designing, coding, and testing the web application.`, ``]

    }
  ]


  let showFaq = false;
</script>

<section class="home-about mt-8" on:click={()=> showFaq = !showFaq} >
  <div class="padding-horizontal padding-small">
    <div class="grid-large">
      <div  class="home-service-block faq-wrap">
        <CurverNav link="#faq"/>




          <div class="{showFaq ? 'padding-top padding-huge': ''}">
          <div class="padding-horizontal padding-medium">
            {#if showFaq}
              <div class="home-service-top">
                <div class="home-service-intro">
                  <div class="text-size-large text-align-center">If you have any questions, the F.A.Q. below should help you - or you can give them to me personally.</div>
                  <a href="#contact" class="button is-light w-inline-block">
                    <div class="text-size-xsmall">Get in touch</div>
                  </a>
                </div>
              </div>
            {/if}
          </div>
          <div class="home-service">
            <a name='faq' />

            <div class="{showFaq ? 'padding-top padding-bottom padding-huge': ''}">
                <div class="home-service_grid">
                  <div class="">
                    <div  class="font-optiker">
                      QUESTIONS
                    </div>
                  </div>
                  <div class="home-faq-block home-faq-wrap">
                    <a name='faq' />
                    {#if showFaq}
                      <div class="home-faq-list radius-regular">
                        {#each faq as faqData}
                          <FaqCard {faqData}/>
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
.home-faq-wrap {
  grid-area: span 1 / span 1 / span 1 / span 1;
}


.home-faq-block {
  /* min-height: 35rem; */
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
}

.faq-wrap {
  grid-area: 1 / 1 / 2 / 4;
}


.home-service_grid {
  grid-column-gap: 3rem;
  grid-row-gap: 0rem;
  flex-direction: column;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr;
  grid-auto-columns: 1fr;
  align-content: stretch;
  justify-content: flex-start;
  align-items: stretch;
  margin-left: auto;
  margin-right: auto;
  /* padding-top: 6rem; */
  display: flex;
}


@media screen and (max-width: 991px) {
  .home-service_grid {
    padding-top: 2rem;
  }
}
@media screen and (max-width: 767px) {
  .home-service_grid {
    padding-top: 1rem;
  }
}
</style>