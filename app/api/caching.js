import AsyncStorage from "@react-native-async-storage/async-storage";

const prefix = "cache"

const expirationInMs = 5 * 60 * 1000;

function isExpired(timestamp) {
    return Date.now() - timestamp > expirationInMs; 
}

async function clearStorage(key) {
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
        return null;
    }
    return true;
}

export async function getItem(key) {
    let result;
    try {
        result = await AsyncStorage.getItem(prefix+key);
    } catch (error) {
        console.log(error);
        return null;
    }

    if (result !== null && isExpired(result.data.timestamp)) {
        clearStorage(key);
        return null;
    }
    
    return result.data;
}
export async function setItem(key, data) {
    try {
        const item = {
            data,
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix+key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
        return null;
    }
    return true;
}

export default {
    getItem,
    setItem
}