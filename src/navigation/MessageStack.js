import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import "react-native-gesture-handler";

import DailyLogs from "../screens/DailyLogs";
import Messages from "../screens/Messages";
import Images from "../screens/Image";

const Stack = createStackNavigator();
export default function App() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Message"
                component={Messages}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Images"
                component={Images}
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
