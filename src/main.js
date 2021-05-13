import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Filmes from './components/Filmes.vue';

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(Meta);
Vue.use(Vuex);
Vue.use(Router);

const routes = [
  { path: "/filmes", component: Filmes }
];

const router = new Router({
mode: 'history',
routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
