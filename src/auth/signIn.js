import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { login } from "../../api/redux";
import api from "../../api/axios";

export default function SignIn({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isFocusUname, setIsFocusUname] = useState(false);
  const [isFocusP, setIsFocusP] = useState(false);
  const [isRememberU, setIsRememberU] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    AsyncStorage.getItem("userData").then((data) => {
      if (data) {
        const parsedData = JSON.parse(data);
        setUserName(parsedData.username);
        setPassword(parsedData.passwd);
        setIsRememberU(true);
      }
    });
  }, []);

  const checkLogin = async () => {
    const userData = { username: userName, passwd: password };
    try {
      const response = await api.post("/login", userData);

      if (response.data.status === 0) {
        dispatch(login(response.data));
        if (isRememberU) {
          AsyncStorage.setItem("userData", JSON.stringify(userData));
        } else {
          AsyncStorage.removeItem("userData");
        }
        navigation.navigate("HomeScreen");
        
      } else {
        console.log("Đăng nhập không thành công: " + response.data.status);
      }
    } catch (error) {
      console.log("Lỗi khi đăng nhập:", error);
    }
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
            <Text style={styles.title}>Sign In</Text>
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
                onFocus={() => setIsFocusUname(true)}
                onBlur={() => setIsFocusUname(false)}
                placeholder="Input your username"
                value={userName}
                onChangeText={(username) => setUserName(username)}
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
                onFocus={() => setIsFocusP(true)}
                onBlur={() => setIsFocusP(false)}
                placeholder="Input your password"
                value={password}
                onChangeText={(passwd) => setPassword(passwd)}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.rememberMeContainer}>
              <Switch value={isRememberU} onValueChange={setIsRememberU} />
              <Text style={styles.rememberMeText}>Remember me?</Text>
            </View>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => checkLogin()}
            >
              <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>
            <Text style={styles.signUpText}>
              Don't have an account?{" "}
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text style={styles.signUpLink}>Sign Up</Text>
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
