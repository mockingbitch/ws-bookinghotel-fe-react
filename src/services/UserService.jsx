import axios from '../axios';

const getAllUsers = () => {
    return axios.get('/api/auth/admin/user');
}

const searchUserService = (name) => {
    return axios.get(`/api/auth/admin/user/search?name=${name}`);
} 

const getUserProfileService = (token) => {
    return axios.get(`/api/auth/admin/user/profile?token=${token}`);
}

export {
    getAllUsers,
    searchUserService,
    getUserProfileService
}