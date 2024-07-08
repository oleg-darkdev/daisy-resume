<script>

    export let title, subTitle;
</script>


<section  class="bit-title-section overflow-hidden">
    <div class="c-container">
        <div class="c-more-wrapper">
            <slot />
        <div class="c-more-text bit-title-mobile-2 text-white">{title}</div>
        <div class="c-more-text bit-title-mobile-3 text-white">{title}</div>
        <div class="c-more-text text-white">{title}</div>
        </div>
        <h1 class="c-text-1 bit-title-work">{subTitle}</h1>
    </div>
</section>

<!-- <section class="bit-title-section bit-title-py-0">
<div class="c-logos-wrapper">
    <div marquee="" class="c-logos-group">
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum  52</div>
    </div>
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum  2</div>
    </div>
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum  15</div>
    </div>
    </div>
    <div marquee="" class="c-logos-group">
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum  52</div>
    </div>
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum  2</div>
    </div>
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum  15</div>
    </div>
    </div>
    <div marquee="" class="c-logos-group">
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum 52</div>
    </div>
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum  2</div>
    </div>
    <div class="c-logos">
        <div class="c-title-7 text-white">lorem impsum  15</div>
    </div>
    </div>
</div>
</section> -->

<style>
 

/* Max Font Size */
@media screen and (min-width: 1440px) {
  body {
    font-size: 1rem;
  }
}

.c-title-7 {
  font-variation-settings: "wght" 500;
}

.c-more-text {
  font-variation-settings: "wght" 500;
}

@media screen and (max-width: 991px) {

}

.c-nav-link:is(.w--current, :hover, .w--open) {
  font-variation-settings: "wght" 700;
}

@media only screen and (min-width: 992px) {
 
}

[footer-cta-link]:hover :is(.c-title-6, .c-services-header .c-text-4) {
  transform: translateX(5px);
}

[footer-cta-link]
  :is(
    .c-title-6,
    .c-services-header .c-text-4,
    .c-text-3,
    .c-text-align-right
  ) {
  transition: transform cubic-bezier(0.86, 0, 0.07, 1) 500ms;
  /* ease in out quint */
}

body {
  -webkit-font-smoothing: antialiased;
}

@media screen and (min-width: 992px) {
  body {
    cursor: none !important;
  }
}
@-webkit-keyframes marquee

        /* Safari and Chrome */ {
  from {
    -webkit-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  to {
    -webkit-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

@keyframes marquee {
  from {
    -ms-transform: translateX(0%);
    -moz-transform: translateX(0%);
    -webkit-transform: translateX(0%);
    -o-transform: translateX(0%);
    transform: translateX(0%);
  }

  to {
    -ms-transform: translateX(-100%);
    -moz-transform: translateX(-100%);
    -webkit-transform: translateX(-100%);
    -o-transform: translateX(-100%);
    transform: translateX(-100%);
  }
}

[marquee] {
  -webkit-animation: marquee 20s linear infinite;
  -moz-animation: marquee 20s linear infinite;
  -ms-animation: marquee 20s linear infinite;
  -o-animation: marquee 20s linear infinite;
  animation: marquee 20s linear infinite;
}

h1 {
  margin: 0.67em 0;
  font-size: 2em;
}
img {
  border: 0;
}
h1 {
  margin-bottom: 10px;
  font-weight: 700;
}
h1 {
  margin-top: 20px;
  font-size: 38px;
  line-height: 44px;
}

h1 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 38px;
  font-weight: 700;
  line-height: 44px;
}
img {
  max-width: 100%;
  display: inline-block;
}
.bit-title-section {
  padding-top: 8em;
  /* padding-bottom: 8em; */
  position: relative;
}
.bit-title-section.bit-title-py-0 {
  padding-top: 0;
  padding-bottom: 0;
}
.c-container {
  width: 100%;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 2.5em;
  padding-right: 2.5em;
  display: block;
}
.c-text-1 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.15em;
  line-height: 1.5;
}
.c-text-1.bit-title-work {
  color: #919191;
  text-align: center;
  font-weight: 400;
}
.c-title-7 {
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1.25em;
  line-height: 1.3;
}
.c-more-text {
  align-items: center;
  height: 0.3em;
  padding-top: 0.15em;
  padding-bottom: 0.4em;
  padding-left: 0;
  font-size: 37em;
  line-height: 0.6;
  display: flex;
}
.c-more-text.bit-title-mobile-2,
.c-more-text.bit-title-mobile-3 {
  display: none;
}
.c-more-wrapper {
  justify-content: center;
  align-items: center;
  margin-top: 10em;
  margin-bottom: 3em;
  display: flex;
  position: relative;
}

.c-logos-wrapper {
  border-style: solid none;
  border-width: 1px;
  border-color: var(--black-700);
  width: 100%;
  display: flex;
  overflow: hidden;
}
.c-logos-group {
  flex: none;
  display: flex;
}
.c-logos {
  border-right: 1px solid var(--black-700);
  justify-content: space-between;
  align-items: center;
  min-width: 20em;
  padding: 1.5em 2.5em;
  display: flex;
}
.c-logos_image {
  object-fit: contain;
  max-width: 70%;
}
.c-feature_faq-question:focus-visible {
  outline-offset: -3px;
  outline: 3px solid #004bb0;
}
@media screen and (max-width: 991px) {
  body {
    font-size: 1rem;
  }
  .bit-title-section {
    padding-top: 60px;
    /* padding-bottom: 60px; */
  }
  .c-container {
    padding-left: 18px;
    padding-right: 18px;
  }
  .c-title-7 {
    font-size: 1.13em;
  }
  .c-more-text {
    width: 100%;
    max-width: 573px;
    font-size: 30vw;
    position: absolute;
    transform: rotate(-90deg);
  }
  .c-more-text.bit-title-mobile-2 {
    display: flex;
    transform: translate(30%) rotate(-90deg);
  }
  .c-more-text.bit-title-mobile-3 {
    display: flex;
    transform: translate(-30%) rotate(-90deg);
  }
  .c-more-wrapper {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-width: 573px;
    min-height: 573px;
    display: flex;
  }


  .c-logos {
    width: 320px;
    padding: 24px 40px;
  }
}
@media screen and (max-width: 767px) {
    .c-more-image {
        display: none;
    }
  .bit-title-section {
    padding-top: 40px;
    /* padding-bottom: 40px; */
  }
  .c-container {
    padding-left: 12px;
    padding-right: 12px;
  }
  .c-more-text {
    max-width: 410px;
  }
  .c-more-text.bit-title-mobile-2 {
    transform: translate(30%) rotate(-90deg);
  }
  .c-more-text.bit-title-mobile-3 {
    transform: translate(-30%) rotate(-90deg);
  }
  .c-more-wrapper {
    min-width: 100%;
    min-height: 460px;
    margin-top: 120px;
  }
}
@media screen and (max-width: 479px) {
  .bit-title-section {
    padding-top: 32px;
    /* padding-bottom: 32px; */
  }
  .c-more-text {
    font-size: 60vw;
    bottom: 120px;
  }
  .c-more-text.bit-title-mobile-2 {
    transform: translate(40%) rotate(-90deg);
  }
  .c-more-text.bit-title-mobile-3 {
    transform: translate(-40%) rotate(-90deg);
  }
}
    </style>