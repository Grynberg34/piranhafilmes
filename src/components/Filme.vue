<template>
    <div class="content">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <MenuDesktop/>
                </div>

                <div class="col-md-1"></div>

                <div class="col-md-6">
                    
                    <div class="filme">
                        <h1 class="filme__title">{{filme[0].name}}</h1>
                        <h2 class="filme__subtitle">{{filme[0].ano}} | {{filme[0].duração}}' | {{filme[0].classificação}}</h2>
                        <div class="" id="video">
                            <div class='embed-container'><iframe :src="filme[0].link" frameborder='0' allowfullscreen></iframe></div>
                        </div>
                    </div>

                    <div class="info">
                        <h3 class="title">Sinopse</h3>
                        <p id="sinopse" class="item">{{filme[0].sinopse}}</p>

                        <ul class="section">
                            <h3 class="title">Ficha técnica</h3>
                            <li class="item" v-for="(item,key) in filme[0].ficha" v-bind:key="key"><b>{{key}}:</b> {{item}}</li>
                        </ul>

                        <ul v-if="filme[0].prêmios" class="section premios">
                            <h3 class="title">Prêmios</h3>
                            <li class="item" v-for="(item) in filme[0].prêmios" v-bind:key="item">{{item}}</li>
                        </ul>

                        <ul v-if="filme[0].festivais" class="section festivais">
                            <h3 class="title">Festivais</h3>
                            <li class="item" v-for="(item) in filme[0].festivais" v-bind:key="item">{{item}}</li>
                        </ul>
                    </div>

                    <div class="galeria">
                        <h3 class="title">Galeria</h3>
                        <div class="row">
                            <div v-for="(item) in filme[0].galeria" v-bind:key="item" class="col-4">
                                <img @click="changeSrc($event)" class="galeria__img" :src="item" alt="">
                                
                            </div>
                        </div>
                    </div>

                </div>



            </div>

        </div>

        <Modal :src="src"/>

    </div>


</template>

<script>
  import MenuDesktop from './MenuDesktop.vue';
  import Modal from './Modal.vue';
  import json from '../assets/filmes.json'


    export default {
        name:'Filme',
        components: {
            MenuDesktop,
            Modal
        },
        created(){
            this.getFilme();
            this.redirect();

        },
        mounted() {
            this.getColor();
            this.scrollToTop();
        },
        data(){
            return {
                filmes: json,
                filme: Object,
                color: String,
                src: ''
            }
        },
        computed: {
            filmeUri () {
                return this.$route.params.id
            }
        },
        methods: {
            getFilme() {
                this.filme = this.filmes.filter(i => {
                    return i.uri == this.filmeUri
                })
            },
            redirect() {
                if (this.filme.length < 1) {
                    this.$router.push('/filmes')
                }
            },
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
                    titles[i].style.color = this.color
                }
            },
            scrollToTop() {
                window.scrollTo(0,0);
                this.$store.commit('reset')
            },
            changeSrc(event) {
               this.src = event.target.src;
               this.$store.commit('modalShowHide');
            },
        }
    }
        


</script>

<style scoped>

    .embed-container { 
        position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; 
    } 
                            
    .embed-container iframe, .embed-container object, .embed-container embed { 
        position: absolute; top: 0; left: 0; width: 100%; height: 100%; 
    }

    .content {
        background-color: black;   
        background-image: url('/fundo.png');
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        min-height: 100vh;
    }

    .filme {
        margin-top: 8vw;
    }

    .filme__img {
        width: 100%;
    }

    .filme__title {
        font-size: 26px;
        color: white;
        font-weight: 600;
        margin-bottom: 1vw;
        letter-spacing: 2px;
        text-align: center;
    }

    .filme__subtitle {
        font-size: 16px;
        color: #b2b2b2;
        font-weight: 400;
        margin-bottom: 2vw;
        letter-spacing: 2px;
        text-align: center;
    }

    .info {
        margin-top: 4vw;
        margin-bottom: 4vw;
    }

    .section {
        margin-top: 4vw;
        list-style: none;
        padding-left: 0;
    }

    .premios, .festivais {
        list-style: square;
    }

    .title {
        font-size: 24px;
        color: white;
        font-weight: 600;
        letter-spacing: 2px;
        margin-bottom: 2vw;
    }

    .item {
        font-size: 16px;
        color: white;
        font-weight: 400;
        text-align: justify;
        margin-bottom: 1vw;
    }

    .galeria {
        margin-top: 2vw;
        margin-bottom: 8vw;

    }

    .galeria__button {
        color: none;
        background: none;
        border: none;
        padding: 0;
    }

    .galeria__button:hover {
        border: none;
        outline: none;
    }

    .galeria__img {
        width: 100%;
        object-fit: cover;
        margin-bottom: 2vw;
        cursor: pointer;
    }

    #sinopse {
        width: 50%;
    }

    @media only screen and (max-width: 767px) {
        .filme {
            margin-top:20vw;
            padding-left: 5vw;
            padding-right: 5vw;
        }

        #video {
            margin-bottom: 20vw;
        }

        #sinopse {
            width: 100%;
        }

        .filme__title {
            margin-bottom: 5vw;
        }

        .filme__subtitle {
            margin-bottom: 10vw;
        }

        .galeria {
            padding-left: 5vw;
            padding-right: 5vw;
            margin-bottom: 30vw;
        }

        .info {
            padding-left: 5vw;
            padding-right: 5vw;
            margin-bottom: 20vw;
        }

        .section {
            margin-top: 20vw;
        }

        .title {
            margin-bottom: 6vw;
        }

        .item {
            margin-bottom: 3vw;
        }
    }

    @media only screen and (min-width: 1600px) {

        .filme__title {
            font-size: 36px;
        }

        .title {
            font-size: 28px;
        }

        .item {
            font-size: 20px;
        }

        #sinopse {
            font-size: 20px;
        }

    }

</style>