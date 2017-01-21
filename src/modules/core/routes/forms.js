import Vue from "vue";
import store from "../../../store";
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);

const FormRoutes = [
    {
        path: '/forms',
        name: 'forms.index',
        meta: {
            icon: 'fa-pencil-square-o',
            menu: true,
            auth: false,
            permission: 'view_forms'
        },
        component: lazyLoading('+forms', true),
        children: []
    },
    {
        path: '/forms/:id',
        name: 'forms.view',
        meta: {
            auth: false,
            permission: 'view_forms'
        },
        component: lazyLoading('+forms', true),
    }
];

Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
Vue.http.get(store.state.config.api_url + 'forms').then(response => {
    response.data.data.map(form => {
        FormRoutes[0].children.push({
            path: '/forms/'+ form.slug,
            name: form.title,
            meta: {
                menu: true,
                auth: true,
                permission: 'view_forms'
            },
            component: lazyLoading('+forms', true)
        });
    });
});
//     .then(res => {
//     FormRoutes.map(routes => {
//         store.state.menu.push(routes)
//     });
//     $('#side-menu').metisMenu();
// });

export default FormRoutes;
