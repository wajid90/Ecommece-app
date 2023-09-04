import { View, Text, Platform, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header1 from '../components/Header1'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { useState } from 'react'


const ConfirmOrder = () => {
  const {cartItems}=useSelector((state)=>state.auth);
    const [itemPrice]=useState(cartItems.reduce((prev,curr)=>prev+curr.quantity*curr.price,0));

    const [shippinfPrice]=useState(itemPrice>10000?0:200);
    const [taxprice]=useState(Number((0.18*itemPrice).toFixed()));
    const [totalAmount]=useState(itemPrice+shippinfPrice+taxprice);

    const navigation=useNavigation();

    
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex:1
      }}
    >
      <Header1 headertext={"Confirm Order"} emptyCart={false} />
      <View
      style={{
        paddingVertical:5,
        flex:1,        
        marginRight:4,
        marginLeft:2,
        flex:1,

      }}
      className="bg-gray-100"
    >

      <ScrollView
        showsVerticalScrollIndicator={false}
      >
       {
        cartItems.length>0 && cartItems.map((item,index)=>(
          <ConfirmOrderItem item={item} 
            key={index}
            product={item.product}
            price={item.price}
            image={item.image}
            name={item.name}
            quantity={item.quantity}
          />
        ))
       }
      </ScrollView>
        
    </View>
      <View className="bg-gray-100 pt-2 px-4 ">
        <View className="flex-row justify-between items-center mx-4 my-1">
          <Text className="text-[13px]">Items price</Text>
          <Text className="text-[13px]">{itemPrice}</Text>
        </View>
        <View className="flex-row justify-between items-center mx-4 my-1">
          <Text className="text-[13px]">Shipping Charge</Text>
          <Text className="text-[13px]">{shippinfPrice}</Text>
        </View>
        <View className="flex-row justify-between items-center mx-4 my-1">
          <Text className="text-[13px]">Taxes</Text>
          <Text className="text-[13px]">{taxprice}</Text>
        </View>
        <View className="flex-row justify-between items-center mx-4 my-1">
          <Text className="font-bold">Total Ammount</Text>
          <Text className="font-bold">{totalAmount}</Text>
        </View>
        <TouchableOpacity
          onPress={cartItems.length>0?()=>navigation.navigate("payment",{
            itemPrice,
            shippinfPrice,
            taxprice,
            totalAmount
          }):null}
        >
          <Button
          
            icon="chevron-right"
            className="bg-black py-2 mx-4 my-4  rounded-full"
            textColor="white"
          >
            Payment
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ConfirmOrder