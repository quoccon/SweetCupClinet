import React, {useState} from "react";
import { View,Text,StyleSheet,SafeAreaView,TextInput } from "react-native";
import SearchBar from '../component/Home/SearchBar'
import SlideShow from "../component/Home/SlideShow";
import Header from "../component/Home/Header";
import Category from "../component/Home/Category";
import ProductList from "../component/Home/ProductList";
const HomeScreen = () => {
  
  return(
    <SafeAreaView style={styles.container}>
        <View>
        <Header/>
        </View>
        {/* <View>
        <SlideShow/>
        </View> */}

        <View>
        <Category/>
        </View>
        <View>
        <ProductList/>
        </View>
    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container:{
    // flex:1,
    backgroundColor:"#fff",
  },
  
});

export default HomeScreen;