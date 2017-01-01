<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
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

<script type="text/babel">
    import Component from 'vue-class-component'
    import DataTable from '../../components/table/data-table.vue'

    @Component({
        components: {
            DataTable
        }
    })
    export default class Index {

        TableEdit(data) {
            console.log(data)
            this.$router.push({name: 'forms.response', params: {slug: this.$route.params.slug, id: data.id}});
        }
        TableView(data) {
            window.open(data.url)
        }

        get url() {
            return this.$store.state.config.api_url + 'forms/' + this.$route.params.slug + '/responses';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    filterable: true,
                },
                {
                    id: 'identifier',
                    filterable: true
                },
                {
                    id: 'viewed',
                    filterable: true,
                    callback: (data) => data.viewed ? '<i class="fa fa-eye text-success"></i> viewed' : '<i class="fa fa-eye text-danger"></i> not viewed'
                },
                {
                    id: 'responded',
                    filterable: true,
                    callback: (data) => data.responded ? '<i class="fa fa-edit text-success"></i> replied' : '<i class="fa fa-edit text-danger"></i> not replied'
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
                            title: this.$t('pages.edit'),
                            icon: 'fa fa-edit',
                            btnClass: 'btn-success',
                        },
                        {
                            id: 'table-view',
                            title: this.$t('pages.view'),
                            icon: 'fa fa-eye',
                            btnClass: 'btn-warning',
                        }
                    ]
                }
            ]
        }
    }
</script>
