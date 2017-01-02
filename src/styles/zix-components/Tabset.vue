<template lang="jade">
  div
    ul.nav.nav-tabs(role='tablist')
      li(v-for='tab of tabs', :class="{'active': tab.show}")
        a(@click='change(tab)') {{ tab.header }}
    div.tab-content(ref='tabContent')
      slot
</template>

<script type="text/babel">
  import Component from 'vue-class-component'

  @Component
  export default class TabSet {
    data() {
      return {
        tabs: []
      }
    }

    change(tab) {
      this.tabs.map($tab => {
        $tab.show = false;
      });
      tab.show = true;
    }

  }
</script>
