import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default function Icon({name, size, backgroundColor}) {
    return (
        <View style={{
            backgroundColor: backgroundColor,
            width: size,
            height: size,
            borderRadius: size/2,
            justifyContent: "center",
            alignItems: "center"
        }}>
           <MaterialCommunityIcons size={size/2} name={name}/> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor
    }
})
