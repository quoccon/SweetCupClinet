import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

export default function Wallet() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text
          style={{
            color: "white",
            fontSize: 25,
            fontWeight: 600,
            color: "white",
            marginBottom: 15,
            marginTop: 10,
          }}
        >
          Balance
        </Text>
      </View>
      <View style={styles.balance}>
        <View>
          <Text style={styles.textBalance}>Balance </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: 40,
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View style={{ marginTop: 57 }}>
            <Text style={styles.textBalance}>$ 100</Text>
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
              Name
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#FF045F",
              width: 130,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 10,
              marginTop: 60,
            }}
          >
            <Text style={{ color: "white", fontSize: 20, fontWeight: "600" }}>
              Recharge
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FF045F",
    justifyContent: "center",
    alignItems: "center",
  },
  balance: {
    marginTop: 20,
    marginLeft: 24,
    marginRight: 24,
    paddingLeft: 30,
    paddingTop: 20,
    paddingBottom: 17,
    backgroundColor: "#2454F8",
    borderRadius: 20,
    borderRightWidth: 1,
  },
  textBalance: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
  },
});
