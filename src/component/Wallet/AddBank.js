import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
export default function AddBank({navigation}) {
  return (
    <ScrollView style={styles.container}>
       <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={44} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Add Bank</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
    },
    header: {
      backgroundColor: "#FF045F",
  
      alignItems: "center",
      flexDirection: "row",
      paddingHorizontal: 20,
  
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 5,
      height: 80,
    },
    headerText: {
      color: "white",
      fontSize: 25,
      fontWeight: "600",
      marginVertical: 20,
      marginLeft: 20,
    },
    headerEditText: {
      color: "white",
      fontSize: 20,
      fontWeight: "600",
      marginVertical: 10,
    },
    contentContainer: {
      marginTop: 20,
    },
  
    RMoney: {
      backgroundColor: "rgba(0,0,0,0.05)",
      marginLeft: 20,
      marginRight: 20,
      borderRadius: 5,
      padding: 20,
    },
    headerTextRMoney: {
      fontSize: 20,
      fontWeight: "600",
      marginBottom: 10,
    },
    topUpMoneyInput: {
      marginTop: 20,
    },
    topUpMoneyText: {
      position: "absolute", // Để văn bản "Amount" chồng lên TextInput
      backgroundColor: "#F2F2F2", // Màu nền của văn bản "Amount"
      top: -13, // Dịch chuyển văn bản "Amount" lên trên TextInput
      left: 10, // Đặt khoảng cách từ trái
      zIndex: 1,
      padding: 3,
    },
    topUpMoneyTextInput: {
      borderColor: "gray",
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      fontWeight: "600",
      fontSize: 18,
    },
    topUpMoneyTextInputFocuse: {
      borderColor: "#FF045F",
      borderWidth: 1,
      padding: 10,
      borderRadius: 5,
      fontWeight: "600",
      fontSize: 18,
    },
    SourceOfFundHeader: {
      marginTop: 30,
      marginLeft: 20,
      marginRight: 20,
  
    },
    SourceOfFundHeaderText: {
      fontSize: 20,
      fontWeight: "600",
      marginBottom: 15
    },
    SourceOfFund: {
      backgroundColor: "rgba(0,0,0,0.05)",
      padding: 20,
      borderRadius: 5,
    },
    Itemcontainer: {
      backgroundColor: "#F2F2F2",
      marginTop: 15,
      // paddingTop: 10,
      // paddingLeft: 10,
      // paddingBottom: 20,
      padding: 20,
  
      borderRadius: 10,
      borderWidth: 1,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingHorizontal: 20,
    },
    wp_item: {
      marginLeft: 10,
      flexDirection: "row",
      
    },
    ImageBank: {width: 35, height:35,marginRight: 10},
    radio: {
      width: 25,
      height: 25,
      borderWidth: 1,
      borderRadius: 99,
      alignItems: "center",
      justifyContent: "center",
    },
    radioBG: {
      width: 15,
      height: 15,
      borderRadius: 20,
      backgroundColor: "black",
    },
  
    btnTopUpContainer: {
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 50,
      paddingLeft: 40,
      paddingRight: 40,
    },
    btnTopUp: {
      backgroundColor: "#FF045F",
      width: "100%",
      height: 60,
      borderRadius: 30,
      justifyContent: "center",
      alignItems: "center",
      marginLeft: 50,
      marginRight: 50,
    },
    btnTopUpText: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "700",
    },
  });