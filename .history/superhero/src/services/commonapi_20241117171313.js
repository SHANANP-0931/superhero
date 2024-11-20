// api.js
import axios from "axios";

const commonapi = async (httpMethod, url, reqBody, reqHeader) => {
    const reqconfig = {
        method: httpMethod,
        url,
        data: reqBody,
        headers: reqHeader ? reqHeader : { "Content-Type": "application/json" }
    };

    try {
        const res = await axios(reqconfig);
        return res;  // Return the full response
    } catch (err) {
        console.error("API error:", err);  // Log the error for debugging
        throw new Error(err.response ? err.response.data : "API request failed");
    }
};

export default commonapi;
