<template>
    <router-link class="link" :to="{ name: 'filme-des', params: {id: uri}}">
        <div class="filme">
            <h2 class="filme__title">{{name}} <span class="filme__ano">| {{fase}} </span></h2>
            <div class="filme__box">
                <img class="filme__img" v-bind:src="img" alt="">
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: ['name', 'fase', 'img', 'uri'],
}
</script>


<style scoped>
    .filme {
        margin-top: 4vw;
        cursor: pointer;
        width: 60%;
        height: 100%;
        max-height: 100%;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
    }

    .filme__title {
        font-size: 20px;
        font-weight: 400;
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 0.2vw;
    }

    .filme__ano {
        color: #b8b8b8;
    }

    .filme__box {
        max-width: 100%;
        max-height: 100%;
        overflow: hidden;

    }

    .filme__img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
        overflow: hidden;
        transition: all 4s ease-in-out;
    }

    .filme__img:hover {
        transform: scale(1.25);
    }
    

    .filme__status {
        display: inline-block;
        width: 12px;
        margin-bottom: 3px;
    }

    .link {
        text-decoration: none;
    }

    @media only screen and (max-width: 767px) {

        .filme {
            width: 90%;
            margin-bottom: 14vw;
        }

        .filme_box {
            max-width: unset;
        }

        .filme__img:hover {
            transform: none;
        }

        .filme__title {
            font-size: 16px;
        }
    }

</style>