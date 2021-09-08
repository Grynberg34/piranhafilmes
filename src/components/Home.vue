<template>


  <div>
    <Background />

    <MenuHome />

  </div>


</template>

<script>
  import Background from './Background.vue';
  import MenuHome from './MenuHome.vue';

  export default {
    name: 'Home',
    components: {
    Background,
    MenuHome
    },

  }

</script>

<style scoped>

  div {
    position: fixed;
    background: none;
    z-index: 2;
    top: 0%;
    height: 100vh;
    width: 100vw;
  }



</style>
