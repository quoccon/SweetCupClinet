import { Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ImageBackground } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({navigation}) {
  return (
    
    <ScrollView>
        <StatusBar/>
        <SafeAreaView>
            <ImageBackground
            source={{uri: "https://i.pinimg.com/564x/95/f4/bc/95f4bc16894b26c28a6ac79820476d37.jpg"}}
            style={{ width: '100%', height: '100%' }}
            ><View style={{flexDirection: "row", borderColor: "black",backgroundColor: "white",borderWidth: 1, width: 300}}>
                <Ionicons name="ios-search-sharp" size={24} color="black" />
                <TextInput placeholder='Bạn Muốn loại Coffe nào?'></TextInput>
                </View>
                <View style={{paddingLeft: 20,  paddingRight: 20 , marginTop: 10}}>
                    <Image source={{uri: "https://i.pinimg.com/564x/c4/0e/68/c40e681e0c69a5e9c06ff7100ceb0c35.jpg"}} style={{ width: 580, height: 200  }}/>
                </View>                                     
                </ImageBackground>
        </SafeAreaView>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})