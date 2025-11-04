//axios-method used  for api call
import axios from "axios"

const commonAPI=async (url,httpMethod,reqBody)=>{
    const reqestConfig ={
        url,
        Method:httpMethod,
        data:reqBody

    }
    //API CALL
    return await axios(reqestConfig).then(res=>res).catch(err=>err)
}
export default commonAPI