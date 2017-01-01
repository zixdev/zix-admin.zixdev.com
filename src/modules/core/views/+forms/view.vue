<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5> Response to {{response.identifier}}</h5>
            </div>
            <div class="ibox-content">
                <ul class="">
                    <li v-for="field in form.fields">
                        <strong>{{ field.label }} :</strong>
                        {{ getFieldValue(field.id) }}
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'

    @Component
    export default class ViewResponse {
        data() {
            return {
                form: {},
                response: {}
            }
        }

        getFieldValue(id) {
            let val = this.response.fields.filter(filed => {
                return filed.form_field_id == id;
            })[0];
            return (val && val.value) ? val.value : 'N/A' ;
        }

        mounted() {
            this.$http.get(this.$store.state.config.api_url + 'forms/' + this.$route.params.slug + '/responses/'+this.$route.params.id)
                .then(response => {
                    this.form = response.data.data.form;
                    this.response = response.data.data.response;
                });
        }
    }
</script>
<style lang="scss" rel="stylesheet/scss">

</style>
