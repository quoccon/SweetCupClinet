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
                <Text style={{fontSize:20,fontWeight:'600'}}>Coffee</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.catPro}>
                <Text style={{fontSize:20,fontWeight:'600'}}>Food</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   
    catPro:{
        width:100,
        height:40,
        marginLeft:20,
        borderWidth:1.5,
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