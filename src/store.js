import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

        modalShow: false,
        activeBio: 1

    },
    mutations: {
        reset(state) {
            state.modalShow = false
        },
        modalShowHide (state) {
            state.modalShow = !state.modalShow;
        },
        setActiveBio(state, id) {
            state.activeBio = id
        }
    },
    getters: {
        getModal: state => {
          return state.modalShow
        },
        getActiveBio: state => {
            return state.activeBio
        },

    },

})