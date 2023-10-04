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

const Pay = ({ navigation }) => {
  const route = useRoute();
  const { selectedItems } = route.params;
  
  console.log(selectedItems, "ddmm");
  const dispatch = useDispatch();
  const [isProcessing, setIsProcessing] = useState(false);

  const totalCost = selectedItems.reduce((total, item) => {
    return total + item.total;
  }, 0);

  const handlePayment = () => {
    setIsProcessing(true); // Hiển thị tiến trình

    setTimeout(() => {
      // selectedItems.forEach((item) => {
      //   dispatch(removeFromCart(item));
      // });

      setIsProcessing(false); // Tắt tiến trình

      // Sau khi tắt tiến trình, chuyển sang màn hình "Home"
      navigation.navigate("Home");

      // Hiển thị thông báo đặt hàng thành công
      Alert.alert("Payment successful!");

      // Chuyển đến màn hình thông báo
      // navigation.navigate("Notification", {
      //   message: "Order placed successfully!",
      // });
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
        <Text style={styles.headerText}>Payment</Text>

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

            <Text style={styles.productTotal}>${item.total} vnđ</Text>
          </View>
        ))}
        <View style={styles.divider}></View>
        <View>
          <Text style={styles.label}>Address:</Text>
          {/* Add your address picker here */}
        </View>
        <Text style={styles.totalText}>Total: ${totalCost} vnđ</Text>
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
    marginHorizontal: 20,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
  productItem: {
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
