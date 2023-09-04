import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Image, ScrollView, TouchableOpacity, Modal, Button } from "react-native";
import api from '../../../api/axios'
import axios from "axios";
import { Ionicons } from '@expo/vector-icons';


const ProductList = () => {
    const [productData, setproductData] = useState([]);
    const [isDialogVisible, setisDialogVisible] = useState(false);
    const [btnColor, setbtnColor] = useState('white');
    const defaultColor = 'white';

    const ListData = async () => {
        try {
            const res = await api.get('/product')
            console.log(res.data.product);
            setproductData(res.data.product)
        } catch (error) {
            if (error.response.status === 404) {
                console.error("Tài nguyên không tồn tại");
            } else {
                console.error("Đã xảy ra lỗi không xác định", error.message);
            }
        }
    }

    useEffect(() => { ListData(), console.log(productData.length); }, [])

    const showDialog = () => {
        setisDialogVisible(true);
    };
    const closeDialog = () => {
        setisDialogVisible(false);
    };

    const handleSize = () => {
        if(btnColor === defaultColor){
            setbtnColor('yellow')
        }else{
            setbtnColor(defaultColor);
        }
       
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Product</Text>
            <ScrollView style={{ marginBottom: 200 }}>
                {/* <FlatList
                    data={productData}
                    keyExtractor={(item, index) => index.toString()} //chỉ định key cho mỗi mục
                    renderItem={({ item }) => {
                        return (
                            <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomWidth: 1 }}>
                                <Image source={{ uri: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={{ width: 100, height: 100 }} />
                                <View style={{ marginTop: 10, marginLeft: 10 }}>
                                    <Text>Name: {item.nameproduct}</Text>
                                    <Text>Price: {item.price}</Text>
                                    <Text>description: {item.description}</Text>
                                </View>
                                <View style={{ justifyContent: 'space-between' }}>
                                    <Ionicons name="add-circle-sharp" size={24} color="black" />
                                </View>

                                
                            </View>
                        );
                    }}


                /> */}


                {productData.map((item, index) => {
                    return (
                        <TouchableOpacity onPress={showDialog}>
                            <View style={{ marginTop: 20, flexDirection: 'row' }}>
                                <Image source={{ uri: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={{ width: 100, height: 100, borderRadius: 10 }} />
                                <View style={{ marginTop: 10, marginLeft: 30 }}>
                                    <Text>Name: {item.nameproduct}</Text>
                                    <Text>Price: {item.price} VNĐ</Text>
                                    <Text>Description: {item.description}</Text>
                                </View>
                                {/* <View>
                                    <Ionicons name="add-circle-sharp" size={24} color="black" />
                                </View> */}


                            </View>
                        </TouchableOpacity>
                    );
                })}

            </ScrollView>

            {productData.map((item, index) => {
                return (
                    <Modal visible={isDialogVisible} animationType="slide">
                        <Ionicons name="close-circle-outline" size={24} color="black" onPress={closeDialog} />
                        <View style={{ flex: 1 }}>
                            <Image source={{ uri: "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600" }} style={{ width: '100%', height: '50%', borderRadius: 10 }} />
                            <View style={{ marginTop: 10, marginLeft: 30 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name: {item.nameproduct}</Text>
                                <Text style={{ fontSize: 16, color: "#ff0000", fontWeight: 'bold' }}>Price: {item.price} VNĐ</Text>
                                <Text style={{ fontSize: 16 }}>Description: {item.description}</Text>
                            </View>

                            <Text style={{ fontSize: 20, marginLeft: 30, marginTop: 30, fontWeight: '700' }}>Chọn size:</Text>
                            <View style={{ flexDirection: 'row' }}>

                                <TouchableOpacity style={[styles.Size,{backgroundColor:btnColor}]} onPress={handleSize}>
                                    <Text>M</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={[styles.Size,{backgroundColor:btnColor}]} onPress={handleSize}>
                                    <Text>L</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 50, alignItems: 'center' }}>
                                <Ionicons name="caret-back-circle-outline" size={24} color="black" style={{ marginRight: 10 }} />
                                <Text>1</Text>
                                <Ionicons name="caret-forward-circle-outline" size={24} color="black" style={{ marginLeft: 10 }} />

                                <TouchableOpacity style={styles.titleBtn}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10, color: 'white' }}>Mua ngay</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                )

            })}


        </View>


    );
};




const styles = StyleSheet.create({
    title: {
        color: "#ff0000",
        fontSize: 20,
        fontWeight: '700'
    },
    container: {

        marginLeft: 20,
        marginRight: 20
    },
    titleBtn: {
        width: 250,
        height: 50,
        backgroundColor: '#ff0000',
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 20
    },
    Size: {
        marginLeft: 30,
        marginTop: 10,
        borderWidth: 1,
        width: 60,
        height: 30,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'white'
    },


})

export default ProductList;