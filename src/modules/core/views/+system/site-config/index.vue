<template lang="jade">
  .col-lg-12
    .ibox
      .ibox-content
        tabs
          tab(header='<i class="fa fa-book"></i> General', :active='true')
            general
          tab(header='<i class="fa fa-lock"></i> Security')
            security
          tab(header='<i class="fa fa-search"></i> Search Engine Optimization')
            div
            | Search Engine Optimization
          tab(header='<i class="fa fa-envelope"></i> Email Settings')
            email-settings
          tab(header='<i class="fa fa-share-alt"></i> Social API')
            social-api
          tab(header='<i class="fa fa-key"></i> Maintenance')
            maintenance

</template>

<script>
    import Component from 'vue-class-component'
    import General from './components/general'
    import Security from './components/security'
    import EmailSettings from './components/email-settings'
    import SocialApi from './components/social-api'
    import Maintenance from './components/maintenance'

    @Component({
      components: {
        General, Security, EmailSettings, SocialApi, Maintenance
      }
    })
    export default class Index {
        data() {
            return {
                site_config: []
            };
        }
        created() {
            // this.$http.get(this.$store.state.config.api_url + 'sites/' + this.$route.params.id + '/config')
            //     .then(response => {
            //         console.log(response)
            //         this.site_config = response.data.data;
            //     });
        }

        config(name) {
            return this.site_config.filter(config => {
                return config.key == name;
            });
        }
    }
</script>
