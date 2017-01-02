<template lang="jade">
form.form-horizontal(@submit.prevent='save')
  .row
    .col-md-12
      h1 Email Sender
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.name') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.title', required='', minlength='3', maxlength='255')
          span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.email') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.title', required='', minlength='3', maxlength='255')
          span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
      .hr-line-dashed

    .col-md-12
      h1 Driver :
        small.text-uppercase ({{ config.mail.type }})
      .hr-line-dashed
    .col-md-6.col-md-offset-3
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.email_system') }}
        .col-sm-9
          select.form-control(type='text',required='', v-model='config.mail.type')
            option(value='smtp') SMTP
            option(value='mail') MAIL
            option(value='sendmail') SENDMAIL
            option(value='mailgun') MAILGUN
            option(value='mandrill') MANDRILL
            option(value='sparkpost') SPARKPOST
            option(value='ses') SES
          span.help-block.m-b-none.text-danger(v-if="getError('title')") {{ getError('title') }}
      .hr-line-dashed
  .row(v-if='config.mail.type == "smtp"')
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.smtp.host') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.smtp', required='', minlength='3', maxlength='255')
          span.help-block.m-b-none.text-danger(v-if="getError('smtp')") {{ getError('smtp') }}
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.smtp.port') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.smtp', required='', minlength='3', maxlength='255')
          span.help-block.m-b-none.text-danger(v-if="getError('smtp')") {{ getError('smtp') }}
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.smtp.username') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.smtp', required='', minlength='3', maxlength='255')
          span.help-block.m-b-none.text-danger(v-if="getError('smtp')") {{ getError('smtp') }}
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.smtp.password') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.smtp', required='', minlength='3', maxlength='255')
          span.help-block.m-b-none.text-danger(v-if="getError('smtp')") {{ getError('smtp') }}
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
  export default class EmailSettings {
    data() {
      return {
        config: {
          mail: {
            type: 'smtp'
          }
        },
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
