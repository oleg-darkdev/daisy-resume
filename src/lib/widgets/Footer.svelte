<script>
  const navigation = [
    {
      title: 'Services',
      href: '#services'
    },
    {
      title: 'Works',
      href: '#works'
    },
    {
      title: 'Boardgames',
      href: '#boardgames'
    },
    {
      title: 'About',
      href: '#my-story'
    },

    {
      title: 'F.A.Q.',
      href: '#faq'
    },
    {
      title: 'Contact',
      href: '#contact'
    },
  ]

</script>

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
            <div id="footer-copyright" class="text-size-tiny text-style-allcaps text-color-white">
              <!-- © 2024 <a href="" target="_blank" class="text-style-link light"></a> -->
            </div>
            <div class="footer-nav footer-menu">
              {#each navigation as nav}
                <a href="{nav.href}" aria-current="page" class="footer-link w-inline-block w--current">
                  <div class="text-size-tiny text-style-allcaps">{nav.title}</div>
                </a>
              {/each}
            </div>
            <div class="text-size-tiny text-style-allcaps text-color-white">
              <!-- Created by <a href="" target="_blank" class="text-style-link light">DarkDEV</a> -->
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
  /* justify-items: center; */
  align-self: center;
  justify-self: center;
}


.footer-block {
  flex-direction: column;
  display: flex;
}

.footer-bottom {
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  border-top: 1px solid #2e313a;
  grid-template-rows: auto;
  grid-template-columns: .5fr 1fr .5fr;
  grid-auto-columns: 1fr;
  justify-content: space-between;
  align-items: center;
  padding-top: 3rem;
  padding-bottom: 3rem;
  display: grid;
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