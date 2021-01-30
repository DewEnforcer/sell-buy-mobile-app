import React, { useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import Screen from "../components/Screen";
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import userClient from "../api/user";
import useAuth from "../auth/useAuth";
import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  const registerApi = useApi(userClient.signUp);
  const {logIn} = useAuth();
  const [signupFailed, setSignupFailed] = useState(false);
  const [signupError, setSignupError] = useState("");

  const handleSignUp = async ({name, email, password}) => {
      setSignupFailed(false);
      const result = await registerApi.request(name, email, password);

      if (!result.ok) {
        setSignupError(result.data);
        setSignupFailed(true);
        return;
      }

      setSignupFailed(false); 
      logIn(result);
  }   

  return (
    <>
    <ActivityIndicator visible={registerApi.loading} source={require("../assets/animations/loader.json")}/>
    <Screen style={styles.container}>
      <Form
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={handleSignUp}
        validationSchema={validationSchema}
      >
        <ErrorMessage error={signupError} visible={signupFailed}/>
        <FormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" />
      </Form>
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default RegisterScreen;
