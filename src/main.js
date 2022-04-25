import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import { BootstrapVue } from 'bootstrap-vue';
import Router from 'vue-router';
import Meta from 'vue-meta';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import Filmes from './components/Filmes.vue';
import Filme from './components/Filme.vue';
import Outros from './components/Outros.vue';
import Outro from './components/Outro.vue';
import Produtora from './components/Produtora.vue';
import Home from './components/Home.vue';
import { store } from './store';

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(Meta);
Vue.use(Vuex);
Vue.use(Router);

const routes = [
  { path: "/", name:'home', component: Home },
  { path: "/filmes", name:'filmes', component: Filmes },
  { path: "/filmes/:id", name:'filme', component: Filme },
  { path: "/outros", name:'outros', component: Outros },
  { path: "/outros/:id", name:'outro', component: Outro },
  { path: "/produtora", name:'produtora', component: Produtora },
];

const router = new Router({
  mode: 'history',
  routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
