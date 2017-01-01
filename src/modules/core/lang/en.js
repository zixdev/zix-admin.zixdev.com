export default {
    layout: ' ',
    dashboard: 'Dashboard',
    search: {
        index: 'Search',
        main: 'Search for something...'
    },
    lang: 'Language',
    auth: {
        login: 'Login',
        logout: 'Logout',
        email: 'Email',
        password: 'Password'
    },
    pages: {
        index: 'Pages',
        index_title: 'All Available Pages ',
        all: 'All Pages',
        add: 'Add Pages',
        edit: 'Edit Page',
        view: 'View Page',
        delete: 'Delete Page'
    },
    accounts: {
        index: 'Accounts',
        users: {
            index: 'Users',
            index_title: 'All Registered Accounts',
            add: 'Add New User',
            edit: 'Edit User Account',
            view: 'View User Info',
            delete: 'Delete User Account',
        },
        roles: {
            index: 'Roles'
        }
    },
    system: {
        index: 'System',
        sites: {
            index: 'Sites',
            index_title: 'All Available Websites',
            all: 'All Sites',
            add: 'Add Sites',
            edit: 'Edit Site',
            view: 'View Site',
            delete: 'Delete Site',
            ui: {
                index: 'Site Ui',
                index_title: 'All Installed UI\'s',
                add: 'Add Site Ui',
                add_title: 'Add To {site} New Ui'
            },
            config: {
                index: 'Site Config'
            }
        },
        forms: {
            index: 'Forms',
            index_title: 'All Available Forms',
            all: 'All Forms',
            add: 'Add Forms',
            edit: 'Edit Form',
            view: 'View Form',
            delete: 'Form Site',
            fields: {
                index: 'Manage Form Fields'
            }
        },
    },

    forms: {
        index: 'Forms',
        view: 'View Form Responses'
    },

    table: {
        id: 'Id',
        name: 'Name',
        title: 'Title',
        slug: 'Slug',
        ui: 'Ui',
        url: 'Url',
        content: 'Content',
        sites: 'Sites',
        version: 'Version',
        status: 'Status',
        code_size: 'Code Size',
        assets_size: 'Assets Size',
        created_at: 'Created At',
        updated_at: 'Updated At',
        username: 'Username',
        email: 'Email',
        password: 'Password',
        password_confirmation: 'Password Confirmation',
        submit_text: 'Submit Text',
        no_data: 'No Data Found',
        viewed: 'Viewed',
        responded: 'Responded',
        identifier: 'Identifier',
        __actions: ' ',
        notification: {
            type: {
                delete: 'warning',
                restore: 'success',
                'force-delete': 'error'
            },
            title: {
                delete: 'Success',
                restore: 'Info',
                'force-delete': 'Warning'
            },
            message: {
                delete: 'Your Data Was Successfully Removed',
                restore: 'Your Data Was Successfully Restored',
                'force-delete': 'Your Data Was Permanently Removed'
            }
        }
    },
    form: {
        edit: 'Edit',
        create: 'Create',
        updated: 'Update',
        cancel: 'Cancel'
    }
};
