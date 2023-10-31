import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToSelectedItems } from "../../../api/redux";

const Cart = () => {
  const navigation = useNavigation();
  const carts = useSelector((state) => state.cart);
  const [cartData, setCartData] = useState(carts.cart);
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [performActionColor, setPerformActionColor] = useState("lightgray");
  const [isLoading, setIsLoading] = useState(false); // State to manage loading screen
  const dispatch = useDispatch();
  const [isPayment, setisPayment] = useState(false); // State to manage payment screen

  const toggleItemSelection = (itemId) => {
    const selectedItem = cartData.find(item => item._id === itemId);

    let updatedSelectedItems;

    if (selectedItems.includes(selectedItem)) {
      updatedSelectedItems = selectedItems.filter(item => item !== selectedItem);
    } else {
      updatedSelectedItems = [...selectedItems, selectedItem];
    }

    setSelectedItems(updatedSelectedItems);
    setisPayment(updatedSelectedItems.length > 0);
    const newTotalCost = cartData.reduce((total, item) => {
      if (updatedSelectedItems.includes(item)) {
        return total + item.total;
      }
      return total;
    }, 0);
    setTotalCost(newTotalCost);

    // Update the color for the "Perform Action" button based on the selected items
    if (updatedSelectedItems.length > 0) {
      setPerformActionColor("#ff0000"); // Change to red if at least one item is selected
    } else {
      setPerformActionColor("lightgray"); // Light gray if no item is selected
    }

    dispatch(addToSelectedItems(updatedSelectedItems));
    console.log(updatedSelectedItems, "quoc");
  };

  useEffect(() => {
    // Calculate the initial total cost when the component mounts
    const initialTotalCost = cartData.reduce((total, item) => {
      if (selectedItems.includes(item)) {
        return total + item.total;
      }
      return total;
    }, 0);
    setTotalCost(initialTotalCost);
  }, [cartData, selectedItems]);

  const formatMoney = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Ionicons name="arrow-back" size={30} color="black" />
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
              {selectedItems.includes(item) && (
                <Ionicons name="checkbox" size={24} color="black" />
              )}
            </View>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View key={item._id} style={styles.itemDetails}>
              <View style={{flexDirection:'row',alignItems:'center'}}>
                <Text style={styles.itemCount}>x{item.count} </Text>
                <Text style={styles.itemName}>{item.nameproduct}</Text>
              </View>
              <Text style={styles.itemTotal}>{formatMoney(item.total) + "đ"}</Text>

              <Text style={styles.itemSize}>{item.nameSize}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
      
      {selectedItems.length > 0 && (
        <Text style={styles.totalText}>Tổng tiền: {formatMoney(totalCost) +'đ'} </Text>
      )}
      <TouchableOpacity
        style={[styles.actionButton, { backgroundColor: isPayment ? performActionColor :'lightgray' }]}
        onPress={() => {
          if(isPayment){
          setIsLoading(true); // Show loading screen

          setTimeout(() => {
            navigation.navigate("Pay", { selectedItems: selectedItems });
            setIsLoading(false); // Hide loading screen after 2 seconds
          }, 2000); // 2 seconds timeout
        }}
      }
      >
        <Text style={styles.actionButtonText}>Thanh toán</Text>
      </TouchableOpacity>

      {/* Loading screen */}
      {isLoading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "red",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
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
  itemDetails: {
    justifyContent: 'center',
    marginLeft: 30,
    
  },
  itemName: {
    fontSize: 20,
    fontWeight: '700',
  },
  itemTotal: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  itemCount: {
    fontSize: 18,
    fontWeight: '500',
  },
  itemSize: {
    fontSize: 16,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
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
  loadingOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Cart;
