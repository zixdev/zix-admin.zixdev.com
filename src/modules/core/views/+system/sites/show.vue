<template>
    <div>
        <vuetable
            api-url="http://example.app:8000/api/users"
            table-wrapper="#content"
            :fields="columns"
            :item-actions="itemActions"
        ></vuetable>
    </div>
</template>

<script>
    import Component from 'vue-class-component'

    @Component
    export default class Name {
        get columns() {
            return [
                'name',
                'nickname',
                'email',
                'birthdate',
                'gender',
                '__actions'
            ];
        }
        get itemActions() {
            return [
                { name: 'view-item', label: '', icon: 'zoom icon', class: 'ui teal button' },
                { name: 'edit-item', label: '', icon: 'edit icon', class: 'ui orange button'},
                { name: 'delete-item', label: '', icon: 'delete icon', class: 'ui red button' }
            ];
        }
        created() {
            console.info('show.vue Been Created')
        }
    }
</script>
<style>

</style>
