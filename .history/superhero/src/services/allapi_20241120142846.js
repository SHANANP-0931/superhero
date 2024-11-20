import commonAPI from "./commonapi"
import SERVERURL from "./serverurl"


//REG CALLED BY Auth
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}


// login called by auth
export const loginAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/login`, reqBody)
}
