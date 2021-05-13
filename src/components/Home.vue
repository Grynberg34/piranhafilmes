<template>


  <div>
    <Background />

    <div>

      <img src="../assets/Home/logo1.png" alt="">
      <img src="../assets/Home/logo2.png" alt="">
      <img src="../assets/Home/logo3.png" alt="">


      <div class="menu">
        <a class="link" href="">FILMES</a>
        <a class="link" href="">VIDEOCLIPES</a>
        <a class="link" href="">OUTROS</a>
        <a class="link" href="">A PRODUTORA</a>
        <a class="link" href="">CONTATO</a>
      </div>


    </div>
  </div>


</template>

<script>
  import Background from './Background.vue';

  export default {
    name: 'Home',
    components: {
    Background
    },
    beforeMount() {
      window.addEventListener("load", this.onWindowLoad);
    },
    methods: {
      onWindowLoad() {
        var number = Math.floor(Math.random() * 3) + 1;
        var anchor = document.getElementsByClassName('link');

        if (number === 1) {
          document.getElementsByTagName('img')[0].style.display = 'block';
          for (var i=0; i < anchor.length; i++) {
            anchor[i].classList.add('blue');
            anchor[i].style.display = 'block';
          }
        }

        if (number === 2) {
          document.getElementsByTagName('img')[1].style.display = 'block';
          for (var a=0; a < anchor.length; a++) {
            anchor[a].classList.add('orange');
            anchor[a].style.display = 'block';
          }
        }

        if (number === 3) {
          document.getElementsByTagName('img')[2].style.display = 'block';
            for (var e=0; e < anchor.length; e++) {
            anchor[e].classList.add('pink');
            anchor[e].style.display = 'block';
          }
        }

       

      },
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

  img {
    display: none;
    position: absolute;
    width: 20%;
    top: 30%;
    left: 38%;
    z-index: 1;
  }

  .menu {
    position: absolute;;
    top: 32%;
    left: 58%;
    z-index: 1;
  }

  a {
    display: none;
    z-index: 4;
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 10px;
  }

  a:hover {
    text-decoration: none;
    color: white;
  }

  .blue{
    color: #2e62ab;
  }

  .orange {
    color: #e88f00;
  }

  .pink {
    color: #e62260;
  }


  @media only screen and (max-width: 767px) {
    img {
      position: unset;
      margin-top: 30vw;
      margin-left: auto;
      margin-right: auto;
      width: 60%;
    }

    .menu {
      position: unset;
      margin-top: 20vw;
    }

    a {
      font-size: 25px;
      text-align: center;
    }

  .blue:hover{
    color: #2e62ab;
  }

  .orange:hover {
    color: #e88f00;
  }

  .pink:hover {
    color: #e62260;
  }
  
  }


</style>
