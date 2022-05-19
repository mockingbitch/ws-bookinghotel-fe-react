import axios from '../axios';

const handleLogin = (email, password) => {
    return axios.post('/api/auth/login', {email, password});
}

const showUserService = (id) => {
    return axios.get('/api/user',{ params: { id: id } });
}

const createUserService = (data) => {
    return axios.post('/api/user', data);
}

const editUserService = (id, data) => {
    return axios.put(`/api/user?id=${id}`, data);
}

const deleteUserService = (id) => {
    return axios.delete('/api/user', { params: { id: id } });
}

const getAllCodeService = (type) => {
    return axios.get(`/api/allcode?type=${type}`);
}

export {
    handleLogin,
    showUserService,
    createUserService,
    editUserService,
    deleteUserService,
    getAllCodeService
}
