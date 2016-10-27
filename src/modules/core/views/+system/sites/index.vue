<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>All Available Websites </h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'Site Add'}" class="btn btn-success">
                        <i class="fa fa-plus"></i>
                    </router-link>
                    <button class="btn btn-danger" type="button">
                        <i class="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>

            <div class="ibox-content">
                <div class="table-responsive">

                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component'
    import Vuetable from "vuetable-2/src/components/Vuetable.vue";
    import VuetablePagination from "vuetable-2/src/components/VuetablePagination.vue";
    import VuetablePaginationDropdown from "vuetable-2/src/components/VuetablePaginationDropdown.vue";
    import VuetablePaginationInfo from "vuetable-2/src/components/VuetablePaginationInfo.vue";

    @Component
    export default class Index {




    }
</script>
<style>

</style>
