<script>
    import Component from 'vue-class-component'
    @Component({
        template: `
             <transition mode="out-in"
                     enter-active-class="zoomIn"
                     leave-active-class="zoomOut"
                     appear
            >
                <router-view class="animated"></router-view>
            </transition>
        `
    })
    export default class Index {}
</script>
