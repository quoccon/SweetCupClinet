import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import api from "../../../api/axios";
import { useSelector } from "react-redux";

export default function MyWishlist({ navigation }) {
  const auth = useSelector((state) => state.auth);
  const [dataWlist, setdataWlist] = useState([]);

  const getWishlist = async () => {
    const res = await api.get("/getwishlist?_id=" + auth.id);
    setdataWlist(res.data);
  }

  useEffect(() => {
    getWishlist();
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>My Wishlist</Text>
      </View>
      <ScrollView>
        <View style={styles.containerContent}>
          {dataWlist.map((item, index) => (
            <View style={styles.containerItem} key={item._id}>
              <Image source={{ uri: item.image }} style={styles.imgProduct} />
              <View style={styles.textItem}>
                <Text style={styles.productName}>{item.nameproduct}</Text>
                <Text style={styles.description}>{item.description}</Text>
              </View>
              <TouchableOpacity style={styles.cartIcon} onPress={() => navigation.navigate("")}>
                <Ionicons name="ios-cart-sharp" size={24} color="black" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
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
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    height: 80,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  containerContent: {
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
  },
  containerItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  imgProduct: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  textItem: {
    marginLeft: 15,
    flex: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
  },
  cartIcon: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
});
