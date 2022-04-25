<template>
    <div class="content">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <MenuDesktop/>
                </div>
                <div class="col-md-9">
                    
                    <div class=" filmes">

                        <h1 class="title">Filmes</h1>

                        <FilmeBanner v-for="filme in filmes" v-bind:key="filme.id" :name="filme.name" :img="filme.img" :ano="filme.ano" :uri="filme.uri" />


                    </div>


                </div>


            </div>

        </div>

    </div>
</template>

<script>
  import FilmeBanner from './FilmeBanner.vue';
  import MenuDesktop from './MenuDesktop.vue';
  import json from '../assets/filmes.json'


    export default {
        name:'Filmes',
        components: {
            MenuDesktop,
            FilmeBanner
        },
        data(){
            return {
                filmes: json,
                filtro: 'todos'
            }
        },
        mounted() {
            this.activeMenu();
        },
        methods: {
            activeMenu() {
                document.getElementsByClassName('link')[0].style.color = "white";
            },
        }
    }
        


</script>

<style scoped>

    .content {
        background-color: black;   
        background-image: url('/fundo.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        min-height: 100vh; 
    }

    .title {
        font-size: 50px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 4vw;
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;

    }

    .filmes {
        margin-top: 8vw;
        margin-bottom: 8vw;
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

    input {
        display: none;
    }

    @media only screen and (max-width: 767px) {
        
        .title {
            font-size: 40px;
            margin-top: 20vw;
            margin-bottom: 10vw;
        }

        .filmes {
            margin-bottom: 30vw;
        }

        .filme {
            width: 90%;
            margin-bottom: 14vw;
        }

    }

</style>