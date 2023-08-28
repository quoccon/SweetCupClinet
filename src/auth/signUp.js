import {
  Alert,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import api from "../../api/axios";
import axios from "axios";
import { Ionicons } from "@expo/vector-icons";

export default function signUp({ navigation }) {
  const [userName, setuserName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [passwd, setpasswd] = useState("");
  const [rePasswd, setrepasswd] = useState("");

  const [isFocusUname, setFocusUname] = useState(false);
  const [isFocusEmail, setFocusEmail] = useState(false);
  const [isFocusPhone, setFocusPhone] = useState(false);
  const [isFocusP, setFocusP] = useState(false);
  const [isFocusReP, setFocusReP] = useState(false);

  const Register = async () => {
    if (
      userName == null ||
      userName.trim() === "" ||
      email == null ||
      email.trim() === "" ||
      phone == null ||
      phone.trim() === "" ||
      passwd == null ||
      passwd.trim() === "" ||
      rePasswd == null ||
      rePasswd.trim() === ""
    ) {
      Alert.alert("Hãy Điền Đủ Thông Tin");
    } else if (passwd != rePasswd) {
      Alert.alert("Mật Khẩu và mật Khẩu Nhập lại phải giống nhau");
    }

    try {
      const res =  await api.post("/reg", {
        username: userName,
        email: email,
        phone: phone,
        passwd: passwd,
      });
      if (res.data.status == 3) {
        Alert.alert("Tài Khoản này đã được sử dụng");
      }else{console.log("Đăng ký Thành Công"+ res.data.msg);
      navigation.navigate("SignIn")
    }
      
      
    } catch (error) {console.log(error + "Lỗi");}
  };

  return (
    <SafeAreaView style={{}}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/564x/cf/68/1c/cf681ca08b130a55f3346c466b7e512b.jpg",
        }}
      >
        <View style={{ marginTop: 180 }}></View>

        <View style={{ borderRadius: 20, backgroundColor: "white" }}>
          <View
            style={{
              paddingLeft: 15,
              paddingRight: 15,
              marginTop: 100,
              height: "100%",
            }}
          >
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  height: 59,
                  fontFamily: "Poppins",
                  fontSize: 39,
                  fontWeight: 700,
                  fontStyle: "normal",
                  lineHeight: 39,
                  color: "black",
                }}
              >
                Sign Up
              </Text>
            </View>
            <View style={{ marginTop: 65 }}>
              <View style={{ flexDirection: "row" }}>
                {isFocusUname ? (
                  <Ionicons
                    name="person-circle-sharp"
                    size={24}
                    color="black"
                  />
                ) : (
                  <Ionicons
                    name="person-circle-outline"
                    size={24}
                    color="black"
                  />
                )}
                <Text style={{ fontSize: 18, marginLeft: 5 }}>User Name</Text>
              </View>
              <TextInput
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",

                  marginTop: 10,
                }}
                onFocus={() => setFocusUname(true)}
                onBlur={() => setFocusUname(false)}
                placeholder="Input your username"
                onChangeText={(username) => {
                  setuserName(username);
                }}
              ></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                {isFocusEmail ? (
                  <Ionicons name="at-circle" size={24} color="black" />
                ) : (
                  <Ionicons name="at-circle-outline" size={24} color="black" />
                )}
                <Text style={{ fontSize: 18, marginLeft: 5 }}>Email</Text>
              </View>
              <TextInput
                style={{
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                placeholder="Input your password"
                onChangeText={(email) => {
                  setemail(email);
                }}
              ></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                {isFocusPhone ? (
                  <Ionicons name="call-sharp" size={24} color="black" />
                ) : (
                  <Ionicons name="call-outline" size={24} color="black" />
                )}
                <Text style={{ fontSize: 18, marginLeft: 5 }}>Phone</Text>
              </View>
              <TextInput
                style={{
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                onFocus={() => setFocusPhone(true)}
                onBlur={() => setFocusPhone(false)}
                placeholder="Input your password"
                onChangeText={(phone) => {
                  setphone(phone);
                }}
              ></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                {isFocusP ? (
                  <Ionicons name="key-sharp" size={24} color="black" />
                ) : (
                  <Ionicons name="key-outline" size={24} color="black" />
                )}
                <Text style={{ fontSize: 18, marginLeft: 5 }}>Password</Text>
              </View>
              <TextInput
                style={{
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                onFocus={() => setFocusP(true)}
                onBlur={() => setFocusP(false)}
                placeholder="Input your password"
                onChangeText={(passwdd) => {
                  setpasswd(passwdd);
                }}
              ></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <View style={{ flexDirection: "row" }}>
                {isFocusReP ? (
                  <Ionicons name="key-sharp" size={24} color="black" />
                ) : (
                  <Ionicons name="key-outline" size={24} color="black" />
                )}
                <Text style={{ fontSize: 18, marginLeft: 5 }}>Re-Password</Text>
              </View>
              <TextInput
                style={{
                  marginTop: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "gray",
                }}
                onFocus={() => setFocusReP(true)}
                onBlur={() => setFocusReP(false)}
                placeholder="Input your password"
                onChangeText={(Repasswdd) => {
                  setrepasswd(Repasswdd);
                }}
              ></TextInput>
            </View>

            <TouchableOpacity
              style={{
                height: 40,
                backgroundColor: "#C0C0C0",
                marginLeft: 70,
                marginRight: 70,
                borderRadius: 15,
                justifyContent: "center",
                marginTop: 20,
                alignItems: "center",
              }}
              onPress={() => {
                Register();
              }}
            >
              <Text>Sign Up</Text>
            </TouchableOpacity>
            <View>
              <Text>
                Do you already have an account?
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("SignIn");
                  }}
                >
                  <Text>Sign In</Text>
                </TouchableOpacity>
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
