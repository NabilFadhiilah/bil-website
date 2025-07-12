import axios from "axios";

export const axiosInstance = axios.create({
 baseURL: 'https://bil-website-server.vercel.app/'
})