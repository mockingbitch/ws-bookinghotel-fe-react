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
const changePasswordService = (token, data) => {
    return axios.post(`/api/auth/admin/user/changepassword?token=${token}`, data);
}

export {
    getAllUsers,
    searchUserService,
    getUserProfileService,
    changePasswordService
}