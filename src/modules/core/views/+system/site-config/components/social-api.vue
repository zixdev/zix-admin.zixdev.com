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
              input.form-control(type='text', v-model='config.title', required='', minlength='3', maxlength='255')
              span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
          .hr-line-dashed

        .col-md-12
          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.app_secret') }} :
            .col-sm-9
              input.form-control(type='email', v-model='config.email', required='', minlength='3', maxlength='255')
              span.help-block.m-b-none.text-danger(v-if="getError('email')") {{ getError('email') }}
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
            errors: {}
        },
        socials: [
          {
            id: 'facebook',
            name: 'Facebook'
          },
          {
            id: 'twitter',
            name: 'Twitter'
          },
          {
            id: 'google',
            name: 'Google Plus'
          },
          {
            id: 'github',
            name: 'Github'
          },
        ]
      }
    }
    save() {
      this.form.submitting = true;

    }

    getError(name) {

    }
  }
</script>
