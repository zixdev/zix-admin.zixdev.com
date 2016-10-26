export default function (route, redirect, next) {
    // if requires auth
    if(route.meta.auth && !localStorage.getItem('token')) {
        // check for permission
        return next('/auth/login')
    }
    // if requires a guest
    if(!route.meta.auth) {
        return next('/');
    }
    // get user data and store it.
}
