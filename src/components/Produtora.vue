<template>
    <div class="content">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <MenuDesktop/>
                </div>
                <div class="col-md-3">
                    
                    <div class="produtora">

                        <h1 class="title">A PRODUTORA</h1>

                        <p class="text">
                            A Piranha Filmes nasceu em Belo Horizonte em 2019, fundada por Daniela Cambraia, Yasmin Guimarães e Mariana de Melo. <br><br>
                            A Piranha dedica-se principalmente à produção cinematográfica, priorizando projetos com potências artísticas e políticas; equipes diversas e busca novas maneiras do fazer cinematográfico, que se dêem através de construções colaborativas e dinâmicas de trabalho respeitosas. <br><br>
                            Seus curtas-metragens circularam alguns dos maiores festivais de cinema do Brasil, como a Mostra de Cinema de Tiradentes, a Janela de Cinema do Recife, o Mix Brasil e outros. Seus projetos de longas, em desenvolvimento, têm circulado em laboratórios brasileiros. <br><br>
                            No que tange o desenvolvimento de seus projetos e parcerias, Daniela, Mariana e Yasmin buscam aliar a competência da produção à criatividade.
                        </p>


                    </div>


                </div>

                <div class="col-md-1"></div>

                <div class="col-md-4">

                    <div class="bios container-fluid">
                            <div class="row">
                                <div class="col-4">
                                    <img v-on:click="setBio($event)" id="1" class="img" src="/produtora/daniela.png" alt="">
                                </div>

                                <div class="col-4">
                                    <img v-on:click="setBio($event)"  id="2" class="img" src="/produtora/mariana.png" alt="">
                                </div>

                                <div class="col-4">
                                    <img v-on:click="setBio($event)" id="3" class="img" src="/produtora/yasmin.png" alt="">
                                </div>
                        </div>

                        <ProdutoraCard :name="bioAtiva.name" :text="bioAtiva.text" />
                    </div>
                    

                </div>


            </div>

        </div>

    </div>
</template>

<script>
  import MenuDesktop from './MenuDesktop.vue';
  import ProdutoraCard from './ProdutoraCard.vue';
  import json from '../assets/produtora.json'


    export default {
        name:'Produtora',
        components: {
            MenuDesktop,
            ProdutoraCard
        },
        data(){
            return {
                bios: json,
                bioAtiva: {
                    id: "",
                    name: "",
                    text: ""
                }
            }
        },
        mounted() {
            this.activeMenu();
            this.getColor();
            this.getBio();
        },
        methods: {
            getColor() {
                if (document.getElementsByClassName('link')[0].classList.contains('orange')) {
                    this.color = '#e88f00'
                }
                if (document.getElementsByClassName('link')[0].classList.contains('blue')) {
                    this.color = '#2e62ab'
                }
                if (document.getElementsByClassName('link')[0].classList.contains('pink')) {
                    this.color = '#e62260'
                }

                var titles = document.getElementsByClassName('title');

                for (var i=0; i < titles.length; i++) {
                    titles[i].style.color = this.color;
                }

                return this.color

            },
            getBio() {

               var bio = this.$store.getters.getActiveBio;

               var color = document.getElementsByClassName('title')[0].style.color;

               var imgs = document.getElementsByClassName('img');

                for (var i=0; i < imgs.length; i++) {
                    imgs[i].style.border = "none"
                }

               document.getElementById(bio).style.border = `3px solid ${color}`;


                for (var e=0; e < this.bios.length; e++) {

                    if (bio == this.bios[e].id) {
                        this.bioAtiva  =  {
                            id : this.bios[e].id,
                            name: this.bios[e].name,
                            text: this.bios[e].text
                        }
                    }
                    
                }

               return bio

            },
            setBio(event) {

                this.$store.commit('setActiveBio', event.target.id);

                this.getBio();

            },
            activeMenu() {
                document.getElementsByClassName('link')[2].style.color = "white";
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

    .produtora {
        margin-top: 8vw;
        margin-bottom: 8vw;
    }

    .title {
        font-size: 60px;
        font-weight: 400;
        text-align: center;
        margin-bottom: 4vw;
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;

    }

    .text {
        font-size: 20px;
        color: white;
        text-align: justify;
    }

    .bios {
        margin-top: 8vw;
        margin-bottom: 8vw;
        padding: 0;
    }

    .img {
        width: 100%;
        cursor: pointer;
    }


    @media only screen and (max-width: 767px) {
        
        .produtora {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
        }

        .bios {
            width: 80%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 30vw;
        }

        .title {
            font-size: 40px;
            margin-top: 20vw;
            margin-bottom: 10vw;
        }

        .text {
            margin-bottom: 20vw;
        }

    }

</style>