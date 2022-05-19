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

export {
    getHotels,
    deleteHotelService,
    createHotelService,
    editHotelService,
    getHotelByCityService
}
