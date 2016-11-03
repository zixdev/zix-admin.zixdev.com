<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5> {{ $t('system.sites.index_title') }}</h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'system.sites.add'}" class="btn btn-success">
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
    import DataTable from '../../../components/table/data-table.vue'

    @Component({
        components: {
            DataTable
        }
    })
    export default class Index {

        TableEdit(data) {
            this.$router.push({name: 'system.sites.edit', params: {id: data.id}});
        }
        TableView(data) {
            window.open(data.url)
        }
        TableDelete(data) {

        }
        TableUiView(data) {
            this.$router.push({name: 'system.sites.ui.index', params: {id: data.id}});
        }
        TableConfig(data) {
            this.$router.push({name: 'system.sites.config.index', params: {id: data.id}});
        }

        get url() {
            return this.$store.state.config.api_url + 'sites';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    filterable: true,
                },
                {
                    id: 'name',
                    filterable: true
                },
                {
                    id: 'ui',
                    filterable: true,
                    callback: (data) => `<a href="javascript:void(0);">@${data.ui}</a>`,
                    event: 'table-ui-view'
                },
                {
                    id: 'url',
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
                            id: 'table-config',
                            title: this.$t('system.sites.config.index'),
                            icon: 'fa fa-cog',
                            btnClass: 'btn-default',
                        },
                        {
                            id: 'table-edit',
                            title: this.$t('system.sites.edit'),
                            icon: 'fa fa-edit',
                            btnClass: 'btn-success',
                        },
                        {
                            id: 'table-view',
                            title: this.$t('system.sites.view'),
                            icon: 'fa fa-eye',
                            btnClass: 'btn-warning',
                        },
                        {
                            id: 'table-delete',
                            title: this.$t('system.sites.delete'),
                            icon: 'fa fa-trash',
                            btnClass: 'btn-danger',
                        }
                    ]
                }
            ]
        }
    }
</script>
