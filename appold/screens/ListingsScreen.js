import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import Screen from "../components/Screen";
import Card from "../components/Card";
import colors from '../config/colors';

const listings = [
    {id: 1, title: "Red jacket for sale", price: "$100", image: require("../assets/jacket.jpg")},
    {id: 2, title: "Couch in great condition", price: "$1000", image: require("../assets/couch.jpg")}
]

export default function ListingsScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <FlatList
                    data={listings}
                    keyExtractor={l => l.id.toString()}
                    renderItem={({item, index, seperators}) => <Card title={item.title} subTitle={item.price} image={item.image}/>}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        width: "100%",
        padding: 20
    }
})
