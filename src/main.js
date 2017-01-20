import Vue from "vue";
import "./plugins";
import App from "./App.vue";
import router from "./router";
import Guard from "./modules/core/guard";
import store from "./store";
import "./styles/zix-components";
import Tablage from './tablage';


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

$.ajaxPrefilter(function (options, originalOptions, jqXHR) {
    jqXHR.setRequestHeader('Authorization', 'Bearer ' + localStorage.getItem('token'));
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

window['$zexus'] = app;

window['DataTable'] = Tablage(app);
/*
 * App Permissions Middleware
 */
app.$router.beforeEach((route, redirect, next) => {
    if(!app.$store.state.auth_permissions.includes(route.meta.permission)){
        app.$events.$emit('notify', {
            type: 'warning',
            title: 'Warning !',
            message: 'Authorized Action'
        });
        next('/')
    }
    next()
});
