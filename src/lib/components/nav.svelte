<script>
  export let selectedSection, sections;
</script>

<div class="flex flex-col w-full">
<h2 class="text-5xl m-1 text-white">{selectedSection.text}</h2>
<div class="w-full rounded-xl border p-1">
  <div
    on:click={() => {
      selectedSection = sections[0];
    }}
    class="w-full rounded-t-xl h-16 bg-primary text-primary-content place-content-center hover:bg-white hover:bg-gray-800"
  >
    <!-- <a href="#hello"></a> -->
    <h2 class="h-full w-full text-center p-4 text-white hover:text-primary text-2xl">Hello</h2>
  </div>
  <div
    on:click={() => selectedSection = sections[1]}
    class="w-full h-16 bg-secondary text-secondary-content place-content-center hover:bg-white hover:bg-gray-800"
  >
    <!-- <a href="#hello"></a> -->
    <h2 class="h-full w-full text-center p-4 text-white hover:text-secondary text-2xl">About</h2>
  </div>
  <div
    on:click={() => selectedSection = sections[2]}
    class="w-full h-16 bg-success text-success-content place-content-center  hover:bg-gray-800"
  >
    <!-- <a href="#hello"></a> -->
    <h2 class="h-full w-full text-center p-4 text-white hover:text-success text-2xl">Resume</h2>
  </div>
  <div
    on:click={() => selectedSection = sections[3]}
    class="w-full h-16 bg-warning text-warning-content place-content-center  hover:bg-gray-800"
  >
    <!-- <a href="#hello"></a> -->
    <h2 class="h-full w-full text-center p-4 text-white hover:text-warning text-2xl">Portfolio</h2>
  </div>
    <div
    on:click={() => selectedSection = sections[4]}

    class="w-full   h-16 bg-info text-info-content place-content-center  hover:bg-gray-800"
  >
    <!-- <a href="#hello"></a> -->
    <h2 class="h-full w-full text-center p-4 text-white hover:text-info text-2xl">Activism</h2>
  </div>
  <div
    on:click={() => selectedSection = sections[5]}

    class="w-full rounded-b-xl  h-16 bg-error text-error-content place-content-center hover:bg-gray-800"
  >
    <!-- <a href="#hello"></a> -->
    <h2 class="h-full w-full text-center p-4 text-white hover:text-error text-2xl">Contact</h2>
  </div>

</div>
</div>



<style>

</style>
