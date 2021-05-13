import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue } from 'bootstrap-vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(Router);
Vue.use(Meta);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
