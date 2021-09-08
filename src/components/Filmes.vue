<template>
    <div class="content">

        <div class="container-fluid">
            <div class="row">
                <div class="col-3">
                    <MenuDesktop/>
                </div>
                <div class="col-6">
                    
                    <div class=" filmes">

                        <h1 class="title">Filmes</h1>

                        <FilmeBanner img="/filmes/01.png" name="Alienígenas do Passado" ano="| inédito" status="/filmes/q1.png" />

                        <FilmeBanner img="/filmes/02.png" name="O Som dos Metais" ano="| 2020" status="/filmes/q3.png"  />

                        <FilmeBanner img="/filmes/03.png" name="Peixe" ano="| 2019" status="/filmes/q3.png"/>

                        <FilmeBanner img="/filmes/04.png" name="Salve Todos" ano="| 2018" status="/filmes/q3.png"  />

                    </div>


                </div>

                <div class="col-3">

                </div>
            </div>

        </div>

    </div>
</template>

<script>
  import FilmeBanner from './FilmeBanner.vue';
  import MenuDesktop from './MenuDesktop.vue';

    export default {
        name:'Filmes',
        components: {
            MenuDesktop,
            FilmeBanner
        }
    }
        


</script>

<style scoped>

    .content {
        min-height: 100vh;
        height: 100%;
        width: 100vw;
        background-color: black;    
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


</style>