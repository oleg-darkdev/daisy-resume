<script>

    export let title, link, btnTitle, showSection;
</script>


<div class="home-service-top" on:click={()=> {showSection = !showSection; location.href = link}}>
    <div class="home-service-intro">
        <div class="text-size-large text-align-center">{title}</div>
        <a href="{link}" class="button is-light w-inline-block">
        <div class="text-size-xsmall">{btnTitle}</div>
        </a>
    </div>
</div>