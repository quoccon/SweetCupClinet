import React from "react";
import { View,TextInput,TouchableOpacity,StyleSheet,Text, SafeAreaView } from "react-native";
import Ionicons from '@expo/vector-icons' //sử dụng icon từ thư viện

const SearchBar = () => {
    return(
        <SafeAreaView style={styles.container}>
            <TextInput style={styles.input} placeholder="Nhập từ khóa tìm kiếm"/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#F0F0F0',
        borderRadius:10,
        paddingHorizontal:10,
        marginHorizontal:10,
        marginTop:10
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderWidth:1,
        borderRadius:10,
        marginRight:20,
        marginLeft:20
      },
      searchButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        marginLeft: 5,
      },

});

export default SearchBar;