<template>
    <div>
        Welcome Too Simples Home
    </div>
</template>
<script>
    import Component from 'vue-class-component'

    @Component
    export default class Home {
        created() {
            this.$Progress.start()
        }
    }

</script>
