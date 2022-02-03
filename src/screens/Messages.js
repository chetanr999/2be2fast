import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
  Dimensions
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Signup from "./Signup";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Messages = () => {
// const [state, setstate] = useState([
//   {id:1, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit amet"},
//   {id:2, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit amet"} ,
//   {id:3, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
//   {id:4, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
//   {id:5, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
//   {id:6, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 
//   {id:7, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"}, 
//   {id:8, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
//   {id:9, date:"9:50 am", type:'in',  message: "Lorem ipsum dolor sit a met"},
//   {id:10, date:"9:50 am", type:'out', message: "Lorem ipsum dolor sit a met"}, 

// ]);

  const [messages,setmessages]=React.useState(null);
  const [msg,setmsg]=useState("");
  React.useEffect(()=>{
    (async()=>{
      try{
        let bodyContent = new FormData();
        bodyContent.append("driver_id", 1);
        const response = await fetch("https://2be2fast.com/soft/get_chat", {
          method: "POST",
          body: bodyContent,
          headers: {},
        });
        const temp=await response.json();

        setmessages(temp.data)
      }
      catch(e){
        console.log(e)
      }
    })()
  },[messages])

  const renderDate = (date) => {
    return(
      <Text style={styles.time}>
        {date}
      </Text>
    );
  }

  const handleout=async()=>{
    if(!msg.length){
      return;
    }
    console.log(msg);
    
    try{

      let bodyContent = new FormData();
      bodyContent.append("driver_id", 1);
      bodyContent.append("msg",msg);
      setmsg("");
      const response = await fetch("https://2be2fast.com/soft/post_chat", {
        method: "POST",
        body: bodyContent,
        headers: {},
      });
      const temp=await response.json();
      
      console.log(temp)
    }
    catch(e){
      console.log(e);
    }
  }
    return (
      <View style={styles.container}>
      {messages?<FlatList style={styles.list}
        data={messages}
        keyExtractor= {(item) => {
          return item.id;
        }}
        renderItem={(message) => {
          const item = message.item;

          let inMessage = item.type === 'in';
          let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
          return (
            <View style={[styles.item, itemStyle]}>
              {!inMessage && renderDate(item.date)}
              <View style={[styles.balloon]}>
                <Text>{item.message}</Text>
              </View>
              {renderDate(item.created_on)}
            </View>
          )
        }}/>:null}
      <View style={styles.footer}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
              placeholder="Write a message..."
              underlineColorAndroid='transparent'
              value={msg}
              onChangeText={setmsg}
              />
        </View>

          <TouchableOpacity style={styles.btnSend} onPress={handleout}>
            <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}} style={styles.iconSend}  />
          </TouchableOpacity>
      </View>
    </View>
    );
  };

  const styles = StyleSheet.create({
    container:{
      flex:1
    },
    list:{
      paddingHorizontal: 1,
      backgroundColor:"white"
    },
    footer:{
      flexDirection: 'row',
      height:60,
      backgroundColor: '#eeeeee',
      paddingHorizontal:10,
      padding:5,
    },
    btnSend:{
      backgroundColor:"#00BFFF",
      width:40,
      height:40,
      borderRadius:360,
      alignItems:'center',
      justifyContent:'center',
    },
    iconSend:{
      width:30,
      height:30,
      alignSelf:'center',
    },
    inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:40,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      marginRight:10,
    },
    inputs:{
      height:40,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
    },
    balloon: {
      maxWidth: 250,
      padding: 15,
      borderRadius: 20,

    },
    itemIn: {
      alignSelf: 'flex-start',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0,
      shadowRadius: 4.65,
      elevation: 8,
    },
    itemOut: {
      alignSelf: 'flex-end',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0,
      shadowRadius: 4.65,
      elevation: 8,
    },
    time: {
      alignSelf: 'flex-end',
      margin: 15,
      fontSize:12,
      color:"#808080",
    },
    item: {
      marginVertical: 14,
      flex: 1,
      flexDirection: 'row',
      backgroundColor:"#eeeeee",
      borderRadius:300,
      padding:5,
    },
  }); 

  export default Messages;
