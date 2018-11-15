import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios';
import Api from './api.js';
import Auth from './auth.js';
//import router from './routes.js';

window.Vue = require('vue');
window.Event = new Vue;
window.api = new Api();
window.auth = new Auth();

Vue.use(VueRouter);

import App from './components/App'
import Welcome from './components/Welcome'
import Page from './components/Page'
import Hello from './components/Hello'
import Home from './components/Home'
import UsersIndex from './components/UsersIndex';
import Login from './components/Login';
import Logout from './components/Logout';
import About from  './components/About';
import Dashboard from './components/Dashboard';

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
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: Dashboard,
            meta: { middlewareAuth: true }
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ],
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.middlewareAuth)) {
        if (!auth.check()) {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            });

            return;
        }
    }

    next();
})

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
