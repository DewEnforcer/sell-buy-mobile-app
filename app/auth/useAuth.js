import jwtDecode from "jwt-decode";
import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";

export default () => {
    const {user, setUser} = useContext(AuthContext);

    const logIn = ({data}) => {
        const user = jwtDecode(data);
        setUser(user);
        authStorage.storeToken(data)
    }

    const logOut = () => {
        setUser(null);
        authStorage.removeToken();
    }

    return {
        user,
        setUser,
        logOut,
        logIn
    }
}