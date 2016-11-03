import Vue from "vue";
import Router from "vue-router";
import menu from "./menu";
Vue.use(Router);
export default new Router({
    mode: 'history', // 'hash'
    linkActiveClass: 'active',
    // scrollBehavior: () => ({ y: 0 }),
    routes: [

        ...createRoutesFromMenu(menu),

        {
            path: '*',
            redirect: '/'
        }
    ]
})

function createRoutesFromMenu(routes) {
    let newRoutes = [];
    routes.filter(route => {
        return route.children;
    }).map(route => {
        return route.children;
    }).map(_routes => {
       _routes.map(item => {
           newRoutes.push(item);
       })
    });

    routes.filter(route => {
        return !route.children;
    }).map(route => {
        newRoutes.push(route);
    });

    return newRoutes;
}
