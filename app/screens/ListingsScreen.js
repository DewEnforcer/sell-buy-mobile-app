import React, { useEffect, useState } from "react";
import {FlatList, StyleSheet, View } from "react-native";

import useApi from "../hooks/useApi";
import ActivityIndicator from "../components/ActivityIndicator";
import Card from "../components/Card";
import colors from "../config/colors";
import Screen from "../components/Screen";
import listingsApi from "../api/listings";
import AppText from "../components/Text";
import AppButton from "../components/Button";

import routes from "../components/navigation/routes";

function ListingsScreen({navigation}) {
  const {data: listings, error , loading, request: getListings} = useApi(listingsApi.getListings);

  useEffect(() => {
    getListings();
  }, [])

  return (
    <>
    <ActivityIndicator visible={loading} source={require("../assets/animations/loader.json")}/>
    <Screen style={styles.screen}>
      {error && <View style={{alignItems: "center"}}>
        <AppText>Couldnt retrieve the listings</AppText>
        <AppButton title="ok" onPress={getListings}/>
      </View>}
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            imageUrl={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
            thumbnailUrl={item.images[0].thumbnailUrl}
          />
        )}
      />
    </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default ListingsScreen;
