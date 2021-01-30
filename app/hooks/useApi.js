import {useState} from "react";

export default function useApi(apiFunc) {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const request = async (...rest) => {
        setLoading(true);
        const response = await apiFunc(...rest);
        setLoading(false);
    
        setError(!response.ok);
        
        setData(response.data);
        return response;
    }

    return {
        data,
        error,
        loading,
        request
    }
}