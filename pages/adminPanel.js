import { View, Text, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import AdminFooter from './adminFooter'

const AdminPanel = () => {
  return (
    <View
    style={{
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor: "white",
      flex:1
    }}
    >
      <View
        className="flex-row justify-between items-center mx-4 my-4 border-b border-gray-100 pb-2"
      >
      <Text className="font-bold text-[17px]">Dashboard</Text>
      <View className="flex-row p-3 rounded-full bg-gray-100">
      <Ionicons name="moon" size={22} color="black" />
      </View>
      
      </View>
      <View className="w-full flex-row items-center mx-4">
        <TouchableOpacity className="w-[45%] rounded-lg bg-color1 p-2 mr-2 shadow-lg transition-transform active:scale-95 duration-0">
             <Text className="font-bold text-lg text-white px-2">120000</Text>
             <View className="flex-row items-center justify-between mx-2">
             <Text className="font-semibold text-white my-2">Sells </Text>
             <Text className="font-semibold text-white my-2">2345</Text>
             </View>
             <View className="flex-row items-center justify-between mx-2 mt-3">
                <Text className="text-xs text-white">0%</Text>
                <Text className="text-xs text-white">100%</Text>
             </View>
             <View className="bg-black/[0.7] h-2 mx-2 my-2 rounded-full">
              <View className="bg-white h-2 rounded-full w-[50%]"></View>
             </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-[45%] rounded-lg bg-gray-100 p-2 transition-transform active:scale-95 duration-0">
             <Text className="font-bold text-lg text-black/[0.7] px-2">120</Text>
             <View className="flex-row items-center justify-between mx-2">
             <Text className="font-semibold text-black/[0.7] my-2">Orders </Text>
             <Text className="font-semibold text-black/[0.7] my-2">1234</Text>
             </View>
             <View className="flex-row items-center justify-between mx-2 mt-3">
                <Text className="text-xs text-black/[0.7]">0%</Text>
                <Text className="text-xs text-black/[0.7]">100%</Text>
             </View>
             <View className="bg-gray-500/[0.7] h-2 mx-2 my-2 rounded-full">
              <View className="bg-gray-200 h-2 rounded-full w-[50%]"></View>
             </View>
        </TouchableOpacity>
      </View>
      <View className="w-full flex-row items-center mx-4 my-4 border-b border-gray-100 pb-5">
        <TouchableOpacity className="w-[45%] rounded-lg bg-gray-100 p-2 mr-2 shadow-lg transition-transform active:scale-95 duration-0">
             <Text className="font-bold text-lg text-black/[0.7] px-2">240</Text>
             <View className="flex-row items-center justify-between mx-2">
             <Text className="font-semibold text-black/[0.7] my-2">Total Clients</Text>
             
             </View>
             <View className="flex-row items-center justify-between mx-2 mt-3">
                <Text className="text-xs text-black/[0.7]">0%</Text>
                <Text className="text-xs text-black/[0.7]">80%</Text>
             </View>
             <View className="bg-gray-400/[0.7] h-2 mx-2 my-2 rounded-full">
              <View className="bg-gray-300 h-2 rounded-full w-[50%]"></View>
             </View>
        </TouchableOpacity>
        <TouchableOpacity className="w-[45%] rounded-lg bg-gray-100 p-2 transition-transform active:scale-95 duration-0">
             <Text className="font-bold text-lg text-black/[0.7] px-2">140</Text>
             <View className="flex-row items-center justify-between mx-2">
             <Text className="font-semibold text-black/[0.7] my-2">Revenue </Text>
             
             </View>
             <View className="flex-row items-center justify-between mx-2 mt-3">
                <Text className="text-xs text-black/[0.7]">0%</Text>
                <Text className="text-xs text-black/[0.7]">85%</Text>
             </View>
             <View className="bg-gray-400/[0.7] h-2 mx-2 my-2 rounded-full">
              <View className="bg-white h-2 rounded-full w-[50%]"></View>
             </View>
        </TouchableOpacity>
        
      </View>
      <View className="flex-1">
          
      </View>
      <AdminFooter/>
    </View>
  )
}

export default AdminPanel