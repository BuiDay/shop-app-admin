import axios from "axios";
import {base_url} from "../../utils/base_url"
import { config } from "../../utils/axiosconfig";

const getEnq = async () =>{
    const response = await axios.get(`${base_url}enquiry`,config);
    return response.data;
}

const enqService = {
    getEnq,
}

export default enqService;