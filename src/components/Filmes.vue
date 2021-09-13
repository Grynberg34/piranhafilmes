<template>
    <div class="content">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3 order-1">
                    <MenuDesktop/>
                </div>
                <div class="col-md-6 order-md-2 order-3">
                    
                    <div class=" filmes">

                        <h1 class="title">Filmes</h1>

                        <FilmeBanner v-for="filme in filmesFiltrados" v-bind:key="filme.id" :name="filme.name" :img="filme.img" :ano="filme.ano" :status="filme.status.img" :uri="filme.uri" :filme="filme"/>


                    </div>


                </div>

                <div class="col-md-1 order-md-3"></div>

                <div class="col-md-2 order-md-4 order-2">

                    <div class="filtro">
                        <h3 class="filtro__title">Filtrar</h3>

                        <ul class="filtro__lista">
                            <li class="filtro__lista__opcao" id="todos" v-on:click="mudarFiltro($event)">Todos</li>
                            <li class="filtro__lista__opcao orange" id="pre" v-on:click="mudarFiltro($event)">Pré-Produção</li>
                            <li class="filtro__lista__opcao pink" id="lançados" v-on:click="mudarFiltro($event)">Lançados</li>
                            <li class="filtro__lista__opcao blue" id="pos" v-on:click="mudarFiltro($event)">Pós-Produção</li>
                        </ul>

                        <input id="filtro" type="text" v-model="filtro">
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
        beforeCreate() {
            this.activeMenu();
            this.mobileMenu();
        },
        computed: {

            filmesFiltrados: function() {

                console.log(this.filtro)

                if (this.filtro == 'todos') {
                    return this.filmes;
                }

                else {
                    return this.filmes.filter((filme) => {
                        return filme.status.tag.match(this.filtro);
                    });
                }
            },

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
                document.getElementsByClassName('link')[0].style.color = "white";
            },
            mobileMenu() {
                if (window.innerWidth < 768) {
                    document.getElementsByClassName('filtro__title')[0].innerText = 'Filmes';
                    document.getElementsByClassName('title')[0].style.display = "none";

                }
            }
        }
    }
        


</script>

<style scoped>

    .content {
        background-color: black;   
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

    .filtro {
        margin-top: 16vw;
        position: fixed;
        width: 15%;
    }

    .filtro__title {
        font-size: 24px;
        color: white;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 4vw;
    }

    .filtro__lista {
        list-style-type: square;
        padding-left: 0;
    }

    .filtro__lista__opcao {
        font-size: 14px;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        color: white;
        margin-bottom: 2vw;
        cursor: pointer;
        text-underline-position: under;
        user-select: none;

    }

    .filtro__lista__opcao:first-of-type {
        text-decoration: underline overline;
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

        .filtro {
            position: unset;
            width: unset;
        }

        .filtro__title {
            font-size: 50px;
            text-align: center;
            font-weight: 400;
        }

        .filtro__lista {
            padding-left: 38vw;
            margin-top: 10vw;
            margin-bottom: 10vw;
        }

        .filtro__lista__opcao {
            margin-bottom: 5vw;
        }
    }

</style>