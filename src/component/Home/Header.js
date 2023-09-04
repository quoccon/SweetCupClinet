import React from "react";
import { Text, View, StyleSheet,Image,TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

const Header = () => {

    const navigation = useNavigation();
// const handleImagePress = () => {
//     navigation.navigate('Search');
// }

    return(
        <View style={styles.container}>
            <View style={{flexDirection:'row', alignItems:'center'}}>
            <Image source={require("../../../public/sweetcup.jpg")} style={styles.logo}/>
            <Text style={styles.text}>Hello, </Text>
            </View>

          <View style={{flexDirection:'row',marginTop:10}}>
          <TouchableOpacity>
          <Image source={require("../../../public/notification.png")} style={styles.image}/>
          </TouchableOpacity>


          <TouchableOpacity>
          <Image source={require("../../../public/search1.png")}  style={styles.image}/>
          </TouchableOpacity>
           
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        flexDirection:'row',
        marginLeft:20,
        marginBottom:10,
        justifyContent:'space-between',
    },
    logo:{
        width:50,
        height:50,
        borderRadius:50
    },
    image:{
        width:30,
        height:30,
        marginRight:10
    },
    text:{
        marginLeft:10
    }
})

export default Header;