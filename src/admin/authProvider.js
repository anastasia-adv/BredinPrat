import { AUTH_LOGIN, AUTH_LOGOUT, AUTH_ERROR, AUTH_GET_PERMISSIONS, AUTH_CHECK } from 'react-admin';
import axios from 'axios';

export default (type, params) => {
    if (type === AUTH_LOGIN) {
        const { username, password } = params;
        axios({
            method: 'post',
            url: 'http://localhost:5000/login',
            data: { username, password },
            config: { headers: {'Content-Type': 'application/json' }},
            validateStatus: (status) => {
              return true; 
            },
          }).catch(error => {
            console.log(error);
          }).then(res => {
              console.log(res);
              /*if(res.data.signin == true){
                this.props.history.push('/')
              }*/
              if (res.status < 200 || res.status >= 300) {
                throw new Error(res.statusText);
            }
            localStorage.setItem('username', res.data.username);
            localStorage.setItem('role', res.data.role);
            console.log(localStorage);
            return Promise.resolve();
            //return res.redirect('http://localhost:3000/');
          });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        // ...
    }
    if (type === AUTH_CHECK) {
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        const role = localStorage.getItem('role');
        return role ? Promise.resolve(role) : Promise.reject();
    }
    return Promise.reject();
};

/*export default (type, params) => {
    console.log("hehehehehehe");
    if (type === AUTH_LOGIN) {
        console.log(params);
        const { username, password } = params;
        const request = new Request('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        })
        return fetch(request)
            .then(response => {
                console.log(response.body);
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('role', response.data.role);
                console.log(localStorage);
                return Promise.resolve();
            });
    }
    if (type === AUTH_LOGOUT) {
        localStorage.removeItem('username');
        localStorage.removeItem('role');
        return Promise.resolve();
    }
    if (type === AUTH_ERROR) {
        // ...
    }
    if (type === AUTH_CHECK) {
        console.log("toto");
        return localStorage.getItem('username') ? Promise.resolve() : Promise.reject();
    }
    if (type === AUTH_GET_PERMISSIONS) {
        const role = localStorage.getItem('role');
        return role ? Promise.resolve(role) : Promise.reject();
    }
    return Promise.reject('Unknown method');
};*/