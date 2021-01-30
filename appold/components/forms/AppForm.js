import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Formik} from "formik";

export default function AppForm({initialValues, onSubmit, schema, children}) {
    return (
        <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={schema}
    >
        {() => <>
            {children}
        </>}
    </Formik>
    )
}
