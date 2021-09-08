<template>
    <div class="filme">
        <h2 class="filme__title">{{name}} <span class="filme__ano">{{ano}}</span> <img class="filme__status" v-bind:src="status" alt=""></h2>
        <img class="filme__img" v-bind:src="img" alt="">
    </div>
</template>

<script>
export default {
    props: ['name', 'img', 'ano', 'status'],
}
</script>


<style scoped>
    .filme {
        margin-top: 4vw;
        cursor: pointer;
        width: 60%;
        margin-left: auto;
        margin-right: auto;
    }

    .filme__title {
        font-size: 16px;
        font-weight: 400;
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 0.2vw;
    }

    .filme__ano {
        color: #b8b8b8;
    }

    .filme__img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }

    .filme__status {
        display: inline-block;
        width: 3%;
        margin-bottom: 0.3vw;
    }

</style>