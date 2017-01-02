<template lang="jade">
form.form-horizontal(@submit.prevent='save')
  .row
    .col-md-6(v-for='social of socials')
      h1.text-center
        small {{ social.name }} :
      .row
        .col-md-12
          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.app_id') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config[social.id + "_clientId"]', minlength='3', maxlength='255')
          .hr-line-dashed

        .col-md-12
          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.app_secret') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config[social.id + "_clientSecret"]', minlength='3', maxlength='255')
          .hr-line-dashed


  .row
    .col-md-12
      router-link.btn.btn-white(:to="{name: 'pages.all'}") {{ $t('form.cancel') }}
      button.btn.btn-primary(:disabled='form.submitting', type='submit')
        i.fa.fa-spinner.fa-pulse(v-if='form.submitting')
        span {{ $t('form.save') }}


</template>

<script>
  import Component from 'vue-class-component'

  @Component
  export default class SocialApi {
    data() {
      return {
        config: {},
        form: {
            submitting: false
        },
        socials: [
          {
            id: 'services_facebook',
            name: 'Facebook'
          },
          {
            id: 'services_twitter',
            name: 'Twitter'
          },
          {
            id: 'services_google',
            name: 'Google Plus'
          },
          {
            id: 'services_github',
            name: 'Github'
          },
        ]
      }
    }
    save() {
      this.form.submitting = true;

      this.$http.post(this.$store.state.config.api_url + 'sites/' + this.$route.params.id + '/config', this.config)
        .then(res => {
          this.form.submitting = false;
          this.$events.$emit('notify', {
              type: 'info',
              title: this.$t('config.site_config'),
              message: this.$t('config.config_success')
          })
        })
    }

    mounted() {
      this.$events.$on('update-config', conf => this.config = conf)
    }
  }
</script>
