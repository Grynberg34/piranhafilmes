<template>

    <div>
        <h1 class="title">{{name}}</h1>
        <p class="text">{{text}}</p>
    </div>

</template>

<script>
export default {
    props: ['name', 'text'],
}
</script>


<style scoped>

    .title {
        font-size: 34px;
        font-weight: 400;
        text-align: center;
        margin-top: 4vw;
        margin-bottom: 2vw;
        color: white;
        text-transform: uppercase;
        letter-spacing: 2px;
    }

    .text {
        font-size: 20px;
        color: white;
        text-align: justify;
        white-space: pre-wrap;
    }


    @media only screen and (max-width: 767px) {

        .title {
            font-size: 28px;
            margin-top: 20vw;
            margin-bottom: 10vw;
        }

    }

</style>