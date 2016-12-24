import store from '../store'
import CoreRoutes from '../modules/core/routes'

CoreRoutes.map(routes => {
   routes.map(route => {
       store.state.menu.push(route)
   })
});

export default store.state.menu;
