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
                <table class="table table-striped data-table">
                    <thead class="list_head">
                    <tr>
                        <th>Id</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component'

    @Component
    export default class IndexUsers {
        mounted() {
            let table = DataTable;
            table.url = this.$store.state.config.api_url + 'users';
            table.edit = 'accounts.users.edit';
            table.columns = [
                {data: 'id'},
                {data: 'username'},
                {data: 'email'},
                {data: 'created_at'},
            ];
            table.init();
        }
    }
</script>
