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
     key={product}
     style={{
      backgroundColor:"white",
      borderRadius:5,
      elevation:9,
      
      
     }}
    className="flex-row shadow-2xl items-center  py-2  ml-3 mr-2 h-[130px] my-3 ">
      <View   className=" w-[110px] h-[120px] py-2  absolute  left-3 rounded-lg  shadow-lg">
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
     <View className="w-[210px]  absolute rounded-lg right-1 h-[120px]"
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