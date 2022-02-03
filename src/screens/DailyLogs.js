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
  const [state,setstate]=useState(null);
  // const [state, setstate] = useState([
  //   {
  //     no: "1",
  //     routes: "3084578",
  //     viewroute: "Image",
  //     deleverydate: "5-12-2018",
  //     update: "---",
     
  //   },
  //   {
  //     no: "1",
  //     routes: "3084578",
  //     viewroute: "Image",
  //     deleverydate: "5-12-2018",
  //     update: "---",
     
  //   },
  //   {
  //     no: "1",
  //     routes: "3084578",
  //     viewroute: "Image",
  //     deleverydate: "5-12-2018",
  //     update: "---",
     
  //   },
  //   {
  //     no: "1",
  //     routes: "3084578",
  //     viewroute: "Image",
  //     deleverydate: "5-12-2018",
  //     update: "---",
     
  //   },
  //   {
  //     no: "1",
  //     routes: "3084578",
  //     viewroute: "Image",
  //     deleverydate: "5-12-2018",
  //     update: "---",
     
  //   },
  // ]);

  React.useEffect(()=>{
    (async()=>{
      try{
        let bodyContent = new FormData();
        bodyContent.append("driver_id", 1);
        const response = await fetch("https://2be2fast.com/soft/fetch_logs", {
          method: "POST",
          body: bodyContent,
          headers: {},
        });
        const temp=await response.json();
        if(temp.data)
        setstate(temp.data)
      }
      catch(e){
        console.log(e)
      }
    })()
  })
  return (
    <ScrollView contentContainerStyle={styles.stage}>
      <TableView appearance="light">

      {
        state?state.map((data,i)=>(

        <Section  >
          <Cell cellStyle="RightDetail" title="No." detail={id+1} />
          <Cell cellStyle="RightDetail" title="Routes" detail={data.routes_id} />
          <Cell cellStyle="RightDetail" title="View Routes" detail={data.viewroute} />
          <Cell cellStyle="RightDetail" title="Delevery Date" detail={data.deleverydate} />
          <Cell cellStyle="RightDetail" title="Update" detail={"----"} />
        
          
        </Section>
        ))
      :<View style={{height:Dimensions.get("screen").height-200,justifyContent:"center",alignItems:"center"}}>
        <Text>No Data Found</Text>
        </View>}
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
