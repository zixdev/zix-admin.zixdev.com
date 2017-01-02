<template lang="jade">
form.form-horizontal(@submit.prevent='save')
  .row
    .col-md-12
      h3 Captcha
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.public_key') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.captcha_public_key', required='', minlength='3', maxlength='255')
          span.help-block.m-b-none.text-danger(v-if="getError('captcha_public_key')") {{ getError('captcha_public_key') }}
      .hr-line-dashed
    .col-md-6

      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.private_key') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.captcha_private_key', required='', minlength='3', maxlength='255')
          span.help-block.m-b-none.text-danger(v-if="getError('captcha_private_key')") {{ getError('captcha_private_key') }}
      .hr-line-dashed

    .col-md-12
      router-link.btn.btn-white(:to="{name: 'pages.all'}") {{ $t('form.cancel') }}
      button.btn.btn-primary(:disabled='form.submitting', type='submit')
        i.fa.fa-spinner.fa-pulse(v-if='form.submitting')
        span {{ $t('form.save') }}


</template>

<script>
  import Component from 'vue-class-component'

  @Component
  export default class Security {
    data() {
      return {
        config: {},
        form: {
            errors: {}
        },
      }
    }
    save() {
      this.form.submitting = true;

    }

    getError(name) {

    }
  }
</script>
