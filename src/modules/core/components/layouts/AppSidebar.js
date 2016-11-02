import Component from "vue-class-component";
import routes from "../../../../router/menu";

@Component({
    template: `
        <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="profile-element">
                        <a href="javascript:void(0);">
                        <span class="clear">
                            <span class="block m-t-xs">
                                <strong class="font-bold">
                                    Badi Ifaoui
                                </strong>
                            </span>
                            <span class="text-muted text-xs block">
                                CEO Founder
                            </span>
                        </span>
                        </a>

                    </div>
                    <div class="logo-element">
                        Zix+
                    </div>
                </li>
                
                <li v-for="route of routes">
                    <router-link :to="link(route)">
                         <i :class="'fa ' + route.icon"></i> 
                        <span class="nav-label"> {{route.name}} </span>
                        <span v-if="route.children" class="fa arrow"></span>
                    </router-link>
                   
                    <ul v-if="route.children" class="nav nav-second-level collapse">

                        <router-link v-for="child of route.children" tag="li" :to="link(child)">
                            <router-link :to="link(child)">
                                 {{child.name}} 
                            </router-link>
                        </router-link>

                    </ul>
                </li>
                    
            </ul>

        </div>
    </nav>
  `
})
export default class AppSidebar {


    link(route) {
        return route.children ? '' : {name: route.name, activeClass: 'active'} ;
    }

    get routes() {
        return routes.filter(route => route.meta.menu).map(route => {
            return {
                path: route.path,
                name: route.name,
                permission: route.meta.permission,
                icon: route.meta.icon,
                children: route.children ? route.children.filter(route => route.meta.menu).map(route => {
                    return {
                        path: route.path,
                        name: route.name,
                        permission: route.meta.permission,
                        icon: route.meta.icon
                    }
                }) : null
            }
        });
    }

}
