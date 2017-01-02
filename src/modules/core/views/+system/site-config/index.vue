<template lang="jade">
  .col-lg-12
    .ibox
      .ibox-content
        tabs
          tab(header='<i class="fa fa-book"></i> General', :active='true')
            general(:config.syc="config")
          tab(header='<i class="fa fa-lock"></i> Security')
            security
          tab(header='<i class="fa fa-search"></i> Search Engine Optimization')
            seo
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
    import Seo from './components/seo'

    @Component({
      components: {
        General, Security, EmailSettings, SocialApi, Maintenance, Seo
      }
    })
    export default class Index {
        data() {
            return {
                config: {}
            };
        }
        mounted() {
            this.$http.get(this.$store.state.config.api_url + 'sites/' + this.$route.params.id + '/config')
                .then(response => {
                    let data = response.data.data;
                    data.map(config => {
                      this.config[config.key] = config.value;
                    });
                    this.$events.$emit('update-config', this.config);
                });
        }
    }
</script>
