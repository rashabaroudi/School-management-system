import axios from "axios"
import { APIS } from "../const/apis"

export const getCourses=()=>{
    return axios.get(APIS.List).then((res)=>{
        return res.data;
    })
}