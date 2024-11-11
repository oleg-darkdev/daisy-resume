<script>
	import { LogoGithub, Email, LogoLinkedin, LogoFacebook } from '$shared';
</script>

<section class="home-about xl:mt-40 lg:mt-40 mt-32" >
  <div class="padding-horizontal padding-small">
    <div class="grid-large">
      <div class="home-service-block content-wrap">

          <div class="home-service">
            <a name='contact' />

            <div class="cursor-pointer mb-6" >
                <div  class="font-optiker" >
                    Contact
                </div>
            </div>

             <a name='contact' />
            <div class="padding-top padding-bottom padding-huge home-content_base">
                <div class="home-content-block">
                  <div class=" padding-bottom padding-large">
                    <div class="flex flex-row flex-wrap justify-between max-w-lg mx-auto lg:px-0 px-6">
                      <a href="https://www.facebook.com/hulio.mondre" target="_blank" class='hover:scale-110 hover:translate-y-2 hover:transition hover:duration-1000 hover:ease-in-out'>
                        <LogoFacebook size={120} />
                        <div class="text-size-large text-align-center">Facebook</div>
                      </a>
                      <a href="https://www.linkedin.com/in/oleg-darkdev" target="_blank" class='hover:scale-110 hover:translate-y-2 hover:transition hover:duration-1000 hover:ease-in-out'>
                        <LogoLinkedin size={120} />
                        <div class="text-size-large text-align-center">Linkedin</div>
                      </a>
                      <a href="https://github.com/oleg-darkdev/" target="_blank"  class='hover:scale-110 hover:translate-y-2 hover:transition hover:duration-1000 hover:ease-in-out'>
                        <LogoGithub size={120} />
                        <div class="text-size-large text-align-center">Github</div>
                      </a>
                      <a href="mailto:darkdev_brand@riseup.net" target="_blank"  class='hover:scale-110 hover:translate-y-2 hover:transition hover:duration-1000 hover:ease-in-out'>
                        <Email size={120} />
                        <div class="text-size-large text-align-center">Email</div>
                      </a>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>



<style>
.home-content_base {
  border-top: 1px solid #e7eeee;
}

.home-content-block {
  /* min-height: 35rem; */
  grid-column-gap: 5rem;
  grid-row-gap: 5rem;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  grid-area: span 1 / span 1 / span 1 / span 1;
}

.content-wrap {
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
  .font-optiker {
    font-family: Optiker k;
    font-size: 10em;
    margin-bottom: -80px;
    text-align: center;
  }
}
@media screen and (max-width: 767px) {
  .home-service_grid {
    padding-top: 1rem;
  }
  .font-optiker {
    font-family: Optiker k;
    font-size: 3.5em;
    margin-bottom: 2px;
    text-align: center;
  }
}

@media screen and (min-width: 991px) {
  .font-optiker {
    font-family: Optiker k;
    font-size: 17em;
    margin-bottom: -130px;
    text-align: center;
  }
}
</style>
