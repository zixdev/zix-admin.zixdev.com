<template lang="jade">

	div(v-show='show', v-bind:class="{\
		'alert':		true,\
		'alert-success':(type == 'success'),\
		'alert-warning':(type == 'warning'),\
		'alert-info':	(type == 'info'),\
		'alert-danger':	(type == 'danger'),\
		'top': 			(placement === 'top'),\
		'top-right': 	(placement === 'top-right')\
		}", transition='fade', v-bind:style='{width:width}', role='alert')
		button.close(v-show='dismissable', type='button', @click='show = false')
			span ×
		slot


</template>

<script type="text/babel">
  import Component from "vue-class-component";

  @Component({
    props: {
        type: {
            type: String,
            default: 'info'
        },
        dismissable: {
            type: Boolean,
            default: false
        },

        duration: {
            default: 0
        },
        width: {
            type: String
        },
        placement: {
            type: String
        }
    }

  })
  export default class Alert {
    data() {
      return {
        show: true
      }
    }
    mounted() {
      if (this.duration != 0) {
          setTimeout(() => {
              this.show = false
          }, this.duration)
      }
    }

  }
</script>

<style scooped>
  .fade-transition {
      transition: opacity .3s ease;
  }

  .fade-enter,
  .fade-leave {
      height: 0;
      opacity: 0;
  }

  .alert.top {
      position: fixed;
      top: 30px;
      margin: 0 auto;
      left: 0;
      right: 0;
      z-index: 1050;
  }

  .alert.top-right {
      position: fixed;
      top: 30px;
      right: 50px;
      z-index: 1050;
  }
</style>
