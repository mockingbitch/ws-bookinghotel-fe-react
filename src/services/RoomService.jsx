import axios from '../axios';

const getAllRooms = () => {
    return axios.get('/api/auth/admin/rooms');
}

const getRoomService = (id) => {
    return axios.get(`/api/auth/admin/rooms/get?hotel=${id}`);
}

const createRoomService = (data) => {
    return axios.post('/api/auth/admin/rooms', data);
}

const editRoomService = (data) => {
    return axios.put(`/api/auth/admin/rooms`, data);
}
const deleteRoomService = (id) => {
    return axios.delete(`/api/auth/admin/rooms?id=${id}`);
}

const searchRoomService = (hotel, room, min, max, start, end) => {
    return axios.get(`/api/auth/search?hotel=${hotel}&room=${room}&min=${min}&max=${max}&start=${start}&end=${end}`);
}

export {
    getAllRooms,
    getRoomService,
    deleteRoomService,
    createRoomService,
    editRoomService,
    searchRoomService
}
