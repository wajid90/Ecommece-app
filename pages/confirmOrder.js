import { View, Text, Platform, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Header1 from '../components/Header1'
import ConfirmOrderItem from '../components/ConfirmOrderItem'
import { Button } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

const itemData=[
    {
      id:"122",
      name:"MaceBook 1",
      image:"https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691916144/ags3orubcz6e5qj40b0y.jpg",
      product:"123445jsdnckjsdnxasxs",
      stock:3,
      price:34323,
      quantity:3,
    },
    { id:"123",
      name:"MaceBook 2",
      image:"https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
      product:"123445jsdnckjsdnxaxs",
      stock:3,
      price:341323,
      quantity:2,
    }
    ,  {
      id:"124",
      name:"MaceBook 3",
      image:"https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691913345/qsdcnm2bib7usjtm2srb.jpg",
      product:"123445jsdnckjsdnaspoas",
      stock:3,
      price:34323,
      quantity:3,
    },  {
      id:"125",
      name:"MaceBook 4",
      image:"https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691914272/etgrgeiteb73wk3ofqis.jpg",
      product:"123445jsdnckjsdnjkbckjsa",
      stock:3,
      price:34334,
      quantity:7,
    },
    {
      id:"126",
      name:"MaceBook 4",
      image:"https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691914272/etgrgeiteb73wk3ofqis.jpg",
      product:"123445jsdnckjsdnjkbckjsa",
      stock:3,
      price:34334,
      quantity:7,
    }
  ]

const ConfirmOrder = () => {
    const itemPrice=4000;
    const shippinfPrice=200;
    const taxprice=0.18*itemPrice;

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
        flex:1  
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
       {
        itemData.map((item,index)=>(
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
          <Text className="font-bold">{itemPrice+shippinfPrice+taxprice}</Text>
        </View>
        <TouchableOpacity
          onPress={itemData.length>0?()=>navigation.navigate("payment"):null}
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