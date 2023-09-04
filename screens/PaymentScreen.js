import { View, Text, Platform, StatusBar, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header1 from '../components/Header1'
import { Button, RadioButton } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { emptyCartsData, orderCrreatedData } from '../redux/Auth/userSlice'
import { useCustomHook2 } from '../components/CustomHook'
import { presentPaymentSheet, useStripe } from '@stripe/stripe-react-native'
import Toast from 'react-native-toast-message'
import axios from 'axios'
import { server } from '../utils/api'
import Loader from '../components/Loader'

const PaymentScreen = ({ navigation, route }) => {
  const [paymentMethod,setPaymentMethod]=useState("ONLINE");
  const [loaderloading,setLoaderLodding]=useState(false);

  const dispatch=useDispatch();
  const {isAuthenticated,user,cartItems}=useSelector((state)=>state.auth);
   const stripe=useStripe();

  const redirectToLogin=()=>{
    navigation.navigate("login");
  }
  const cashOnHandler=(paymentInfo)=>{

    console.log(paymentInfo);


    const shippingInfo={
      address:user?.address,
      city:user?.city,
      country:user?.country,
      pinCode:user?.pinCode,
    
    }
    const  orderItems=cartItems;
    const itemsPrice=route?.params?.itemPrice;
    const shippingCharges=route?.params?.shippinfPrice;
    const taxPrice=route?.params?.taxprice;
    const totalAmount=route?.params?.totalAmount;

   dispatch(orderCrreatedData({
    shippingInfo,
    orderItems,
    paymentMethod,
    paymentInfo,
    itemsPrice,
    taxPrice,
    shippingCharges,
    totalAmount,
   }))

  }
  const onlineHandler=async()=>{

   try {
     const {data:{client_secret}}=await axios.post(`${server}/order/payment`,{
      totalAmount:route?.params?.totalAmount
     },{
      headers:{
      "Content-Type":"application/json"
      },
      withCredentials:true
     });

     const init=await stripe.initPaymentSheet({
      paymentIntentClientSecret:client_secret,
      merchantDisplayName:"wajid ali altamash",
     });
     if(init.error) 
       return Toast.show({
       type:"error",
       text1:init.error.message
     })
    
     const presentSheet=await presentPaymentSheet();
      setLoaderLodding(true);
     if(presentSheet.error) {
      setLoaderLodding(false);
      return Toast.show({
      type:"error",
      text1:presentSheet.error.message
    })
  }
  const {paymentIntent}=await stripe.retrievePaymentIntent(client_secret);
  
  if(paymentIntent.status==="Succeeded"){
    cashOnHandler({
      id:paymentIntent?.id,
      status:paymentIntent?.status
    });
  }
   } catch (error) {
     return Toast.show({
      type:"error",
      text1:"Something Went To Wrong ...",
      text2:error
     })
   }
  }

  const isLoadding=useCustomHook2(dispatch,navigation,"profile",emptyCartsData);

  return (
    loaderloading ?<Loader/>:<>
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
                 color="black"
                 value={"COD"}
              />
             </View>
             <View className="p-5 shadow-lg bg-white flex-row rounded-md justify-between items-center my-1">
              <Text className="font-bold text-[14px]">Card</Text>
              <RadioButton
                 color="black"
                 value={"ONLINE"}
              />
             </View>
          </RadioButton.Group>

        </View>
        <TouchableOpacity
          disabled={isLoadding}
          onPress={!isAuthenticated?redirectToLogin: paymentMethod==="COD"? ()=>cashOnHandler():onlineHandler}
         textColor="white"
       >
          <Button
          disabled={isLoadding}
             loading={isLoadding}
             className="bg-black/[0.8] px-5 py-2 rounded-full my-8" 
             textColor='white'
             icon={paymentMethod==="COD"?"check-circle":"circle-multiple-outline"}
          >
     {paymentMethod==="COD"?"Place Order":"Pay"}
          </Button>
        </TouchableOpacity>
       </View>
    </View>
    </>
  )
}

export default PaymentScreen