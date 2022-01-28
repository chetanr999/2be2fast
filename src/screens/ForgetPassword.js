import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Signup from "./Signup";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const ForgetPassword = () => {
  const [name, setname] = useState("Vaibhav");
  const [age, setage] = useState("21");
  return (
    <View style={styles.containerTop}>
      <View style={styles.container}>
        <Text style={styles.title}>Forget Password</Text>

        <FontAwesome
          name="truck"
          size={80}
          color="black"
          style={styles.iconTruck}
        />
        <TextInput
          style={styles.textinput}
          placeholder="Email"
          onChangeText={(value) => setname(value)}
        />

        <TouchableOpacity style={styles.buttonDiv}>
          <Text style={styles.button}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerTop: {
    height: windowHeight,
    width: windowWidth,
    backgroundColor: "#f2f2f2",
    display: "flex",
    // justifyContent:"center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    backgroundColor: "white",
    width: 300,

    borderRadius: 10,
    padding: 8,
    paddingVertical: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  iconTruck: {
    textAlign: "center",
    marginTop: 15,
  },
  textinput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    width: 200,
    borderColor: "black",
    padding: 8,
    marginTop: 20,
  },
  containerForget: {
    marginTop: 40,
    display: "flex",
    flexDirection: "row",
  },
  subtitle: {
    fontSize: 15,
    marginRight: 30,
  },
  subtitle2: {
    fontSize: 15,
    marginRight: 0,
  },
  buttonDiv: {
    width: 200,
    borderRadius: 500,
    marginTop: 40,
    backgroundColor: "blue",
    padding: 10,
  },
  button: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});

export default ForgetPassword;
