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
  Image,
  Alert
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Signup from "./Signup";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import { AntDesign } from "@expo/vector-icons";
import * as FileSystem from 'expo-file-system';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const UpdatedLogs = ({ navigation: { navigate } }) => {
  // const [state, setstate] = useState([
  //   {
  //     no: "1",
  //     image: "Image",
  //     routes: "3084578",
  //     collection: "5",
  //     missingParcel: "4",
  //     parcelDelevered: "4",
  //     carryForward: "4",
  //     amount: "456",
  //     invoiceStatus: "pending",
  //     date: "21-5-12",
  //   },
  //   {
  //     no: "2",
  //     image: "Image",
  //     routes: "3084578",
  //     collection: "5",
  //     missingParcel: "4",
  //     parcelDelevered: "4",
  //     carryForward: "4",
  //     amount: "456",
  //     invoiceStatus: "pending",
  //     date: "21-5-12",
  //   },
  //   {
  //     no: "3",
  //     image: "Image",
  //     routes: "3084578",
  //     collection: "5",
  //     missingParcel: "4",
  //     parcelDelevered: "4",
  //     carryForward: "4",
  //     amount: "456",
  //     invoiceStatus: "pending",
  //     date: "21-5-12",
  //   },
  //   {
  //     no: "4",
  //     image: "Image",
  //     routes: "3084578",
  //     collection: "5",
  //     missingParcel: "4",
  //     parcelDelevered: "4",
  //     carryForward: "4",
  //     amount: "456",
  //     invoiceStatus: "pending",
  //     date: "21-5-12",
  //   },
  //   {
  //     no: "5",
  //     image: "Image",
  //     routes: "3084578",
  //     collection: "5",
  //     missingParcel: "4",
  //     parcelDelevered: "4",
  //     carryForward: "4",
  //     amount: "456",
  //     invoiceStatus: "pending",
  //     date: "21-5-12",
  //   },
  //   {
  //     no: "6",
  //     image: "Image",
  //     routes: "3084578",
  //     collection: "5",
  //     missingParcel: "4",
  //     parcelDelevered: "4",
  //     carryForward: "4",
  //     amount: "456",
  //     invoiceStatus: "pending",
  //     date: "21-5-12",
  //   },
  // ]);
  const [state, setstate] = React.useState(null);

  const handleFileDownload = async(uri, filename) => {
try {
  
  var fileUri = "" + FileSystem.documentDirectory + filename;
  var downloadedFile = await FileSystem.downloadAsync(uri, fileUri);
  if (downloadedFile.status != 200) {
    Alert.alert("Error Occured!! Try again later");
  }
} catch (error) {
  Alert.alert("Error Occured!! Try again later");
  
}
   
  }

  React.useEffect(() => {
    (async () => {
      try {
        let bodyContent = new FormData();
        bodyContent.append("driver_id", 1);
        const response = await fetch("https://2be2fast.com/soft/fetch_driver_logs", {
          method: "POST",
          body: bodyContent,
          headers: {},
        });
        const temp = await response.json();
        setstate(temp.data);
      }
      catch (e) {
        console.log(e)
      }
    })()
  }, [state]);


  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">
        {state ? state.map((data, i) => (
          <Section>
            <Cell cellStyle="RightDetail" title="No." detail={i + 1} />
            {/* <Cell cellStyle="RightDetail" title="Image" detail={data.image} /> */}
            <Cell
              cellStyle="Basic"
              title="Image"
              cellAccessoryView={
                <View style={{}}>
                  <Image source={{ uri: 'https://2be2fast.com/soft/' + data.image }}
                    style={{ width: 40, height: 40 }} />
                </View>
              }
              contentContainerStyle={{ paddingVertical: 4 }}
            />
            <Cell cellStyle="RightDetail" title="Routes" detail={data.routes} />
            <Cell
              cellStyle="RightDetail"
              title="Collection"
              detail={data.collection}
            />
            <Cell
              cellStyle="RightDetail"
              title="Missing Parcel"
              detail={data.missing_parcels}
            />
            <Cell
              cellStyle="RightDetail"
              title="CarryForword"
              detail={data.carry_forward}
            />
            <Cell cellStyle="RightDetail" title="Amount" detail={data.total_amount} />
            <Cell
              cellStyle="Basic"
              title="Invoice Status"
              cellAccessoryView={
                <View style={data.invoice_status == "2" ? styles.pendingBox : styles.pendingBoxGreen}>
                  <Text style={styles.invoiceStatus_text}>{data.invoice_status == "1" ? "Approved" : "Pending"}</Text>
                </View>
              }
              contentContainerStyle={{ paddingVertical: 4 }}
            />
            <Cell cellStyle="RightDetail" title="Date" detail={data.date} />
            {data.invoice_status == "2" ?
              <Cell
                cellStyle="Basic"
                title="Actions"
                cellAccessoryView={
                  <TouchableOpacity onPress={() => navigate("UpdateLogsForm", data)}>

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
              /> :
              <Cell
                cellStyle="Basic"
                title="Download Invoice"
      

                cellAccessoryView={
                  <TouchableOpacity onPress={() => handleFileDownload(data.invoice_path, data.date )}>

                    <View style={styles.editBox}>
                      <AntDesign
                        name="download"
                        size={20}
                        color="darkblue"
                        style={{ textAlign: "center" }}
                      />
                    </View>
                  </TouchableOpacity>
                }
                contentContainerStyle={{ paddingVertical: 4 }}
              />
            }
          </Section>
        )) : null}
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
  pendingBoxGreen: {
    backgroundColor: "green",
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
