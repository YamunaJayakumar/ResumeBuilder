//all api calls

import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

//1.resume add api-called by userinput,when finish btn clicked
export const addResumeAPI=async(resume)=>{
    return  await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}
//2.get resume api-called from viewresume,when page load(),inside useeffect() hook
export const getResumeAPI = async(id) => {
    return  await commonAPI(`${ServerURL}/resumes/${id}`,"GET",{})
}
//3.update resume api
export const updateResumeAPI = async(id,resume) => {
    return  await commonAPI(`${ServerURL}/resumes/${id}`,"PUT",resume)
}
//4.