import React from 'react'
import { StyleSheet, Text, View, TextInput, Platform } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../../config/colors';
import defaultStyles from "../../config/styles";

export default function AppTextInput({icon, width="100%", ...rest}) {
    return (
        <View style={[styles.container, {width}]}>
            {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium}/>}
            <TextInput placeholderTextColor={colors.medium} style={[styles.textInput, defaultStyles.text]} {...rest}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 25,
        width: "100%",
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        marginLeft: 10
    }
})
