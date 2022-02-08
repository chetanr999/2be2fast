import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Images = ({ route }) => {
  console.log(route);

  return (
    <ScrollView contentContainerStyle={styles.stage}>
     
      <Image
        source={{
          uri:route.params.data,
        }}
        style={{ width: windowWidth, height: windowHeight }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: "#EFEFF4",
    paddingTop: 20,
    paddingBottom: 20,
    width:windowWidth,
    height:windowHeight,
    justifyContent:'center',
    alignItems:"center"
  },
});
export default Images;
