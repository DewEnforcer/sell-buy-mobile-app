import React from 'react'
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native'

import {MaterialCommunityIcons} from "@expo/vector-icons"
import colors from '../config/colors'

export default function SectionItem({sectionTitle, icon, color}) {
    console.log(sectionTitle);

    return (
        <TouchableHighlight onPress={() => console.log("Pressed section item")}>
            <View style={styles.container}>
                <View style={[styles.iconWrapper, {backgroundColor: color}]}>
                    <MaterialCommunityIcons name={icon} size={20} color={"white"}/>
                </View>
                <Text style={styles.title}>{sectionTitle}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 10,
        backgroundColor: colors.white,
        flexDirection: "row",
        alignItems: "center"
    },
    iconWrapper: {
        backgroundColor: colors.primary,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 5
    },
    title: {
        
    }
})
