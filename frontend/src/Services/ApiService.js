import Axios from "axios";

const API_BASE_URL = 'http://localhost:8185/api';
class ApiService {

    get(url) { return Axios.get(API_BASE_URL + url); }

    post(url, data) { return axios.post(API_BASE_URL + url, data); }

    put(url, data) { return axios.put(API_BASE_URL + url, data); }

    delete(url) { return axios.delete(API_BASE_URL + url); }
}

export default new ApiService();