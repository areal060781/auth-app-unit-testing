import VueRouter from 'vue-router'

import Welcome from './components/Welcome'
import Page from './components/Page'
import Hello from './components/Hello'
import Home from './components/Home'
import UsersIndex from './components/UsersIndex';
import Login from './components/Login';
import Logout from './components/Logout';
import About from  './components/About';
import Dashboard from './components/Dashboard';

let routes = [
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
];

/*export default new VueRouter({
    mode: 'history',
    routes
});*/

const router = new VueRouter({
    routes
});

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

export default router;
