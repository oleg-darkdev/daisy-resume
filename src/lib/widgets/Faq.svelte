<script>
	import { FaqCard } from '$entities';
	import { faq } from '$shared';

</script>


<div class="home-faq-list radius-regular">
  {#each faq as faqData}
    <FaqCard {faqData}/>
  {/each}
</div>

<style>

</style>