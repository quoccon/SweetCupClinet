// import React, { useState, useEffect } from "react";
// import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet, Button } from "react-native";
// import api from "../../../api/axios";
// import { Ionicons } from '@expo/vector-icons'
// import { useNavigation } from "@react-navigation/native";

// const Cart = () => {
//     const [dataCart, setdataCart] = useState([]);
//     const navigation = useNavigation();
//     const ListCart = async () => {
//         try {
//             const res = await api.get('/cart');
//             console.log(res.data.cart);
//             setdataCart(res.data.cart)
//         } catch (error) {
//             console.log(error);
//             console.log("Loi");
//         }
//     }

//     useEffect(() => { ListCart(); console.log(dataCart); }, []);

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => { navigation.navigate("HomeScreen") }}>
//                 <Ionicons name="chevron-back-outline" size={24} color="black" />
//                 <Text>Back</Text>
//             </TouchableOpacity>

//             <View style={{ alignItems: 'center' }}>
//                 <Text style={styles.titleCart}>Cart</Text>

//                 <FlatList
//                     data={dataCart}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={({ item }) => (
//                         <TouchableOpacity>
//                             <View style={styles.containerItem}>
//                                 <Image
//                                     source={{
//                                         uri:
//                                             "https://images.pexels.com/photos/2396220/pexels-photo-2396220.jpeg?auto=compress&cs=tinysrgb&w=600",
//                                     }}
//                                     style={{ width: 100, height: 100, borderRadius: 10 }}
//                                 />
//                                 <View>
//                                     <Text style={styles.titleName}>{item.nameproduct}</Text>
//                                     <Text>{item.quantity}</Text>
//                                     <Text>{item.price}</Text>
                                    
//                                 </View>
//                             </View>
//                         </TouchableOpacity>
//                     )}
//                 />
//             </View>
//         </View>
//     )

// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 20
//     },
//     titleCart: {
//         fontSize: 24,
//         fontWeight: 'bold',

//     },
//     containerItem: {
//         flexDirection: "row",
//         padding: 16,
//         alignItems: 'center',
//         backgroundColor:'#ff0000'
//     },
//     titleName: {
//         fontSize: 18,
//         fontWeight: 'bold',
//       },
//       titlePrice: {
//         color: '#ff0000',
//         fontSize: 16,
//         fontWeight: '700'
//       },
// });

// export default Cart;