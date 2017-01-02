<template lang="jade">
form.form-horizontal(@submit.prevent='save')
  .row
    .col-md-12
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.enabled') }} :
        .col-sm-9
          input(type='checkbox', v-model='config.maintenance_active')
      .hr-line-dashed
    .col-md-12
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.debug_mode') }} :
        .col-sm-9
          input(type='checkbox', v-model='config.app_debug')

      .hr-line-dashed
    .col-md-12
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.maintenance_type') }} :
        .col-sm-9
          select.form-control()
            option(value='0') Completely Down
            option(value='1') Maintenance in Progress Banner Only

      .hr-line-dashed
    .col-md-12
      .form-group
        label.col-sm-3.control-label
          | {{ $t('config.maintenance_message') }} :
        .col-sm-9
          textarea.form-control(rows='6', v-model='config.maintenance_message')
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
