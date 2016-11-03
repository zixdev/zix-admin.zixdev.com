<template>
    <div>
        <p>{{ $t("pages.index") }}</p>
        <a @click="change()">Change</a>
    </div>
</template>
<script>
    import Component from 'vue-class-component'
    import Vue from "vue";

    @Component
    export default class Home {
        created() {

        }

        change() {
            Vue.config.lang = 'ar';
        }
    }

</script>
