import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import api from "../../../api/axios";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../api/redux";
import DepositSuccessful from "./DepositSuccessful";
export default function Recharge({ navigation }) {
  const [isFocused, setIsFocused] = useState(false);
  const [radioB, setradioB] = useState("");
  const [isRecharge, setisRecharge] = useState(true);
  const [Monney, setMonney] = useState("");
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const TextInputFocuse = isFocused
    ? styles.topUpMoneyTextInputFocuse
    : styles.topUpMoneyTextInput;

  const [isValue, setisValue] = useState(false);

  var data = [
    {
      id: "1",
      nameBack: "TpBank",
      vat: "0.01$",
      imgBank:
        "https://bankcredit.vn/wp-content/uploads/2022/09/hinh-3333-10.jpg",
    },
    {
      id: "2",
      nameBack: "BIDV",
      vat: "Free",
      imgBank:
        "https://image.bnews.vn/MediaUpload/Org/2022/04/26/logo-bidv-20220426071253.jpg",
    },
    {
      id: "3",
      nameBack: "Techcomback",
      vat: "Free",
      imgBank:
        "https://inkythuatso.com/uploads/images/2021/09/logo-techcombank-inkythuatso-10-15-11-46.jpg",
    },
  ];

  const checkMoney = (money) => {
    console.log(money);
    if (parseFloat(money) > 5 && money.length > 0) {
      setisValue(true);
    } else {
      setisValue(false);
    }
  };

  const recharge = async () => {
    console.log(Monney + "ss" + auth.id);
    const newBalance = { balance: Monney, _id: auth.id };
    try {
      console.log("Oke nè");
      const response = await api.post("/recharge", newBalance);
      console.log("Oke nè" + response.data.info_user.balance);
      console.log("Trả về", response.data.info_user);
      if (response.data.status === 0) {
        console.log("Oke nè");
        dispatch(login(response.data));

        console.log("Nạp :" + auth.balance);
        console.log(auth);

        isRecharge
          ? navigation.navigate("DepositSuccessful", { data: Monney })
          : navigation.navigate("DepositFailed");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={44} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Recharge</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>
          <View style={styles.RMoney}>
            <Text style={styles.headerTextRMoney}>Top-up to</Text>
            <View style={styles.topUpMoneyInput}>
              <Text style={styles.topUpMoneyText}>Amount</Text>
              <TextInput
                onBlur={() => setIsFocused(false)}
                onFocus={() => setIsFocused(true)}
                style={TextInputFocuse}
                placeholder="0 $"
                onChangeText={(money) => {
                  setMonney(money), checkMoney(money);
                }}
              ></TextInput>
              {isValue ? null : (
                <Text style={styles.errorMessage}>Số tiền phải lớn hơn 5</Text>
              )}
            </View>
          </View>
          <View style={styles.SourceOfFundHeader}>
            <Text style={styles.SourceOfFundHeaderText}>Source Of Fund</Text>
            <View style={styles.SourceOfFund}>
              {data.map((item, index) => (
                <View style={styles.Itemcontainer} key={item.id}>
                  <View style={styles.wp_item}>
                    <View>
                      <Image
                        source={{ uri: item.imgBank }}
                        style={styles.ImageBank}
                        resizeMode="cover"
                      />
                    </View>
                    <View>
                      <Text>{item.nameBack}</Text>
                      <Text>{item.vat}</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => setradioB(item.id)}>
                    <View style={styles.radio}>
                      {radioB == item.id ? (
                        <View style={styles.radioBG}></View>
                      ) : null}
                    </View>
                  </TouchableOpacity>
                </View>
              ))}

              <View>
                <TouchableOpacity
                  style={styles.Itemcontainer}
                  onPress={() => navigation.navigate("AddBank")}
                >
                  <View style={styles.wp_item}>
                    <View>
                      <Image
                        source={require("../../../public/bank.jpg")}
                        style={styles.ImageBank}
                        resizeMode="cover"
                      />
                    </View>
                    <View>
                      <Text>Add Bank</Text>
                      <Text>Free of charge deposit</Text>
                    </View>
                  </View>

                  <Ionicons
                    name="caret-forward-outline"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.btnTopUpContainer}>
          {isValue ? (
            <TouchableOpacity
              onPress={() => recharge()}
              style={styles.btnTopUp}
            >
              <Text style={styles.btnTopUpText}>Top Up</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.btnTopUpNo}>
              <Text style={styles.btnTopUpText}>Top Up</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#FF045F",

    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
    height: 80,
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontWeight: "600",
    marginVertical: 20,
    marginLeft: 20,
  },
  headerEditText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  contentContainer: {
    marginTop: 20,
  },

  RMoney: {
    backgroundColor: "rgba(0,0,0,0.05)",
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 5,
    padding: 20,
  },
  headerTextRMoney: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  topUpMoneyInput: {
    marginTop: 20,
  },
  errorMessage: {marginTop:2, color: "red"},
  topUpMoneyText: {
    position: "absolute", // Để văn bản "Amount" chồng lên TextInput
    backgroundColor: "#F2F2F2", // Màu nền của văn bản "Amount"
    top: -13, // Dịch chuyển văn bản "Amount" lên trên TextInput
    left: 10, // Đặt khoảng cách từ trái
    zIndex: 1,
    padding: 3,
  },
  topUpMoneyTextInput: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontWeight: "600",
    fontSize: 18,
  },
  topUpMoneyTextInputFocuse: {
    borderColor: "#FF045F",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontWeight: "600",
    fontSize: 18,
  },
  SourceOfFundHeader: {
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  SourceOfFundHeaderText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  SourceOfFund: {
    backgroundColor: "rgba(0,0,0,0.05)",
    padding: 20,
    borderRadius: 5,
  },
  Itemcontainer: {
    backgroundColor: "#F2F2F2",
    marginTop: 15,
    // paddingTop: 10,
    // paddingLeft: 10,
    // paddingBottom: 20,
    padding: 20,

    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  wp_item: {
    marginLeft: 10,
    flexDirection: "row",
  },
  ImageBank: { width: 35, height: 35, marginRight: 10 },
  radio: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  radioBG: {
    width: 15,
    height: 15,
    borderRadius: 20,
    backgroundColor: "black",
  },

  btnTopUpContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingLeft: 40,
    paddingRight: 40,
  },
  btnTopUp: {
    backgroundColor: "#FF045F",
    width: "100%",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  btnTopUpNo: {
    backgroundColor: "gray",
    width: "100%",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  btnTopUpText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
