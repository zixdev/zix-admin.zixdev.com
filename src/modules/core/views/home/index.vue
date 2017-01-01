<template lang="jade">
    .row
        .col-md-12
            collapse(text="Test")
              li
                a hoho
              li
                a haha



</template>
<script type="text/babel">
    import Component from 'vue-class-component'
    import Vue from "vue";


    @Component
    export default class Home {
        data() {
          return {
            showAlert: true
          }
        }
        created() {


        }

        get home() {
            return 'hello world';
        }

        change() {
            Vue.config.lang = 'ar';
        }
    }

</script>
