import React from "react";
import { View,Text } from "react-native";

const Notification = ({route}) => {
  const {message} = route.params;



  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{fontSize:20,fontWeight:'bold',color:'green'}}>
        {message}
      </Text>
    </View>
  );
}


export default Notification;