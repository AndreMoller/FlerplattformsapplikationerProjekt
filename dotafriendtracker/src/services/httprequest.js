import axios from 'axios'

export const http = axios.create({
    method: 'get',
    baseURL: 'https://api.opendota.com/api/',
    timeout: 500000
})