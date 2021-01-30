import React from "react";
import {createStackNavigator} from "@react-navigation/stack";

import ListingsScreen from "../../screens/ListingsScreen";
import ListingDetailsScreen from "../../screens/ListingDetailsScreen";

import routes from "./routes";

const ListingStack = createStackNavigator();
const ListingNavigator = () => {
    return (
        <ListingStack.Navigator screenOptions={{headerShown: false}}>
            <ListingStack.Screen name={routes.FEED} component={ListingsScreen}/>
            <ListingStack.Screen name={routes.LISTING_DETAILS} component={ListingDetailsScreen}/>
        </ListingStack.Navigator>
    )
}

export default ListingNavigator;