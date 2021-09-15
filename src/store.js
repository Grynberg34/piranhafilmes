import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {

        modalShow: false

    },
    mutations: {
        reset(state) {
            state.modalShow = false
        },
        modalShowHide (state) {
            state.modalShow = !state.modalShow;
        },
    },
    getters: {
        getModal: state => {
          return state.modalShow
        },

    },

})