import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Notification({ message}) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "green", // Bạn có thể tùy chỉnh kiểu dáng ở đây
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  message: {
    color: "black",
    fontSize: 18,
  },
})