import React, {useState} from "react";
import { View, Text, FlatList, StyleSheet, Image,SafeAreaView,TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";


const Cart = () => {
  const navigation = useNavigation();
  const carts = useSelector((state) => state.cart);
  const [cartData, setcartData] = useState(carts.cart)
  console.log(cartData, "hbdjshbjsdh");
  console.log(carts.cart);
  
  // Dữ liệu mẫu cứng
  // const cart = [
  //   {
  //     id: 1,
  //     image: "URL_HINH_ANH_1",
  //     nameproduct: "Tên sản phẩm 1",
  //     total: 100,
  //     count: 2,
  //   },
  //   {
  //     id: 2,
  //     image: "URL_HINH_ANH_2",
  //     nameproduct: "Tên sản phẩm 2",
  //     total: 150,
  //     count: 3,
  //   },
  //   // Thêm các mục khác nếu cần
  // ];


  return (
    <SafeAreaView style={styles.container}>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
        <Text style={styles.title}>Your Cart</Text>
      </View>
      <Text>{carts.cart._id}</Text>
      <FlatList
        data={cartData}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
              <Text>{item.nameproduct}</Text>
              <Text>Total: {item.total}</Text>
              <Text>Count: {item.count}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#ff0000",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  itemContainer: {
    backgroundColor: '#ff0000',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
  },
  image: {
    width: 100,
    height: 100,
  },

});

export default Cart;
