<script>
  import ArrowDown from "carbon-icons-svelte/lib/ArrowDown.svelte";

  export let link, showSection;
</script>


<div class="curve-block-center" on:click={()=> showSection = !showSection}>
    <a  href="{link}" class=" curve-link w-inline-block">
        <div style="background-color: #000;" class="curve-arrow group-hover:scale-110  group-hover:translate-y-2 group-hover:transition group-hover:duration-1000 group-hover:ease-in-out">
          <div class="text-white">
              <!-- <div class="hover-arrow top ">
                  <div class="icon w-embed">
                  <svg width="640" height="640" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0002 16.172L18.3642 10.808L19.7782 12.222L12.0002 20L4.22217 12.222L5.63617 10.808L11.0002 16.172V4H13.0002V16.172Z" fill="currentColor"></path>
                  </svg>
                  </div>
              </div>
              <div class="hover-arrow ">
                  <div class="icon w-embed">
                  <svg width="640" height="640" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13.0002 16.172L18.3642 10.808L19.7782 12.222L12.0002 20L4.22217 12.222L5.63617 10.808L11.0002 16.172V4H13.0002V16.172Z" fill="currentColor"></path>
                  </svg>
                  </div>
              </div> -->
              <ArrowDown size={32} class='{showSection ? 'rotate-180': ''}' />
            </div>
        </div>
      <img src="/images/curver.svg" loading="lazy" class='' alt="Curver img">
      </a>
</div>


<style>
.icon {
  width: .7rem;
  height: .7rem;
  color: #0b0c0f;
  justify-content: center;
  align-items: center;
  display: flex;
  overflow: hidden;
}

.w-embed:before, .w-embed:after {
  content: " ";
  grid-area: 1 / 1 / 2 / 2;
  display: table;
}

.w-embed:after {
  clear: both;
}

.hover-arrow.right {
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: auto;
  right: -100%;
}

.hover-arrow.left {
  position: absolute;
  top: 0%;
  bottom: 0%;
  left: -100%;
  right: auto;
}

.hover-arrow.top {
  position: absolute;
  top: -100%;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.clip {
  position: relative;
  overflow: hidden;
}


.curve-block-center {
  height: 0;
  grid-column-gap: 16px;
  grid-row-gap: 16px;
  grid-template-rows: auto;
  grid-template-columns: 1fr .9fr;
  grid-auto-columns: 1fr;
  align-content: end;
  justify-content: center;
  align-items: flex-end;
  display: flex;
  position: absolute;
  top: -.4px;
  bottom: auto;
  left: 0%;
  right: 0%;
}

.curve-link {
  color: #fff;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: -1px;
  padding: 0;
  display: flex;
  position: relative;
}

.curve-arrow {
  width: 4rem;
  height: 4rem;
  border: 1px solid #e7eeee;
  border-radius: 100rem;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: #fff;
  position: absolute;
  top: .5rem;
}
</style>
