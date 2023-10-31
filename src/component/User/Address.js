import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from "react-native";
import { ScrollView } from "react-native";
import api from "../../../api/axios";
import { useSelector } from "react-redux";
const auth = useSelector((state) => state.auth);
export default function Address({ navigation }) {
  const [radioB, setradioB] = useState("");
  const [addressData, setaddressData] = useState([])

  // var data = [
  //   { id: "1", location: "Nhà", adress: "Item 1" },
  //   { id: "2", location: "Công ty", adress: "Item 2" },
  //   { id: "3", location: "Nhà người yêu", adress: "Item 3" },
  // ];


  // const listAdress = async () => {

  //   try {
  //     const response = await api.get("/address?userId=" +auth.id );
  //     const addressData = response.data;
  //     // console.log("Response:"+ JSON.stringify(addressData,null,2));
  //     setaddressData(addressData)
  //   } catch (error) {
  //     console.log("Lỗi" + error);
  //   }
  // }
 

  // useEffect(() => {
  //   listAdress();
  // }, [])



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={44} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Address</Text>
      </View>
      <ScrollView>
        <View style={styles.contentContainer}>

          {addressData.map((item, index) => (
            <View style={styles.Itemcontainer} key={item.id}>
              <TouchableOpacity onPress={() => setradioB(item.id)}>
                <View style={styles.radio}>
                  {radioB == item.id ? (
                    <View style={styles.radioBG}></View>
                  ) : null}
                </View>
              </TouchableOpacity>
              <View style={styles.wp_item}>
                <View>
                  <Text>{item._id}</Text>
                  <Text>{item.tag}</Text>
                </View>
              </View>
            </View>
          ))}

        </View>
      </ScrollView>
      <View style={styles.btnAddAdresContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("AdressMap");
          }}
          style={styles.btnAddAdres}
        >
          <Text style={styles.btnAddAdresText}>Add New Address</Text>
        </TouchableOpacity>
      </View>
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
    marginVertical: 10,
  },
  headerEditText: {
    color: "white",
    fontSize: 20,
    fontWeight: "600",
    marginVertical: 10,
  },
  Itemcontainer: {
    backgroundColor: "#F2F2F2",
    marginTop: 20,
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 20,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  wp_item: {
    marginLeft: 10,
  },
  btnAddAdresContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    paddingLeft: 40,
    paddingRight: 40,

    marginBottom: 10,
  },
  btnAddAdres: {
    backgroundColor: "#FF045F",
    width: "100%",
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
  },
  btnAddAdresText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
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
});
