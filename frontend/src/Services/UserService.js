import ApiService from "./ApiService";

const USER_URL  = '/user'
class UserService {

    getUsers(page, size){ 
        let url = '/users?page='+page+'&size='+size;
        return ApiService.get(USER_URL+url);
    }

    get(url) { 
        return ApiService.get(url)
    }
    getUserByUsername(username){
        return ApiService.get(USER_URL+'/'+username)
    }
    post(data) { 
        return ApiService.post(USER_URL,data)
    }

    //put(url, data) { return axios.put(API_BASE_URL + url, data); }

    //delete(url) { return axios.delete(API_BASE_URL + url); }
}

export default new UserService();