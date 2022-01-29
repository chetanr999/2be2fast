import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { LinearGradient } from "expo-linear-gradient";
import { Camera } from "expo-camera";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import CameraModule from "./CameraModule";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const CAPTURE_SIZE = Math.floor(windowHeight * 0.08);

const UpdateLogsForm = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const _pickDocument = async () => {
    let result = await DocumentPicker.getDocumentAsync({});
    alert(result.uri);
    console.log(result);
  };
  const [image, setImage] = useState(null);
  const [camera, setShowCamera] = useState(false);
  const [hasPermission, setHasPermission] = useState(null);
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

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
          onPress={() => setModalVisible(true)}
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

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Button
              onPress={() => {
                _pickDocument();
              }}
              title="Chosse From Gallery"
            />

            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                marginVertical: 20,
              }}
            >
              {/* <View
                style={{
                  backgroundColor: "#eeee",
                  width: 120,
                  height: 120,
                  borderRadius: 100,
                  marginBottom: 8,
                }}
              ></View> */}
              <Button
                style={{ width: "30%", marginTop: 0 }}
                icon="camera"
                mode="contained"
                onPress={() => {
                  setShowCamera(true);
                }}
                title="Upload from a Camera"
              />

              {camera && (
                <CameraModule
                  showModal={camera}
                  setModalVisible={() => setShowCamera(false)}
                  setImage={(result) => setImage(result.uri)}
                />
              )}
            </View>

            <Pressable
              style={[styles.buttonCancel, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{ color: "white" }}>Cancel</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: "#EFEFF4",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 9,
  },
  buttonCancel: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    marginRight: 15,
    // alignSelf:"flex-start"
  },
});
export default UpdateLogsForm;
