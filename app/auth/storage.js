import * as SecureStore from 'expo-secure-store';
import jwtDecode from 'jwt-decode';

const key = "AUTH_TOKEN";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log(error);
        return null
    }
}

const getToken = async () => {
    try {
        return await SecureStore.getItemAsync(key);
    } catch (error) {
        console.log(error);
        return null
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log(error);
        return null;
    }
}

const getUser = async () => {
    const token = await getToken();
    if (token) return jwtDecode(token);
    return null;
}

export default {
    storeToken,
    removeToken,
    getUser
}