import axios from '../axios';

const setAvailabilityService = (data) => {
    return axios.post('/api/auth/admin/availabilities', data);
}

const getAvailabilityService = (room_id) => {
    return axios.get(`/api/auth/admin/availabilities?room=${room_id}`);
}

export {
    setAvailabilityService,
    getAvailabilityService
}