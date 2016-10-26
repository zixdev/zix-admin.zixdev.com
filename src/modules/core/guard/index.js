import Auth from './auth'
export default function (route, redirect, next) {

    if(route.meta.auth && !localStorage.getItem('token')) {
        // check for permission
        return next('/auth/login')
    }
    // get user data and store it.
}
