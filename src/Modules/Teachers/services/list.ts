import axios from "axios"


export const getTeachersData = ()=>{
    return axios.get("http://127.0.0.1:8000/api/teachers").then((res)=>{
        return (res.data);
    })

}