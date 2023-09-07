import { Image, StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function User({navigation}) {
    const VerticalSeparator = () => {
        return <View style={styles.verticalSeparator} />;
      };
      
  return (
    <SafeAreaView>
      <StatusBar />
      <View
        style={{
          backgroundColor: "#FF045F",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
            color: "white",
            marginBottom: 15,
          }}
        >
          My Account
        </Text>
        <Image
          source={{
            uri: "https://i.pinimg.com/564x/cf/68/1c/cf681ca08b130a55f3346c466b7e512b.jpg",
          }}
          style={{ width: 156, height: 156, borderRadius: 999 }}
        />
        <Text
          style={{
            fontSize: 25,
            fontWeight: 600,
            color: "white",
            marginBottom: 15,
            marginTop: 12,
            fontSize: 39,
          }}
        >
          Dũng Đẹp Trai Bố Đời
        </Text>
      </View>
      <View style={{ backgroundColor: "#fff", flexDirection: "row",justifyContent: 'center' }}>
        <Text>Số Dư</Text>
        <VerticalSeparator/>
        <View style={{}}><Text>Đây là icon</Text><Text>Invite</Text></View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  verticalSeparator: {
    width: 1, // Độ rộng của đường line dọc
    backgroundColor: "gray", // Màu sắc của đường line
    marginHorizontal: 10, // Khoảng cách ngang giữa các đường line (tuỳ chọn)
  },
});
