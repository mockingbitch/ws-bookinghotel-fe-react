import axios from '../axios';

const createBookingService = (token, data) => {
    return axios.post(`/api/auth/admin/booking?token=${token}`, data);
}

const getAllBookings = () => {
    return axios.get('/api/auth/admin/booking');
}

const handleBookingService = (data) => {
    return axios.put('/api/auth/admin/booking', data);
}

export {
    createBookingService,
    getAllBookings,
    handleBookingService
}
