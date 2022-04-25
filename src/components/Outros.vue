<template>
    <div class="content">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <MenuDesktop/>
                </div>
                <div class="col-md-9">
                    
                    <div class=" filmes">

                        <h1 class="title">Outros Trabalhos</h1>

                        <OutroBanner v-for="outro in outros" v-bind:key="outro.id" :name="outro.name" :img="outro.img" :ano="outro.ano" :tipo="outro.tipo" :uri="outro.uri" />


                    </div>


                </div>


            </div>

        </div>

    </div>
</template>

<script>
  import OutroBanner from './OutroBanner.vue';
  import MenuDesktop from './MenuDesktop.vue';
  import json from '../assets/outros.json'


    export default {
        name:'Outros',
        components: {
            MenuDesktop,
            OutroBanner
        },
        data(){
            return {
                outros: json,
                filtro: 'todos'
            }
        },
        mounted() {
            this.activeMenu();
        },
        methods: {
            mudarFiltro(event) {
                this.filtro = event.target.id;

                var filtros = document.getElementsByClassName('filtro__lista__opcao');

                for (var i=0; i < filtros.length; i++ ) {
                    filtros[i].style.textDecoration = "none";
                }

                event.target.style.textDecoration = "overline underline"
                
            },
            activeMenu() {
                document.getElementsByClassName('link')[1].style.color = "white";
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