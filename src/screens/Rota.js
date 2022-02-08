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
  Alert,
  ToastAndroid
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Cell, Section, TableView } from "react-native-tableview-simple";
import Signup from "./Signup";
import { useFocusEffect } from '@react-navigation/native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Rota = () => {
  // const [state, setstate] = useState([
  //   {
  //     no: "1",
  //     date: "5-12-2018",
  //     description: "Admin",
  //     Status: "Dis-approve",
  //     Action: "Delete",
  //   },
  //   {
  //     no: "1",
  //     date: "5-12-2018",
  //     description: "Admin",
  //     Status: "Approved",
  //     Action: "Delete",
  //   },
  //   {
  //     no: "1",
  //     date: "5-12-2018",
  //     description: "Admin",
  //     Status: "Dis-approve",
  //     Action: "Delete",
  //   },
  //   {
  //     no: "1",
  //     date: "5-12-2018",
  //     description: "Admin",
  //     Status: "Approved",
  //     Action: "Delete",
  //   },
  //   {
  //     no: "1",
  //     date: "5-12-2018",
  //     description: "Admin",
  //     Status: "Dis-approve",
  //     Action: "Delete",
  //   },
  //   {
  //     no: "1",
  //     date: "5-12-2018",
  //     description: "Admin",
  //     Status: "Dis-approve",
  //     Action: "Delete",
  //   },
  // ]);
  const [state, setstate] = React.useState(null);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        try {
          let bodyContent = new FormData();
          bodyContent.append("driver_id", 1);
          const response = await fetch("https://2be2fast.com/soft/fetch_leaves_data", {
            method: "POST",
            body: bodyContent,
            headers: {},
          });
          const temp = await response.json();
          setstate(temp.data)
        }
        catch (e) {
          console.log(e)
        }
      })()
    }, [state])
  );

  const deleterota = async (id) => {
    ToastAndroid.show("Deleting...", ToastAndroid.SHORT);
    try {
      console.log("id:", id)
      let bodyContent = new FormData();
      bodyContent.append("id", id);
      const response = await fetch("https://2be2fast.com/soft/delete_leave", {
        method: "POST",
        body: bodyContent,
        headers: {},
      });
      const temp = await response.json();
      console.log(temp)
      ToastAndroid.show("Successfully Deleted", ToastAndroid.SHORT);

    }
    catch (e) {
      ToastAndroid.show("Error while deleting", ToastAndroid.SHORT);
      console.log(e)
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">
        {state ? state.map((data, i) => {
          return (
            <Section>
              <Cell cellStyle="RightDetail" title="No." detail={i + 1} />
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
                  data.Status == "1" ? (
                    <View style={styles.aprovedBox}>
                      <Text style={styles.disaaproveBox_text}>
                        Approved
                      </Text>
                    </View>
                  ) : (

                    data.Status == "3" ? <View style={styles.disaaproveBox}>
                      <Text style={styles.disaaproveBox_text}>
                        Disaaproved
                      </Text>
                    </View> : <View style={styles.disaaproveBox_1}>
                      <Text style={styles.disaaproveBox_text}>
                        Pending
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
                      onPress={() => Alert.alert(
                        "Confirmation",
                        "Are you sure to delete this",
                        [
                          {
                            text: "Cancel",
                            onPress: () => console.log("Cancel Pressed"),
                            style: "cancel"
                          },
                          { text: "Confirm", onPress: () => deleterota(data.id) }
                        ]
                      )}
                      style={{ textAlign: "center" }}
                    />
                  </View>
                }
                contentContainerStyle={{ paddingVertical: 4 }}
              />
            </Section>
          );
        }) : null}
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
    borderWidth: 1,
    borderColor: "#dc3545"
  },
  disaaproveBox: {
    backgroundColor: "#dc3545",
    width: 100,
    borderRadius: 10,
    padding: 5,
  },
  disaaproveBox_1: {
    backgroundColor: "#ffc107",
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
