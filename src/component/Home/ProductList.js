import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Modal,
  RefreshControl,
  ScrollView,
  StatusBar,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../../api/redux";
import api from "../../../api/axios";
import { addToSelectedItems } from "../../../api/redux";

const ProductList = () => {
  const [productData, setProductData] = useState([]);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  const [count, setCount] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [isHeart, setIsHeart] = useState(false);
  const [total, setTotal] = useState(0);
  const [isSize, setIsSize] = useState(0);
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const [shortDescription, setShortDescription] = useState("");
  const [descriptionButtonText, setDescriptionButtonText] = useState(
    "Xem thêm"
  );
  const [nameSize, setnameSize] = useState("");
  const [keyy, setkeyy] = useState("");

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const ListData = async () => {
    try {
      const res = await api.get("/product");
      setProductData(res.data.product);
    } catch (error) {
      console.log(error);
      if (error.response?.status === 404) {
        console.error("Tài nguyên không tồn tại");
      } else {
        console.error("Đã xảy ra lỗi không xác định", error.message);
      }
    }
  };

  useEffect(() => {
    ListData();
  }, []);

  useEffect(() => {
    setnameSize("Vừa");
    setIsSize(0);
    setBtn1(true);
    setBtn2(false);
  }, []);

  const showDialog = (product) => {
    setSelectedProduct(product);
    setIsDialogVisible(true);
    setShortDescription(product.description.slice(0, 100));
    setDescriptionButtonText("Xem thêm");
    setDescriptionExpanded(false);
    setnameSize("Vừa");
    setIsSize(0);
    setBtn1(true);
    setBtn2(false);
    setCount(1);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setIsDialogVisible(false);
  };

  const handleButton1Press = () => {
    setnameSize("Vừa");
    setIsSize(0);
    setBtn1(true);
    setBtn2(false);
  };

  const handleButton2Press = () => {
    setnameSize("Lớn");
    setIsSize(5000);
    setBtn2(true);
    setBtn1(false);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const AddItemToCart = () => {
    setkeyy(selectedProduct._id)
    if (selectedProduct) {
      const listdatacart = { ...selectedProduct, count, total, nameSize, keyy };
      dispatch(addToCart(listdatacart));
      setCount(1)
    }
  };

  const BuyNow = () => {
    // const listbuy = {...selectedProduct, count, total, nameSize};
    // dispatch(addToSelectedItems(listbuy));
    navigation.navigate("Pay")
    console.log(listbuy);
  }

  const handleHeart = async () => {
   

    try {
      setIsHeart(!isHeart);
      const wishlist = await api.post('/addwishlist',selectedProduct);

      Alert.alert("Successful addwishlist")
      console.log("wishlist added");
      console.log(wishlist);
      console.log(selectedProduct);
        


    } catch (error) {
      console.log(error);
      console.log("Lỗi");
    }

  };

  const toggleDescription = () => {
    if (descriptionExpanded) {
      setShortDescription(selectedProduct.description.slice(0, 100));
      setDescriptionButtonText("Xem thêm");
    } else {
      setShortDescription(selectedProduct.description);
      setDescriptionButtonText("Thu gọn");
    }
    setDescriptionExpanded(!descriptionExpanded);
  };

  useEffect(() => {
    if (selectedProduct) {
      setTotal(selectedProduct.price * count + isSize * count);
    }
  }, [selectedProduct, count, isSize]);

  const formatMoney = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <ScrollView style={styles.container}
      scrollEventThrottle={1}>
      <Text style={styles.title}>Product</Text>



      {productData.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => showDialog(item)}>
          <View style={{ flexDirection: "row", padding: 16, alignItems: "center" }}>
            <Image
              source={{
                uri: item.image,
              }}
              style={{ width: 100, height: 100, borderRadius: 10 }}
            />
            <View style={{ marginTop: 10, marginLeft: 10 }}>
              <Text style={styles.titleName}>Name: {item.nameproduct}</Text>
              <Text style={styles.titlePrice}>Price: {formatMoney(item.price)}đ</Text>
            </View>

          </View>
        </TouchableOpacity>
      ))}

      

      {selectedProduct && (

        <ScrollView>
          <Modal visible={isDialogVisible} animationType="slide" >
           <View style={{flexDirection:'row',alignItems:'center',marginBottom:10}}>
            <Ionicons
              name="close-circle-outline"
              size={24}
              color="black"
              onPress={closeDialog}
              style={{ marginLeft: 10, marginTop: 40 }}
            />

            <Text style={{fontSize:26,marginTop:40,fontWeight:'700',marginLeft:140}}>Information products</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Image
                source={{ uri: selectedProduct.image }}
                style={{ width: "100%", height: "50%", borderRadius: 10 }}
              />
              <View
                style={{
                  marginTop: 10,
                  marginLeft: 30,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: 60,
                }}
              >
                <View>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <View>
                      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
                        {selectedProduct.nameproduct}
                      </Text>
                      <Text
                        style={{
                          fontSize: 20,
                          color: "#ff0000",
                          fontWeight: "bold",
                        }}
                      >
                        {formatMoney(selectedProduct.price)}đ
                      </Text>
                    </View>

                    <View>

                      <Ionicons
                        name="heart"
                        size={40}
                        color={isHeart ? "black" : "#DC143C"}
                        onPress={handleHeart}
                      />
                    </View>
                  </View>


                  <Text style={{ fontSize: 16 }}>
                    {shortDescription}
                  </Text>
                  <TouchableOpacity onPress={toggleDescription}>
                    <Text style={{ color: "#007BFF" }}>
                      {descriptionButtonText}
                    </Text>
                  </TouchableOpacity>


                </View>



              </View>

              <Text
                style={{
                  fontSize: 20,
                  marginLeft: 30,
                  marginTop: 30,
                  fontWeight: "700",
                }}
              >
                Chọn size:
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity
                  style={[
                    styles.Size,
                    { backgroundColor: btn1 ? "#FF8C00" : "white" },
                  ]}
                  onPress={handleButton1Press}
                >
                  <Text>Vừa</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    styles.Size,
                    { backgroundColor: btn2 ? "#FF8C00" : "white" },
                  ]}
                  onPress={handleButton2Press}
                >
                  <Text>Lớn</Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  marginLeft: 30,
                  marginTop: 50,
                  alignItems: "center",
                }}
              >
                <TouchableOpacity onPress={decrementCount}>
                  <Ionicons
                    name="caret-back-circle-outline"
                    size={24}
                    color="black"
                    style={{ marginRight: 10 }}
                  />
                </TouchableOpacity>
                <Text>{count}</Text>
                <TouchableOpacity onPress={incrementCount}>
                  <Ionicons
                    name="caret-forward-circle-outline"
                    size={24}
                    color="black"
                    style={{ marginLeft: 10 }}
                  />
                </TouchableOpacity>

                <TouchableOpacity style={styles.titleBtn} onPress={BuyNow}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                      marginTop: 10,
                      color: "white",
                    }}

                  >
                    Buy Now . {formatMoney(total)}đ
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.btnAddCart}
                  onPress={() => {
                    AddItemToCart();
                    closeDialog();
                    navigation.navigate("Cart");
                  }}
                >
                  <Text
                    style={{
                      color: "white",
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    Add to cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      )}

    </ScrollView>

  );
};

const styles = StyleSheet.create({
  title: {
    color: "#ff0000",
    fontSize: 20,
    fontWeight: "700",
  },
  container: {
    marginLeft: 20,
    marginRight: 20,
  },
  titleBtn: {
    width: 250,
    height: 50,
    backgroundColor: "#ff0000",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
  },
  Size: {
    marginLeft: 30,
    marginTop: 10,
    borderWidth: 1,
    width: 60,
    height: 30,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  titleName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  titlePrice: {
    color: "#ff0000",
    fontSize: 16,
    fontWeight: "700",
  },
  titleDes: {
    fontSize: 16,
  },
  btnAddCart: {
    width: "80%",
    backgroundColor: "#FFA500",
    alignItems: "center",
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: "center",
  },
});

export default ProductList;
