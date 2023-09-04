import React from "react";
import { View,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import Ionicons from '@expo/vector-icons' //sử dụng icon từ thư viện

const SearchBar = ({onSearch}) => {
    return(
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Bạn muốn uống gì hôm nay..."
                
            />
            {/* <TouchableOpacity>
            <Ionicons name="search" size={24} color="white" />
            </TouchableOpacity> */}
        </View>
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
      },
      searchButton: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        marginLeft: 5,
      },

});

export default SearchBar;