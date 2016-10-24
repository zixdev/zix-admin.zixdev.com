import Component from "vue-class-component";
import AppFooter from "./components/layouts/AppFooter";
import AppSidebar from "./components/layouts/AppSidebar";
import AppHeader from "./components/layouts/AppHeader";

@Component({
    template: `
        <div id="wrapper" >
            <app-sidebar></app-sidebar>
            <div class="page-wrapper gray-bg">
                <app-header></app-header>
    
                <div class="row wrapper wrapper-content zix-background">
                    <router-view></router-view>
                </div>
                
                <app-footer></app-footer>
            </div>
    
        </div>
    `,
    components: {
        AppFooter, AppSidebar, AppHeader
    },
    style: require('./styles/app.scss')
})
export default class App {

}
