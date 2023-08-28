import {
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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SignIn({ navigation }) {
  const [userName, setuserName] = useState(" ");
  const [passwd, setpasswd] = useState(" ");
  const [isFocusUname, setFocusUname] = useState(false);
  const [isFocusP, setFocusP] = useState(false);
  const [isRememberU, setisRememberU] = useState(false);
  console.log(isRememberU);


  const checkLoginU = async () => {
    userData = { username: userName, passwd: passwd };
    try {
      console.log("Đến đây oke");
      ///Laayys api
      const res = await api.post("/login", userData);
      console.log(res.data);

      if (res.data.status === 0) {
        console.log("Đăng nhập thành công" + res.data.status);
        if (isRememberU) {
          AsyncStorage.setItem("userData", JSON.stringify(userData));
          console.log("Đã Lưu");
        } else {
          AsyncStorage.removeItem("userData");
        }
        navigation.navigate("Home");
      } else console.log(res.status);
    } catch (error) {
      console.log(error);
      console.log("lõi");
    }
  };

  useEffect(() => {
    AsyncStorage.getItem("userData").then((data) => {
      if (data) {
        const parsedData = JSON.parse(data);
        setuserName(parsedData.username);
        setpasswd(parsedData.passwd);
        setisRememberU(true);
      }
    });
  }, []);

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
                  width: 133,
                  height: 59,
                  fontFamily: "Poppins",
                  fontSize: 39,
                  fontWeight: 700,
                  fontStyle: "normal",
                  lineHeight: 39,
                  color: "black",
                }}
              >
                Sign In
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
              >
                {userName}
              </TextInput>
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
              >
                {passwd}
              </TextInput>
            </View>
            <View
              style={{
                flexDirection: "row-reverse",
                alignItems: "center",
                marginTop: 10,
              }}
            >
              <Switch value={isRememberU} onValueChange={setisRememberU} />
              <Text style={{ marginRight: 10 }}>Remember me?</Text>
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
                checkLoginU();
              }}
            >
              <Text>Sign In</Text>
            </TouchableOpacity>
            <Text>LoginScreen</Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
