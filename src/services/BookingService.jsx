import axios from '../axios';

const createBookingService = (data) => {
    return axios.post('/api/auth/admin/booking', data);
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
