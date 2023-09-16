import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity, Modal, Button, RefreshControl } from "react-native";
import api from '../../../api/axios'
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import Cart from "./Cart";

const ProductList = () => {
  const [productData, setproductData] = useState([]);
  const [isDialogVisible, setisDialogVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [btn1, setBtn1] = useState(false)
  const [btn2, setBtn2] = useState(false)
  const [count, setCount] = useState(1);
  const [refreshing, setRefreshing] = useState(false);
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();
  const [isHeart, setisHeart] = useState(false);
  const [total, setTotal] = useState(0);
  const [isSize, setisSize] = useState(0);

  const ListData = async () => {
    try {
      const res = await api.get('/product');
      console.log(res.data.product);

      setproductData(res.data.product);
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        console.error("Tài nguyên không tồn tại");
      } else {
        console.error("Đã xảy ra lỗi không xác định", error.message);
      }
    }
  }

  useEffect(() => { ListData(); console.log(productData); }, []);

  const showDialog = (product) => {
    setSelectedProduct(product);
    setisDialogVisible(true);
  };

  const closeDialog = () => {
    setSelectedProduct(null);
    setisDialogVisible(false);
  };

  const handleButton1Press = () => {
    setisSize(0);
    setBtn1(!btn1);
    setBtn2(false)
  }
  const handleButton2Press = () => {
    setisSize(5000);
    setBtn2(!btn2);
    setBtn1(false)
  }

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }


  };

  const handleRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }




  const AddToCart = (productData) => {
    //Nếu sản phẩm đã tồn tại thì cập nhật số lượng 
    

  }

  const navigateToCart = () => {
    navigation.navigate("Cart"); // Navigate to the "Cart" screen
  };

  const handleHeart = () => {
    setisHeart(!isHeart);
  }


  const caculateTotal = (price,count) => {
    setTotal(price * count + isSize);
  }

  console.log(total);

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
              style={{ flexDirection: "row", padding: 16, alignItems: 'center' }}
            >
              <Image
                source={{
                  uri:
                   item.image
                }}
                style={{ width: 100, height: 100, borderRadius: 10 }}
              />
              <View style={{ marginTop: 10, marginLeft: 10 }}>
                <Text style={styles.titleName}>Name: {item.nameproduct}</Text>
                <Text style={styles.titlePrice}>
                  Price: {item.price} vnđ
                </Text>

              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      {selectedProduct && (
        <Modal visible={isDialogVisible} animationType="slide">
          <Ionicons name="close-circle-outline" size={24} color="black" onPress={closeDialog} style={{marginLeft:10}} />
          <View style={{ flex: 1 }}>
            <Image source={{ uri: selectedProduct.image}} style={{ width: '100%', height: '50%', borderRadius: 10 }} />
            <View style={{ marginTop: 10, marginLeft: 30, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginRight: 60 }}>
              <View>
                <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{selectedProduct.nameproduct}</Text>
                <Text style={{ fontSize: 20, color: "#ff0000", fontWeight: 'bold' }}>{selectedProduct.price} vnđ</Text>
                <Text style={{ fontSize: 16 }}>{selectedProduct.description}</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <Ionicons name="heart" size={40} color={isHeart ? 'black' : '#DC143C'} onPress={handleHeart} />
                <Text onPress={handleHeart} style={{color: isHeart ? 'black' : '#DC143C'}}>Yêu thích</Text>
                </View>
            </View>


 
            <Text style={{ fontSize: 20, marginLeft: 30, marginTop: 30, fontWeight: '700' }}>Chọn size:</Text>
            <View style={{ flexDirection: 'row' }}>
              <TouchableOpacity style={[styles.Size, { backgroundColor: btn1 ? 'white' : '#FF8C00' }]} onPress={handleButton1Press}>
                <Text>M</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.Size, { backgroundColor: btn2 ? 'white' : '#FF8C00' }]} onPress={handleButton2Press}>
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
                <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10, color: 'white' }} onPress={()=>{setTotal(selectedProduct.price * count + isSize)}} >Buy Now . {selectedProduct.price * count + isSize} vnđ</Text>
              </TouchableOpacity>


            </View>
            <View style={{ alignItems: 'center' }}>
              <TouchableOpacity style={styles.btnAddCart} onPress={()=>{setTotal(selectedProduct.price * count + isSize)}}>
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
