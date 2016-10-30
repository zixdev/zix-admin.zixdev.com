<template>
    <div>
        all.vue works
    </div>
</template>

<script>
    import Component from 'vue-class-component'

    @Component
    export default class All {
        created() {
            console.info('all.vue Been Created')
        }
    }
</script>
<style>

</style>
