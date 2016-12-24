// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

export default [
    {
        path: '/system',
        name: 'system.index',
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
                name: 'system.sites.index',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+system/sites', true)
            },
            {
                path: '/system/sites/add',
                name: 'system.sites.add',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/sites/create')
            },
            {
                path: '/system/sites/:id/edit',
                name: 'system.sites.edit',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/sites/create')
            },

            /*
             * Site Ui Routers.
             */
            {
                path: '/system/sites/:id/ui',
                name: 'system.sites.ui.index',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/site-ui', true)
            },
            {
                path: '/system/sites/:id/ui/add',
                name: 'system.sites.ui.add',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/site-ui/create')
            },

            /*
             * Site Config Routers.
             */
            {
                path: '/system/sites/:id/config',
                name: 'system.sites.config.index',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/site-config', true)
            },

            /*
             * System Forms
             */
            {
                path: '/system/forms/',
                name: 'system.forms.index',
                meta: {
                    menu: true,
                    auth: true,
                },
                component: lazyLoading('+system/forms', true)
            },
            {
                path: '/system/forms/add',
                name: 'system.forms.add',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/forms/create')
            },

            {
                path: '/system/forms/:id/edit',
                name: 'system.forms.edit',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/forms/create')
            },
            {
                path: '/system/:slug/fields',
                name: 'system.forms.fields.index',
                meta: {
                    auth: true,
                },
                component: lazyLoading('+system/forms/fields')
            },
        ]
    },

];
