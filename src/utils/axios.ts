import axios from "axios";

export const axiosInstance = axios.create({
 baseURL: 'https://bil-website-server.vercel.app/'
 // baseURL: 'http://localhost:3000/'
})