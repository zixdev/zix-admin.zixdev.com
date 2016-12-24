<template>
    <div>
        index.vue works
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class Index {
        created() {
            console.info('index.vue Been Created')
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
