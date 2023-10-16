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
   console.log(res.data);
   setdataWlist(res.data);
    
  }

  // const fetchData = async () => {
  //   const wishlistData = await getWishlist();
  //   if (wishlistData) setdataWlist(wishlistData);
  // console.log(dataWlist)}
  
  useEffect(() => {getWishlist()},[])
  
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={44} color="white" />
        </TouchableOpacity>
        <View style={styles.headerTextContainer}>
        <Text style={styles.headerText}>My Wishlist</Text>
        </View>
        
      </View>
      <ScrollView>
        <View style={styles.containerContent}>
          {dataWlist.map((item, index) => (
            <View style={styles.containerItem} key={item._id}>
              <View>
                <Image source={{ uri: item.image }} style={styles.imgProduct} />
              </View>
              <View style={styles.textItem}>
                <Text>{item.nameproduct}</Text>
                <Text>{item.description}</Text>
              </View>
              <TouchableOpacity style={styles.containericon}><Ionicons name="ios-cart-sharp" size={24} color="black" /></TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
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
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 10,
  },

  headerTextContainer: {},
  containerContent: {
    marginTop: 5,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 30,
  },
  containerItem: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  imgProduct: { width: 45, height: 45, borderRadius: 10 },
  textItem: { marginLeft: 15 },
  containericon: { flex: 1,alignItems: "flex-end",justifyContent: 'center',}
});
