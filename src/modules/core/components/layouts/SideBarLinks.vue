<template lang="jade">

li(:class="{'active': show}")
	a(@click="toggleShow", v-if='route.children && route.children.length')
		i(:class="'fa ' + route.icon")
		span.nav-label  {{$t(route.name)}}
		span.fa.arrow
	router-link(:to='link(route)', v-else)
		i(:class="'fa ' + route.icon")
		span.nav-label {{$t(route.name)}}
	ul.nav.nav-second-level(v-if='route.children && route.children.length', :class='classes')
		router-link(v-for='child of route.children', tag='li', :to='link(child)')
			router-link(:to='link(child)')
				| {{$t(child.name)}}


</template>
<script type="text/babel">
  import Component from "vue-class-component";

  @Component({
    props: {
      route: {
        type: Object,
      }
    }
  })
  export default class SideBarLinks {
    data() {
      return {
				show: false,
				hide: true,
				collapsing: false
      }
    }

    get classes() {
      return {
				'collapse': this.hide,
        'collapse in':this.show,
				'collapsing': this.collapsing,
      }
    }

		link(route) {
				return route.children ? '' : {name: route.name, activeClass: 'active'} ;
		}

    toggleShow() {
      this.hide = ! this.hide;

			this.collapsing = true;
			setTimeout(() => {
				this.collapsing = false;
				this.show = ! this.show;
			}, 300)
    }
  }
</script>
