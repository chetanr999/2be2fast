import React, { useState } from "react";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../components/context";

const color_main = "#6301ed" //f4511e

const DrawerContent = ({ navigation, ...props }) => {
  const { signOut } = React.useContext(AuthContext);
  const closeMenu = () => {
    navigation.closeDrawer();
  };

  const [activeRoute, setactiveRoute] = useState("1");
  return (
    <View style={{ flex: 1, borderWidth: 1, borderColor: color_main }}>
      <DrawerContentScrollView {...props}>
        <View>
          <MaterialCommunityIcons
            name="arrow-left"
            size={25}
            color= {color_main}
            style={{ margin: 10 }}
            onPress={closeMenu}
          />

          <TouchableOpacity
            onPress={() => {
              setactiveRoute("1");
              navigation.navigate("Daily Logs");
            }}
          >
            {activeRoute === "1" ? (
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={[color_main, color_main]}
                style={styles.content}
              >
                <FontAwesome name="edit" size={24} color="white" />
                <Text style={[styles.title, { color: "#fff" }]}>
                  Daily Logs
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.content}>
                <FontAwesome name="edit" size={24} color="black" />
                <Text style={[styles.title, { color: "black" }]}>
                  Daily Logs
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setactiveRoute("2");
              navigation.navigate("Updated Logs");
            }}
          >
            {activeRoute === "2" ? (
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={[color_main, color_main]}
                style={styles.content}
              >
                <FontAwesome name="edit" size={24} color="white" />
                <Text style={[styles.title, { color: "#fff" }]}>
                  Updated Logs
                </Text>
              </LinearGradient>
            ) : (
              <View style={styles.content}>
                <Feather name="edit" size={24} color="black" />
                <Text style={styles.title}>Updated Logs</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setactiveRoute("3");
              navigation.navigate("Messages");
            }}
          >
            {activeRoute === "3" ? (
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={[color_main, color_main]}
                style={styles.content}
              >
                <Feather name="message-square" size={24} color="white" />

                <Text style={[styles.title, { color: "#fff" }]}>Messages</Text>
              </LinearGradient>
            ) : (
              <View style={styles.content}>
                <Feather name="message-square" size={24} color="black" />
                <Text style={styles.title}>Messages</Text>
              </View>
            )}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setactiveRoute("4");
              navigation.navigate("Rota");
            }}
          >
            {activeRoute === "4" ? (
              <LinearGradient
                start={{ x: 0.0, y: 0.25 }}
                end={{ x: 1.0, y: 1.0 }}
                colors={[color_main, color_main]}
                style={styles.content}
              >
                <AntDesign name="deleteuser" size={24} color="white" />

                <Text style={[styles.title, { color: "#fff" }]}>Rota</Text>
              </LinearGradient>
            ) : (
              <View style={styles.content}>
                <AntDesign name="deleteuser" size={24} color="black" />
                <Text style={styles.title}>Rota</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
      >
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
