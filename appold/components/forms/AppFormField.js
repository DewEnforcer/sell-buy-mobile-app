import React from 'react'
import { StyleSheet} from 'react-native'
import PropTypes from "prop-types";
import {useFormikContext} from "formik";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";


// autoCapitalize="none" autoCorrect={false} keyboardType="email-address" textContentType="emailAddress"/>

export default function AppFormField({name, ...rest}) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext();

    return (
        <>
            <AppTextInput {...rest} onBlur={() => setFieldTouched(name)} onChangeText={handleChange(name)}/>
            <ErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

AppFormField.propTypes = {
    name: PropTypes.string.isRequired
}

const styles = StyleSheet.create({})
