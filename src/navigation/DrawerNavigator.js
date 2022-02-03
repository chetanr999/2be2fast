import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  Pressable,
  TextInput,
  Modal,
  Switch,
  ToastAndroid,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerContent from "./DrawerContent";

import "react-native-gesture-handler";

import DailyLogs from "../screens/DailyLogs";
import UpdatedLogs from "../screens/UpdatedLogs";
import Messages from "../screens/Messages";
import Rota from "../screens/Rota";
import UpdatedLogsStack from "./UpdatedLogsStack";
import DailyLogsStack from "./DailyLogsStack";

const color_main = "#6301ed" //f4511e

const Drawer = createDrawerNavigator();
export default function App({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const [enabled, setEnabled] = useState(false);
  const [description,setdescription]=React.useState("");

  const toggleSwitch = () => {
    setEnabled((oldValue) => !oldValue);
  };

  const applyrota=async()=>{
    if(description.length==0){
      Alert.alert("Oops","Please enter description...");
      return;
    }
    setModalVisible(!modalVisible);
    
    try{
      let bodyContent = new FormData();
      bodyContent.append("date",date.toString());
      bodyContent.append("desc", description);
      bodyContent.append("driver_id", 1);
      const response = await fetch("https://2be2fast.com/soft/aplly_Leaves", {
        method: "POST",
        body: bodyContent,
        headers: {},
      });
      console.log(await response.json());
    }
    catch(e){
      console.log(e)
    }
    ToastAndroid.show("Application Submitted",ToastAndroid.SHORT);
  }

  const thumbColorOn = Platform.OS === "android" ? "#0cd1e8" : "#f3f3f3";
  const thumbColorOff = Platform.OS === "android" ? "#f04141" : "#f3f3f3";
  const trackColorOn = Platform.OS === "android" ? "#98e7f0" : "#0cd1e8";
  const trackColorOff = Platform.OS === "android" ? "#f3adad" : "#f04141";
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          drawerStyle: {
            width: 220,
          },
        }}
        drawerContent={(props) => (
          <DrawerContent navigation={navigation} {...props} />
        )}
      >
        <Drawer.Screen
          name="Daily Logs"
          component={DailyLogsStack}
          options={{
            headerStyle: {
              backgroundColor: color_main,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => setModalVisible(true)}>
                  <View style={styles.button_Div}>
                    <Text style={styles.button_text}>ROTA</Text>
                  </View>
                </Pressable>
                <Switch
                  onValueChange={toggleSwitch}
                  value={enabled}
                  thumbColor={enabled ? "white" : "white"}
                  trackColor={{ false: "grey", true: "green" }}
                  ios_backgroundColor={trackColorOff}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Updated Logs"
          component={UpdatedLogsStack}
          options={{
            headerStyle: {
              backgroundColor: color_main,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => setModalVisible(true)}>
                  <View style={styles.button_Div}>
                    <Text style={styles.button_text}>ROTA</Text>
                  </View>
                </Pressable>
                <Switch
                  onValueChange={toggleSwitch}
                  value={enabled}
                  thumbColor={enabled ? "white" : "white"}
                  trackColor={{ false: trackColorOff, true: "green" }}
                  ios_backgroundColor={trackColorOff}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Messages"
          component={Messages}
          options={{
            headerStyle: {
              backgroundColor: color_main,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => setModalVisible(true)}>
                  <View style={styles.button_Div}>
                    <Text style={styles.button_text}>ROTA</Text>
                  </View>
                </Pressable>
                <Switch
                  onValueChange={toggleSwitch}
                  value={enabled}
                  thumbColor={enabled ? "white" : "white"}
                  trackColor={{ false: trackColorOff, true: "green" }}
                  ios_backgroundColor={trackColorOff}
                />
              </View>
            ),
          }}
        />
        <Drawer.Screen
          name="Rota"
          component={Rota}
          options={{
            headerStyle: {
              backgroundColor: color_main,
            },
            headerTintColor: "#fff",
            headerTitleStyle: {
              fontWeight: "bold",
            },
            headerRight: () => (
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Pressable onPress={() => setModalVisible(true)}>
                  <View style={styles.button_Div}>
                    <Text style={styles.button_text}>ROTA</Text>
                  </View>
                </Pressable>
                <Switch
                  onValueChange={toggleSwitch}
                  value={enabled}
                  thumbColor={enabled ? "white" : "white"}
                  trackColor={{ false: trackColorOff, true: "green" }}
                  ios_backgroundColor={trackColorOff}
                />
              </View>
            ),
          }}
        />
      </Drawer.Navigator>

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
            <View>
              <View>
                <Button
                  onPress={showDatepicker}
                  title={date.toString().slice(0, 15)}
                />
              </View>

              {show && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
            <View style={styles.box}>
              <View style={styles.form_label}>
                <Text style={styles.form_label_text}>Description: </Text>
              </View>
              <View style={styles.form_textInput_div}>
                <TextInput
                onChangeText={setdescription}
                  multiline={true}
                  style={styles.textinput}
                  placeholder="Enter Description"
                />
              </View>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => applyrota()}
              >
                <Text style={styles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button_Div: {
    width: 70,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
    borderRadius: 5,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0,
    shadowRadius: 4.65,

    elevation: 8,
    marginRight: 20,
  },
  button_text: {
    color: "white",
    textAlign: "center",
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
  button: {
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
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  box: {
    display: "flex",
    alignItems: "center",
    marginVertical: 20,
  },
  form_label_text: {
    fontSize: 20,
    width: 200,
  },
  textinput: {
    borderWidth: 0,
    borderBottomWidth: 1,
    width: 200,
    borderColor: "black",
    padding: 8,
  },
});
