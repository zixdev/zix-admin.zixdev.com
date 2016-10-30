import Vue from "vue";
import Router from "vue-router";
import menu from "./menu";
Vue.use(Router);
export default new Router({
    mode: 'history', // 'hash'
    linkActiveClass: 'active',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [

        ...menu,

        {
            path: '*',
            redirect: '/'
        }
    ]
})
