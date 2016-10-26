import Vue from 'vue'
import Router from 'vue-router'
import CoreRoutes from '../modules/core/routes'
Vue.use(Router);

export default new Router({
    // mode: 'hash', // Demo is living in GitHub.io, so required!
    // linkActiveClass: 'is-active',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [

        ...CoreRoutes,

        {
            path: '*',
            redirect: '/'
        }
    ]
})

