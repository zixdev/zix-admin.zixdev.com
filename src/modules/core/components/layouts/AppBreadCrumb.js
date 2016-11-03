import Component from "vue-class-component";

@Component({
    template: `
        <div class="row wrapper border-bottom white-bg page-heading">
            <div class="col-lg-10">
                <h2>
                    {{$t(router.name)}}
                </h2>
                <ol class="breadcrumb text-capitalize">
                    <li v-if="router.name != 'Dashboard'">
                        <router-link :to="{name: 'Dashboard'}">{{$t('dashboard')}}</router-link>
                    </li>
     
                    <li v-for="crumb in breadcrumbs">
                        <router-link :to="{name: crumb, params: router.params}">{{$t(crumb)}}</router-link>
                    </li>
                </ol>
            </div>
        </div>
    `
})
export default class AppBreadCrumb {
    created() {
        this.$watch('$route', () => {
            this.$Progress.start();
        })
    }

    get router() {
        return this.$store.state.$router;
    }

    get breadcrumbs() {
        return this.router.matched.map(route => {
            return route.name
        });
    }

}

