import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../../config/colors'
import AppText from '../AppText'

export default function ErrorMessage({error, visible}) {
    if (!error || !visible) return null;

    return (
        <AppText style={styles.text}>{error}</AppText>
    )
}

const styles = StyleSheet.create({
    text: {
        color: colors.danger
    }
})
