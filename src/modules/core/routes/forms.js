import Vue from "vue";
const lazyLoading = (name, index = false) => resolve => require([`../views/${name}${index ? '/index' : ''}.vue`], resolve);
let ZixForms = [];
let forms = [
    {
        id: 2,
        name: 'Contact Us',
        slug: 'contact-us'
    },
    {
        id: 3,
        name: 'Request Loan',
        slug: 'request-loan'
    }
];
Vue.http.get('http://localhost:8000/api/forms').then(response => {
    response.data.data.map(form => {
        console.info(form)
        ZixForms.push({
            path: '/forms/' + form.slug,
            name: form.title,
            meta: {
                menu: true,
                auth: true,
            },
            component: lazyLoading('+forms', true)

        });
    });
});
// forms.map(form => {
//     ZixForms.push({
//         path: '/forms/' + form.slug,
//         name: form.name,
//         meta: {
//             menu: true,
//             auth: true,
//         },
//         component: lazyLoading('+forms', true)
//
//     });
// });


export default [
    {
        path: '/forms',
        name: 'forms.index',
        meta: {
            icon: 'fa-pencil-square-o',
            menu: true,
            auth: false,
        },
        component: lazyLoading('+forms', true),
        children: ZixForms
    }
]
