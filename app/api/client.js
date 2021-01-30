import {create} from "apisauce";

import settings from "../config/settings";
import caching from "./caching";

const apiClient = create({
    baseURL: settings.apiUrl
});

const get = apiClient.get;

apiClient.get = async (url, params, axiosConfig) => {

    const result = await get(url, params, axiosConfig);

    if (result.ok) {
        caching.setItem(url, result.data);
        return result;
    }

    const cachedResult = caching.getItem(url);
    if (cachedResult) return {data: cachedResult, ok: true};
    
    return result;
}

export default apiClient;