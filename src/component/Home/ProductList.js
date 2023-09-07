import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal, Button, RefreshControl } from "react-native";
import api from '../../../api/axios'
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';

const ProductList = () => {
  const [productData, setproductData] = useState([]);
  const [isDialogVisible, setisDialogVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [btnColor, setbtnColor] = useState('white');
  const defaultColor = 'white';
  const [count, setCount] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [cart, setCart] = useState([]);

  const ListData = async () => {
    try {
      const res = await api.get('/product');
      console.log(res.data.product);
      setproductData(res.data.product);
    } catch (error) {
      if (error.response.status === 404) {
        console.error("Tài nguyên không tồn tại");
      } else {
        console.error("Đã xảy ra lỗi không xác định", error.message);
      }
    }
  }

  useEffect(() => { ListData(); }, []);

  const showDialog = (product) => {
    setSelectedProduct(product);
    setisDialogVisible(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setisDialogVisible(false);
  };

  const handleColorSize = () => {
    if (btnColor === defaultColor) {
      setbtnColor('yellow');
    } else {
      setbtnColor(defaultColor);
    }
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }

  const AddToCart = (productData) => {
    //Nếu sản phẩm đã tồn tại thì cập nhật số lượng 
    setCart(
      cart.map((item) => 
        item._id === productData._id ? {...item, quantity: item.quantity + 1} : item
      )
    );
    
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product</Text>

      <FlatList
        data={productData}
        keyExtractor={(item, index) => index.toString()}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
        }
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => showDialog(item)}>
            <View
              style={{ marginTop: 10, flexDirection: "row", padding: 16 }}
            >
              <Image
                source={{
                  uri:
                    "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600",
                }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <View style={{ marginTop: 10, marginLeft: 10 }}>
                <Text style={styles.titleName}>Name: {item.nameproduct}</Text>
                <Text style={styles.titlePrice}>
                  Price: {item.price} VNĐ
                </Text>
                <Text style={styles.titleDes}>
                  Description: {item.description}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {selectedProduct && (
        <Modal visible={isDialogVisible} animationType="slide">
          <Ionicons name="close-circle-outline" size={24} color="black" onPress={closeDialog} />
          <View style={{ flex: 1 }}>
            <Image source={{ uri: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={{ width: '100%', height: '50%', borderRadius: 10 }} />
            <View style={{ marginTop: 10, marginLeft: 30 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name: {selectedProduct.nameproduct}</Text>
              <Text style={{ fontSize: 16, color: "#ff0000", fontWeight: 'bold' }}>Price: {selectedProduct.price} VNĐ</Text>
              <Text style={{ fontSize: 16 }}>Description: {selectedProduct.description}</Text>
            </View>


            <Text style={{ fontSize: 20, marginLeft: 30, marginTop: 30, fontWeight: '700' }}>Chọn size:</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={[styles.Size, { backgroundColor: btnColor }]} onPress={handleColorSize}>
                <Text>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.Size, { backgroundColor: btnColor }]} onPress={handleColorSize}>
                <Text>L</Text>
              </TouchableOpacity>
            </View>



            <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 50, alignItems: 'center' }}>
              <TouchableOpacity onPress={decrementCount}>
                <Ionicons name="caret-back-circle-outline" size={24} color="black" style={{ marginRight: 10 }} />
              </TouchableOpacity>
              <Text>{count}</Text>
              <TouchableOpacity onPress={incrementCount}>
                <Ionicons name="caret-forward-circle-outline" size={24} color="black" style={{ marginLeft: 10 }} />
              </TouchableOpacity>


              <TouchableOpacity style={styles.titleBtn}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10, color: 'white' }}>Mua ngay</Text>
              </TouchableOpacity>


            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.btnAddCart}>
                <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>


        </Modal>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#ff0000",
    fontSize: 20,
    fontWeight: '700'
  },
  container: {
    marginLeft: 20,
    marginRight: 20
  },
  titleBtn: {
    width: 250,
    height: 50,
    backgroundColor: '#ff0000',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20
  },
  Size: {
    marginLeft: 30,
    marginTop: 10,
    borderWidth: 1,
    width: 60,
    height: 30,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  titleName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  titlePrice: {
    color: '#ff0000',
    fontSize: 16,
    fontWeight: '700'
  },
  titleDes: {
    fontSize: 16,
  },
  btnAddCart: {
    width: '80%',
    backgroundColor: '#FFA500',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
    borderRadius: 20,
    justifyContent: 'center'
  }
});

export default ProductList;
