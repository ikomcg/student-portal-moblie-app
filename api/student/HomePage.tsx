import axios from "axios"

export type StudentType = {
    apiUrl : string
    access_token : string
   
}

export const GetSubjectStudentApi = async ({apiUrl, access_token} : StudentType ) => {

    return await axios.get(`${apiUrl}/api/student/subjects`, {
        headers : {
            "Authorization" : `Bearer ${access_token}`
        }
    }).then(response => {
        return response.data
    }).catch( error => {
        return null
    })
}