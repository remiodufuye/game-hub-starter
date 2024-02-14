
import axios, { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'023f17036ea2436b9dac06214f48ad66'
    }
});


class ApiClient<T>{
    endpoint:string;

    constructor(endpoint:string) {
        this.endpoint = endpoint;
    }

    getAll = (config:AxiosRequestConfig) => {
        return axiosInstance
            .get<FetchResponse<T>>(this.endpoint,config)
            .then(res=>res.data)
    }
}

export default ApiClient