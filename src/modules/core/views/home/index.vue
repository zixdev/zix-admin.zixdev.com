<template lang="jade">
    .row
        .col-md-12
            alert(type='success', dismissable='')
                | hoho

            alert(type='danger') {{ home }}
                


</template>
<script type="text/babel">
    import Component from 'vue-class-component'
    import Vue from "vue";
    import { alert } from 'vue-strap';

    @Component({
        components: {
            alert
        }
    })
    export default class Home {
        created() {
            console.log()
            console.info('hoho')


        }

        get home() {
            return 'hello world';
        }

        change() {
            Vue.config.lang = 'ar';
        }
    }

</script>
