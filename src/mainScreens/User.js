import React from "react";
import { View, Text, Image, TouchableOpacity, ScrollView, StatusBar, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { logout } from "../../api/redux";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function User({ navigation }) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  console.log(auth);
  const signOut = () => {
    dispatch(logout());
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
        <Text style={styles.headerText}>My Account</Text>
        <Image
          source={{ uri: auth.avata }}
          style={styles.profileImage}
        />
        <Text style={styles.username}>{auth.username}</Text>
      </View>
      <View style={styles.shadowInfo}>
        <View style={styles.balanceInfo}>
          <Text style={styles.balanceText}>Số Dư</Text>
          <Text style={styles.balanceAmount}>{auth.balance} VNĐ</Text>
        </View>
        <TouchableOpacity style={styles.inviteButton}>
          <Ionicons name="person-add" size={40} color="black" />
          <Text>Invite</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.menuContainer}>
        <TouchableOpacity onPress={()=>navigation.navigate('MyInfo')} style={styles.menuItem}>
          <Ionicons name="person-circle-outline" size={45} color="black" />
          <Text style={styles.menuText}>My Information</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('Address')} style={styles.menuItem}>
          <Ionicons name="map" size={45} color="black" />
          <Text style={styles.menuText}>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Member')} style={styles.menuItem}>
        <MaterialCommunityIcons name="crown-circle" size={45} color="black" />
          <Text style={styles.menuText}>Member</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('MyWishlist')} style={styles.menuItem}>
          <Ionicons name="heart" size={45} color="black" />
          <Text style={styles.menuText}>My Wishlist</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('AboutCompany')} style={styles.menuItem}>
          <Ionicons name="information-circle-outline" size={45} color="black" />
          <Text style={styles.menuText}>About Company</Text>
        </TouchableOpacity>
        <TouchableOpacity  style={styles.menuItem} onPress={() => signOut()}>
          <Ionicons name="log-out" size={45} color="black" />
          <Text style={styles.menuText}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>

      <Text style={styles.footerText}>@copyright.2023 Dung&Quoc</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    backgroundColor: "#FF045F",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    marginBottom: 15,
    marginTop: 10,
  },
  profileImage: {
    width: 156,
    height: 156,
    borderRadius: 999,
  },
  username: {
    fontSize: 39,
    fontWeight: "600",
    color: "white",
    marginBottom: 12,
  },
  shadowInfo: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    height: 80,
  },
  balanceInfo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  balanceText: {
    fontSize: 20,
    marginBottom: 10,
  },
  balanceAmount: {
    fontSize: 20,
  },
  inviteButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  menuContainer: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  menuText: {
    fontSize: 30,
    marginLeft: 15,
  },
  footerText: {
    color: "gray",
    textAlign: "center",
    marginTop: 10,
  },
});
