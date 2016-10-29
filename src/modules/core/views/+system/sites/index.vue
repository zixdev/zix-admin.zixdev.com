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
            this.$on('edit-table', (data) => {
                console.info('==>', data);
            });
        }

        get url() {
            return this.$store.state.config.api_url + 'sites';
        }

        get columns() {
            return [
                {
                    id: 'id',
                    name: 'Id',
                    trClass: '',
                    style: '',
                    filtrable: true
//                    callback: (data) =>  data
                },
                {
                    id: 'name',
                    name: 'Name',
                    trClass: '',
                    style: '',
                    filtrable: true
//                    callback: (data) => data
                },
                {
                    id: 'url',
                    name: 'Url',
                    trClass: '',
                    style: '',
                    filtrable: true
//                    callback: (data) => console.log(data)
                },
                {
                    id: '__actions',
                    name: 'Actions',
                    actions: [
                        {
                            id: 'edit-table',
                            name: '',
                            icon: 'fa fa-edit',
                            btnClass: 'btn btn-sm btn-success',
                        }
                    ]
                }
            ]
        }





    }
</script>
<style>

</style>
