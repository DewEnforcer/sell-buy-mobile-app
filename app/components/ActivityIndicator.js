import React from 'react';
import LottieView from "lottie-react-native";
import { View, StyleSheet } from 'react-native';
import colors from '../config/colors';

function ActivityIndicator({source, loop = true, visible = false}) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <LottieView source={source} autoPlay loop={loop}/>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    zIndex: 1,
    position: "absolute",
    backgroundColor: colors.light,
    opacity: 0.5
  }
})


export default ActivityIndicator;