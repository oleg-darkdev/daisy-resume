<script>
    import {
	blur,
	crossfade,
	draw,
	fade,
	fly,
	scale,
	slide
} from 'svelte/transition';

    export let faqData;
</script>

<div class="home-faq-item no-border">
    <div class="home-faq-top" on:click={()=> faqData.show = !faqData.show}>
        <div class="faq-card home-faq-number">
            <div id="nowThis" thattextsplit="hoverTarget" base="20%" class="clip">
                <div class="hover-text">
                    <div class="text-size-small text-style-muted">00{faqData.id}</div>
                </div>

        </div>
    </div>
    <div class="text-size-large">{faqData.title}</div>
        <div class="home-faq-icon">
            <div class="icon-1x1-small w-embed">
            <svg width="420" height="420" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z" fill="currentColor"></path>
            </svg>
            </div>
        </div>
    </div>
{#if faqData.show}
    <div transition:fade class="hame-faq-bottom">
        <div class="home-faq-content radius-regular">
            <div class="hover-text bottom-hover-text">
                <div class="text-size-small text-style-muted">00{faqData.id}</div>
            </div>
            {#each faqData.desc as desc}
                <p class='text-size-regular text-white mb-2'>
                    {desc}
                </p>
            {/each}            
        </div>
    </div>
{/if}
    <div class="line">
    <div class="line-fill light-line-fill"></div>
    </div>
</div>


<style>
@media screen and (max-width: 767px) {
.faq-card {
    grid-area: span 1 / span 2 / span 1 / span 2;
  }
}
</style>