// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        path: '/pages',
        name: 'Pages',
        meta: {
            icon: 'fa-file-text-o',
            menu: true,
            auth: false,
        },
        component: lazyLoading('+pages', true),
        children: [
            /*
             * Pages Routes
             */
            {
                path: '/pages/',
                name: 'All Pages',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+pages/all')
            },
            {
                path: '/pages/add',
                name: 'Add New',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+pages/create')
            },

            {
                path: '/pages/:id/edit',
                name: 'Page Edit',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+pages/create')
            }
        ]
    },

];
