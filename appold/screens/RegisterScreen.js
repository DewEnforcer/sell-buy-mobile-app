import React from 'react'
import { StyleSheet, Image } from 'react-native'

import * as Yup from "yup";

import {AppForm, AppFormField, SubmitButton} from "../components/forms"; //index , no filename required

import Screen from '../components/Screen'

const schema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().min(4).required().label("Password"),
    name: Yup.string().required().label("Name")
});

export default function RegisterScreen() {
    return (
        <Screen style={styles.container}>
            <Image source={require("../assets/logo-red.png")} style={styles.logo}/>
            <AppForm
                initialValues={{email: "", password: "", name: ""}}
                onSubmit={({email ,password, name}) => console.log(email , password, name)}
                validationSchema={schema}
            >
                <AppFormField icon="account" name="name" placeholder="Enter your name.." autoCorrect={false}/>
                <AppFormField icon="email" name="email" placeholder="Enter your email.." autoCapitalize="none" autoCorrect={false} keyboardType="email-address" textContentType="emailAddress"/>
                <AppFormField icon="lock" name="password" placeholder="Enter your password.." secureTextEntry autoCapitalize="none" autoCorrect={false} textContentType="password"/>
                <SubmitButton title="register"/>                
            </AppForm>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    }
})
