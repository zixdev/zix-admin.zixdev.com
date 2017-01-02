<template lang="jade">
    form.form-horizontal(@submit.prevent='save')
      .row
        .col-md-12
          h3 Basic Information
          .hr-line-dashed
        .col-md-6
          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.site_title') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.app_name', minlength='3', maxlength='255')
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label(:title="$t('config.company_name')")
              | {{ $t('config.company') }}
            .col-sm-9
              input.form-control(type='text', v-model='config.company_name', minlength='3', maxlength='255')
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.keywords') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.site_keywords', minlength='3', maxlength='255')
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.description') }} :
            .col-sm-9
              textarea.form-control(v-model='config.site_description', rows="6")
          .hr-line-dashed

        .col-md-6

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.email') }} :
            .col-sm-9
              input.form-control(type='email', v-model='config.site_contact_email', minlength='3', maxlength='255')
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.phone') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.site_contact_phone', minlength='3', maxlength='255')
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.fix') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.site_contact_fix', minlength='3', maxlength='255')
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.address') }} :
            .col-sm-9
              textarea.form-control(v-model='config.site_contact_address', rows="6")
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
