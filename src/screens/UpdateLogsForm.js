import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { LinearGradient } from "expo-linear-gradient";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UpdateLogsForm = () => {
  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
  };
  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <View style={styles.box}>
        <View style={styles.form_label}>
          <Text style={styles.form_label_text}>Collection: </Text>
        </View>
        <View style={styles.form_textInput_div}>
          <TextInput style={styles.textinput} placeholder="Collection" />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.form_label}>
          <Text style={styles.form_label_text}>Missing Parcel: </Text>
        </View>
        <View style={styles.form_textInput_div}>
          <TextInput style={styles.textinput} placeholder="Missing Parcel" />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.form_label}>
          <Text style={styles.form_label_text}>Parcel Delivered: </Text>
        </View>
        <View style={styles.form_textInput_div}>
          <TextInput style={styles.textinput} placeholder="Parcel Delivered" />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.form_label}>
          <Text style={styles.form_label_text}>Carry Forward: </Text>
        </View>
        <View style={styles.form_textInput_div}>
          <TextInput style={styles.textinput} placeholder="Carry Forward" />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.form_label}>
          <Text style={styles.form_label_text}>Total Amount: </Text>
        </View>
        <View style={styles.form_textInput_div}>
          <TextInput style={styles.textinput} placeholder="Total AMount" />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.form_label}>
          <Text style={styles.form_label_text}>Routes: </Text>
        </View>
        <View style={styles.form_textInput_div}>
          <TextInput style={styles.textinput} placeholder="Routes" />
        </View>
      </View>
      <View style={styles.box}>
        <View style={styles.form_label}>
          <Text style={styles.form_label_text}>Image: </Text>
        </View>
        <TouchableOpacity
          style={styles.buttonDivFormOther}
          onPress={() => _pickDocument()}
        >
          <Text style={styles.buttonForm}>Image</Text>
        </TouchableOpacity>
      </View>
      <LinearGradient
        colors={["#c0392b", "#f1c40f", "#8e44ad"]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 1 }}
        style={styles.buttonDiv}
      >
        <TouchableOpacity>
          <Text style={styles.button}>Upload</Text>
        </TouchableOpacity>
      </LinearGradient>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    stage: {
        backgroundColor: "#EFEFF4",
        paddingTop: 20,
        paddingBottom: 20,
        alignItems:"center",
      },
  box: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  form_label_text: {
    fontSize: 20,
    width: 100,
  },
  textinput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    width: 200,
    borderColor: "black",
    padding: 8,
  },
  buttonDivFormOther: {
    width: windowWidth - 240,
    borderRadius: 10,
    marginTop: 20,
    backgroundColor: "skyblue",
    padding: 10,
    marginRight: 0,
  },
  buttonForm: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 14,
    color: "white",
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
export default UpdateLogsForm;
