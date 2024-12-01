import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://user-account-management-6j82.onrender.com",
    withCredentials: true,
});
export default apiRequest;