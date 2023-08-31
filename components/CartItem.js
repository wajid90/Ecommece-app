import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Avatar } from 'react-native-paper'

const CartItem = ({item,index, incrementHandler, decrementHandler}) => {
  
  return (
    <View 
     key={index}
     style={{
      backgroundColor:"white",
      borderRadius:5,
      elevation:9
      
     }}
    className="flex-row shadow-2xl items-center  py-2  ml-1 mr-2 h-[100px] mt-3 ">
      <View   className=" w-[110px] h-[100px] p-2  absolute  left-3 rounded-lg  shadow-lg">
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
      
      >
        <View className="flex-row justify-between items-center p-4">
          <Text className="font-bold text-[14px] "
          style={{
              color:"black",
          }}
          >{item.name}</Text>
          <Text className="font-bold text-[14px] "
          style={{
              color:"black",
          }}
          >₹ {item.price}</Text>
        </View>
        <View className="flex-row items-center mx-3">
            <Text className="text-[14px] flex-1"
            style={{
                color:"black",
            }}
            >Quantity</Text>
            <TouchableOpacity 
             onPress={()=>decrementHandler({
              product:item?.product,
              name:item?.name,
              stock:item?.stock,
              price:item?.price,
              image:item?.image,
              quantity:item?.quantity})}
            activeOpacity={9}>
              <Avatar.Icon
                icon="minus"
                color="white"
                backgroundColor="black"
                size={27}
                className="flex-row mr-2 justify-center items-center"
              />
            </TouchableOpacity>
            <View className="flex-row  mr-2 justify-center items-center w-7 h-7 rounded-full bg-white">
              <Text>{item.quantity}</Text>
            </View>
            <TouchableOpacity activeOpacity={9}
             onPress={()=>incrementHandler({
              product:item?.product,
              name:item?.name,
              stock:item?.stock,
              price:item?.price,
              image:item?.image,
              quantity:item?.quantity})}
            >
              <Avatar.Icon
                icon="plus"
                color="white"
                backgroundColor="black"
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