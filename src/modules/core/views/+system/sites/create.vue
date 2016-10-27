<template>
    <div>
        <vuetable v-ref:vuetable
                  api-url="http://vuetable.ratiw.net/api/users"
                  pagination-path=""
                  :fields="fields"
                  :sort-order="sortOrder"
                  :multi-sort="multiSort"
                  table-class="table table-bordered table-striped table-hover"
                  ascending-icon="glyphicon glyphicon-chevron-up"
                  descending-icon="glyphicon glyphicon-chevron-down"
                  pagination-class=""
                  pagination-info-class=""
                  pagination-component-class=""
                  :pagination-component="paginationComponent"
                  :item-actions="itemActions"
                  :append-params="moreParams"
                  :per-page="perPage"
                  wrapper-class="vuetable-wrapper"
                  table-wrapper=".vuetable-wrapper"
                  loading-class="loading"
                  detail-row-component="my-detail-row"
                  detail-row-id="id"
                  detail-row-transition="expand"
                  row-class-callback="rowClassCB"
        ></vuetable>
    </div>
</template>

<script>
    import Component from 'vue-class-component'

    @Component
    export default class Create {
        created() {
            console.info('create.vue Been Created')
        }
    }
</script>
<style>

</style>
