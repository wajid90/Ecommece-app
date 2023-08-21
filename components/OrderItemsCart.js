import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const OrderItemsCart = ({
    index,
    id,
    price,
    address,
    city,
    pinCode,
    country,
    orderedOn,
    status,
    paymentMethod,
    updateHandler,
    admin
}) => {
  return (
    <View className="w-[93%] mx-auto py-0 my-3" key={index}>
      <View className="flex-row   p-3 rounded-t-lg justify-between items-center"
        style={{
            backgroundColor:index%2==0?"#c70049":"gray"
        }}
      >
        <Text className="text-[14px] font-bold text-white">Order Id</Text>
        <Text className="text-[13px] font-bold text-white">{id}</Text>
      </View>
      <View className="flex-row   bg-gray-100 p-5  items-center">
      <Text className="text-[14px] font-bold  text-black/[0.8]">Address : </Text>
      <Text className="text-[12px] font-semibold  text-black/[0.8]"
       numberOfLines={2}
      >{address +" "+ city+" "+country+" "+ pinCode}</Text>
      </View>
      <View className="flex-row  bg-gray-100 px-5 py-2 -mt-2 items-center">
      <Text className="text-[13px] font-bold  text-black/[0.8]">Order On : </Text>
      <Text className="text-[12px] font-semibold  text-black/[0.8]"
       numberOfLines={2}
      >{orderedOn}</Text>
      </View>
      <View className="flex-row  bg-gray-100 px-5 py-2  items-center">
      <Text className="text-[13px] font-bold  text-black/[0.8]">Price : </Text>
      <Text className="text-[12px] font-semibold  text-black/[0.8]"
       numberOfLines={2}
      >{price}</Text>
      </View>
      <View className="flex-row  bg-gray-100 px-5 py-2  items-center">
      <Text className="text-[13px] font-bold  text-black/[0.8]">Status : </Text>
      <Text className="text-[12px] font-semibold  text-black/[0.8]"
       numberOfLines={2}
      >{status}</Text>
      </View>
      <View className="flex-row  bg-gray-100 px-5 py-2 pb-3  items-center">
      <Text className="text-[13px] font-bold  text-black/[0.8]">Payment Method : </Text>
      <Text className="text-[12px] font-semibold  text-black/[0.8]"
       numberOfLines={2}
      >{paymentMethod}</Text>

      
      </View>
      <View className=" bg-gray-100 px-5 py-2 pb-3 rounded-b-lg">
      {
        admin && <TouchableOpacity
        className="transition-transform active:scale-90"
        activeOpacity={0.8}
        onPress={()=>updateHandler(id)}
        >
            <Button
             className=" bg-gray-300"
              textColor='black'
            >
            Update
            </Button>
        </TouchableOpacity>
      }
     
     </View>
    </View>
  )
}

export default OrderItemsCart