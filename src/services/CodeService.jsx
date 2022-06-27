import axios from '../axios';

const getAllCodeService = (data) => {
    return axios.get(`/api/auth/code?key=${data}`);
}

export {
    getAllCodeService
}
