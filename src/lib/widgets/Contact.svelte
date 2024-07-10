<script>
  import LogoGithub from "carbon-icons-svelte/lib/LogoGithub.svelte";
  import Email from "carbon-icons-svelte/lib/Email.svelte";
  import LogoLinkedin from "carbon-icons-svelte/lib/LogoLinkedin.svelte";
  import LogoFacebook from "carbon-icons-svelte/lib/LogoFacebook.svelte";
	// import {   } from '$entities';
	// import {  } from '$shared';
</script>

<div class=" padding-bottom padding-large">
  <div class="flex flex-row justify-between max-w-lg mx-auto ">
    <a href="https://www.facebook.com/hulio.mondre" target="_blank" class='hover:scale-110 hover:translate-y-2 hover:transition hover:duration-1000 hover:ease-in-out'>
      <LogoFacebook size={120} />
      <div class="text-size-large text-align-center">Facebbok</div>
    </a>
    <a href="https://www.linkedin.com/in/oleg-darkdev" target="_blank" class='hover:scale-110 hover:translate-y-2 hover:transition hover:duration-1000 hover:ease-in-out'>
      <LogoLinkedin size={120} />
      <div class="text-size-large text-align-center">Linkedin</div>
    </a>
    <a href="https://github.com/oleg-darkdev/" target="_blank"  class='hover:scale-110 hover:translate-y-2 hover:transition hover:duration-1000 hover:ease-in-out'>
      <LogoGithub size={120} />
      <div class="text-size-large text-align-center">Github</div>
    </a>
    <a href="mailto:darkdev_brand@riseup.net" target="_blank"  class='hover:scale-110 hover:translate-y-2 hover:transition hover:duration-1000 hover:ease-in-out'>
      <Email size={120} />
      <div class="text-size-large text-align-center">Email</div>
    </a>
  </div>
</div>

<style>

</style>
