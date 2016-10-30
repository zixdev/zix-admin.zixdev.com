<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>All Available Websites </h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'Site Add'}" class="btn btn-success">
                        <i class="fa fa-plus"></i>
                    </router-link>
                    <!--<button class="btn btn-danger" type="button">-->
                        <!--<i class="fa fa-trash-o"></i>-->
                    <!--</button>-->
                </div>
            </div>

            <div class="ibox-content">

                <data-table
                    :url="url"
                    :columns="columns"
                    @table-view="TableView"
                    @table-edit="TableEdit"
                    @table-delete="TableDelete"
                    @table-ui-view="TableUiView"
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
            this.$store.state.$route = {name: 'badi'};
        }

        TableEdit(data) {
            this.$router.push({name: 'Site Edit', params: {id: data.id}});
        }
        TableView(data) {
            window.open(data.url)
        }
        TableDelete(data) {

        }
        TableUiView(data) {
            this.$router.push({name: 'Site UI', params: {id: data.id}});
        }

        get url() {
            return this.$store.state.config.api_url + 'sites';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    name: 'Id',
                    filterable: true,
                },
                {
                    id: 'name',
                    name: 'Name',
                    filterable: true
                },
                {
                    id: 'ui',
                    name: 'UI',
                    filterable: true,
                    callback: (data) => `<a href="javascript:void(0);">@${data.ui}</a>`,
                    event: 'table-ui-view'
                },
                {
                    id: 'url',
                    name: 'Url',
                    trClass: 'hidden-sm',
                    style: '',
                    filterable: true,
                    callback: (data) => data.url.substring(0, 30) +((data.url.length > 30) ? '...' : '')
                },
                {
                    id: '__actions',
                    name: '',
                    actions: [
                        {
                            id: 'table-view',
                            name: '',
                            title: 'View Site',
                            icon: 'fa fa-eye',
                            btnClass: 'btn-warning',
                        },
                        {
                            id: 'table-edit',
                            name: '',
                            title: 'Edit Site',
                            icon: 'fa fa-edit',
                            btnClass: 'btn-success',
                        },
                        {
                            id: 'table-delete',
                            name: '',
                            title: 'Delete Site',
                            icon: 'fa fa-trash',
                            btnClass: 'btn-danger',
                        }
                    ]
                }
            ]
        }





    }
</script>
<style>

</style>
