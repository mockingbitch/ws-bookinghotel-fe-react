import axios from '../axios';

const handleLogin = (email, password) => {
    return axios.post('/api/login', { email, password });
}

const showUserService = (id) => {
    return axios.get(`/api/user?id=${id}`);
}

const createUserService = (data) => {
    return axios.post('/api/user',  data );
}

export { handleLogin, showUserService, createUserService }
