import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'

import ListItem from '../components/ListItem';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from "../components/Screen";
import SectionItem from '../components/SectionItem';
import colors from '../config/colors';

const sections = [
    {id: 1, title: "My Listings", icon: "format-list-bulleted", color: colors.primary},
    {id: 2, title: "My Messages", icon: "email", color: colors.secondary},
]
const actions = [
    {id: 1, title: "Log Out", icon: "logout", color: colors.yellow}
]

export default function MyAccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <ListItem title="Mosh Hamedani" subTitle="programmingwithmosh@gmail.com" image={require("../assets/mosh.jpg")} onPress={null} rightActions={null}/>
                </View>
                <View style={styles.wrapper}>
                    <FlatList
                        data={sections}
                        keyExtractor={s => s.id.toString()}
                        renderItem={({item: s, index, seperators}) => <SectionItem sectionTitle={s.title} icon={s.icon} color={s.color}/>}
                        ItemSeparatorComponent={ListItemSeperator}
                    />
                </View>
                <FlatList
                    data={actions}
                    keyExtractor={a => a.id.toString()}
                    renderItem={({item: a, index, seperators}) => <SectionItem sectionTitle={a.title} icon={a.icon} color={a.color}/>}
                    ItemSeparatorComponent={ListItemSeperator}
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
        backgroundColor: colors.light,
        flex: 1
    },
    wrapper: {
        marginHorizontal: 20
    }
})
