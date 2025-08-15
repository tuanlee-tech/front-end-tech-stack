import axios from "axios";

const axiosInstance = axios.create({
    baseURL: '/api',
    headers: { "Content-Type": "application/json" },
    timeout: 5000
});

// Interceptors for auth
axiosInstance.interceptors.request.use((config) => {
    /*
    * Thêm auth headers sau này
    * const token = localStorage.getItem("token");
    * if(token) config.headers.Authorization = `Bearer ${token}`;
    *
    */
    return config;
});

export default axiosInstance;