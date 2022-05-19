import axios from '../axios';

const getAllCityService = () => {
    return axios.get('/api/auth/cities');
}

export {
    getAllCityService
}
