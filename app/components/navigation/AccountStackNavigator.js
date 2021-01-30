import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import AccountScreen from "../../screens/AccountScreen";
import MessagesScreen from "../../screens/MessagesScreen";

import routes from "./routes";

const AccountStack = createStackNavigator();
const AccountNavigator = () => {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen name={routes.ACCOUNT} component={AccountScreen}/>
            <AccountStack.Screen name={routes.MESSAGES} component={MessagesScreen}/>
        </AccountStack.Navigator>
    )
}

export default AccountNavigator