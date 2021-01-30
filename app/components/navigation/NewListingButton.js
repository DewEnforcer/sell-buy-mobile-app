import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../../config/colors';

function NewListingButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
        <View style={styles.container}>
            <MaterialCommunityIcons name="plus-circle" size={30} color="white"/>
        </View> 
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
      backgroundColor: colors.primary,
      width: 60,
      height: 60,
      borderRadius: 30,
      bottom: 15,
      borderWidth: 5,
      borderColor: "white",
      alignItems: "center",
      justifyContent: "center"
  }
});

export default NewListingButton;