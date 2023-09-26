import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

const Cart = () => {
  const navigation = useNavigation();
  const carts = useSelector((state) => state.cart);
  const [cartData, setcartData] = useState(carts.cart);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [performActionColor, setPerformActionColor] = useState("lightgray");

  const toggleItemSelection = (itemId) => {
    const updatedSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id !== itemId)
      : [...selectedItems, itemId];
    setSelectedItems(updatedSelectedItems);

    const newTotalCost = cartData.reduce((total, item) => {
      if (updatedSelectedItems.includes(item._id)) {
        return total + item.total;
      }
      return total;
    }, 0);
    setTotalCost(newTotalCost);

    // Cập nhật màu cho nút "Perform Action" dựa trên trạng thái của các mục đã chọn
    if (updatedSelectedItems.length > 0) {
      setPerformActionColor("#ff0000"); // Đổi thành màu đỏ nếu có ít nhất một mục đã chọn
    } else {
      setPerformActionColor("lightgray"); // Màu lightgray nếu không có mục nào đã chọn
    }
  };

  useEffect(() => {
    // Calculate the initial total cost when the component mounts
    const initialTotalCost = cartData.reduce((total, item) => {
      if (selectedItems.includes(item._id)) {
        return total + item.total;
      }
      return total;
    }, 0);
    setTotalCost(initialTotalCost);
  }, [cartData, selectedItems]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Your Cart</Text>
      </View>
      <FlatList
        data={cartData}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => toggleItemSelection(item._id)}
          >
            <View style={styles.checkbox}>
              {selectedItems.includes(item._id) && (
                <Ionicons name="checkbox" size={24} color="black" />
              )}
            </View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={{ justifyContent: 'center', marginLeft: 10 }}>
              <Text>{item.nameproduct}</Text>
              <Text>Total: ${item.total.toFixed(2)}</Text>
              <Text>Count: {item.count}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      {selectedItems.length > 0 && (
        <Text>Tổng tiền: {totalCost +" vnđ"} </Text>
      )}
      <TouchableOpacity
        style={[styles.actionButton, { backgroundColor: performActionColor }]}
        onPress={() => {
          // Thực hiện hành động của bạn ở đây (ví dụ: xóa các mục đã chọn)
          console.log("Các Mục Đã Chọn:", selectedItems);
        }}
      >
        <Text style={styles.actionButtonText}>Thanh toán</Text>
      </TouchableOpacity>
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
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  checkbox: {
    marginRight: 10,
  },
  actionButton: {
    backgroundColor: "lightgray",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  actionButtonText: {
    color: "white",
  },
});

export default Cart;
