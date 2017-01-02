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
          input.form-control(type='text', v-model='config.mail_from_name', minlength='3', maxlength='255')
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.email') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.mail_from_address', minlength='3', maxlength='255')
      .hr-line-dashed

    .col-md-12
      h1 Driver
        small.text-uppercase ({{ config.mail_driver }})
      .hr-line-dashed
    .col-md-6.col-md-offset-3
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.mail_system') }}
        .col-sm-9
          select.form-control(type='text', v-model='config.mail_driver')
            option(value='smtp') SMTP
            option(value='mail') MAIL
            option(value='sendmail') SENDMAIL
            option(value='mailgun') MAILGUN
            option(value='mandrill') MANDRILL
            option(value='sparkpost') SPARKPOST
            option(value='ses') SES
      .hr-line-dashed
  .row(v-if='config.mail_driver == "smtp"')
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.smtp.host') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.mail_host', minlength='3', maxlength='255')
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.smtp.port') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.mail_port', minlength='3', maxlength='255')
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label(:title="$t('config.email')")
          | {{ $t('config.smtp.username') }} :
        .col-sm-9
          input.form-control(type='text', v-model='config.mail_username', :title="$t('config.email')", minlength='3', maxlength='255')
      .hr-line-dashed
    .col-md-6
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.smtp.password') }} :
        .col-sm-9
          input.form-control(type='password', v-model='config.mail_password', minlength='3', maxlength='255')
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
        config: {},
        form: {
            submitting: false
        },
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
