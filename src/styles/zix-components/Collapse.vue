<template lang="jade">

li

	a(@click="toggleShow")
		slot(name='toggler')
			| {{ text }}
			span.caret
	ul.nav.nav-second-level(:class="classes")
		slot


</template>
<script type="text/babel">
  import Component from "vue-class-component";
  import $node from './utils/NodeList.js'

  @Component({
    props: {
      text: {
        type: String,
        default: 'Collapse'
      }
    }
  })
  export default class Collapse {
    data() {
      return {
        hide: true,
				show: false,
				collapsing: false
      }
    }

    get classes() {
      return {
				'collapse': this.hide,
        'collapse in':this.show,
				'collapsing': this.collapsing
      }
    }

    mounted() {
      // $node(this.$el)
      //   .onBlur(event => {
      //     this.show = false;
      //   })
      //   .findChildren('ul').on('click', 'li>a', e => { this.show = false })
			//
			//
      // document.body.onkeyup = event => {
      //     event.keyCode == 27 ? this.show = false : false;
      // };
    }

    toggleShow() {
      this.hide = ! this.hide;

			this.collapsing = true;
			setTimeout(() => {
				this.collapsing = false;
				this.show = ! this.hide;
			}, 300)
    }

    beforeDestroy() {
      this.show = false;
    }
  }
</script>
