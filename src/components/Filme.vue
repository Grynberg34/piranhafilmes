<template>
    <div class="content">

        <div class="container-fluid">
            <div class="row">
                <div class="col-md-3">
                    <MenuDesktop/>
                </div>

                <div class="col-md-1"></div>

                <div class="col-md-3">
                    
                    <div class="filme">
                        <h1 class="filme__title">{{filme[0].name}}</h1>
                        <h2 class="filme__subtitle">{{filme[0].ano}} | {{filme[0].duração}}' | {{filme[0].classificação}}</h2>
                        <img :src="filme[0].poster" class="filme__img">
                    </div>

                </div>

                <div class="col-md-1"></div>

                <div class="col-md-3">

                    <div class="info">
                        <h3 class="title">Sinopse</h3>
                        <p class="item">{{filme[0].sinopse}}</p>

                        <ul class="section">
                            <h3 class="title">Ficha técnica</h3>
                            <li class="item" v-for="(item,key) in filme[0].ficha" v-bind:key="key"><b>{{key}}:</b> {{item}}</li>
                        </ul>
                    </div>


                </div>



            </div>

        </div>

    </div>
</template>

<script>
  import MenuDesktop from './MenuDesktop.vue';
  import json from '../assets/filmes.json'


    export default {
        name:'Filme',
        components: {
            MenuDesktop,
        },
        created(){
            this.getFilme();
            this.redirect();

        },
        mounted() {
            this.getColor();
        },
        data(){
            return {
                filmes: json,
                filme: Object,
                color: String
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
            }

        }
    }
        


</script>

<style scoped>

    .content {
        background-color: black;   
        min-height: 100vh; 
    }

    .filme {
        margin-top: 8vw;
    }

    .filme__img {
        width: 100%;
    }


    .filme__title {
        font-size: 30px;
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
        margin-top: 16vw;
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



    @media only screen and (max-width: 767px) {
        

    }

</style>