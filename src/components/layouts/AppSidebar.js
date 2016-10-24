import Component from 'vue-class-component'

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
                <li class="active">
                    <a routerLink="/">
                        <i class="fa fa-th-large"></i>
                        <span class="nav-label">
                        Dashboard
                    </span>
                    </a>
                </li>

                <li>
                    <a href="javascript:void(0);">
                        <i class="fa fa-cog"></i>
                        <span class="nav-label">
                        System
                    </span>
                        <span class="fa arrow"></span>
                    </a>
                    <ul class="nav nav-second-level collapse">

                        <li>
                            <a routerLink="/system/sites">
                                Websites
                            </a>
                        </li>

                    </ul>
                </li>
            </ul>

        </div>
    </nav>
  `
})
export default class AppSidebar {

    mounted() {

    }


}
