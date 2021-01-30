import React from 'react'
import Constansts from "expo-constants";
import { SafeAreaView, StyleSheet } from 'react-native';

export default function Screen({children, style}) {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constansts.statusBarHeight,
        flex: 1
    }
})
