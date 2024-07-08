<script>
	import {  ServiceCard, CurverNav, NavBarLink } from '$entities';
	import { services, skillsTools  } from '$shared';
</script>

<section class="home-about">
    <div class="padding-horizontal padding-small">
      <div class="grid-large">
        <div class="home-service-block services-wrap">
          <div class="curve-block-center">
            <a id="right" href="#services" class="curve-link w-inline-block ">
            <div class="curve-arrow bg-violet-700">
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
                  <div class="text-size-large text-align-center">
                    I worked with businesses & NGO of all sizes to create stunning web-sites, web-apps and designs that capture their products identity.</div>
                  <a href="#contact" class="button is-light w-inline-block">
                        <div class="text-size-xsmall">Contact</div>
                  </a>
                </div>
              </div>
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
                </div>
              </div>
            </div>

            <div class="home-service">
              <div class="font-optiker">
                Skills
              </div>
              <div class="padding-horizontal padding-large">
                <div class="home-service_base">
                  <div class="home-skils-list flex flex-row flex-wrap justify-center pb-20">
                    {#each skillsTools as skill}
                      <img src="{skill.img}" class='w-40 mx-4 my-6 grayscale hover:grayscale-0 hover:scale-110 hover:transition hover:duration-1000  hover:ease-in-out' alt="{skill.text} skill"/>
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

</style>