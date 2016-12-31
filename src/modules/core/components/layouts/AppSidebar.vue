<template lang="jade">
  nav.navbar-default.navbar-static-side(role='navigation')
    .sidebar-collapse
      ul#side-menu.nav.metismenu
        li.nav-header
          .profile-element
            a(href='javascript:void(0);')
              span.clear
                span.block.m-t-xs
                  strong.font-bold
                    | Badi Ifaoui
                span.text-muted.text-xs.block
                  | CEO Founder {{ routes.length}}
          .logo-element
            | Zix+
        li(v-for='route of routes')
          router-link(:to='link(route)')
            i(:class="'fa ' + route.icon")
            span.nav-label  {{$t(route.name)}}
            span.fa.arrow(v-if='route.children')
          ul.nav.nav-second-level.collapse(v-if='route.children')
            router-link(v-for='child of route.children', tag='li', :to='link(child)')
              router-link(:to='link(child)')
                | {{$t(child.name)}}

</template>

<script type="text/bable">
  import Component from "vue-class-component";
  import routes from "../../../../router/menu";

  @Component
  export default class AppSidebar {


      link(route) {
          return route.children ? '' : {name: route.name, activeClass: 'active'} ;
      }

      get routes() {
          return this.$store.state.menu.filter(route => route.meta.menu).map(route => {
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

</script>
