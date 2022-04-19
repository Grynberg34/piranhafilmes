<template>
    <div class="content">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <MenuDesktop/>
                </div>

                <div class="col-md-1"></div>

                <div class="col-md-6">
                    
                    <div class="outro">
                        <h1 class="outro__title">{{outro[0].name}}</h1>
                        <h2 class="outro__subtitle">{{outro[0].ano}} | {{outro[0].tipo}}</h2>
                        <div class="" id="video">
                            <div v-if="outro[0].link" class='embed-container'><iframe :src="outro[0].link" frameborder='0' allowfullscreen></iframe></div>
                        </div>
                    </div>

                    <div class="info">

                        <ul class="section">
                            <h3 class="title">Ficha técnica</h3>
                            <li class="item" v-for="(item,key) in outro[0].ficha" v-bind:key="key"><b>{{key}}:</b> {{item}}</li>
                        </ul>



                        <div class="section" v-if="outro[0].temporadas">
                            <h3 class="title">Temporadas</h3>
                            <ul v-for="temporada in outro[0].temporadas" v-bind:key="temporada.Número" class="section">
                                <li class="item" v-for="(item,key) in temporada" v-bind:key="key"><b>{{key}}:</b> {{item}}</li>
                            </ul>
                        </div>

                    </div>

                    <div class="galeria">
                        <h3 class="title">Galeria</h3>
                        <div class="row">
                            <div v-for="(item) in outro[0].galeria" v-bind:key="item" class="col-4">
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
  import json from '../assets/outros.json'


    export default {
        name:'Outro',
        components: {
            MenuDesktop,
            Modal
        },
        created(){
            this.getoutro();
            this.redirect();

        },
        mounted() {
            this.getColor();
            this.scrollToTop();
        },
        data(){
            return {
                outros: json,
                outro: Object,
                color: String,
                src: ''
            }
        },
        computed: {
            outroUri () {
                return this.$route.params.id
            }
        },
        methods: {
            getoutro() {
                this.outro = this.outros.filter(i => {
                    return i.uri == this.outroUri
                })
            },
            redirect() {
                if (this.outro.length < 1) {
                    this.$router.push('/outros')
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

    .outro {
        margin-top: 8vw;
    }

    .outro__img {
        width: 100%;
    }

    .outro__title {
        font-size: 26px;
        color: white;
        font-weight: 600;
        margin-bottom: 1vw;
        letter-spacing: 2px;
        text-align: center;
    }

    .outro__subtitle {
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
        .outro {
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

        .outro__title {
            margin-bottom: 5vw;
        }

        .outro__subtitle {
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

        .outro__title {
            font-size: 36px;
        }

    }

</style>