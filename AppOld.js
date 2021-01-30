import React, { useEffect, useState } from 'react';
import { StyleSheet, Image, Button, Text } from 'react-native';
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import {MaterialCommunityIcons} from "@expo/vector-icons";

import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";

import Screen from "./app/components/Screen";
import ListingEditScreen from "./app/screens/ListingEditScreen";
import ImageInput from './app/components/forms/ImageInput';
import ImageInputList from './app/components/forms/ImageInputList';


const categories = [
  {value: 1, label: "c1"},
  {value: 2, label: "c2"},
  {value: 3, label: "c3"}
]

export default function App() {
  const [imageUris, setImageUris] = useState([]);

  useEffect(() => {
    const checkPermissions = async () => {
      const access = await ImagePicker.requestCameraPermissionsAsync();
      if (!access.granted) alert("You need to enable permissions to access camera");
      //const access = await Permissions.askAsync(Permissions.CAMERA);
      //if (!access.granted) alert("You need to enable something!");
    }
    checkPermissions();
  }, [])

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (result.cancelled) return;
    } catch (error) {
      console.log(error);
    }
  }

  const onAddImage = (uri) => {
    const newUris = [...imageUris];
    newUris.unshift({
      id: newUris.length,
      uri
    });
    setImageUris(newUris);
  }
  const onRemoveImage = (uri) => {
    const newUris = imageUris.filter((u) => u.id !== uri.id);
    setImageUris(newUris);
  }

  const Tweets = ({navigation}) => {
    return <Screen>
      <Text>Tweets</Text>
      <Button title="View tweet" onPress={() => navigation.navigate("TweetDetails", {id: 1})}/>
    </Screen>
  }
  const TweetDetails = ({route}) => {
    return <Screen>
      <Text>Tweet details</Text>
    </Screen>
  }
  const Account = ({route}) => {
    return <Screen>
      <Text>Account</Text>
    </Screen>
  }

  const Stack = createStackNavigator();
  const StackNavigator = () => {
    return (<Stack.Navigator screenOptions={{ headerStyle: {backgroundColor: "dodgerblue"}, headerTintColor: "white"}}>
      <Stack.Screen name="Tweets" component={Tweets}/>
      <Stack.Screen name="TweetDetails" component={TweetDetails} options={
        {title: "Tweet Details", headerStyle: {backgroundColor: "tomato"}, headerTintColor: "white"}
      }/>
    </Stack.Navigator>)
  }

  const Tab = createBottomTabNavigator();
  const TabNavigator = () => {
    return (
       <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: "tomato",
          activeTintColor: "white",
          inactiveBackgroundColor: "dodgerblue",
          inactiveTintColor: "black"
        }}
       >
         <Tab.Screen name="Feed" component={StackNavigator} options={{
           tabBarIcon: ({size, color}) => <MaterialCommunityIcons name="home" size={size} color={color}/>
         }}/>
         <Tab.Screen name="Account" component={Account}/>
       </Tab.Navigator>
    )
  }
 
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
