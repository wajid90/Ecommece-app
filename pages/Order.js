import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import { Platform } from 'react-native'
import Header1 from '../components/Header1'

const Order = () => {
  
  return (
    <View
    style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "white",
      flex: 1,
    }}
    >
      <Header1 headertext="Orders" />
      
    </View>
  )
}

export default Order