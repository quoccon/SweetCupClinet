import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
export default function MyWishlist({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={44} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>My Wishlist</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {flex:1, backgroundColor: "white",},
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
      marginVertical: 10,
    },
    headerEditText: {
      color: "white",
      fontSize: 20,
      fontWeight: "600",
      marginVertical: 10,
    },
})