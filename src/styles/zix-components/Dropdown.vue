<template lang="jade">

li(:class="classes")
	slot(name='button')
		a.dropdown-toggle(role='button', @click="toggleShow")
			| {{ text }}
			span.caret
	slot(name='dropdown-menu')
		ul.dropdown-menu
			slot


</template>
<script type="text/babel">
  import Component from "vue-class-component";
  import $node from './utils/NodeList.js'

  @Component({
    props: {
      text: {
        type: String,
        default: 'Dropdown'
      }
    }
  })
  export default class Dropdown {
    data() {
      return {
        show: false
      }
    }

    get classes() {
      return {
        'open': this.show
      }
    }

    mounted() {
      $node(this.$el).onBlur(event => {
        this.show = false;
      })

      document.body.onkeyup = event => {
          event.keyCode == 27 ? this.show = false : false;
      };
    }

    toggleShow() {
      this.show = ! this.show;
    }

    beforeDestroy() {
      this.show = hide;
    }
  }
</script>
