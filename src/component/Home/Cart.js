import React from "react";
import { View, Text,Image,TouchableOpacity,FlatList ,StyleSheet} from "react-native";

const Cart = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleCart}>Cart</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginLeft:30,
        marginTop:20
    },
    titleCart:{
        fontSize:24,
        fontWeight:'bold',

    }
});

export default Cart;