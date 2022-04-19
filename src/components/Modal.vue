<template>
    <b-modal size="xl" id="my-modal" v-model="modalState" @hide="changeModal()">
        <img id="modal-img" :src="src" alt="">
    </b-modal>
</template>

<script>
export default {
    props: ['src'],
    computed: {
        modalState: {
            get()
            {
                return this.$store.getters['getModal'];
            },
            set()
            {
               
            }
        }
    },
    methods: {
        changeModal() {
            this.$store.commit('modalShowHide');
        }
    }
 
    
}
</script>

<style>

    #modal-img {
        width: 100%;
    }

    .modal-header {
        border: none;
    }

    .modal-content {
        background: none;
        border: none;
    }

    .modal-footer {
        display: none !important;
    }

    .close {
        border: none;
        background: none;
        font-size: 40px;
        color: white;
        font-weight: 800;
    }

    @media only screen and (max-width: 767px) {
        .modal-content {
            margin-top: 30vw;
        }
    }

    @media only screen and (min-width: 1600px) {

        .modal-content {
            margin-top: 5vw;
        }

    }

    @media only screen and (min-width: 1900px) {

        .modal-content {
            margin-top: 5vw;
        }

    }

</style>
