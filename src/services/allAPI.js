//all api calls

import commonAPI from "./commonAPI"
import ServerURL from "./ServerURL"

//1.resume add api-called by userinput,when finish btn clicked
export const addResumeAPI=async(resume)=>{
    return  await commonAPI(`${ServerURL}/resumes`,"POST",resume)
}
//2.get resume api
//3.update resume api
//4.