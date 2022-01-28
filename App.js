import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import { AsyncStorage } from "react-native";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import StackNavigator from "./src/navigation/StackNavigator";
import { View, ActivityIndicator } from "react-native";
import { AuthContext } from "./src/components/context";

export default function App() {
  const [userToken, setUserToken] = useState(null);
  const [loading, setLoading] = useState(true);
  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken("HelloIamToken");
      setLoading(false);
    },
    signOut: () => {
      setUserToken(null);
      setLoading(false);
    },
    signUp: () => {
      setUserToken("HelloIamToken");
      setLoading(false);
    },
  }));
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      {userToken !== null ? <DrawerNavigator /> : <StackNavigator />}
    </AuthContext.Provider>
  );
}
