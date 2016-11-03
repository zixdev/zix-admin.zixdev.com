// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        path: '/accounts',
        name: 'accounts.index',
        meta: {
            icon: 'fa-user',
            menu: true,
            auth: false,
        },
        component: lazyLoading('+pages', true),
        children: [
            /*
             * Users Routes
             */
            {
                path: '/accounts/',
                name: 'accounts.users.index',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+pages/all')
            },
            {
                path: '/accounts/add',
                name: 'accounts.users.add',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+pages/all')
            },


            {
                path: '/accounts/roles',
                name: 'accounts.roles.index',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+pages/create')
            }
        ]
    },

];
