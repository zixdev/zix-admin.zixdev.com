import Vue from "vue";
import "./plugins";
import App from "./App.vue";
import router from "./router";
import Guard from "./modules/core/guard";
import store from './store';

// import zexus components
import "./styles/zix-components";


/**
 * We'll register a HTTP interceptor to attach the "XSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

Vue.http.interceptors.push(function (request, next) {
    // request.headers['X-XSRF-TOKEN'] = Cookies.get('XSRF-TOKEN');
    Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
    next();
});


router.beforeEach((route, redirect, next) => {
    store.commit('updateRouter', route);
    Guard(route, redirect, next);
    next()
});

const app = new Vue({
    template: '<App/>',
    components: {App},
    router,
    store
}).$mount('#app');
