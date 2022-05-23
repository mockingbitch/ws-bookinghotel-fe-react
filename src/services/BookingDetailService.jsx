import axios from "axios";

const getBookingDetail = (booking_id) => {
    return axios.get(`/api/auth/admin/bookingdetail`);
}

export {
    getBookingDetail
}