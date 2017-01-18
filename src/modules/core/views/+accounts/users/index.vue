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
    export default class Index {

        mounted() {
            let self = this;
            $('.table')
                .DataTable({
                    processing: true,
                    serverSide: true,
                    ajax: self.$store.state.config.api_url + 'users',
                    columns: [
                        {data: 'id'},
                        {data: 'username'},
                        {data: 'email'},
                        {data: 'created_at'},
                        {
                            render: (e, v, data) => {
                                return `
                                    <a data-href="${data.id}" title="${self.$t('accounts.users.edit')}" class="edit btn btn-success">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a data-href="${data.id}" title="${self.$t('accounts.users.delete')}" class="remove btn btn-danger">
                                        <i class="fa fa-remove"></i>
                                    </a>
                                `;
                            }
                        }

                    ],

                }) // Edit record
                .on('click', 'a.edit', function (e) {
                    e.preventDefault();
                    self.$router.push({name: 'accounts.users.edit', params: {id: $(this).data('href')}});
                }) // Delete a record
                .on('click', 'a.remove', function (e) {
                    e.preventDefault();
                    self.$router.push({name: 'accounts.users.edit', params: {id: $(this).data('href')}});
                });

        }
    }
</script>
