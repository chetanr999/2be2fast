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
import { Cell, Section, TableView } from "react-native-tableview-simple";

import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Signup from "./Signup";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DailyLogs = () => {
  const [state, setstate] = useState([
    {
      no: "1",
      routes: "3084578",
      viewroute: "Image",
      deleverydate: "5-12-2018",
      update: "---",
     
    },
    {
      no: "1",
      routes: "3084578",
      viewroute: "Image",
      deleverydate: "5-12-2018",
      update: "---",
     
    },
    {
      no: "1",
      routes: "3084578",
      viewroute: "Image",
      deleverydate: "5-12-2018",
      update: "---",
     
    },
    {
      no: "1",
      routes: "3084578",
      viewroute: "Image",
      deleverydate: "5-12-2018",
      update: "---",
     
    },
    {
      no: "1",
      routes: "3084578",
      viewroute: "Image",
      deleverydate: "5-12-2018",
      update: "---",
     
    },
  ]);
  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">

      {
        state.map((data)=>(

        <Section  >
          <Cell cellStyle="RightDetail" title="No." detail={data.no} />
          <Cell cellStyle="RightDetail" title="Routes" detail={data.routes} />
          <Cell cellStyle="RightDetail" title="View Routes" detail={data.viewroute} />
          <Cell cellStyle="RightDetail" title="Delevery Date" detail={data.deleverydate} />
          <Cell cellStyle="RightDetail" title="Update" detail={data.update} />
        
          
        </Section>
        ))
      }
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
});


export default DailyLogs;
