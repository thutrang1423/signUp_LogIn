import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://user-account-management-3.onrender.com",
    withCredentials: true,
});
export default apiRequest;
