<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>{{$t('accounts.users.index_title')}}</h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'accounts.users.add'}" class="btn btn-success">
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
            this.$router.push({name: 'accounts.users.edit', params: {id: data.id}});
        }
        TableView(data) {
            window.open(data.url)
        }


        get url() {
            return this.$store.state.config.api_url + 'users';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    filterable: true,
                },
                {
                    id: 'username',
                    filterable: true
                },
                {
                    id: 'email',
                    filterable: true,
                },

                {
                    id: 'created_at',
                    filterable: true,
                },

                {
                    id: '__actions',
                    actions: [
                        {
                            id: 'table-edit',
                            title: this.$t('accounts.users.edit'),
                            icon: 'fa fa-edit',
                            btnClass: 'btn-success',
                        },
                        {
                            id: 'table-view',
                            title: this.$t('accounts.users.view'),
                            icon: 'fa fa-eye',
                            btnClass: 'btn-warning',
                        }
                    ]
                }
            ]
        }
    }
</script>
