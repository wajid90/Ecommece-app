import { View, Text, Platform } from 'react-native'
import React from 'react'
import { StatusBar } from 'react-native'
import Header1 from '../components/Header1'

const AdminGetAllProducts = () => {
  return (
    <View
    style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "white",
      flex: 1,
    }}
  >
    <Header1 headertext='All Products'/>
  </View>
  )
}

export default AdminGetAllProducts