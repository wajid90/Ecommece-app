import { View, Text, Platform, StatusBar } from 'react-native'
import React from 'react'

const AdminAddCategory = () => {
  return (
    <View
    style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "white",
      flex:1
    }} 
    >
      <Text>AdminAddCategory</Text>
    </View>
  )
}

export default AdminAddCategory