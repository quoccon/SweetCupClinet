import React, { useState, useEffect } from "react";
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Button, ScrollView } from "react-native";
import api from "../../../api/axios";
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";

const Cart = () => {
    const cart = useSelector((state) => state.cart)
    console.log(cart);
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            {cart.length === 0 ? (
                <Text style={styles.title}>Cart is empty</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View
                            style={{ flexDirection: "row", padding: 16, alignItems: "center" }}
                        >
                            <Image
                                source={{
                                    uri: item.image,
                                }}
                                style={{ width: 100, height: 100, borderRadius: 10 }}
                            />
                            <View style={{ marginTop: 10, marginLeft: 10 }}>
                                <Text style={styles.cartItem}>Name: {item.nameproduct}</Text>
                                <Text style={styles.cartItem}>Price: {item.total} vnđ</Text>
                            </View>
                        </View>
                    )}

                />
            )}
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        marginRight: 20,
    },
    title: {
        color: "#ff0000",
        fontSize: 20,
        fontWeight: "700",
    },
    cartItem: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
});

export default Cart;