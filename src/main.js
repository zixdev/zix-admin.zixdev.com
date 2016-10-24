import Vue from "vue";
import Resource from "vue-resource";
import { sync } from 'vuex-router-sync'

import App from "./App";
import './plugins'
import router from './router'
import store from './store'

Vue.use(Resource)
// sync(store, router)

// const { state } = store
// const { config } = state

// router.beforeEach((route, redirect, next) => {
//     if (config.mobile && config.sidebar) {
//         config.sidebar = false
//     }
//     next()
// })

// Object.keys(filters).forEach(key => {
//     Vue.filter(key, filters[key])
// })

const app = new Vue({
    template: '<App/>',
    components: {App},
    router,
}).$mount('#app')
