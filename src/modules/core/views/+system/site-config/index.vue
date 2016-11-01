<template>
    <div class="col-lg-12">
        <div class="tabs-container">
            <ul class="nav nav-tabs">
                <li class="active">
                    <a data-toggle="tab" href="#tab-general" aria-expanded="true">
                        <i class="fa fa-laptop"></i>
                    </a>
                </li>
                <li class="">
                    <a data-toggle="tab" href="#tab-social" aria-expanded="false">
                        <i class="fa fa-connectdevelop"></i>
                    </a>
                </li>
            </ul>
            <div class="tab-content">
                <div id="tab-general" class="tab-pane active">
                    <div class="panel-body">
                        <strong>General</strong>


                    </div>
                </div>
                <div id="tab-social" class="tab-pane">
                    <div class="panel-body">
                        <strong>Social API Keys</strong>

                        <h2>Facebook Api</h2>
                        <hr>


                    </div>
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
                site_config: []
            };
        }
        created() {
            this.$http.get(this.$store.state.config.api_url + 'sites/' + this.$route.params.id + '/config')
                .then(response => {
                    console.log(response)
                    this.site_config = response.data.data;
                });
        }

        config(name) {
            return this.site_config.filter(config => {
                return config.key == name;
            });
        }
    }
</script>
