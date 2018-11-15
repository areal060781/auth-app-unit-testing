import axios from 'axios';
//import Api from './api.js';

//const api = new Api();

class Auth {
    constructor() {
        this.token = window.localStorage.getItem('token');

        let userData = window.localStorage.getItem('user');
        this.user = userData ? JSON.parse(userData) : null;

        if (this.token) {
            axios.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;

            this.getUser();
        }
    }

    login (token, user) {
        window.localStorage.setItem('token', token);
        window.localStorage.setItem('user', JSON.stringify(user));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;

        this.token = token;
        this.user = user;

        Event.$emit('userLoggedIn');
    }

    logout(tokenIsValid = true) {
        window.localStorage.setItem('token', '');
        window.localStorage.setItem('user', JSON.stringify(''));

        axios.defaults.headers.common['Authorization'] = 'Bearer ' + '';

        this.token = '';
        this.user = '';

        Event.$emit('userLoggedOut');
    }

    check () {
        return !! this.token;
    }

    getUser() {
        api.call('get', '/api/getUser')
            .then(({data}) => {
                this.user = data;
            });
    }
}

export default Auth;
