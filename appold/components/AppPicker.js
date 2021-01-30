import {Picker, View, StyleSheet, TouchableWithoutFeedback, Modal, Button, FlatList} from "react-native";
import React, { useState } from "react";

import {MaterialCommunityIcons} from "@expo/vector-icons";
import colors from '../config/colors';
import AppText from "./AppText";
import Screen from "../components/Screen";
import PickerItem from "./PickerItem";
import ListItemSeperator from "./lists/ListItemSeperator";


export default function AppPicker({icon, items, onSelectItem, placeholder, selectedItem, width="100%"}) {

    const [modalOpen, setOpen] = useState(false);

    const handleItemSelect = (item) => {
        onSelectItem(item);
        setOpen(false);
    }

    return (
        <>
        <TouchableWithoutFeedback onPress={() => setOpen(true)}>
            <View style={[styles.container, {width}]}>
                {icon && <MaterialCommunityIcons name={icon} size={25} color={colors.medium}/>}
                <AppText style={[styles.textInput, placeholder ? styles.placeholder : null]}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons name="chevron-down" size={25} color={colors.medium}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalOpen} animationSlide="slide">
            <Screen>
                <Button title="Close" onPress={() => {setOpen(false)}}></Button>
                <View style={styles.listContainer}>
                    <FlatList
                        data={items}
                        keyExtractor={i => i.value.toString()}
                        renderItem={({item}) => <PickerItem size={50} icon={item.icon} color={item.color} label={item.label} onPress={() => handleItemSelect(item)}/>}
                        ItemSeparatorComponent={ListItemSeperator}
                    />
                </View>
            </Screen>
        </Modal>
        </>
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
    listContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    },
    placeholder: {
        color: colors.medium,
    },
    textInput: {
        marginLeft: 10,
        flex: 1
    }
})