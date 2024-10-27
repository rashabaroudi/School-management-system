import axios from "axios";
import { APIS } from "../const/apis";


export const getStudentsData =( ) =>{
    return axios.get(APIS.List).then((res)=>{
        return (res.data);
        
    
})
}