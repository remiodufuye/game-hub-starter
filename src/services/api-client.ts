
import axios from 'axios'

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'023f17036ea2436b9dac06214f48ad66'
    }
})