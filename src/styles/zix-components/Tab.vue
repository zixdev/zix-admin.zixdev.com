<template lang="jade">
  div.tab-pane(:class="{'active': show}")
    slot
</template>

<script type="text/babel">
  import Component from 'vue-class-component'

  @Component({
    props: {
      header: {
        type: String,
        default: 'Tab'
      },
      active: {
        default: false
      }
    }
  })
  export default class Tab {
    data() {
      return {
        show: false
      }
    }

    mounted() {
      if(this.active) this.show = true;
      this.$parent.tabs.push(this)
    }

  }
</script>

<style scooped>
  .tab-pane {
    padding-top: 15px;
  }
</style>
