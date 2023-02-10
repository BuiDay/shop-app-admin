import axios from "axios";
import {base_url} from "../../utils/base_url"

const getToken = localStorage.getItem("user") 
        ? JSON.parse(localStorage.getItem("user"))
        :null;

const config = {
    headers:{
        Authorization:`Bearer ${getToken.data.token}`,
        Accept:"application/json"
    }
}

const login = async (userData) =>{
    const response = await axios.post(`${base_url}user/login-admin`,userData);
    if(response.data){
        localStorage.setItem("user",JSON.stringify(response.data));
    }
    return response.data;
}

const getOrders = async () =>{
    const response = await axios.get(`${base_url}user/get-orders`,config);
    return response.data;
}

const updateOrders = async (data) =>{
    console.log(data)
    const response = await axios.put(`${base_url}user/order/update-order/${data.id}`,{status:data.status},config);
    return response.data;
}


const authService = {
    login,
    getOrders,
    updateOrders
}

export default authService