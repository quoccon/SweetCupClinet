import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";
const Header = () => {

    const navigation = useNavigation();
    // const handleImagePress = () => {
    //     navigation.navigate('Search');
    // }
    const auth = useSelector((state) => state.auth);
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Image source={require("../../../public/sweetcup.jpg")} style={styles.logo} />
                <Text style={styles.text}>Hello, {auth.username} </Text>
            </View>
        {console.log(auth)}
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <TouchableOpacity>
                <Ionicons name="notifications-outline" size={24} color="black" style={{marginRight:10}}/>
                </TouchableOpacity>


                <TouchableOpacity>
                <Ionicons name="search" size={24} color="black" style={{marginRight:10}} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => {navigation.navigate('Cart')}}>
                    <Ionicons name="cart-outline" size={24} color="black" style={{marginRight:10}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        marginLeft: 20,
        marginBottom: 10,
        justifyContent: 'space-between',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    image: {
        width: 30,
        height: 30,
        marginRight: 10
    },
    text: {
        marginLeft: 10
    }
})

export default Header;