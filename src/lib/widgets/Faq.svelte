<script>
	import { FaqCard } from '$entities';
	import { faq } from '$shared';

</script>

<div class="padding-horizontal padding-large">
  <div class=" padding-bottom padding-large">
     <div class="home-faq-list">
      {#each faq as faqData}
        <FaqCard {faqData}/>
      {/each}
    </div>
  </div>
</div>

<style>

</style>
