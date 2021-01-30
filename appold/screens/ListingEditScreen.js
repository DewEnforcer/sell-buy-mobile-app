import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import * as Yup from "yup";

import {AppForm, AppFormField, AppFormPicker, SubmitButton} from "../components/forms";
import Screen from '../components/Screen';

const schema = Yup.object().shape({
    title: Yup.string().min(1).required().label("Title"),
    price: Yup.number().required().min(1).max(10000).label("Price"),
    category: Yup.object().required().nullable().label("Category"),
    description: Yup.string().label("Description")
});

const categories = [
    {value: 1, label: "Furniture", icon: "floor-lamp", color:"#fc5c65"},
    {value: 2, label: "Cars", icon: "car", color:"#fd9644"},
    {value: 3, label: "Cameras", icon: "camera", color:"#fed330"}
  ]

export default function ListingEditScreen() { //ERRORS DONT WORK
    return (
        <Screen style={styles.container}>
            <AppForm
                initialValues={{title: "", price: "", category: null, description: ""}}
                onSubmit={({title, price, category, description}) => console.log(title, price, category, description)}
                validationSchema={schema}
            >
            <AppFormField name="title" placeholder="Title" autoCapitalize="none" autoCorrect={false}/>
            <AppFormField width="40%" name="price" placeholder="Price" keyboardType="numeric"/>
            <AppFormPicker width="50%" name="category" placeholder="Category" items={categories}/>
            <AppFormField name="description" placeholder="Description" autoCapitalize="none" autoCorrect={true} multiline numberOfLines={3}/>
            <SubmitButton title="post"/>
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
})
