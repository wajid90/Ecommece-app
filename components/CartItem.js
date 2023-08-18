import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from 'react-native-paper'

const CartItem = ({item,index, incrementHandler, decrementHandler}) => {
  
  return (
    <View 
     key={index}
    className="flex-row shadow-2xl items-center  w-full h-[120px] mt-3 ">
      <View className=" w-[120px] h-[120px]  absolute  left-3 rounded-lg bg-gray-500 shadow-lg">
        <Image
          source={{uri:item.image}}
         style={{
          width:"100%",
          height:"100%",
          resizeMode:"cover",
         }}
         className="rounded-lg"
        />
      </View>
      <View className="w-[220px] absolute rounded-lg right-1 h-full"
       style={{
        backgroundColor:index%2==0?"#e2e8f0":"#ededed"
       }}
      >
        <View className="flex-row justify-between items-center p-4">
          <Text className="font-bold text-[14px] text-gray-800">{item.name}</Text>
          <Text className="font-bold text-[14px] text-gray-800">₹ {item.price}</Text>
        </View>
        <View className="flex-row items-center mx-3">
            <Text className="text-[14px] text-gray-800 flex-1">Quantity</Text>
            <TouchableOpacity 
             onPress={()=>decrementHandler(item.quantity)}
            activeOpacity={9}>
              <Avatar.Icon
                icon="minus"
                color="black"
                backgroundColor="white"
                size={27}
                className="flex-row mr-2 justify-center items-center"
              />
            </TouchableOpacity>
            <View className="flex-row  mr-2 justify-center items-center w-7 h-7 rounded-full bg-white">
              <Text>{item.quantity}</Text>
            </View>
            <TouchableOpacity activeOpacity={9}
             onPress={()=>incrementHandler(item.id,item.quantity,item.stock)}
            >
              <Avatar.Icon
                icon="plus"
                color="black"
                backgroundColor="white"
                size={27}
                className="flex-row mr-2 justify-center items-center"
              />
            </TouchableOpacity>

         
          </View>

      </View>
    </View>
  )
}

export default CartItem