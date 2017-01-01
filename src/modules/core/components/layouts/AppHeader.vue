<template lang="jade">
  .row.border-bottom
    nav.navbar.navbar-static-top.white-bg(role='navigation', style='margin-bottom: 0')
      .navbar-header
        a.navbar-minimalize.minimalize-styl-2.btn.btn-primary(href='javascript:void(0);')
          i.fa.fa-bars
        form.navbar-form-custom(role='search', method='post', action='#')
          .form-group
            input#top-search.form-control(type='text', :placeholder="$t('search.main')", name='top-search')
      ul.nav.navbar-top-links.navbar-right
        dropdown(:text="$t('lang')")
          li
            a(@click="changeLang('en')") English
          li
            a(@click="changeLang('fr')") French
          li
            a(@click="changeLang('ar')") Arabic

        li
          router-link(:to="{name: 'auth.logout'}")
            i.fa.fa-sign-out
            |  {{$t('auth.logout')}}




</template>

<script type="text/bable">
    import Vue from 'vue';
    import Component from "vue-class-component";

    @Component
    export default class AppHeader {
        changeLang(lang) {
            $('#wrapper').fadeOut();
            setTimeout(() => {
                Vue.config.lang = lang;
                $('#wrapper').fadeIn();
            }, 500);
        }
    }

</script>
