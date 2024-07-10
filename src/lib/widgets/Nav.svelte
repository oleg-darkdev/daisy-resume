<script>
  import { navigation } from '$shared';
  import ChevronDown from "carbon-icons-svelte/lib/ChevronDown.svelte";

  let showNav = false;
</script>

<section class="about-hero_navbar">
	<nav class="padding-horizontal padding-medium">
		<div
			class="w-nav navbar"
		>
			<div class="padding-horizontal">
				<div class="navbar_overlay" />
				<div class="flex justify-between items-center lg:px-4 px-1 w-full">
					<a href="/" class="brand w-nav-brand">
						<div>Oleg_DarkDEV</div>
					</a>
					<!-- <nav role="navigation" class="w-nav-menu">
						<a href="#contact" class="navlink w-inline-block">
							<div>Hire me</div>
						</a>
					</nav> -->

					<div class="w-nav-button">
						<div class="w-icon-nav-menu" />
					</div>
					<div class="navbar_right">
						<a href="#contact" class="button hide-mobile-portrait w-inline-block">
							<div  class="clip">
								<div class="hover-text">
									<div class="text-size-xsmall text-style-allcaps">Contact</div>
								</div>
							</div>
						</a>


              <div
                class="navbar_dropdown w-dropdown"
              >

                <div class:bg-white={showNav} class="navbar_toggle w-dropdown-toggle group hover:bg-white" on:click={()=> showNav = !showNav}>
                  <div   class="navbar_line {showNav ? 'bg-black': 'bg-white group-hover:bg-black'}" />
                  <div class="navbar_line {showNav ? 'bg-black': 'bg-white group-hover:bg-black'}" />
                </div>

                <!-- navbar_dropdown-list  -->
                 {#if showNav}
                <nav class=" w-dropdown-list">
                  <div class="navbar_drop-content radius-regular">
                    <div class="navbar_link-wrapper">
                      {#each navigation as nav}

                        <button
                          on:click={()=> {
                            showNav = !showNav;
                            location.href = nav.href;
                          }}
                          class="navbar_link w-inline-block w--current overflow-hidden"
                        >
                          <div class="heading-style-h5 text-style-allcaps">{nav.title}</div>
                          <div>
                            <div class="clip">
                              <ChevronDown size={26} />
                            </div>
                          </div>
                        </button>
                      {/each}
                    </div>
                  </div>
                </nav>
                {/if}
              </div>
					</div>
				</div>
			</div>
		</div>
	</nav>
</section>


<style>
.about-hero_navbar {
  padding-left: 0;
  padding-right: 0;
  position: absolute;
  top: 0%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.w-nav {
  z-index: 1000;
  background: #ddd;
  position: relative;
}

.w-nav:before, .w-nav:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-nav:after {
  clear: both;
}



.w-nav-link {
  vertical-align: top;
  color: #222;
  text-align: left;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  display: inline-block;
  position: relative;
}

.w-nav-link.w--current {
  color: #0082f3;
}


.w--nav-link-open {
  display: block;
  position: relative;
}

.w-nav-overlay {
  width: 100%;
  display: none;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  overflow: hidden;
}

.navbar {
  width: 100%;
  height: 5.625rem;
  background-color: rgba(0, 0, 0, 0);
  justify-content: center;
  align-items: center;
  display: flex;
}

.navbar_line {
  width: 37.5%;
  height: 1px;
}

.w-dropdown-btn, .w-dropdown-toggle, .w-dropdown-link {
  vertical-align: top;
  text-color: #222;
  text-align: left;
  white-space: nowrap;
  margin-left: auto;
  margin-right: auto;
  padding: 20px;
  text-decoration: none;
  position: relative;
}

.w-dropdown-toggle {
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  cursor: pointer;
  padding-right: 40px;
  display: inline-block;
}

.w-dropdown-toggle:focus {
  outline: 0;
}

.navbar_toggle {
  width: 2.4rem;
  height: 2.4rem;
  grid-column-gap: .3rem;
  grid-row-gap: .3rem;
  border: 1px solid #2e313a;
  border-radius: 100rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  display: flex;
}

.navbar_toggle.w--open {
  z-index: 10;
}

.navlink {
  color: #fff;
  text-decoration: none;
}

.w-icon-nav-menu:before {
  content: "";
}

.navbar_right {
  grid-column-gap: .875rem;
  grid-row-gap: .875rem;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.w-nav-button {
  float: right;
  cursor: pointer;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 18px;
  font-size: 24px;
  display: block;
  position: relative;
}

.w-nav-button:focus {
  outline: 0;
}

.w-nav-button.w--open {
  color: #fff;
  background-color: #c8c8c8;
}


.w-nav-menu {
  float: right;
  position: relative;
}

.brand {
  color: #fff;
  letter-spacing: 0;
  text-transform: uppercase;
  padding-top: .4rem;
  padding-left: 0;
  padding-right: 0;
  font-family: Big river sample, sans-serif;
  font-size: 1rem;
  font-weight: 400;
}

/* .navbar_component {
  justify-content: space-between;
  align-items: center;
  padding-top: 0;
  padding-left: 0;
  display: flex;
  position: relative;
} */
.navbar_overlay {
  z-index: 5;
  cursor: pointer;
  background-color: rgba(11, 12, 15, .5);
  display: none;
  position: fixed;
  top: 0%;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

.navbar_link {
  max-height: 65vh;
  min-width: 13rem;
  grid-column-gap: .5rem;
  grid-row-gap: .5rem;
  color: #000;
  text-transform: none;
  border-right: 1px solid #e7eeee;
  flex-direction: row;
  grid-template-rows: auto;
  grid-template-columns: 1fr auto;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  padding: 12rem 1rem 0;
  text-decoration: none;
  display: grid;
  /* overflow: auto; */
}

.navbar_link-wrapper {
  width: 100%;
  grid-column-gap: 0px;
  grid-row-gap: 16px;
  flex-direction: row;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  display: grid;
}


.navbar_drop-content {
  z-index: 30;
  width: 100%;
  background-color: #fff;
  flex-flow: wrap;
  justify-content: center;
  margin-top: 1rem;
  padding: 0;
  display: flex;
  position: relative;
  overflow: hidden;
}

.w-nav-brand {
  float: left;
  /* color: #fff; */
  text-decoration: none;
  position: relative;
}

@media screen and (max-width: 991px) {
  .navbar_drop-content {
    max-height: 80vh;
    overflow: auto;
  }


  .navbar_link-wrapper {
    grid-column-gap: 0rem;
    grid-row-gap: 0rem;
    grid-template-columns: 1fr;
    padding-top: 0;
    padding-bottom: 0;
  }


  .navbar_drop-content.radius-regular {
    max-height: 65vh;
  }
  .navbar_link {
    max-height: none;
    grid-column-gap: 2.5rem;
    grid-row-gap: 2.5rem;
    border-bottom: 1px solid #e7eeee;
    border-right-style: none;
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}


@media screen and (max-width: 767px) {
  .navbar_link {
    padding: 1.5rem;
  }
  .w-nav-brand {
    padding-left: 10px;
  }

  .w-nav-brand {
    padding-left: 10px;
  }
}

@media screen and (max-width: 479px) {
  .navbar_link {
    padding: 1.25rem;
  }

  .hide-mobile-portrait {
    display: none;
  }
  .navbar_toggle {
    width: 2.5rem;
    height: 2.5rem;
  }
}

.w-dropdown-list {
  min-width: 100%;
  left: 0;
  position: absolute;
}

.w-dropdown-list.w--open {
  display: block;
}

.navbar_dropdown-list.w--open {
  width: 0;
  height: 0;
  background-color: rgba(221, 221, 221, 0);
  justify-content: flex-end;
  align-items: flex-start;
  display: flex;
  top: auto;
  bottom: 0%;
  left: 0%;
  right: 0%;
}

</style>
