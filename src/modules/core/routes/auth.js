// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        name: 'Dashboard',
        path: '/',
        meta: {
            menu: true,
            icon: 'fa-th-large',
            auth: true,
        },
        component: lazyLoading('home', true),
    },
    {
        name: 'Login',
        path: '/auth/login',
        meta: {
            icon: 'fa-tachometer',
            auth: false,
        },
        component: lazyLoading('+auth/login')
    },

    {
        name: 'Logout',
        path: '/auth/logout',
        meta: {
            icon: 'fa-tachometer',
            auth: true,
        },
        component: lazyLoading('+auth/logout')
    },
]
