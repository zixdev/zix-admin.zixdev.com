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


export default FormRoutes;
