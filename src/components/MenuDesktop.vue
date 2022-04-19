<template>
    <div id="sidebar">

        <div class="logo">
          <router-link :to="{ name: 'home'}">
            <img src="../assets/Home/logo1.png" class="img">
            <img src="../assets/Home/logo2.png" class="img">
            <img src="../assets/Home/logo3.png" class="img">
          </router-link>

          <img src="/icon1.png" class="icon">
          <img src="/icon2.png" class="icon">
          <img src="/icon3.png" class="icon">

        </div>

        <div class="menu">

          <router-link class="link" :to="{ name: 'filmes'}">FILMES</router-link>
          <router-link class="link" :to="{ name: 'outros'}">OUTROS</router-link>
          <router-link class="link" :to="{ name: 'produtora'}">PRODUTORA</router-link>

        </div>

      <router-view></router-view>
    </div>
</template>

<script>

  export default {
    mounted() {
      this.onLoad();
      this.mobileMenu();
    },
    methods: {
      onLoad() {
        var number = Math.floor(Math.random() * 3) + 1;
        var anchor = document.getElementsByClassName('link');

        if (number === 1) {
          document.getElementsByClassName('img')[0].style.display = 'block';
          if (window.innerWidth < 768) {
            document.getElementsByClassName('icon')[0].style.display = 'block';
          }
          for (var i=0; i < anchor.length; i++) {
            anchor[i].classList.add('blue');
            anchor[i].style.display = 'block';
          }
        }

        if (number === 2) {
          document.getElementsByClassName('img')[1].style.display = 'block';
          if (window.innerWidth < 768) {
            document.getElementsByClassName('icon')[1].style.display = 'block';
          }
          for (var a=0; a < anchor.length; a++) {
            anchor[a].classList.add('orange');
            anchor[a].style.display = 'block';
          }
        }

        if (number === 3) {
          document.getElementsByClassName('img')[2].style.display = 'block';
          if (window.innerWidth < 768) {
            document.getElementsByClassName('icon')[2].style.display = 'block';
          }
            for (var e=0; e < anchor.length; e++) {
            anchor[e].classList.add('pink');
            anchor[e].style.display = 'block';
          }
        }
      },
      mobileMenu() {
        var icons = document.getElementsByClassName('icon');

        function abrirMenu(){
          document.getElementsByClassName("menu")[0].style.display = "block";
          for (var i=0; i < icons.length; i++) {
            icons[i].removeEventListener("click", abrirMenu);
            icons[i].addEventListener("click", fecharMenu);
            icons[i].style.transform = "rotate(90deg)";
          }
        }

        function fecharMenu(){
          document.getElementsByClassName("menu")[0].style.display = "none";
          for (var i=0; i < icons.length; i++) {
            icons[i].removeEventListener("click", fecharMenu);
            icons[i].addEventListener("click", abrirMenu);
            icons[i].style.transform = "rotate(-180deg)"
          }
        }

        for (var i=0; i < icons.length; i++) {
          icons[i].addEventListener("click", abrirMenu)
        }
      }
    },
  }

</script>


<style scoped>

 #sidebar {
   position: fixed;
   width: 25%;
 }

  .img {
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

  .icon {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    
    #sidebar {
      position: unset;
      width: unset;
      margin-top: 10vw;
    }

    .logo {
      position: relative;
    }

    .menu {
      display: none;
      margin-top: 10vw;
      padding-top: 10vw;
      padding-bottom: 10vw;
      border-top: 2px solid white;
      border-bottom: 2px solid white;
      width: unset
    }

    .img {
      width: 60%;
    }

    .icon {
      width: 29%;
      position: absolute;
      bottom: -6%;
      right: 4%;
      z-index: 999;
      padding: 10vw;
    }    

  }

  @media only screen and (min-width: 1700px) {

    .link {
      font-size: 22px;
    }


  }


</style>