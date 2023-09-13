import {
  Image,
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../api/redux";

export default function User({ navigation }) {
const dispatch = useDispatch()
const auth = useSelector((state) => state.auth);
const sighOut = ()=>{
  dispatch(logout())
  
  navigation.navigate('SignIn')
}
  const VerticalSeparator = () => {
    return <View style={styles.verticalSeparator} />;
  };
  const ShadowInfoStyle =
    Platform.OS === "android" ? styles.shadowInfoAndroid : styles.shadowInfoIos;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar />
      <View
        style={{
          backgroundColor: "#FF045F",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
            color: "white",
            marginBottom: 15,
            marginTop: 10,
          }}
        >
          My Account
        </Text>
        <Image
          source={{
            uri: auth.avata,
          }}
          style={{ width: 156, height: 156, borderRadius: 999 }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
            color: "white",
            marginBottom: 15,
            marginTop: 12,
            fontSize: 39,
          }}
        >
          {auth.username}
        </Text>
      </View>
      <View style={ShadowInfoStyle}>
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <Text style={{ fontSize: 20, marginBottom: 10 }}>Số Dư</Text>
          <Text>
            0<Text> VNĐ</Text>
          </Text>
        </View>
        <VerticalSeparator />

        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity >
          <Ionicons name="person-add" size={40} color="black" />
          <Text>Invite</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <TouchableOpacity style={styles.iconList}>
          <Ionicons name="person-circle-outline" size={45} color="black" />
          <Text style={styles.textList}>My Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconList}>
          <Ionicons name="map" size={45} color="black" />
          <Text style={styles.textList}>Address</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconList}>
          <Ionicons name="wallet" size={45} color="black" />
          <Text style={styles.textList}>Payment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconList}>
          <Ionicons name="heart" size={45} color="black" />
          <Text style={styles.textList}>My Wistlist</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconList}>
          <Ionicons name="information-circle-outline" size={45} color="black" />
          <Text style={styles.textList}>About Company</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{sighOut()}} style={styles.iconList}>
          <Ionicons name="log-out" size={45} color="black" />
          <Text style={styles.textList}>Sign Out</Text>
        </TouchableOpacity>
      </ScrollView>
      <Text style={{ color: "gray" }}>@copyright.2023 Dung&Quoc</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  verticalSeparator: {
    width: 1, // Độ rộng của đường line dọc
    backgroundColor: "gray", // Màu sắc của đường line
    marginHorizontal: 10, // Khoảng cách ngang giữa các đường line (tuỳ chọn)
  },
  shadowInfoAndroid: {
    backgroundColor: "#fff",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 5,
    elevation: 5,
    height: 80,
  },
  shadowInfoIos: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  iconList: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 30,
    alignItems: "center",
    backgroundColor: "white",
    borderBottomColor: "gray",
    borderBottomWidth: 1,

    paddingBottom: 10,
  },
  textList: {
    fontSize: 30,
    marginLeft: 15,
  },
});
