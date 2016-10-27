<template>
    <div class="col-lg-12" >
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>All Available Websites </h5>
                <div class="ibox-tools">
                    <router-link :to="{name: 'Site Add'}" class="btn btn-success" >
                        <i class="fa fa-plus"></i>
                    </router-link>
                    <button class="btn btn-danger" type="button">
                        <i class="fa fa-trash-o"></i>
                    </button>
                </div>
            </div>

            <div class="ibox-content">
                <div class="table-responsive">

                    <table class="table table-striped">
                        <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name </th>
                            <th>Url </th>
                            <th>Ui</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr v-for="site of sites">
                            <th scope="row">{{site.id}}</th>
                            <td>{{site.name}}</td>
                            <td>{{site.url}}</td>
                            <td>
                                <router-link :to="{name: 'Site Edit', params: {id: site.id}}"  title="View Site Versions">
                                    {{site.ui}}
                                </router-link>
                            </td>
                            <td v-if="site.status">
                                <i class="fa fa-circle text-success"></i>
                                active
                            </td>
                            <td v-if="!site.status">
                                <i class="fa fa-circle text-danger"></i>
                                disabled
                            </td>
                            <td>
                                <router-link :to="{name: 'Site Edit', params: {id: site.id}}" title="Edit Site Details" class="btn btn-outline btn-info">
                                    <i class="fa fa-pencil"></i>
                                </router-link>
                                <a :href="site.url"  target="_blank" title="View Site" class="btn btn-outline btn-warning">
                                    <i class="fa fa-eye"></i>
                                </a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component'

    @Component
    export default class Index {
        data() {
            return {
                sites: {}
            }
        }
        created() {
            this.$http.get(this.$store.state.config.api_url + 'sites')
                .then(
                    response => this.sites = response.data.data
                )
        }
    }
</script>
