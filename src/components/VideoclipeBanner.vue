<template>
    <router-link class="link" :to="{ name: 'videoclipe', params: {id: uri}}">
        <div class="outro">
            <h2 class="outro__title">{{name}} <span class="outro__ano">| {{ano}} | {{artista}} </span></h2>
            <div class="outro__box">
                <img class="outro__img" v-bind:src="img" alt="">
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['name', 'img', 'ano', 'status', 'tipo', 'artista', 'uri'],
}
</script>


<style scoped>
    .outro {
        margin-top: 4vw;
        cursor: pointer;
        width: 60%;
        height: 100%;
        max-height: 100%;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }

    .outro__title {
        font-size: 20px;
        font-weight: 400;
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 0.2vw;
    }

    .outro__ano {
        color: #b8b8b8;
    }

    .outro__box {
        max-width: 100%;
        max-height: 100%;
        overflow: hidden;

    }

    .outro__img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        overflow: hidden;
        transition: all 4s ease-in-out;
    }

    .outro__img:hover {
        transform: scale(1.25);
    }
    

    .outro__status {
        display: inline-block;
        width: 12px;
        margin-bottom: 3px;
    }

    .link {
        text-decoration: none;
    }

    @media only screen and (max-width: 767px) {

        .outro {
            width: 90%;
            margin-bottom: 14vw;
        }

        .outro_box {
            max-width: unset;
        }

        .outro__img:hover {
            transform: none;
        }

        .outro__title {
            font-size: 16px;
        }
    }

</style>