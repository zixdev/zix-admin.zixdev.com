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
                component: lazyLoading('+accounts/users', true)
            },
            {
                path: '/accounts/add',
                name: 'accounts.users.add',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+accounts/users/create')
            },

            {
                path: '/accounts/:id/edit',
                name: 'accounts.users.edit',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+accounts/users/create')
            },


            {
                path: '/accounts/roles',
                name: 'accounts.roles.index',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+accounts/roles', true)
            },
            {
                path: '/accounts/roles/create',
                name: 'accounts.roles.create',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+accounts/roles/create')
            },
            {
                path: '/accounts/roles/:id/edit',
                name: 'accounts.roles.edit',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+accounts/roles/create')
            },
            {
                path: '/accounts/roles/:id/permissions',
                name: 'accounts.permissions.index',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+accounts/roles/permissions')
            },
        ]
    },

];
