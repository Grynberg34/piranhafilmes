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
import Desenvolvimento from './components/Desenvolvimento.vue';
import FilmeDes from './components/FilmeDes.vue';
import Institucionais from './components/Institucionais.vue';
import Institucional from './components/Institucional.vue';
import Videoclipes from './components/Videoclipes.vue';
import Videoclipe from './components/Videoclipe.vue';
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
  { path: "/desenvolvimento", name:'desenvolvimento', component: Desenvolvimento },
  { path: "/desenvolvimento/:id", name:'filme-des', component: FilmeDes },
  { path: "/institucionais", name:'institucionais', component: Institucionais },
  { path: "/institucionais/:id", name:'institucional', component: Institucional },
  { path: "/videoclipes", name:'videoclipes', component: Videoclipes },
  { path: "/videoclipes/:id", name:'videoclipe', component: Videoclipe },
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
