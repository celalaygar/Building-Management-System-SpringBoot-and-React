

import Axios from 'axios';
import React from 'react'

const  Interceptor = (apiMethod, apiPath) => {

    
    const result = () => {
        const data = false
         Axios.interceptors.request.use(request => {
            //this.setState({ pendingApiCall: true })
            const { url, method } = request;
            console.log("request : "+url)
            console.log("request : "+method)
            if(apiMethod == method && apiPath == url)
                data= true;
            return request;
        });
        Axios.interceptors.response.use(response => {
            //this.setState({ pendingApiCall: false })
            const { url, method } = response.config;
            console.log("response : "+url)
            console.log("response : "+method)
            if(apiMethod == method && apiPath == url)
            data= false;
            return response;
        }, error => {
            data= false;
            //this.setState({ pendingApiCall: false })
            throw error;
        });
        return data;
    }


    return result();
}

export default Interceptor
