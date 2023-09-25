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

  const toggleItemSelection = (itemId) => {
    // Check if the item is already selected, and toggle its selection
    const updatedSelectedItems = selectedItems.includes(itemId)
      ? selectedItems.filter((id) => id !== itemId)
      : [...selectedItems, itemId];
    setSelectedItems(updatedSelectedItems);

    // Calculate the total cost based on selected items
    const newTotalCost = cartData.reduce((total, item) => {
      if (updatedSelectedItems.includes(item._id)) {
        return total + item.total;
      }
      return total;
    }, 0);
    setTotalCost(newTotalCost);
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
        <Text>Tổng tiền: ${totalCost.toFixed(2)} </Text>
      )}
      <TouchableOpacity
        style={styles.actionButton}
        onPress={() => {
          // Implement your action here (e.g., remove selected items)
          console.log("Selected Items:", selectedItems);
        }}
      >
        <Text style={{ color: "white" }}>Perform Action</Text>
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
    backgroundColor: "#ff0000",
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default Cart;
