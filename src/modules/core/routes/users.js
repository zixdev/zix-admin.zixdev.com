// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        path: '/accounts',
        name: 'Accounts',
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
                name: 'Users',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+pages/all')
            },
            {
                path: '/accounts/add',
                name: 'Add New Account',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+pages/all')
            },


            {
                path: '/accounts/roles',
                name: 'Roles',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+pages/create')
            }
        ]
    },

];
