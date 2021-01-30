import React from 'react';
import { View, StyleSheet } from 'react-native';
import {useNetInfo} from "@react-native-community/netinfo";
import Constants from "expo-constants";

import colors from '../config/colors';
import AppText from './Text';

function OfflineNotice() {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false) return null;

  return (
    <View style={styles.container}>
        <AppText style={styles.text}>No internet connection</AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.primary,
      width: "100%",
      padding: 5,
      alignItems: "center",
      justifyContent: "center",
      height: 50,
      position: "absolute",
      top: Constants.statusBarHeight,
      zIndex: 1
  },
  text: {
      color: colors.white
  }
});

export default OfflineNotice;