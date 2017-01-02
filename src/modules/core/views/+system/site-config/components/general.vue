<template lang="jade">
    form.form-horizontal(@submit.prevent='save')
      .row
        .col-md-12
          h3 Basic Comapny Information
          .hr-line-dashed
        .col-md-6
          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.title') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.title', required='', minlength='3', maxlength='255')
              span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.tagline') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.tagline', required='', minlength='3', maxlength='255')
              span.help-block.m-b-none.text-danger(v-if="getError('tagline')") {{ getError('tagline') }}
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.keywords') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.keywords', required='', minlength='3', maxlength='255')
              span.help-block.m-b-none.text-danger(v-if="getError('keywords')") {{ getError('keywords') }}
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.description') }} :
            .col-sm-9
              textarea.form-control(v-model='config.description', required='', rows="6")
              span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
          .hr-line-dashed

        .col-md-6

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.email') }} :
            .col-sm-9
              input.form-control(type='email', v-model='config.email', required='', minlength='3', maxlength='255')
              span.help-block.m-b-none.text-danger(v-if="getError('email')") {{ getError('email') }}
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.phone') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.phone', required='', minlength='3', maxlength='255')
              span.help-block.m-b-none.text-danger(v-if="getError('phone')") {{ getError('phone') }}
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.fix') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.fix', required='', minlength='3', maxlength='255')
              span.help-block.m-b-none.text-danger(v-if="getError('fix')") {{ getError('fix') }}
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.address') }} :
            .col-sm-9
              textarea.form-control(v-model='config.address', required='', rows="6")
              span.help-block.m-b-none.text-danger(v-if="getError('address')") {{ getError('address') }}
          .hr-line-dashed

        .col-md-12
        router-link.btn.btn-white(:to="{name: 'pages.all'}") {{ $t('form.cancel') }}
        button.btn.btn-primary(:disabled='form.submitting', type='submit')
          i.fa.fa-spinner.fa-pulse(v-if='form.submitting')
          span {{ $t('form.save') }}


</template>

<script type="text/babel">
  import Component from 'vue-class-component'

  @Component
  export default class General {
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
