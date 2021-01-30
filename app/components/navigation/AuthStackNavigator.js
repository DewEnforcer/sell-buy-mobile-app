import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import LoginScreen from "../../screens/LoginScreen";
import RegisterScreen from "../../screens/RegisterScreen";
import WelcomeScreen from "../../screens/WelcomeScreen";

import routes from "./routes";

const Stack = createStackNavigator();
const AuthNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{headerShown: false}} name={routes.WELCOME} component={WelcomeScreen}/>
            <Stack.Screen name={routes.LOGIN} component={LoginScreen}/>
            <Stack.Screen name={routes.REGISTER} component={RegisterScreen}/>
        </Stack.Navigator>
    )
}

export default AuthNavigator;