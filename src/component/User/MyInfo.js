import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TextInput } from "react-native";
import { useSelector } from "react-redux";

export default function MyInfo({ navigation }) {
  const auth = useSelector((state) => state.auth);

  const UpdateInfoUser = () => {
    
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={44} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>My Information</Text>
        <TouchableOpacity>
          <Text style={styles.headerEditText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.myInfoConten}>
          <View style={styles.myInfoContenItem}>
            <Ionicons name="person" size={44} color="black" />
            <Text style={styles.myInfoContenText}>Fullname</Text>
          </View>
          <TextInput style={styles.myInfoContenInputText}>
            {auth.username}
          </TextInput>
        </View>
        <View style={styles.myInfoConten}>
          <View style={styles.myInfoContenItem}>
            <Ionicons name="person" size={44} color="black" />
            <Text style={styles.myInfoContenText}>Email</Text>
          </View>
          <TextInput style={styles.myInfoContenInputText}>
            {auth.email}
          </TextInput>
        </View>
        <View style={styles.myInfoConten}>
          <View style={styles.myInfoContenItem}>
            <Ionicons name="person" size={44} color="black" />
            <Text style={styles.myInfoContenText}>Phone</Text>
          </View>
          <TextInput style={styles.myInfoContenInputText}>
            {auth.phone}
          </TextInput>
        </View>
        <View style={styles.myInfoConten}>
          <View style={styles.myInfoContenItem}>
            <Ionicons name="person" size={44} color="black" />
            <Text style={styles.myInfoContenText}>Gender</Text>
          </View>
          <TextInput style={styles.myInfoContenInputText}>
            {auth.gender}
          </TextInput>
        </View>
        <View style={styles.myInfoConten}>
          <View style={styles.myInfoContenItem}>
            <Ionicons name="person" size={44} color="black" />
            <Text style={styles.myInfoContenText}>Birthday</Text>
          </View>
          <TextInput style={styles.myInfoContenInputText}>
            {auth.Birthday}
          </TextInput>
        </View>
        <View style={styles.btnUpdateContainer}>
          <TouchableOpacity onPress={()=>UpdateInfoUser()} style={styles.btnUpdate}>
            <Text style={styles.btnUpdateText}>Update Info</Text>
          </TouchableOpacity>
        </View>
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
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    marginBottom: 15,
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
  myInfoConten: {
    marginTop: 20,
  },
  myInfoContenItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  myInfoContenText: {
    fontSize: 20,
    color: "gray",
    marginLeft: 10,
  },
  myInfoContenInputText: {
    fontSize: 20,
    borderBottomWidth: 1,
    marginTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
  },
  contentContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
  },
  btnUpdateContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
  },
  btnUpdate: {
    backgroundColor: "#FF045F",
    width: 381,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  btnUpdateText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },
});
