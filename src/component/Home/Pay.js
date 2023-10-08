  import React, { useState } from "react";
  import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Alert,
    TouchableOpacity,
    ActivityIndicator,
  } from "react-native";
  import { useDispatch } from "react-redux";
  import { useRoute } from "@react-navigation/native";
  import { removeFromCart } from "../../../api/redux";
  import { Ionicons } from "@expo/vector-icons";

  const Pay = ({ navigation }) => {
    const route = useRoute();
    const { selectedItems } = route.params;

    console.log(selectedItems, "ddmm");
    const dispatch = useDispatch();
    const [isProcessing, setIsProcessing] = useState(false);

    const totalCost = selectedItems.reduce((total, item) => {
      return total + item.total;
    }, 0);

    const formatMoney = (value) => {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    const handlePayment = () => {
      setIsProcessing(true); // Hiển thị tiến trình

      setTimeout(() => {
        // selectedItems.forEach((item) => {
        //   dispatch(removeFromCart(item));
        // });
        
        
        setIsProcessing(false); // Tắt tiến trình

        // Sau khi tắt tiến trình, chuyển sang màn hình "Home"
        navigation.navigate("PaySuccful");

        // Hiển thị thông báo đặt hàng thành công



      }, 2000); // 2 giây sau đó tắt tiến trình và hiển thị thông báo
    };

    return (
      <SafeAreaView style={styles.container}>
        {isProcessing && (
          <View style={styles.overlay}>
            <ActivityIndicator size="large" color="white" />
          </View>
        )}
        <View style={styles.content}>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity>
              <Ionicons
                name="close-circle-outline"
                size={30}
                color="black"
                onPress={() => navigation.navigate("Cart")}
                style={{ marginLeft: 20, marginTop: 10 }}
              />
            </TouchableOpacity>
            <Text style={styles.headerText}>Order confirmation</Text>
          </View>
          <Text style={styles.subtitle}>
            Selected Products: {selectedItems.length}
          </Text>
          {selectedItems.map((item) => (

            <View key={item._id} style={styles.productItem}>
              <View>
                <View style={styles.productInfo}>
                  <Text style={styles.productCount}>x{item.count}</Text>
                  <Text style={styles.productName}>{item.nameproduct}</Text>
                </View>
                <Text>{item.nameSize}</Text>
              </View>

              <Text style={styles.productTotal}>{formatMoney(item.total)}đ</Text>
            </View>
          ))}
          <View style={styles.divider}></View>
          <View>
            <Text style={styles.label}>Address:</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20 }}>
              <Text style={{ color: 'blue' }}>Select address</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Address")}>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color="black"
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Payment methods</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: "blue" }}>Select a payment method</Text>
              <TouchableOpacity onPress={() => navigation.navigate("AddBank")}>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color="black"
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.totalText}>Total :</Text>
          <Text style={{fontSize:14,fontWeight:'500',marginLeft:20}}>Into money : {formatMoney(totalCost)}đ</Text>
        </View>

        <TouchableOpacity style={styles.btnBuy} onPress={handlePayment}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // marginHorizontal: 20,
      padding: 20
    },
    content: {
      flex: 1,
    },
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0, 0, 0, 0.5)", // Màu xám nhạt
      justifyContent: "center",
      alignItems: "center",
    },
    headerText: {
      marginLeft: 110,
      textAlign: "center",
      marginHorizontal: 20,
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 10,
    },
    subtitle: {
      marginTop: 10,
      marginHorizontal: 20,
      fontSize: 18,
      fontWeight: "bold",
    },
    productItem: {
      marginTop: 30,
      marginHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      marginVertical: 5,
    },
    productInfo: {
      flexDirection: "row",
      alignItems: "center",
    },
    productCount: {
      fontWeight: "600",
    },
    productName: {
      fontSize: 18,
      fontWeight: "700",
      marginLeft: 5,
    },
    productTotal: {
      fontSize: 16,
      color: "red",
      fontWeight: "bold",
    },
    divider: {
      marginHorizontal: 20,
      borderWidth: 0.5,
      marginVertical: 10,
    },
    label: {
      marginHorizontal: 20,
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
    },
    totalText: {
      marginHorizontal: 20,
      fontSize: 18,
      fontWeight: "bold",
      marginTop: 10,
    },
    btnBuy: {
      marginHorizontal: 20,
      backgroundColor: "red",
      borderRadius: 10,
      padding: 10,
      alignItems: "center",
      marginVertical: 10,
    },
    btnText: {
      color: "white",
      fontSize: 18,
      fontWeight: "bold",
    },
  });

  export default Pay;
