import commonapi from "./commonapi"
import SERVERURL from "./serverurl"





// login called by auth
export const loginAPI = async (reqBody) => {
    return await commonapi("POST", `${SERVERURL}/api/auth/login`, reqBody)
}
