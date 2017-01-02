<template lang="jade">
    form.form-horizontal(@submit.prevent='save')
      .row
        .col-md-12
          h3 SEO Config
          .hr-line-dashed
        .col-md-6
          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.tagline') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.site_tagline', required='', minlength='3', maxlength='255')
          .hr-line-dashed

          .form-group
            label.col-sm-3.control-label
              | {{ $t('config.keywords') }} :
            .col-sm-9
              input.form-control(type='text', v-model='config.site_keywords', required='', minlength='3', maxlength='255')
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
  export default class SEO {
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
