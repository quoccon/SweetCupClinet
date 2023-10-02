import React from "react";
import {
  View, Text, Button, SafeAreaView, StyleSheet, Alert,Picker
} from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import Address from '../User/Address'
import { useDispatch } from "react-redux";
// import { removeCart } from "../../../api/redux";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";



const Pay = () => {
  const route = useRoute();
  // Nhận danh sách các mục đã chọn từ route.params
  const { selectedItems } = route.params;
  // const [selectedAddress, setselectedAddress] = useState(data[0].id);
  const navigation = useNavigation();
  const dispatch = useDispatch();


  // var data = [
  //   { id: '1', location: 'Nhà', adress: 'Item 1' },
  //   { id: '2', location: 'Công ty', adress: 'Item 2' },
  //   { id: '3', location: 'Nhà người yêu', adress: 'Item 3' },
  // ]

  // const handleAddress = (addressId) => {
  //   setselectedAddress(addressId)
  // } 

  // Tính tổng tiền dựa trên danh sách các mục đã chọn
  const totalCost = selectedItems.reduce((total, item) => {
    return total + item.total;
  }, 0);

  // Hàm xử lý thanh toán 
  const handlePayment = () => {
    //sau khi thanh toán thì xóa sản phẩm trong giỏ hàng
    selectedItems.forEach((item) => {
      dispatch(removeCart(item._id));
    })



    navigation.navigate("Home");
    Alert.alert("Thanh toán thành công !")
    // Thực hiện thanh toán ở đây

    navigation.navigate("Notification", {
      message: "Đặt hàng thành công !",
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10 }}>
        Thanh toán
      </Text>

      <Text style={{ fontSize: 20 }}>Sản phẩm được chọn : {selectedItems.length}</Text>
      {selectedItems.map((item) => (
        <View key={item._id} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={{ fontWeight: '600' }}>X{item.count} </Text>
              <Text style={{ fontSize: 18, fontWeight: '700' }}>{item.nameproduct} </Text>

            </View>
            <Text>{item.nameSize}</Text>
          </View>

          <Text style={{ fontSize: 16, color: "red", fontWeight: 'bold' }}>{item.total}</Text>
        </View>
      ))}
      <View style={{ borderWidth: 1 }}></View>
      <View>
        <Text>Address :</Text>
        {/* <Picker
        selectedValue = {selectedAddress}
        onValueChange = {(itemValue,itemIndex) => handleAddress(itemValue)}
        >

        {data.map((address) => (
          <Picker.Item
            key={address.id}
            label={`${address.location}:${address.address}`}
            value={address.id}
          />
        ))}

        </Picker> */}
      </View>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 10 }}>
        Tổng tiền: ${totalCost} vnđ
      </Text>
      <Button
        title="Thanh toán"
        onPress={handlePayment}
      // Bạn có thể thay đổi hành động của nút "Thanh toán" tại đây
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,

  }
});

export default Pay;
