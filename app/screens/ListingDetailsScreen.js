import React from "react";
import { View, StyleSheet, Keyboard, KeyboardAvoidingView } from "react-native";
import {Image} from "react-native-expo-image-cache";
import * as Yup from "yup";
import * as Notifications from 'expo-notifications';

import colors from "../config/colors";
import ListItem from "../components/lists/ListItem";
import Text from "../components/Text";
import { Form, FormField, SubmitButton } from "../components/forms";
import { sendMessage } from "../api/messages";

const schema = Yup.object().shape({
  name: Yup.string().min(5).required().label("Message")
})

function ListingDetailsScreen({route}) {
  const listings = route.params;

  const handleSubmit = async (body, resetForm) => {
    Keyboard.dismiss();

    const {data, ok} = await sendMessage({...body, listingId: listings.id});
    if (!ok) return;

    resetForm();

    Notifications.scheduleNotificationAsync({
      content: {
        title: 'Success!',
        body: "Your message has been successfully sent!",
      },
      trigger: null,
    });
  }

  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 100} > 
    <View>
      <Image style={styles.image} uri={listings.images[0].url} preview={listings.images[0].thumbnailUrl} tint="light"/>
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{listings.title}</Text>
        <Text style={styles.price}>${listings.price}</Text>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subTitle="5 Listings"
          />
        </View>
      </View>
      <Form 
        initialValues={{message: ""}}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormField placeholder="Message.." name="message"/>
        <SubmitButton title="contact seller"/>
      </Form>
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40,
  },
});

export default ListingDetailsScreen;
