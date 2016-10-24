// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve)

export default [
    {
        name: 'Dashboard',
        path: '/',
        meta: {
            icon: 'fa-tachometer'
        },
        component: lazyLoading('home', true)
    },

    {
        name: 'Admin Login',
        path: '/auth/login',
        meta: {
            icon: 'fa-tachometer'
        },
        component: lazyLoading('+auth/login')
    },

    {
        name: 'Admin Logout',
        path: '/auth/logout',
        meta: {
            icon: 'fa-tachometer'
        },
        component: lazyLoading('+auth/logout')
    },


];
