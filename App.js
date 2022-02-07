import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
// import { AsyncStorage } from "react-native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import StackNavigator from "./src/navigation/StackNavigator";
import { View, ActivityIndicator, Alert,ToastAndroid } from "react-native";
import { AuthContext } from "./src/components/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
export default function App() {
  // const [userToken, setUserToken] = useState(null);
  // const [loading, setLoading] = useState(true);

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETREIVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case "LOGIN":
        return {
          ...prevState,
          uaerName: action.id,
          userToken: action.token,
          isLoding: false,
        };
      case "LOGOUT":
        return {
          ...prevState,
          uaerName: null,
          userToken: null,
          isLoding: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoding: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(() => ({
    signIn: async (userName, password) => {
    ToastAndroid.show("Loading...",ToastAndroid.SHORT);

      let userToken;
      userToken = null;
      try {
        let bodyContent = new FormData();
        bodyContent.append("email", userName);
        bodyContent.append("password", password);

        const response = await fetch("https://2be2fast.com/soft/api_login", {
          method: "POST",
          body: bodyContent,
          headers: {},
        });
        const data = await response.json();
        if (data.status == true) {
          // console.log(data)
          try {
            userToken = data.data.Email;
            await AsyncStorage.setItem("userToken", userToken);
            ToastAndroid.show("Successfully Logged in",ToastAndroid.SHORT);

            dispatch({ type: "LOGIN", id: userName, token: userToken });
          } catch (error) {
            console.log("SIGNIN Error: s", error);
          }
        } else if(data.message =="Wrong email or password."){
          Alert.alert("Error:", "Wrong Email or Password", [
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ]);
        }
      } catch (e) {
        console.log(e);
      }
    },
    signOut: async () => {
      try {
        await AsyncStorage.removeItem("userToken");
      } catch (error) {
        console.log("SIGNIN Error: s", error);
      }
      dispatch({ type: "LOGOUT" });
    },
    signUp: () => {
      setUserToken("HelloIamToken");
      setLoading(false);
    },
  }));

  useEffect(() => {
    setTimeout(async () => {
      let userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
      } catch (error) {
        console.log("USEFFECT Error: s", error);
      }
      dispatch({ type: "REGISTER", token: userToken });
    }, 1000);
  }, []);

  if (loginState.loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      {/* {loginState.userToken !== null ? <DrawerNavigator /> : <StackNavigator />} */}
      <DrawerNavigator />
    </AuthContext.Provider>
  );
}
