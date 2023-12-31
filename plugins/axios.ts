import axios from "axios";

export const API_URL = "https://api.ipc-africa.com/api/v1";
// export const API_URL = "http://localhost:8000/api/v1";
export const URL = "https://api.ipc-africa.com/api/v1";
// export const URL = "http://localhost:8000/api/v1"

let devInstance = axios.create({
    baseURL: URL,
    // baseURL: API_URL,
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
