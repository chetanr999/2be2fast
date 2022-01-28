import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import UpdatedLogs from "../screens/UpdatedLogs";
import UpdateLogsForm from "../screens/UpdateLogsForm";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Assigned Routes"
        component={UpdatedLogs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="UpdateLogsForm"
        component={UpdateLogsForm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
