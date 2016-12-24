<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>{{$t('system.forms.index_title')}}</h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'system.forms.add'}" class="btn btn-success">
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
                    @table-fields="TableFields"
                ></data-table>

            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'
    import DataTable from '../../../components/table/data-table.vue'

    @Component({
        components: {
            DataTable
        }
    })
    export default class Index {

        TableEdit(data) {
            this.$router.push({name: 'system.forms.edit', params: {id: data.id}});
        }
        TableView(data) {
            window.open(data.url)
        }
        TableFields(data) {
            this.$router.push({name: 'system.forms.fields.index', params: {slug: data.slug}});
        }

        get url() {
            return this.$store.state.config.api_url + 'forms';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    filterable: true,
                },
                {
                    id: 'title',
                    filterable: true
                },
                {
                    id: 'slug',
                    filterable: true,
                },

                {
                    id: '__actions',
                    actions: [
                        {
                            id: 'table-fields',
                            title: this.$t('system.forms.fields.index'),
                            icon: 'fa fa-cog',
                            btnClass: 'btn-default',
                        },
                        {
                            id: 'table-edit',
                            title: this.$t('system.forms.edit'),
                            icon: 'fa fa-edit',
                            btnClass: 'btn-success',
                        },
                        {
                            id: 'table-view',
                            title: this.$t('system.forms.view'),
                            icon: 'fa fa-eye',
                            btnClass: 'btn-warning',
                        }
                    ]
                }
            ]
        }
    }
</script>
