// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        path: '/system',
        name: 'System',
        meta: {
            icon: 'fa-cog',
            menu: true,
            auth: false,
        },
        component: lazyLoading('+system', true),
        children: [
            /*
             * Systems Sites Routes
             */
            {
                path: '/system/sites',
                name: 'Sites',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+system/sites', true)
            },
            {
                path: '/system/sites/add',
                name: 'Site Add',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/sites/create')
            },
            {
                path: '/system/sites/:id',
                name: 'system_sites_show',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/sites/create')
            },
            {
                path: '/system/sites/:id/edit',
                name: 'Site Edit',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/sites/create')
            },
        ]
    },

];
