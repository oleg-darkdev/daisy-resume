<script>
  	import { navigation } from '$shared';
</script>

<footer class="section-footer1">
  <div class="padding-horizontal padding-small">
    <div class="grid-large">
      <div id="footer-wrap" class="footer-block">
        <div class="padding-vertical padding-huge">
          <div class="footer-intro">
            <div class="text-size-large text-align-center text-color-white">Whether you need design or tweak some code, I have the skills and creativity needed to take your project to the next level.</div>
          </div>
        </div>
        <div class="padding-horizontal padding-medium">
          <div class="footer-bottom">
            <div class="footer-nav footer-menu">
              {#each navigation as nav}
                <a href="{nav.href}" aria-current="page" class="footer-link w-inline-block w--current">
                  <div class="text-size-tiny text-style-allcaps">{nav.title}</div>
                </a>
              {/each}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>


<style>
.footer-nav {
  grid-area: span 1 / span 1 / span 1 / span 1;

  align-self: center;
  justify-self: center;
}


.footer-block {
  flex-direction: column;
  display: flex;
}

.footer-bottom {
  border-top: 1px solid #2e313a;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
}

.footer-menu {
  grid-column-gap: 2.625rem;
  grid-row-gap: 2.625rem;
  justify-content: space-between;
  /* width: 100%; */
  display: flex;
}

.footer-link {
  color: #fff;
  text-decoration: none;
}

@media screen and (max-width: 991px) {
  .footer-menu {
    padding-bottom: 2rem;
  }

    .footer-nav {
    /* grid-column: span 2 / span 2; */
    justify-self: center;
  }
}

@media screen and (max-width: 767px) {
  .footer-menu {
    flex-direction: column;
    align-items: center;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

    .footer-nav {
    justify-self: center;
  }
}

@media screen and (max-width: 479px) {
  .footer-menu {
    padding-top: 1rem;
  }

    .footer-nav {
    grid-column: span 1 / span 1;
  }
}

</style>