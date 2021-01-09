import vue from 'vue';
import router from './route.js'
require('./bootstrap');
import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store'
import App from './App.vue'

require('./store/subscriber');

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuex)


window.Vue = require('vue');

store.dispatch('auth/attempt',localStorage.getItem('token')).then(() => {
    const app = new Vue({
        el: '#app',
        router,
        store,
        components:{ App}});
});


