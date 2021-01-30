import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";

import AppText from './AppText'
import defaultStyles from "../config/styles";

export default function PickerItem({label, icon, color, size, onPress}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <View style={styles.contentBox}>
                <View style={[styles.iconBox, {
                    backgroundColor: color,
                    width: size,
                    height: size,
                    borderRadius: size/2        
                }]}>
                    <MaterialCommunityIcons name={icon} size={size/2} color="white"/>
                </View>
                <AppText style={[styles.text, defaultStyles.text]}>{label}</AppText>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    contentBox: {
        alignItems: "center",
        justifyContent: "center"
    },
    iconBox: {
        alignItems: "center",
        justifyContent: "center"
    },  
    text: {
    }
})
