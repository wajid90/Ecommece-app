import { View, Text, Image } from 'react-native'
import React from 'react'

const ConfirmOrderItem = ({
    key,
   product,
    price,
    image,
    name,
    quantity,
}) => {
  return (
    <View 
    key={key}
   className="flex-row shadow-2xl items-center  w-full h-[120px] mt-3 ">
     <View className=" w-[120px] h-[120px]  absolute  left-3 rounded-lg bg-gray-500 shadow-lg">
       <Image
         source={{uri:image}}
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
       backgroundColor:"#e2e8f0"
      }}
     >
       <View className="flex-row justify-between items-center p-4">
         <Text className="font-bold text-[14px] text-gray-800">{name}</Text>
       </View>
       <View className="flex-row justify-evenly items-center mx-3">
           <Text className="text-[14px] text-gray-800 flex-1">Quantity</Text>
           <Text className="text-[14px] text-gray-800 flex-1">Price</Text>
           <Text className="text-[14px] text-gray-800 flex-1">Total</Text>
      </View>
      <View className="flex-row justify-evenly items-center mx-3 my-3">
           <Text className="text-[14px] text-gray-800 flex-1">{quantity}</Text>
           <Text className="text-[14px] text-gray-800 flex-1">{price}</Text>
           <Text className="text-[14px] text-gray-800 flex-1 font-bold">{quantity*price}</Text>
      </View>

     </View>
   </View>
  )
}

export default ConfirmOrderItem