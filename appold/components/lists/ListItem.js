import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import {MaterialCommunityIcons} from "@expo/vector-icons";


import AppText from "../AppText";
import colors from "../../config/colors";

export default function ListItem({ title, subTitle, image, ImageComponent, onPress, rightActions, showChevron }) {
  return (
    <Swipeable renderRightActions={rightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent && <ImageComponent/>}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.textContainer}>
            <AppText style={styles.title}>{title}</AppText>
            {subTitle && <AppText numberOfLines={3} style={styles.subTitle}>{subTitle}</AppText>}
          </View>
          {showChevron && <MaterialCommunityIcons name="chevron-right" size={25} color={colors.medium}/>}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: colors.white,
    alignItems: "center"
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: colors.medium,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 10,
    flex: 1
  },
  title: {
    fontWeight: "500",
  },
});
