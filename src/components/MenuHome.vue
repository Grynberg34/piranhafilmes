<template>
    <div>

      <router-link :to="{ name: 'home'}">

        <img src="../assets/Home/logo1.png" alt="">
        <img src="../assets/Home/logo2.png" alt="">
        <img src="../assets/Home/logo3.png" alt="">

      </router-link>

      <div class="menu">
        <button class="link" v-on:click="openFilmes">FILMES</button>
        <router-link class="link-hidden" :to="{ name: 'filmes'}">LANÇADOS</router-link>
        <router-link class="link-hidden" :to="{ name: 'desenvolvimento'}">EM DESENVOLVIMENTO</router-link>
        <button class="link" v-on:click="openOutros">OUTROS TRABALHOS</button>
        <router-link class="link-hidden" :to="{ name: 'institucionais'}">INSTITUCIONAIS</router-link>
        <router-link class="link-hidden" :to="{ name: 'videoclipes'}">VIDEOCLIPES</router-link>
        <router-link class="link" :to="{ name: 'produtora'}">PRODUTORA</router-link>
      </div>

      <router-view></router-view>
    </div>
</template>

<script>

  export default {
    mounted() {
      this.onLoad();
    },
    methods: {
      onLoad() {
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
      openFilmes() {
        if (document.getElementsByClassName('link-hidden')[0].style.display === 'block') {
          document.getElementsByClassName('link-hidden')[0].style.display = 'none';
          document.getElementsByClassName('link-hidden')[1].style.display = 'none';
        } else {
          document.getElementsByClassName('link-hidden')[0].style.display = 'block';
          document.getElementsByClassName('link-hidden')[1].style.display = 'block';
        }

      },
      openOutros() {
        if (document.getElementsByClassName('link-hidden')[2].style.display === 'block') {
          document.getElementsByClassName('link-hidden')[2].style.display = 'none';
          document.getElementsByClassName('link-hidden')[3].style.display = 'none';
        } else {
          document.getElementsByClassName('link-hidden')[2].style.display = 'block';
          document.getElementsByClassName('link-hidden')[3].style.display = 'block';
        }

      },
    },
  }

</script>


<style scoped>

  img {
    display: none;
    position: absolute;
    width: 20%;
    top: 30%;
    left: 38%;
    z-index: 1;
    opacity: 0.7;
  }

  .menu {
    position: absolute;;
    top: 37.5%;
    left: 58%;
    z-index: 1;
    opacity: 0.7;
  }

  .link {
    display: none;
    z-index: 4;
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 10px;
    background: none;
    padding: 0;
    border: none;
  }

  .link:hover {
    text-decoration: none;
    color: white;
  }

  .link-hidden {
    display: none;
    z-index: 4;
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 10px;
  }

  .link-hidden:hover {
    color: white;
    font-weight: 700;
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

  .dropdown {
    display: none;
    z-index: 4;
    color: white;
    font-size: 20px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 10px;
    border: none;
    background: none;
  }


  @media only screen and (max-width: 767px) {
    img {
      position: unset;
      margin-top: 22vw;
      margin-left: auto;
      margin-right: auto;
      width: 60%;

    }

    .menu {
      position: unset;
      margin-top: 20vw;
    }

    .link {
      font-size: 25px;
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }

    .link-hidden {
      font-size: 18px;
      margin-left: auto;
      margin-right: auto;
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

  @media only screen and (min-width: 768px) and (max-width: 1199px) {

    img {
      top: 40%;
    }

    .menu {
      top: 42%;
    }

    .link {
      font-size: 12px;
    }

  }

  @media only screen and (min-width: 1200px) and (max-width: 1365px) {

    .link {
      font-size: 18px;
    }

  }

  @media only screen and (min-width: 1532px) and (max-width: 1700px) {

    .link {
      font-size: 24px;
    }

  }

  @media only screen and (min-width: 1701px) {

    .link {
      font-size: 30px;
    }

  }

</style>