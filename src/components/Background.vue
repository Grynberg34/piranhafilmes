<template>
  <div>
    <video autoplay muted loop>
      <source src="../assets/Home/reel.mp4" type="video/mp4">
    </video>

    <div class="background"></div>
  </div>
</template>

<script>
export default {
  name: 'Background',
}
</script>

<style scoped>

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -10 !important;
  }

  .background {
    width: 100vw;
    height: 100vh;
    background-color: black;
    opacity: 0.7;
    z-index: 0;
  }

</style>
