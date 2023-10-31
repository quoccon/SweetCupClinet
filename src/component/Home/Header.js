import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';
import { useSelector } from "react-redux";

const Header = () => {
    const navigation = useNavigation();
    const auth = useSelector((state) => state.auth);
    const cart = useSelector((state) => state.cart.cart);

    return (
        <View style={styles.container}>
            <View style={styles.leftSection}>
                <Image source={require("../../../public/sweetcup.jpg")} style={styles.logo} />
                <View>
                    <Text style={styles.text}>Hello, </Text>
                    <Text style={styles.nameU}>{auth.username}</Text>
                </View>
            </View>
            <View style={styles.rightSection}>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("Search")}>
                    <Ionicons name="ios-search-outline" size={30} color="black" />

                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate('Cart') }} style={styles.iconButton}>
                    <Ionicons name="cart-outline" size={30} color="black" />
                    {cart.length > 0 && (
                        <View style={styles.cartCount}>
                            <Text style={styles.cartCountText}>{cart.length}</Text>
                        </View>
                    )}
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconButton} onPress={() => navigation.navigate("MyWishlist")}>
                <Ionicons name="heart-outline" size={30} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        elevation: 10, // Đổ bóng cho header
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightSection: {
        flexDirection: 'row',
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 50,
        marginRight: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
    },
    iconButton: {
        marginLeft: 10,
    },
    cartCount: {
        backgroundColor: 'red',
        borderRadius: 50,
        paddingHorizontal: 5,
        paddingVertical: 2,
        position: 'absolute',
        top: 0,
        right: 0,
    },
    cartCountText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
    },
    nameU:{
        fontSize:16,
        fontWeight: 'bold',
    }
})

export default Header;
