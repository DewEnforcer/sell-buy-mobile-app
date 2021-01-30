import React, { useState } from 'react';
import {NavigationContainer} from "@react-navigation/native";
import AppLoading from 'expo-app-loading';

import AuthNavigator from "./app/components/navigation/AuthStackNavigator";
import TabNavigator from "./app/components/navigation/BottomTabNavigator";
import OfflineNotice from "./app/components/OfflineNotice";
import AuthContext from "./app/auth/context";
import authStorage from "./app/auth/storage";
import navigationRef from './app/components/navigation/routeNavigation';

function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState();

  const restoreUser = async () => {
    const user = await authStorage.getUser();
    if (user) setUser(user);
  }

  if (!isReady) return <AppLoading startAsync={restoreUser} onError={(error) => console.log("Error occured during app loading", error)} onFinish={() => setIsReady(true)}/>

  return (
      <AuthContext.Provider ref={navigationRef} value={{user, setUser}}>
        <OfflineNotice/>
        <NavigationContainer>
            {user ? <TabNavigator/> : <AuthNavigator/>}
        </NavigationContainer>
      </AuthContext.Provider>
  );
}

export default App;