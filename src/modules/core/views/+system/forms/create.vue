<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>
                    <i class="fa fa-pencil"></i> {{ edit ? $t('system.forms.edit') : $t('system.forms.add') }}
                </h5>
            </div>

            <div class="ibox-content">
                <form class="form-horizontal" @submit.prevent="save()">
                    <div class="form-group">
                        <label class="col-sm-2 control-label">
                            {{ $t('table.title') }} :
                        </label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text"
                                   v-model="page.title"
                                   required
                                   minlength="3"
                                   maxlength="255"
                            >
                            <span v-if="form.errors && form.errors.title" class="help-block m-b-none text-danger">{{form.errors.title.toString()}}</span>
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label">
                            {{ $t('table.slug') }} :
                        </label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text"
                                   v-model="page.slug"
                                   required
                                   disabled
                                   minlength="3"
                                   maxlength="255"
                            >
                            <span v-if="form.errors && form.errors.slug" class="help-block m-b-none text-danger">{{form.errors.slug.toString()}}</span>
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label">
                            {{ $t('table.submit_text') }} :
                        </label>
                        <div class="col-sm-10">
                            <input class="form-control" type="text"
                                   v-model="page.submit_text"
                                   required
                                   minlength="3"
                                   maxlength="255"
                            >
                            <span v-if="form.errors && form.errors.submit_text" class="help-block m-b-none text-danger">{{form.errors.submit_text.toString()}}</span>
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>

                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-2">
                            <router-link :to="{name: 'system.forms.index'}" class="btn btn-white">
                                {{ $t('form.cancel') }}
                            </router-link>
                            <button :disabled="form.submitting" class="btn btn-primary" type="submit">
                                <i v-if="form.submitting" class="fa fa-spinner fa-pulse"></i>
                                {{ edit ? $t('form.edit') : $t('form.create') }}
                            </button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script type="text/babel">
    import Component from 'vue-class-component'
    import Multiselect from 'vue-multiselect'


    @Component
    export default class Create {
        data() {
            return {
                page: {
                    title: '',
                    slug: '',
                    submit_text: '',
                    sites: []
                },
                form: {
                    errors: {}
                },
                sites: []

            };
        }
        get edit() {
            return this.$route.params.id ? true : false;
        }

        updateSelected(site) {
            this.page.sites.push(site.id);
        }
        removeSelected(site) {
            this.page.sites = this.page.sites.filter((id) => {
                return id !== site.id;
            });
        }


        mounted() {

            /*
             * When the route changes from edit to add
             * we need to update the page
             */
            this.$watch('edit', () => {
                this.page = {
                    title: '',
                    slug: '',
                    sites: []
                };
                this.edit ? this.updateEditPage() : false ;
            });
            /**
             * When form title changes.
             * Slug will be updated.
             */
            this.$watch('page.title', (title, val ) => {
                this.page.slug = title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'-');;
            })

            /*
             * Load The Sites Data
             */
             this.$http.get(this.$store.state.config.api_url + 'sites')
                .then(response => {
                    this.sites = response.data.data;
                });


            this.edit ? this.updateEditPage() : false ;
        }

        save() {
            this.form.submitting = true;
            // if form for create
            return this.edit ? this.update() : this.create();
        }

        create() {
            this.$http.post(this.$store.state.config.api_url + 'forms', this.page)
                .then(response => {
                    this.$router.push({name: 'system.forms.index'})
                })
                .catch(error => {
                    this.form.errors = error.data;
                    this.form.submitting = false;
                });
        }

        update() {
            this.$http.put(this.$store.state.config.api_url + 'forms/' + this.$route.params.id, this.page)
                .then(response => {
                    this.$router.push({name: 'system.forms.index'})
                    this.$events.$emit('notify', {
                        type: 'info',
                        title: 'Success !',
                        message: 'Your Form Was Updated Successfully!'
                    })
                })
                .catch(error => {
                    this.form.errors = error.data;
                    this.form.submitting = false;
                });
        }

        updateEditPage() {
            this.$http.get(this.$store.state.config.api_url + 'forms/' + this.$route.params.id)
                .then(response => {
                    this.page = response.data.data;
                });
        }


    }
</script>
