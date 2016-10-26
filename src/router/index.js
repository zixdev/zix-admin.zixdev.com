import Vue from "vue";
import Router from "vue-router";
import menu from "./menu";
Vue.use(Router);
export default new Router({
    // mode: 'hash', // Demo is living in GitHub.io, so required!
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
