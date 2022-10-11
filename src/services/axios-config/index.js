import axios from "axios";
import { Environment } from "../../configs/environment";

export const API = axios.create({
    baseURL: Environment.URL_BASE,
})

// API.interceptors.response.use(
//     (response) => responseInterceptor(response),
//     (error) => errorInterceptor(error)
//   )