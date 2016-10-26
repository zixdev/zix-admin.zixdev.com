<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
    import Component from 'vue-class-component'

    @Component
    export default class Name {
        created() {
            console.info('index.vue Been Created')
        }
    }
</script>
<style>

</style>
