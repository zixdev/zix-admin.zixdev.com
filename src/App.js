import Component from "vue-class-component";
import AppFooter from "./components/layouts/AppFooter";
import AppSidebar from "./components/layouts/AppSidebar";
import AppHeader from "./components/layouts/AppHeader";

@Component({
    template: `
        <div id="wrapper" >
            <app-sidebar v-show="authorized"></app-sidebar>
            <div v-bind:class="{'page-wrapper gray-bg': authorized}">
                <app-header  v-show="authorized"></app-header>
    
                <div v-bind:class="{'row wrapper wrapper-content': authorized, 'zix-background': !authorized}">
                    <router-view></router-view>
                </div>
                
                <app-footer  v-show="authorized"></app-footer>
            </div>
    
        </div>
    `,
    components: {
        AppFooter, AppSidebar, AppHeader
    },
    style: require('./styles/app.scss'),


})
export default class App {
    get authorized() {
        return this.$store.state.authorized;
    }

    created() {
        this.checkForAuthenticatedUser();

    }

    checkForAuthenticatedUser() {
        const token = localStorage.getItem('token');
        // If we have a token, consider the user to be signed in.
        if (token) {
            this.$http.get('http://localhost:8000/api/user')
                .then(
                    // res => console.info(res),
                )
                .catch(
                    // err => console.warn(err)
                );
            return this.$store.state.authorized = true;
        }
        return this.$store.state.authorized = false;
    }

}
