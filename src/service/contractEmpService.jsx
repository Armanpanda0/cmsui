import axios from "axios";
import config from "../environment/config";

const API_URL = config.API_URL;

export const getContractEmpList = async () => {
    try {
        const response = await axios.get(
            `${API_URL}api/contractEmp/get-all-employee`,
            {
                headers: {
                    "Content-Type": "application/json"
                    // ...auth  (only if auth exists)
                }
            }
        );
        return response.data; // ✅ return only data
    } catch (error) {
        console.error("Error fetching contract employees", error);
        throw error;
    }
};
