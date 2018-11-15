<template>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1>Login</h1>

            <div class="form-group">
                <label for="username">Email</label>
                <input type="text" name="username" v-model="username" class="form-control">
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" v-model="password" class="form-control">
            </div>

            <button @click="login" class="btn btn-primary">Login</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Login",
        data() {
            return {
                username: '',
                password: '',
            };
        },

        methods: {
            login() {
                let data = {
                    username: this.username,
                    password: this.password
                };

                axios.post('/api/login', data)
                    .then(({data}) => {
                        auth.login(data.token, data.user);

                        this.$router.push('/dashboard');
                    })
                    .catch(({response}) => {
                        alert(response.data.message);
                    });
            }
        }
    }
</script>

<style scoped>

</style>
