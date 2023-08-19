import { View, Text, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header1 from '../components/Header1'
import { Button, RadioButton } from 'react-native-paper'

const PaymentScreen = () => {
  const [paymentMethod,setPaymentMethod]=useState("");

  return (
    <View
    style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
        flex:1
      }}
      className="bg-gray-200"
    >
        <Header1 headertext={"Payment"} emptyCart={false} />

       <View 
         style={{
          width:"90%",
          height:300,
          margin:17,
          borderRadius:100,
         }}
       >
       <Image
          source={require("../assets/pexels-photo-583881.jpeg")}
          className="h-full w-full object-cover rounded-lg"
         
        />

        <View className="mt-10 ">
          <RadioButton.Group
            onValueChange={setPaymentMethod}
            value={paymentMethod}
          >
             <View className="p-5 shadow shadow-lg bg-white flex-row rounded-md justify-between items-center my-2">
              <Text className="font-bold text-[14px]">Cash On Delivery</Text>
              <RadioButton
                 color="#c70049"
                 value={"COD"}
              />
             </View>
             <View className="p-5 shadow shadow-lg bg-white flex-row rounded-md justify-between items-center my-1">
              <Text className="font-bold text-[14px]">Card</Text>
              <RadioButton
                 color="#c70049"
                 value={"ONLINE"}
              />
             </View>
          </RadioButton.Group>

        </View>
        <TouchableOpacity>
          <Button
             className="bg-black/[0.8] px-5 py-2 rounded-full my-8" 
             textColor='white'
          >
     {paymentMethod==="COD"?"Place Order":"Pay"}
          </Button>
        </TouchableOpacity>
       </View>
    </View>
  )
}

export default PaymentScreen