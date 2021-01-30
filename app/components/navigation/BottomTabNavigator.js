import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons} from "@expo/vector-icons";


import ListingNavigator from "./ListingStackNavigator";
import ListingEditScreen from '../../screens/ListingEditScreen';
import AccountNavigator from "./AccountStackNavigator";
import NewListingButton from './NewListingButton';
import useNotifications from "../../hooks/useNotifications";

import routes from "./routes";

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
    useNotifications();

    return (
        <Tab.Navigator initialRouteName="Feed" tabBarOptions={
            {
                activeTintColor: "tomato"
            }
        }>
            <Tab.Screen name={routes.FEED} component={ListingNavigator} options={{tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="home" color={color} size={size}/>}}/>
            <Tab.Screen name={routes.LISTING_EDIT} component={ListingEditScreen} options={({navigation}) => ({tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING_EDIT) }/>})}/>
            <Tab.Screen name={routes.ACCOUNT} component={AccountNavigator} options={{tabBarIcon: ({color, size}) => <MaterialCommunityIcons name="account" color={color} size={size}/>}}/>
        </Tab.Navigator>
    )
}

export default TabNavigator