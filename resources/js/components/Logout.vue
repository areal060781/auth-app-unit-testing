<template>
    <div class="alert alert-success" role="alert">
        You are logged out
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "Logout",
        data() {
            return {
                username: '',
                password: '',
            };
        },

        methods: {
            logout() {
                let data = {
                    username: null,
                    password: null
                };

                axios.post('/api/logout')
                    .then(({data}) => {
                        api.call('get', api.route('auth.logout'));

                        this.$router.push('/home');
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
