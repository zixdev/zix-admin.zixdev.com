<template lang="jade">
form.form-horizontal(@submit.prevent='save')
  .row
    .col-md-12
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.enabled') }} :
        .col-sm-9
          input(type='checkbox', v-model='config.title')
          span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
      .hr-line-dashed
    .col-md-12
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.maintenance_type') }} :
        .col-sm-9
          select.form-control()
            option(value='0') Completely Down
            option(value='1') Maintenance in Progress Banner Only

          span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
      .hr-line-dashed
    .col-md-12
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.maintenance_message') }} :
        .col-sm-9
          textarea.form-control(rows='6')
          span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
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
  export default class Maintenance {
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
