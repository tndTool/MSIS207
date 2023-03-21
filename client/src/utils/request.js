import axios from 'axios';

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    withCredentials: true,
    credentials: 'include',
});

export default request;
