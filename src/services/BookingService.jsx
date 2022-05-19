import axios from '../axios';

const createBookingService = (data) => {
    return axios.post('/api/auth/admin/booking', data);
}

export {
    createBookingService
}
