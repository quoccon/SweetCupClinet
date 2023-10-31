  import React, { useState } from "react";
  import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Alert,
    TouchableOpacity,
    ActivityIndicator,
    Modal,
  } from "react-native";
  import { useDispatch,useSelector } from "react-redux";
  import { useRoute } from "@react-navigation/native";
  import { login, removeFromCart } from "../../../api/redux";
  import { Ionicons } from "@expo/vector-icons";
  import api from "../../../api/axios";
  // import { useNavigation } from "@react-navigation/native";


  export default function Pay  ({ navigation }) {
    const route = useRoute();
    const { selectedItems } = route.params;
    const transportFee = 18000;
    console.log(selectedItems, "ddmm");
    const dispatch = useDispatch();
    const [isProcessing, setIsProcessing] = useState(false);
    const [isDropOpen, setisDropOpen] = useState(false);
    const [selectedPay, setselectedPay] = useState(null);
    const auth = useSelector((state) => state.auth);
    const [isOpenModal, setisOpenModal] = useState(false);


    const totalCost = selectedItems.reduce((total, item) => {
      return total + item.total;
    }, 0);

    const formatMoney = (value) => {
      return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }
    const showModal = () => {
      setisOpenModal(true); 
    }

    const closeModal = () => {
      setisOpenModal(false);
    }

    const totalPayment = selectedPay === "Payment in cash" ? totalCost : totalCost + transportFee;
    
    const handlePayment = async () => {
      if (selectedPay === null){
        Alert.alert("Please choose payment method");
        return;
      }
      console.log(totalPayment);
      if (selectedPay === "SweetCup wallet"){
        try {
          setIsProcessing(true); // Hiển thị tiến trình
          const currentBalance = auth.balance;
          if(totalPayment > currentBalance) {
            showModal();
            setIsProcessing(false); 
            return;
          }
          const paymoney = {balance:totalPayment,_id:auth.id};
          const pay = await api.post("/pay", paymoney);
          console.log(currentBalance);
          console.log("Thành công");
          console.log(pay.data);
         
          if (pay.data.status === 0) {
            dispatch(login(pay.data));

            try {
              const createdAt = new Date();
              const bill = await api.post("/addbill",{
                userId:auth.id,
                selectedItems:selectedItems,
                totalCost:totalCost,
                paymentMethod:selectedPay,
                createdAt,
              });
              console.log(bill);
            } catch (error) {
              console.log("Lỗi rùi");
              console.log(error);
            }
          }


        
        } catch (error) {
          console.log(error);
          console.log("Lỗi");
        }
      }
    
      
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
                style={{ marginLeft: 20 }}
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

          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Payment methods</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ color: "blue", fontSize: 16, fontWeight: '700' }}>{selectedPay || "None selected"}</Text>
              <TouchableOpacity onPress={() => setisDropOpen(!isDropOpen)}>
                <Ionicons
                  name={isDropOpen ? "chevron-up" : "chevron-down"}
                  size={24}
                  color="black"
                  style={{ marginLeft: 10 }}
                />
              </TouchableOpacity>
            </View>

            {isDropOpen && (
              <View style={{ marginTop: 5, borderWidth: 0.5, borderRadius: 5, backgroundColor: 'lightgray' }}>
                <TouchableOpacity onPress={() => { setselectedPay("SweetCup wallet"); setisDropOpen(false) }}>
                  <Text style={{ fontSize: 15, marginLeft: 3, fontWeight: '700' }}>SweetCup wallet</Text>
                </TouchableOpacity>
                {/* <Text style={{borderWidth:0.5}}></Text> */}
                <TouchableOpacity onPress={() => { setselectedPay("Payment in cash"); setisDropOpen(false) }}>
                  <Text style={{ fontSize: 15, fontWeight: '700' }}> Payment in cash</Text>
                </TouchableOpacity>
              </View>

            )}
          </View>

          <Text style={styles.totalText}>Total :</Text>
          <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 20 }}>Into money : {formatMoney(totalCost)}đ</Text>
        
            <View>
              <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 20 }}>Transport fee : {formatMoney(transportFee)}đ</Text>
            </View>
          

          <View style={styles.divider}></View>  
          <View>
            <Text style={styles.label}>Delivery address:</Text>
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
        </View>
        <Text style={{ fontSize: 16, fontWeight: '700', marginLeft: 20 }}>Total Payment : {formatMoney(totalPayment)}</Text>
        <TouchableOpacity style={styles.btnBuy} onPress={handlePayment}>
          <Text style={styles.btnText}>Buy Now</Text>
        </TouchableOpacity>


        <Modal
        visible={isOpenModal}
        transparent={true}>
            <View style={{flex:1,backgroundColor:"white",justifyContent:'center',alignItems:'center'}}>
              <Text style={styles.text}>The balance in the wallet is not enough</Text>

              <TouchableOpacity onPress={() => {closeModal(); navigation.navigate("Recharge")}} style={styles.btnClose}>
                <Text style={styles.textClose}>Recharge</Text>
              </TouchableOpacity>
            </View>

        </Modal>
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
      alignSelf: "center",
      // marginLeft: 110,
      textAlign: "center",
      marginHorizontal: 20,
      fontSize: 26,
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
    btnClose:{
      backgroundColor: "#996633",
      borderRadius: 20,
      width: '30%',
      height: 50,
      justifyContent: "center",
      marginTop: 20,
    },
    textClose:{
      textAlign: 'center',
      color:"white",
      fontSize:20,
      fontWeight: "bold",
    },
    text:{
      fontSize:20,
    }
  });