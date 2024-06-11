<script>
	import { NavBarLink } from '$entities';
</script>

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
