<template>
    <div id="sidebar">

        <router-link :to="{ name: 'home'}">
            <img src="../assets/Home/logo1.png" alt="">
            <img src="../assets/Home/logo2.png" alt="">
            <img src="../assets/Home/logo3.png" alt="">
        </router-link>

        <div class="menu">

          <router-link class="link" :to="{ name: 'filmes'}">FILMES</router-link>
          <router-link class="link" :to="{ name: 'filmes'}">VIDEOCLIPES</router-link>
          <router-link class="link" :to="{ name: 'filmes'}">OUTROS</router-link>
          <router-link class="link" :to="{ name: 'filmes'}">PRODUTORA</router-link>
          <router-link class="link" :to="{ name: 'filmes'}">CONTATO</router-link>

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
    },
  }

</script>


<style scoped>

 #sidebar {
   position: fixed;
   width: 25%;
 }


  img {
    display: none;
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    padding-top: 8vw;
    margin-bottom: 4vw;
  }

  .menu {
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }

  .link {
    display: none;
    z-index: 4;
    color: white;
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
    margin-bottom: 10px;
    letter-spacing: 2px;
    text-align: center;
  }

  .link:hover {
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


</style>