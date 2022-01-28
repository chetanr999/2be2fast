import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import DailyLogs from "../screens/DailyLogs";

const Stack = createStackNavigator();
export default function App() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Assigned Routes"
        component={DailyLogs}
        options={{ headerShown: true }}
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
