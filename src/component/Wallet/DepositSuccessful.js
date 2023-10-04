import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
export default function DepositSuccessful({navigation}) {
  const route = useRoute();
  const moneyData = route.params?.data || "Dữ liệu mặc định";
  return (
    <SafeAreaView style={styles.container}>
      <Ionicons
        name="ios-checkmark-circle-outline"
        size={300}
        color="#FF045F"
      />
      <Text style={styles.TextAdded}>Your balance added</Text>
      <Text style={styles.TextMonney}>+ {moneyData} $</Text>
      <TouchableOpacity onPress={()=> navigation.navigate("Wallet")} style={styles.checkWallet}>
        <Text style={styles.textCheckWallet}>Check Wallet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  TextAdded: { fontSize: 31, fontWeight: "800" },
  TextMonney: {
    fontSize: 25,
    backgroundColor: "rgba(255, 193, 0, 0.25)",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 35,
    borderWidth: 1,
    borderColor: "rgba(255, 193, 0, 0.25)",
    marginTop: 10,
  },
  checkWallet: {
    backgroundColor: "rgba(255, 4, 95, 1)",
    width: 300,
    height: 60,
    flexShrink: 0,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 31,
  },textCheckWallet: { color: "white" ,fontSize: 25,fontWeight: "500"},
});
