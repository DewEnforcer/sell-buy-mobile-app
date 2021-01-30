import React, {useState} from "react";
import { StyleSheet, Modal } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";

import useApi from "../hooks/useApi";
import listingsApi from "../api/listings";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import useLocation from "../hooks/useLocation";
import AppText from "../components/Text";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  images: Yup.array().min(1, "Please enter at least one image"),
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
});

const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
];

const initialValues = {
          images: [],
          title: "",
          price: "",
          description: "",
          category: null,
        }

function ListingEditScreen() {
  const location = useLocation();
  const [loadProgress, setLoadProgress] = useState(0);
  const [uploadVisible, setUploadVisible] = useState(false);
  const {data, error, loading, request: submitListing} = useApi(listingsApi.submitListing);

  const handleUploadProgress = (loaded) => {
    setLoadProgress(loaded);
  }

  const handleAnimationFinished = () => {
    setUploadVisible(false);
  }

  const handleSubmitListing = async (values, {resetForm}) => {
    setUploadVisible(true);
    const {data, ok} = await submitListing({...values, location}, handleUploadProgress);
    if (!ok) {
      setUploadVisible(false);
      return alert("Couldnt save the listing");
    }
    resetForm();
  }

  return (
    <Screen style={styles.container}>
      <Form
        initialValues={initialValues}
        onSubmit={handleSubmitListing}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images"/>
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numeric"
          maxLength={8}
          name="price"
          placeholder="Price"
          width={120}
        />
        <Picker
          items={categories}
          name="category"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Category"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="Post" />
      </Form>
      <UploadScreen loadProgress={loadProgress} visible={loading} onAnimationFinish={handleAnimationFinished}/>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;
