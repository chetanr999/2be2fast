import React from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../components/context";
const DrawerContent = ({ navigation, ...props }) => {
  const { signOut } = React.useContext(AuthContext)
  const closeMenu = () => {
    navigation.closeDrawer();
  };

  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: "#EB3349" }}>
      <DrawerContentScrollView {...props}>
        <View>
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            color="#EB3349"
            style={{ margin: 10 }}
            onPress={closeMenu}
          />

          <TouchableOpacity onPress={() => navigation.navigate("Daily Logs")}>
            <LinearGradient
              start={{ x: 0.0, y: 0.25 }}
              end={{ x: 1.0, y: 1.0 }}
              colors={["#EB3349", "#F45C43"]}
              style={styles.content}
            >
              <FontAwesome name="edit" size={24} color="white" />
              <Text style={[styles.title, { color: "#fff" }]}>Daily Logs</Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.content}
            onPress={() => navigation.navigate("Updated Logs")}
          >
            <Feather name="book-open" size={24} color="black" />
            <Text style={styles.title}>Updated Logs</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.content}
            onPress={() => navigation.navigate("Messages")}
          >
            <Feather name="message-square" size={24} color="black" />
            <Text style={styles.title}>Messages</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.content}
            onPress={() => navigation.navigate("Rota")}
          >
            <AntDesign name="deleteuser" size={24} color="black" />
            <Text style={styles.title}>Rota</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity onPress={() => {signOut()}}>
        <View style={styles.drawerBottomSection}>
          <Text style={{ fontSize: 18 }}>Log out</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    width: "100%",
    padding: 10,
    marginTop: 20,
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    marginTop: 3,
    marginLeft: 20,
  },
  image: {
    width: 30,
    height: 30,
    marginLeft: 20,
    tintColor: "black",
  },
  drawerBottomSection: {
    marginBottom: 30,
    height: 50,
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F1F2F2",
  },
});

export default DrawerContent;
