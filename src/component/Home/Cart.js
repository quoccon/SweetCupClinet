import React from "react";
import { View, Text,Image,TouchableOpacity,FlatList ,StyleSheet, Button} from "react-native";

const Cart = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.titleCart}>Cart</Text>

            <Button title="Back" onPress={() => {navigation.navigate("HomeScreen")}}/>
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