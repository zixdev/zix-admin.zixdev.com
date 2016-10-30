<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>All Installed UI's </h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'Site UI Add', params: {id: $route.params.id}}" class="btn btn-success">
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
        created() {

        }


        get url() {
            return this.$store.state.config.api_url + 'sites/'+this.$route.params.id+'/ui';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    name: 'Id',
                    filterable: true,
                },
                {
                    id: 'version',
                    name: 'Version',
                    filterable: true
                },
                {
                    id: 'status',
                    name: 'Status',
                    callback: (data) => data.status ? '<i class="fa fa-circle text-success"></i> active' : '<i class="fa fa-circle text-danger"></i> disabled'
                },
                {
                    id: 'code_size',
                    name: 'Code Size',
                    filterable: true
                },
                {
                    id: 'assets_size',
                    name: 'Assets Size',
                    filterable: true
                },
                {
                    id: 'created_at',
                    name: 'Create Date',
                    filterable: true
                }
            ]
        }
    }
</script>
<style>

</style>
