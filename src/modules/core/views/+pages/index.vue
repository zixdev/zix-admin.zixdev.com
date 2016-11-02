<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>All Available Pages </h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'Add Page'}" class="btn btn-success">
                        <i class="fa fa-plus"></i>
                    </router-link>
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
                    @table-config="TableConfig"
                ></data-table>

            </div>
        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component'
    import DataTable from '../../components/table/data-table.vue'

    @Component({
        components: {
            DataTable
        }
    })
    export default class Index {

        TableEdit(data) {
            this.$router.push({name: 'Add Page', params: {id: data.id}});
        }
        TableView(data) {
            window.open(data.url)
        }
        TableDelete(data) {

        }
        TableUiView(data) {
            this.$router.push({name: 'Site UI', params: {id: data.id}});
        }
        TableConfig(data) {
            this.$router.push({name: 'Site Config', params: {id: data.id}});
        }

        get url() {
            return this.$store.state.config.api_url + 'pages';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    name: 'Id',
                    filterable: true,
                },
                {
                    id: 'title',
                    name: 'Title',
                    filterable: true
                },
                {
                    id: 'slug',
                    name: 'Slug',
                    filterable: true,
                },

                {
                    id: '__actions',
                    name: '',
                    actions: [
                        {
                            id: 'table-edit',
                            title: 'Edit Page',
                            icon: 'fa fa-edit',
                            btnClass: 'btn-success',
                        },
                        {
                            id: 'table-view',
                            title: 'View Page',
                            icon: 'fa fa-eye',
                            btnClass: 'btn-warning',
                        },
                        {
                            id: 'table-delete',
                            title: 'Delete Page',
                            icon: 'fa fa-trash',
                            btnClass: 'btn-danger',
                        }
                    ]
                }
            ]
        }
    }
</script>
