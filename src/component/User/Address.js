import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";
import MapViewDirections from "react-native-maps-directions";
// import {GOOGLE_MAPS_APIKEY} from "../../../api/KeyMap"

export default function Adress({ navigation }) {
  const [state, setstate] = useState({
    pickupCords: {
      latitude: 21.0278,
      longitude: 105.8342,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    },
    droplocationCords: {
      latitude: 21.0297,
      longitude: 105.8303,
      latitudeDelta: 0.04,
      longitudeDelta: 0.05,
    },
  });

  const { pickupCords, droplocationCords } = state;
  const GOOGLE_MAPS_APIKEY = "AIzaSyAgA2IoqwJ0nkd_w9qmHcMoU7xDB8FwuOQ";

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={44} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Address</Text>
      </View>
      <MapView style={styles.container} initialRegion={pickupCords}>
        <MapViewDirections
          origin={pickupCords}
          destination={droplocationCords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="hotpink"
          optimizeWaypoints={true}
          onReady={res => {
            mapRef.current.fitToCoordinates(res.coordinates,{
              edgePadding: { top: 100, right: 30, bottom: 300, left: 30 },
            })
          }}
        />
      </MapView>
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
});
