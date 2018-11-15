import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from './auth.js';

window.auth = auth;

Vue.use(VueRouter)

window.Event = new Vue;

import App from './components/App'
import Welcome from './components/Welcome'
import Page from './components/Page'
import Hello from './components/Hello'
import Home from './components/Home'
import UsersIndex from './components/UsersIndex';
import Login from './components/Login';

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/welcome',
            name: 'welcome',
            component: Welcome,
            props: { title: "This is the welcome page" }
        },
        {
            path: '/spa-page',
            name: 'page',
            component: Page,
            props: {
                title: "This is the SPA Second Page",
                author : {
                    name : "Aida Real",
                    role : "Software Engineer",
                    code : "Don´t kill my vibe"
                },

            }
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ],
})
const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
