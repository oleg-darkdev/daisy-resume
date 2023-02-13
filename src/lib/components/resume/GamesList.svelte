<script>
  import gamesList from '../../data/resume/gamesList';
</script>

{#each gamesList as game}
  <div
    class="card m-1 h-96 image-full bg-base-100 shadow-xl lg:max-w-xl md:max-w-xl w-full"
  >
    <figure>
      <img src={game.img} alt={game.title} />
    </figure>
    <div class="card-body">
      <h2 class="card-title">{game.title}</h2>
      <p>{game.description}</p>
      <div class="justify-end card-actions">
        <button class="btn btn-lg w-48 btn-primary">More</button>
      </div>
    </div>
  </div>
{/each}
