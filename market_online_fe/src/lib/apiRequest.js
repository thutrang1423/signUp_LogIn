import axios from "axios";

const apiRequest = axios.create({
    baseURL:"https://signup-loginbe-2.onrender.com",
    withCredentials: true,
});
export default apiRequest;
