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
import { useDispatch } from "react-redux";

export default function SignUp({ navigation }) {
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
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={{
          uri: "https://i.pinimg.com/564x/cf/68/1c/cf681ca08b130a55f3346c466b7e512b.jpg",
        }}
        style={{ flex: 1 }}
      >
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Sign Up</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.inputWrapper}>
              {isFocusUname ? (
                <Ionicons name="person-circle-sharp" size={24} color="black" />
              ) : (
                <Ionicons name="person-circle-outline" size={24} color="black" />
              )}
              <Text style={styles.inputLabel}>User Name</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setFocusUname(true)}
                onBlur={() => setFocusUname(false)}
                placeholder="Input your username"
                
                onChangeText={(username) => setuserName(username)}
              />
            </View>
            <View style={styles.inputWrapper}>
            {isFocusEmail ? (
                    <Ionicons name="at-circle" size={24} color="black" />
                  ) : (
                    <Ionicons name="at-circle-outline" size={24} color="black" />
                  )}
              <Text style={styles.inputLabel}>Email</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                placeholder="Input your Email"
                
                onChangeText={(email) => setemail(email)}
              />
            </View>
            <View style={styles.inputWrapper}>
            {isFocusPhone ? (
                    <Ionicons name="call-sharp" size={24} color="black" />
                  ) : (
                    <Ionicons name="call-outline" size={24} color="black" />
                  )}
              <Text style={styles.inputLabel}>Phone</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setFocusPhone(true)}
                onBlur={() => setFocusPhone(false)}
                placeholder="Input your Phone"
                
                onChangeText={(phone) => setphone(phone)}
              />
            </View>
            <View style={styles.inputWrapper}>
              {isFocusP ? (
                <Ionicons name="key-sharp" size={24} color="black" />
              ) : (
                <Ionicons name="key-outline" size={24} color="black" />
              )}
              <Text style={styles.inputLabel}>Password</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setFocusP(true)}
                onBlur={() => setFocusP(false)}
                placeholder="Input your password"
                
                onChangeText={(passwd) => setpasswd(passwd)}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.inputWrapper}>
            {isFocusReP ? (
                    <Ionicons name="key-sharp" size={24} color="black" />
                  ) : (
                    <Ionicons name="key-outline" size={24} color="black" />
                  )}
              <Text style={styles.inputLabel}>Re-Password</Text>
              <TextInput
                style={styles.input}
                onFocus={() => setFocusReP(true)}
                onBlur={() => setFocusReP(false)}
                placeholder="Input your Password"
                
                onChangeText={(repasswd) => setrepasswd(repasswd)}
              />
            </View>
            
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => Register()}
            >
              <Text style={styles.signInText}>Sign Up</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>
              Have an account?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                <Text style={styles.signUpLink}>Sign In</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    paddingHorizontal: 15,
  },
  titleContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  title: {
    fontSize: 39,
    fontWeight: "700",
    color: "white",
  },
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    marginTop: 65,
    paddingHorizontal: 15,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 18,
    marginLeft: 5,
  },
  input: {
    flex: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  rememberMeContainer: {
    flexDirection: "row-reverse",
    alignItems: "center",
    marginTop: 20,
  },
  rememberMeText: {
    marginRight: 10,
  },
  signInButton: {
    height: 40,
    backgroundColor: "#C0C0C0",
    borderRadius: 15,
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
  },
  signInText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  signUpText: {
    textAlign: "center",
    marginTop: 10,
    color: "gray",
    marginBottom: 10
  },
  signUpLink: {
    color: "#FF045F",
  },
});

