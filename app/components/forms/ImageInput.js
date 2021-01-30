import React, {useEffect} from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../../config/colors";

function ImageInput({onChangeImage, imageUri: uri}) {

  useEffect(() => {
    const checkPermissions = async () => {
      const access = await ImagePicker.requestCameraPermissionsAsync();
      if (!access.granted) alert("You need to enable permissions to access camera");
    }
    checkPermissions();
  }, [])

  const selectImage = async () => {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.cancelled) onChangeImage(result.uri);
  }

  const handlePress = () => {
    if (uri) return Alert.alert("Delete", "Are you sure you want to remove this image?", [
      {text: "Yes", onPress: () => onChangeImage(uri)},
      {text: "No"}
    ])
    selectImage();
  }

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
            {!uri && <MaterialCommunityIcons name="camera" size={40} color="grey"/>}
            {uri && <Image style={styles.image} source={{uri: uri}}/>}
        </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.light,
      width: 70,
      height: 70,
      borderRadius: 10,
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden"
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default ImageInput;