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
import { AsyncStorage } from "react-native";

import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Signup from "./Signup";

import { AuthContext } from "../components/context";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Login = ({ navigation: { navigate } }) => {
  const [name, setname] = useState("Vaibhav");
  const [age, setage] = useState("21");

  const {signIn} = React.useContext(AuthContext)

  const handleSubmit = () => {
     signIn()
  };
  return (
    <View style={styles.containerTop}>
      <View style={styles.container}>
        <Text style={styles.title}>Driver Login</Text>

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
        <TextInput
          style={styles.textinput}
          placeholder="Password"
          onChangeText={(value) => setname(value)}
        />

        <View style={styles.containerForget}>
          <Text style={styles.subtitle} onPress={() => navigate("Signup")}>
            {" "}
            Sign up
          </Text>
          <Text
            style={styles.subtitle2}
            onPress={() => navigate("ForgetPassword")}
          >
            Forget Password
          </Text>
        </View>

        <LinearGradient
          colors={["#c0392b", "#f1c40f", "#8e44ad"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 1 }}
          style={styles.buttonDiv}
        >
          <TouchableOpacity onPress={()=>{signIn()}}>
            <Text style={styles.button}> LOGIN</Text>
          </TouchableOpacity>
        </LinearGradient>
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
    marginTop: 20,
    backgroundColor: "skyblue",
    padding: 10,
  },
  button: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
});

export default Login;
