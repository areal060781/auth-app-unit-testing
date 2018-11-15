<template>
    <div>
        <nav class="navbar navbar-expand-md navbar-light navbar-laravel">
            <div class="container">
                <ul class="navbar-nav">
                    <div v-if="authenticated && user">
                        <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
                        <router-link :to="{ name: 'users.index' }" class="nav-link">Users</router-link>
                        <router-link :to="{ name: 'dashboard' }" class="nav-link">Dashboard</router-link>
                    </div>

                    <router-link :to="{ name: 'welcome' }" class="nav-link">Welcome</router-link>
                    <router-link :to="{ name: 'page' }" class="nav-link" >Spa-Page</router-link>
                    <router-link :to="{ name: 'hello' }" class="nav-link">Hello</router-link>

                    <div v-if="authenticated && user">
                        <router-link :to="{ name: 'logout' }" class="nav-link">Logout {{ user.name }}</router-link>
                    </div>

                    <router-link :to="{ name: 'login' }" class="nav-link" v-else>Login</router-link>
                </ul>
            </div>
        </nav>
        <main>
            <router-view></router-view>
        </main>
    </div>
</template>

<script>

    export default {
        data() {
            return {
                authenticated: auth.check(),
                user: auth.user
            };
        },

        mounted() {
            Event.$on('userLoggedIn', () => {
                this.authenticated = true;
                this.user = auth.user;
            });
        },
    }
</script>
