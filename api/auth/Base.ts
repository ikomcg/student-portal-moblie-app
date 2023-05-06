import axios from "axios";

const base_URL = "https://lms-backend.sandboxprosolutions.com/"


export const BASE_SMS_URL ='https://sandboxprosolutions.com/';

 const axiosInstance = axios.create({
    baseURL : base_URL,

})
export const smsOriginalInstance = axios.create({
    baseURL: BASE_SMS_URL,
    timeout: 30000,
})

export const smsAxiosInstanceCreator = (baseURL : string) => {
    return axios.create({
        baseURL,
        timeout : 30000
    })
}


export default axiosInstance;