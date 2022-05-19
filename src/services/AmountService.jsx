import axios from '../axios';

const setAmountService = (data) => {
    return axios.post('/api/auth/admin/amounts', data);
}

const getAmountService = (room_id) => {
    return axios.get(`/api/auth/admin/amounts?room=${room_id}`);
}

export {
    setAmountService,
    getAmountService
}