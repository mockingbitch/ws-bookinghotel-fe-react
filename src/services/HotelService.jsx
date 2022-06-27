import axios from '../axios';

const getHotels = () => {
    return axios.get('/api/auth/admin/hotels');
}

const createHotelService = (data) => {
    return axios.post('/api/auth/admin/hotels', data);
}

const editHotelService = (data) => {
    return axios.put(`/api/auth/admin/edithotel`, data);
}
const deleteHotelService = (id) => {
    return axios.delete(`/api/auth/admin/hotels?id=${id}`);
}

const getHotelByCityService = (city_id) => {
    return axios.get(`/api/auth/hotels?city=${city_id}`);
}
const getUserTest = () => {
    return axios.get('/api/auth/admin/testuser');
}
export {
    getHotels,
    deleteHotelService,
    createHotelService,
    editHotelService,
    getHotelByCityService,
    getUserTest
}
