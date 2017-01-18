export default function (app) {
    return {
        columns: [],
        view: null,
        edit: null,
        delete: null,
        url: app.$store.state.config.api_url + 'users',
        eloquent: 'active',
        actions: '',
        init: function () {
            let self = this;
            this.columns.push({
                render: function (e, v, data) {
                    let actions = `<span data-href="${data.id}">${self.actions}</span>`;
                    if (self.edit) {
                        actions += `<a data-href="${data.id}" title="${self.edit}" class="edit btn btn-success"> <i class="fa fa-edit"></i></a>`;
                    }

                    if (self.view) {
                        actions += `<a data-href="${data.id}" title="${self.view}" class="view btn btn-info"> <i class="fa fa-eye"></i></a>`;
                    }

                    if (self.delete && data.deleted_at == null) {
                        actions += `<a data-href="${data.id}" title="${app.$t('accounts.users.delete')}" class="delete btn btn-danger"><i class="fa fa-trash"></i></a>`
                    }

                    if(data.deleted_at != null && self.eloquent == 'trashed') {
                        actions += `<a data-href="${data.id}" title="Remove Forever" class="force-delete btn btn-danger"> <i class="fa fa-eraser"></i></a>`;
                    }

                    if(data.deleted_at != null && self.eloquent == 'trashed') {
                        actions += `<a data-href="${data.id}" title="Restore" class="restore btn btn-info"> <i class="fa fa-refresh"></i></a>`;
                    }

                    return actions;
                }
            });
            let table = $('.table')
                .DataTable({
                    processing: true,
                    serverSide: true,
                    // ajax: ,
                    ajax: {
                        url: self.url,
                        data: function (d) {
                            d.eloquent = self.eloquent;
                        }
                    },
                    columns: self.columns,
                }) // View record
                .on('click', 'a.view', function (e) {
                    e.preventDefault();
                    console.log('view me')
                }) // Edit record
                .on('click', 'a.edit', function (e) {
                    e.preventDefault();
                    app.$router.push({name: self.edit, params: {id: $(this).data('href')}});
                }) // Delete a record
                .on('click', 'a.delete', function (e) {
                    e.preventDefault();
                    app.$http.delete(self.url + '/' + $(this).data('href') + '?action=delete');
                    table.ajax.reload();
                    app.$events.$emit('notify', {
                        type: app.$t('table.notification.type.delete'),
                        title: app.$t('table.notification.title.delete'),
                        message: app.$t('table.notification.message.delete')
                    });
                })
                .on('click', 'a.restore', function (e) {
                    e.preventDefault();
                    app.$http.delete(self.url + '/' + $(this).data('href') + '?action=restore');
                    table.ajax.reload();
                    app.$events.$emit('notify', {
                        type: app.$t('table.notification.type.restore'),
                        title: app.$t('table.notification.title.restore'),
                        message: app.$t('table.notification.message.restore')
                    });
                })
                .on('click', 'a.force-delete', function (e) {
                    e.preventDefault();
                    app.$http.delete(self.url + '/' + $(this).data('href') + '?action=force-delete');
                    table.ajax.reload();
                    app.$events.$emit('notify', {
                        type: app.$t('table.notification.type.force-delete'),
                        title: app.$t('table.notification.title.force-delete'),
                        message: app.$t('table.notification.message.force-delete')
                    });
                });
            $('.dataTables_length')
                .prepend(`
                <div data-toggle="buttons" class="btn-group">
                    <button class="btn btn-sm btn-white active"> All </button> 
                    <button class="btn btn-sm btn-white deleted"> Deleted </button>
                </div>
            `)
                .on('click', 'button.active', function () {
                    self.eloquent = 'active';
                    table.draw();
                })
                .on('click', 'button.deleted', function () {
                    self.eloquent = 'trashed';
                    table.draw();
                });

            return table;
        }
    }
}
