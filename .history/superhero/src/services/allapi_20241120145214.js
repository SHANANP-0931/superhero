import commonAPI from "./commonapi"
import SERVERURL from "./serverurl"


//REG CALLED BY Auth
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}


// login called by auth
export const loginAPI = async (reqBody) => {
    try {
        const response = await axios.post('http://localhost:5000/api/login', reqBody);
        return response;
    } catch (error) {
        console.error("API error: ", error);
        throw error; // Re-throw to be caught in the calling component
    }
};
