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
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import Signup from "./Signup";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Rota = () => {
  const [state, setstate] = useState([
    {
      no: "1",
      date: "5-12-2018",
      description: "Admin",
      Status: "Dis-approve",
      Action: "Delete",
    },
    {
      no: "1",
      date: "5-12-2018",
      description: "Admin",
      Status: "Approved",
      Action: "Delete",
    },
    {
      no: "1",
      date: "5-12-2018",
      description: "Admin",
      Status: "Dis-approve",
      Action: "Delete",
    },
    {
      no: "1",
      date: "5-12-2018",
      description: "Admin",
      Status: "Approved",
      Action: "Delete",
    },
    {
      no: "1",
      date: "5-12-2018",
      description: "Admin",
      Status: "Dis-approve",
      Action: "Delete",
    },
    {
      no: "1",
      date: "5-12-2018",
      description: "Admin",
      Status: "Dis-approve",
      Action: "Delete",
    },
  ]);
  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">
        {state.map((data) => {
          return (
            <Section>
              <Cell cellStyle="RightDetail" title="No." detail={data.no} />
              <Cell cellStyle="RightDetail" title="Date" detail={data.date} />

              <Cell
                cellStyle="RightDetail"
                title="Description"
                detail={data.description}
              />
              <Cell
                cellStyle="Basic"
                title="Status"
                cellAccessoryView={
                  data.Status == "Approved" ? (
                    <View style={styles.aprovedBox}>
                      <Text style={styles.disaaproveBox_text}>
                        {data.Status}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.disaaproveBox}>
                      <Text style={styles.disaaproveBox_text}>
                        {data.Status}
                      </Text>
                    </View>
                  )
                }
                contentContainerStyle={{ paddingVertical: 4 }}
              />
              <Cell
                cellStyle="Basic"
                title="Action"
                cellAccessoryView={
                  <View style={styles.deleteBox}>
                    <AntDesign
                      name="delete"
                      size={20}
                      color="#dc3545"
                      style={{ textAlign: "center" }}
                    />
                  </View>
                }
                contentContainerStyle={{ paddingVertical: 4 }}
              />
            </Section>
          );
        })}
      </TableView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  stage: {
    backgroundColor: "#EFEFF4",
    paddingTop: 20,
    paddingBottom: 20,
  },
  deleteBox: {
    backgroundColor: "#fff",
    width: 100,
    borderRadius: 10,
    padding: 5,
    borderWidth:1,
    borderColor:"#dc3545"
  },
  disaaproveBox: {
    backgroundColor: "#dc3545",
    width: 100,
    borderRadius: 10,
    padding: 5,
  },
  aprovedBox: {
    backgroundColor: "green",
    width: 100,
    borderRadius: 10,
    padding: 5,
  },
  disaaproveBox_text: {
    color: "white",
    textAlign: "center",
  },
});

export default Rota;
