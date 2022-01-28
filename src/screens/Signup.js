import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import * as DocumentPicker from "expo-document-picker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Signup = () => {
  const [name, setname] = useState("Vaibhav");
  const [age, setage] = useState("21");
  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
  };
  return (
    <View style={styles.containerTop}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.title}>Driver Signup</Text>

          <FontAwesome
            name="truck"
            size={80}
            color="black"
            style={styles.iconTruck}
          />

          <View style={styles.containerForm}>
            <TextInput
              style={styles.textinput}
              placeholder="Name"
              onChangeText={(value) => setname(value)}
            />
            <TextInput
              style={styles.textinputother}
              placeholder="Bank Name"
              onChangeText={(value) => setname(value)}
            />
          </View>
          <View style={styles.containerForm}>
            <TextInput
              style={styles.textinput}
              placeholder="Mobile"
              onChangeText={(value) => setname(value)}
            />
            <TextInput
              style={styles.textinputother}
              placeholder="Account Number"
              onChangeText={(value) => setname(value)}
            />
          </View>
          <View style={styles.containerForm}>
            <TextInput
              style={styles.textinput}
              placeholder="Email"
              onChangeText={(value) => setname(value)}
            />
            <TextInput
              style={styles.textinputother}
              placeholder="Password"
              onChangeText={(value) => setname(value)}
            />
          </View>
          <View style={styles.containerForm}>
            <TextInput
              style={styles.textinput}
              placeholder="Address"
              onChangeText={(value) => setname(value)}
            />
            <TextInput
              style={styles.textinputother}
              placeholder="Confirm Password"
              onChangeText={(value) => setname(value)}
            />
          </View>
          <View style={styles.containerForm}>
            <TextInput
              style={styles.textinput}
              placeholder="Short Code"
              onChangeText={(value) => setname(value)}
            />
            <TouchableOpacity
              style={styles.buttonDivFormOther}
              onPress={() => _pickDocument()}
            >
              <Text style={styles.buttonForm}>Profile Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerForm}>
            <TouchableOpacity
              style={styles.buttonDivForm}
              onPress={() => _pickDocument()}
            >
              <Text style={styles.buttonForm}>Bank Statement</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonDivFormOther}
              onPress={() => _pickDocument()}
            >
              <Text style={styles.buttonForm}>Driving License</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerForm}>
            <TouchableOpacity
              style={styles.buttonDivFormOther}
              onPress={() => _pickDocument()}
            >
              <Text style={styles.buttonForm}>Insurance</Text>
            </TouchableOpacity>
            
          </View>


          <LinearGradient
            colors={["#c0392b", "#f1c40f", "#8e44ad"]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 1 }}
            style={styles.buttonDiv}
          >
            <TouchableOpacity>
              <Text style={styles.button}>SIGN UP</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </ScrollView>
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
    backgroundColor: "white",
    width: windowWidth -20 ,
    
    borderRadius: 10,
    padding: 8,
    paddingTop: 80,
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
    width: windowWidth - 240,
    borderColor: "black",
    padding: 8,
    marginTop: 20,
    marginRight: 40,
  },
  textinputother: {
    borderWidth: 0,
    borderBottomWidth: 1,
    width: windowWidth - 240,
    borderColor: "black",
    padding: 8,
    marginTop: 20,
    marginRight: 0,
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
  buttonDivForm: {
    width: windowWidth - 240,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    marginRight: 40,
  },
  buttonDivFormOther: {
    width: windowWidth - 240,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    marginRight: 0,
  },
  button: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
  },
  buttonForm: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
  },
  containerForm: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Signup;
