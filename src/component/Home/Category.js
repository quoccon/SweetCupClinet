import React from "react";
import { View,Text,StyleSheet,TouchableOpacity } from "react-native";

const Category = () => {

    const handelCat = () => {

    }


    return(
        <View>
            <Text style={styles.title}>Category</Text>

            <View style={{marginTop:10, flexDirection:'row'}}>
                <TouchableOpacity style={styles.catPro} onPress={handelCat}>
                <Text>Coffee</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.catPro}>
                <Text>Food</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   
    catPro:{
        width:60,
        height:30,
        marginLeft:20,
        borderWidth:1,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
        color:'#ff0000',
        fontSize:20,
        fontWeight:'700',
        marginLeft:20
    }
});

export default Category;