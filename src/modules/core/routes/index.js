// show: meta.label -> name
// name: component name
// meta.label: display label

// lazy loading Components
// https://github.com/vuejs/vue-router/blob/dev/examples/lazy-loading/app.js#L8
const lazyLoading = (name, index = false) => () => System.import(`modules/core/views/${name}${index ? '/index' : ''}`)
import Home from '../views/home'

export default [
    {
        name: 'Dashboard',
        path: '/home',
        meta: {
            icon: 'fa-tachometer'
        },
        // component: Home
        component: lazyLoading('home', true)
    },
];
