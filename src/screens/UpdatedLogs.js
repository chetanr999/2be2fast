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
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Signup from "./Signup";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UpdatedLogs = ({ navigation: { navigate } }) => {
  const [state, setstate] = useState([
    {
      no: "1",
      image: "Image",
      routes: "3084578",
      collection: "5",
      missingParcel: "4",
      parcelDelevered: "4",
      carryForward: "4",
      amount: "456",
      invoiceStatus: "pending",
      date: "21-5-12",
    },
    {
      no: "2",
      image: "Image",
      routes: "3084578",
      collection: "5",
      missingParcel: "4",
      parcelDelevered: "4",
      carryForward: "4",
      amount: "456",
      invoiceStatus: "pending",
      date: "21-5-12",
    },
    {
      no: "3",
      image: "Image",
      routes: "3084578",
      collection: "5",
      missingParcel: "4",
      parcelDelevered: "4",
      carryForward: "4",
      amount: "456",
      invoiceStatus: "pending",
      date: "21-5-12",
    },
    {
      no: "4",
      image: "Image",
      routes: "3084578",
      collection: "5",
      missingParcel: "4",
      parcelDelevered: "4",
      carryForward: "4",
      amount: "456",
      invoiceStatus: "pending",
      date: "21-5-12",
    },
    {
      no: "5",
      image: "Image",
      routes: "3084578",
      collection: "5",
      missingParcel: "4",
      parcelDelevered: "4",
      carryForward: "4",
      amount: "456",
      invoiceStatus: "pending",
      date: "21-5-12",
    },
    {
      no: "6",
      image: "Image",
      routes: "3084578",
      collection: "5",
      missingParcel: "4",
      parcelDelevered: "4",
      carryForward: "4",
      amount: "456",
      invoiceStatus: "pending",
      date: "21-5-12",
    },
  ]);
  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">
        {state.map((data) => (
          <Section>
            <Cell cellStyle="RightDetail" title="No." detail={data.no} />
            <Cell cellStyle="RightDetail" title="Image" detail={data.image} />
            <Cell cellStyle="RightDetail" title="Routes" detail={data.routes} />
            <Cell
              cellStyle="RightDetail"
              title="Collection"
              detail={data.collection}
            />
            <Cell
              cellStyle="RightDetail"
              title="Missing Parcel"
              detail={data.missingParcel}
            />
            <Cell
              cellStyle="RightDetail"
              title="CarryForword"
              detail={data.carryForward}
            />
            <Cell cellStyle="RightDetail" title="Amount" detail={data.amount} />
            <Cell
              cellStyle="Basic"
              title="Invoice Status"
              cellAccessoryView={
                <View style={styles.pendingBox}>
                  <Text style={styles.invoiceStatus_text}>{data.invoiceStatus}</Text>
                </View>
              }
              contentContainerStyle={{ paddingVertical: 4 }}
            />
            <Cell cellStyle="RightDetail" title="Date" detail={data.date} />
            <Cell
              cellStyle="Basic"
              title="Actions"
              cellAccessoryView={
                <TouchableOpacity  onPress={()=> navigate("UpdateLogsForm")}>

                <View style={styles.editBox}>
                  <AntDesign
                    name="edit"
                    size={20}
                    color="darkblue"
                    style={{ textAlign: "center" }}
                  />
                </View>
                </TouchableOpacity>
              }
              contentContainerStyle={{ paddingVertical: 4 }}
            />
          </Section>
        ))}
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
  editBox: {
    backgroundColor: "#fff",
    width: 50,
    borderRadius: 10,
    padding: 5,
    borderWidth: 1,
    borderColor: "darkblue",
  },
  pendingBox: {
    backgroundColor: "#ffc107",
    width: 80,
    borderRadius: 10,
    padding: 5,
  },
  invoiceStatus_text: {
    color: "white",
    textAlign: "center",
  },
});
export default UpdatedLogs;
