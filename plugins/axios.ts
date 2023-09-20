import axios from "axios";

const API_URL = "http://localhost:8000/api/v1";
const URL = "http://localhost:8000/api/v1"

let devInstance = axios.create({
    // baseURL: URL,
    baseURL: API_URL,
});

devInstance.interceptors.response.use(
    async (config: any) => {
        config.headers = {
            "Content-Type": "application/json",
            ...config.headers,
        };
        return config;
    },
    (error: any) => {
        if (error?.response?.status === 401) {
            localStorage.removeItem("token");
        }
        return Promise.reject(error);
    }
);

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            devInstance: devInstance,
        },
    };
});
