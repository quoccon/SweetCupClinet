import React, {useState} from "react";
import { View,Text,StyleSheet,SafeAreaView,TextInput } from "react-native";
import SearchBar from '../component/SearchBar'
import SlideShow from "../component/SlideShow";
const HomeScreen = () => {
  
  return(
    <SafeAreaView style={styles.container}>
      {/* <TextInput
        placeholder="Bạn muốn uống gì..."
          clearButtonMode="always"
          style={styles.searchBox}
        /> */}
        {/* <SearchBar/> */}
        <SlideShow/>
          
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
  },
  
});

export default HomeScreen;