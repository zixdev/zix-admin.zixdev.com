<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>{{ $t('system.sites.ui.index_title') }} </h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'system.sites.ui.add', params: {id: $route.params.id}}" class="btn btn-success">
                        <i class="fa fa-plus"></i>
                    </router-link>
                </div>
            </div>

            <div class="ibox-content">
                <data-table
                    :url="url"
                    :columns="columns"
                ></data-table>
            </div>
        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component'
    import DataTable from '../../../components/table/data-table.vue'

    @Component({
        components: {
            DataTable
        }
    })
    export default class Index {
        get url() {
            return this.$store.state.config.api_url + 'sites/'+this.$route.params.id+'/ui';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    filterable: true,
                },
                {
                    id: 'version',
                    filterable: true
                },
                {
                    id: 'status',
                    callback: (data) => data.status ? '<i class="fa fa-circle text-success"></i> active' : '<i class="fa fa-circle text-danger"></i> disabled'
                },
                {
                    id: 'code_size',
                    filterable: true
                },
                {
                    id: 'assets_size',
                    filterable: true
                },
                {
                    id: 'created_at',
                    filterable: true
                }
            ]
        }
    }
</script>
<style>

</style>
