import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import api from '../../api/axios'
import axios from 'axios'

export default function LoginScreen() {
  const [userName,setuserName] = useState(" ")
  const [passwd,setpasswd] = useState(" ")
  

 

  const checkLoginU =  async () =>{
    try {
      console.log("Đến đây oke")
      const res =  await api.post("/login",{
        username : userName,
        passwd: passwd
      })
      
      if (res.status === 200) {
        console.log("Đăng nhập thành công")
      }else(console.log(res.status))
    } catch (error) {
      console.log(error)
      console.log("lõi")
    }

     
  }

  return (
    <SafeAreaView style={{marginTop: 15}}>
        <TextInput placeholder='tài khoản' onChangeText={(username)=>{setuserName(username)}}></TextInput>
        <TextInput placeholder='pass' onChangeText={(passwdd)=>{setpasswd(passwdd)}}></TextInput>
        <TouchableOpacity onPress={() => {checkLoginU()}}>
          <Text>
            Đăng Nhập
          </Text>
        </TouchableOpacity>
      <Text>LoginScreen</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})