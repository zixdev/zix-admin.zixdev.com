<template>
    <div class="full-bg-img">
        <div class="container">
            <div id="loader-wrapper" v-if="form.submitting">
                <div id="loader"></div>
            </div>
            <ul v-if="!form.submitted" class="list-unstyled">
                <li>
                    <img class="img-responsive center-block" src="../../../../assets/logo.png" alt="Zix Development">
                </li>
                <li>
                    <div class="middle-box text-center loginscreen">
                        <div v-if="form.errors && form.errors.message" class="alert alert-danger">
                            {{form.errors.message}}
                        </div>
                        <form v-on:submit.prevent="login()">
                            <div class="input-group m-b">
                                <span class="input-group-addon">
                                    <i class="fa fa-user"></i>
                                </span>
                                <input class="form-control"
                                       type="email"
                                       name="name"
                                       placeholder="Email"
                                       v-model="user.email"
                                       required
                                >
                            </div>
                            <div class="input-group m-b">
                                <span class="input-group-addon">
                                    <i class="fa fa-lock"></i>
                                </span>
                                <input class="form-control"
                                       type="password"
                                       name="password"
                                       placeholder="Password"
                                       v-model="user.password"
                                       required
                                >
                            </div>
                            <button type="submit" class="btn btn-primary block full-width m-b">
                                <i v-if="form.submitting" class="fa fa-spinner fa-pulse"></i>
                                Login
                            </button>
                        </form>
                    </div>
                </li>
            </ul>

        </div>
    </div>
</template>

<script>
    import Component from 'vue-class-component'
    import AppState from '../../../../store';
    @Component
    export default class Login {
        data() {
            return {
                user: {
                    email:'',
                    password: ''
                },
                form: {
                    submitting: false,
                    submitted: false,
                    errors: {}
                }
            }
        }

        login() {
            this.form.submitting = true;
            this.$http.post(this.$store.state.config.api_url + 'login', this.user)
                .then(response => {
                    let res = response.data.data;
                    if (res.permissions.includes('full_access') || res.permissions.includes('view_admin')) {
                        localStorage.setItem('token', res.token);
                        this.$store.state.token = res.token;
                        this.$store.state.user = res.user;
                        this.form.submitted = true;

                        this.$store.state.authorized = true;
                        this.$router.push({name: 'Dashboard'});

                        return true;
                    }
                    this.form.errors = {
                        message: 'Oops Looks Like you don\'t have access to the admin panel'
                    };
                    this.form.submitting = false;
                    return false;
                })
                .catch(error => {
                        this.form.errors = error.data;
                        this.form.submitting = false;
                });
        }
    }
</script>
<style lang="scss">
    .full-bg-img {
        color: #FFFFFF;
        font-size: 16px;

        .form-control, .input-group-addon {
            background-color: transparent;
            &:focus {
                border-color: #a21d21 !important;
            }
        }

        .container {
            position: relative;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .btn-primary {
            background-color: #a21d21;
            border-color: #a21d21;
            &:hover, &:focus, &:active {
                background-color: #db2c31;
                border-color: #db2c31;
            }
        }

        .alert-danger {
            background-color: transparent;
            border-color: #a21d21;
            border-radius: 0;
            color: #FFFFFF;

        }

        .list-unstyled {
            min-height: 420px;
        }
    }


</style>
