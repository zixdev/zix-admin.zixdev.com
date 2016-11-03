import Vue from 'vue';
import Component from "vue-class-component";
@Component({
    template: `
        <div class="row border-bottom">
            <nav class="navbar navbar-static-top white-bg" role="navigation" style="margin-bottom: 0">
                <div class="navbar-header">
                    <a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="javascript:void(0);"><i class="fa fa-bars"></i> </a>
                    <form role="search" class="navbar-form-custom" method="post" action="#">
                        <div class="form-group">
                            <input type="text" :placeholder="$t('search.main')" class="form-control" name="top-search" id="top-search">
                        </div>
                    </form>
                </div>
                <ul class="nav navbar-top-links navbar-right">
                    <li class="dropdown">
                        <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#" aria-expanded="false">
                            {{ $t('lang') }}
                        </a>
                        <ul class="dropdown-menu dropdown-messages">
                            <li>
                                <a @click="changeLang('en')">English</a>
                            </li>
                            <li>
                                <a @click="changeLang('fr')">French</a>
                            </li>
                            <li>
                                <a @click="changeLang('ar')">Arabic</a>
                            </li>        
                        </ul>
                    </li>
                    <li>
                        <router-link :to="{name: 'auth.logout'}"><i class="fa fa-sign-out"></i> {{$t('auth.logout')}}</router-link>
                    </li>
               
                </ul>
    
            </nav>
        </div>
    `
})
export default class AppHeader {
    changeLang(lang) {
        $('#wrapper').fadeOut();
        setTimeout(() => {
            Vue.config.lang = lang;
            $('#wrapper').fadeIn();
        }, 500);
    }
}

