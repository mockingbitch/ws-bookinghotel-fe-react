import axios from '../axios';

const getAllUsers = () => {
    return axios.get('/api/auth/admin/user');
}

export {
    getAllUsers
}