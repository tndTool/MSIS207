import axios from 'axios';

const request = axios.create({
    baseURL: 'http://localhost:8800/api'
})

export default request;
