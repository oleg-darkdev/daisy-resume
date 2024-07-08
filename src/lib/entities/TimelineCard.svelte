<script>
    export let timeline;
</script>


<div class="about-history-item">
    <div class="about-history-intro">
        <div class="about-history-title">
        <div class="margin-bottom margin-medium">
            <div class="title-tag">
            <div class="circle bg-violet-900"></div>
            <div class="text-size-tiny text-style-allcaps">{timeline.years}</div>
            </div>
        </div>
        <h3 class="heading-style-h3">{timeline.title}</h3>
        </div>
        <div class="text-size-regular text-color-grey">{timeline.desc}.</div>
    </div>
</div>


<style>
.title-tag {
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  align-items: center;
  display: flex;
}

.circle {
  width: .5rem;
  height: .5rem;
  border: 1px solid #c3dde0;
  border-radius: 100rem;
}

</style>