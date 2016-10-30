<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>
                    <i class="fa fa-pencil"></i>
                    Add To '{{ site.name }}' New UI
                </h5>

            </div>

            <div class="ibox-content">
                <div v-if="form.errors && form.errors.ui" class="alert alert-danger">
                    {{form.errors.ui}}
                </div>
                <form class="dropzone">
                    <div class="fallback">
                        <input name="file" type="file" multiple/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component';
    import Dropzone from 'dropzone';

    @Component
    export default class Create {
        data() {
            return {
                site: {},
                form: {},
                dropZone: {}
            };
        }
        created() {
            this.$http.get(this.$store.state.config.api_url + 'sites/' + this.$route.params.id)
                    .then(response => {
                        this.site = response.data.data;
                        this.setUpDropZone();
                    });
        }

        setUpDropZone() {
            this.dropZone = new Dropzone('form.dropzone', {
                url:  this.$store.state.config.api_url + 'sites/' + this.$route.params.id + '/ui',
                dictDefaultMessage: "<strong class='text-center'>Drop your UI zip file here. </strong>",
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
                paramName: "ui", // The name that will be used to transfer the file
                maxFilesize: 100, // MB,

                success: () => {
                    this.$router.push({name: 'Site UI', params: {id: this.site.id}});
                },

                error: (item, err) => {
                    console.log(err);
                    this.form.errors = err;
                }
            });
        }
    }

</script>
<style>

</style>
