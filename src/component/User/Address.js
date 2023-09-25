import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native';
export default function Address({navigation}) {

  const [radioB,setradioB]= useState('')

    var data = [
        { id: '1',location: 'Nhà', adress: 'Item 1' },
  { id: '2',location: 'Công ty', adress: 'Item 2' },
  { id: '3',location: 'Nhà người yêu', adress: 'Item 3' },
    ]



  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Ionicons name="arrow-back-sharp" size={44} color="white" />
        </TouchableOpacity>

        <Text style={styles.headerText}>Address</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
      <FlatList
      data={data}
      keyExtractor={(item,index)=>index.toString()} // Dữ liệu danh sách
      renderItem={({item}) => {
        return (
            <View style={styles.Itemcontainer}>
              <TouchableOpacity onPress={()=>setradioB(item.id)}><View style={styles.radio}>
                {radioB == item.id ? <View style={styles.radioBG}></View> : null}
                  
                </View></TouchableOpacity>
                <View style={styles.wp_item}>
                  <View><Text>{item.location}</Text>
                <Text>{item.adress}</Text></View></View>
                
                
                
            </View>
        )
      }} // Component để hiển thị từng phần tử
      
      />

      </ScrollView>
      <View style={styles.btnAddAdresContainer}>
            <TouchableOpacity
              onPress={() => UpdateInfoUser()}
              style={styles.btnAddAdres}
            >
              <Text style={styles.btnAddAdresText}>Add New Address</Text>
            </TouchableOpacity>
          </View>
    </SafeAreaView>
  )
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
          backgroundColor: '#F2F2F2',
          marginTop: 20,
          paddingTop: 10,
          paddingLeft: 10,
          paddingBottom:20,
          marginLeft: 15,
          marginRight: 15,
          borderRadius: 10,
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
      },
      wp_item: {
        marginLeft: 10
      },
      btnAddAdresContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
        
      },
      btnAddAdres: {
        backgroundColor: "#FF045F",
        width: 381,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 60
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
        justifyContent:"center"
      },
      radioBG: {
        width: 15,
        height: 15,
        borderRadius: 20,
        backgroundColor: 'black',
       
        
      }
      
})