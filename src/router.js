import Vue from 'vue'
import VueRouter from 'vue-router'

import Juego from './components/juego.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        /* { path: '/', component: Binding }, */
        { path: '/', redirect: '/juego' },
        { path: '/juego', component: Juego }
    ]
})