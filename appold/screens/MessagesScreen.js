import React, {useState} from 'react'
import { StyleSheet, FlatList, View } from 'react-native'

import {ListItem, ListItemDeleteAction, ListItemSeperator} from "../components/lists";

import Screen from "../components/Screen";

const initMsgs = [
    {id: 1, title: "t1", description: "d1", image: require("../assets/mosh.jpg")},
    {id: 2, title: "t2", description: "d2", image: require("../assets/mosh.jpg")}
]

export default function MessagesScreen() {

    const [messages, setMessages] = useState(initMsgs);
    const [refreshing, setRefreshing] = useState(false);

    const onMessagePress = (item) => {
        console.log("Pressed", item);
    }
    const onMessageDelete = (item) => {
        console.log("Delete", item);
        const messagesNew = messages.filter(m => m.id !== item.id);
        setMessages(messagesNew);
    }

    return (
        <Screen style={styles.screen}>
            <FlatList 
            numberOfColumns={3}
            data={messages} 
            keyExtractor={m => m.id.toString()}
            renderItem={({item, index, seperators}) => <ListItem image={item.image} showChevron title={item.title} subTitle={item.description} onPress={() => onMessagePress(item)} rightActions={() => <ListItemDeleteAction onPress={() => onMessageDelete(item)}></ListItemDeleteAction>}/>}
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages(
                    [
                        {id: 2, title: "t2", description: "d2", image: require("../assets/mosh.jpg")}
                    ]
                )
            }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})
