import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInputList from './ImageInputList';
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from 'formik';

function FormImagePicker({name}) {

  const {errors, touched, values, setFieldTouched, setFieldValue} = useFormikContext();

  const onAddImage = (uri) => {
    setFieldValue(name, [...values[name], uri]);
  }
  const onRemoveImage = (uri) => {
    setFieldValue(name, values[name].filter((imageUris)=> imageUris !== uri));
  }

  return (
    <>
        <ImageInputList onBlur={() => setFieldTouched(name)} imageUris={values[name]} onAddImage={onAddImage} onRemoveImage={onRemoveImage}/>
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {}
});

export default FormImagePicker;