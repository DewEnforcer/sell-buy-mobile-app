import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {useFormikContext} from "formik";

import AppPicker from "../AppPicker";
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({name, ...rest}) { //TODO

    const {errors, touched, values, setFieldValue} = useFormikContext();

    return (
        <View>
            <AppPicker selectedItem={values[name]} onBlur={() => setFieldTouched(name)} onSelectItem={item => setFieldValue(name,item)} {...rest}/>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </View>
    )
}

const styles = StyleSheet.create({})
