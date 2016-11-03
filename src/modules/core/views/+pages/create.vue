<template>
    <div class="col-lg-12">
        <div class="ibox float-e-margins">
            <div class="ibox-title">
                <h5>
                    <i class="fa fa-pencil"></i> {{ edit ? $t('pages.edit') : $t('pages.add') }}
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
                                   v-model="site.title"
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
                                   v-model="site.slug"
                                   required
                                   minlength="3"
                                   maxlength="255"
                            >
                            <span v-if="form.errors && form.errors.slug" class="help-block m-b-none text-danger">{{form.errors.slug.toString()}}</span>
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>
                    <div class="form-group">
                        <label class="col-sm-2 control-label">
                            {{ $t('table.sites') }} :
                        </label>
                        <div class="col-sm-10">
                            <multiselect
                                :options="sites"
                                :selected.sync="site.sites"
                                :multiple="true"
                                :searchable="true"
                                placeholder="Select Site"
                                label="name"
                                @select="updateSelected"
                                @remove="removeSelected"
                                required
                            >
                            </multiselect>
                            <span v-if="form.errors && form.errors.slug" class="help-block m-b-none text-danger">{{form.errors.slug.toString()}}</span>
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>

                    <div class="form-group">
                        <label class="col-sm-2 control-label">
                            {{ $t('table.content') }} :
                        </label>
                        <div class="col-sm-10">
                            <tinymce-editor
                                :content.sync="site.content"
                                @change="updateContent"
                            ></tinymce-editor>
                            <span v-if="form.errors && form.errors.ui" class="help-block m-b-none text-danger">{{form.errors.ui.toString()}}</span>
                        </div>
                    </div>
                    <div class="hr-line-dashed"></div>

                    <div class="form-group">
                        <div class="col-sm-4 col-sm-offset-2">
                            <router-link :to="{name: 'pages.all'}" class="btn btn-white">
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

<script>
    import Component from 'vue-class-component'
    import Multiselect from 'vue-multiselect'
    import TinymceEditor from '../../components/tinymce-editor';


    @Component({
        components: {
            TinymceEditor, Multiselect
        }
    })
    export default class Create {
        data() {
            return {
                site: {
                    title: '',
                    slug: '',
                    content: '',
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
            this.site.sites.push(site.id);
        }
        removeSelected(site) {
            this.site.sites = this.site.sites.filter((id) => {
                return id !== site.id;
            });
        }

        updateContent(content) {
            this.site.content = content;
        }
        mounted() {
            /*
             * Initialize The Tiny CME Editor.
             */
            this.$events.$emit('update-tinycme', '');
            /*
             * When the route changes from edit to add
             * we need to update the page
             */
            this.$watch('edit', () => {
                this.$events.$emit('update-tinycme', '');
                this.site = {
                    title: '',
                    slug: '',
                    content: '',
                    sites: []
                };
                this.edit ? this.updateEditPage() : false ;
            });
            /**
             * When form title changes.
             * Slug will be updated.
             */
            this.$watch('site.title', (title, val ) => {
                this.site.slug = title.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'-');;
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
            this.$http.post(this.$store.state.config.api_url + 'pages', this.site)
                .then(response => {
                    this.$router.push({name: 'All Pages'})
                })
                .catch(error => {
                    this.form.errors = error.data;
                    this.form.submitting = false;
                });
        }

        update() {
            this.$http.put(this.$store.state.config.api_url + 'pages/' + this.$route.params.id, this.site)
                .then(response => {
                    this.$router.push({name: 'All Pages'})
                })
                .catch(error => {
                    this.form.errors = error.data;
                    this.form.submitting = false;
                });
        }

        updateEditPage() {
            this.$http.get(this.$store.state.config.api_url + 'pages/' + this.$route.params.id)
                .then(response => {
                    this.site = response.data.data;
                    console.log(response.data.data);
                    this.$events.$emit('update-tinycme', response.data.data.content);
                });
        }


    }
</script>
