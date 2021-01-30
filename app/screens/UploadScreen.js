import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import * as Progress from 'react-native-progress';

import LottieView from "lottie-react-native";

import AppText from "../components/Text";
import colors from '../config/colors';

function UploadScreen({loadProgress = 0, visible = false, onAnimationFinish}) {
  return (
    <Modal visible={visible} animationType="slide">
      <View>
        {loadProgress < 1 ? 
        <Progress.Bar progress={loadProgress} width={200} color={colors.primary}/> : 
        <LottieView onAnimationFinish={onAnimationFinish} source={require("../assets/animations/done.json")} autoPlay loop={false} style={styles.animation} />
        }
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  animation: {
    width: 150
  },
  container: {}
});

export default UploadScreen;