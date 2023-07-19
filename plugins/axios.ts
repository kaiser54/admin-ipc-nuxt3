import axios from "axios";

export default defineNuxtPlugin(async () => {
    return {
        provide: {
            axios: axios,
        },
    };
});

// import axios from "axios";
// export default defineNuxtPlugin((nuxtApp) => {
//     const defaultUrl = "https://localhost:8000/api/v1";

//     let api = axios.create({
//         baseURL: defaultUrl,
//         headers: {
//             common: {},
//         },
//     });
//     return {
//         provide: {
//             api: api,
//         },
//     };
// });
