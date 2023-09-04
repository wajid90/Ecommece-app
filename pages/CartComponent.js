import {
  View,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import Header1 from "../components/Header1";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/Auth/userSlice";
import Toast from "react-native-toast-message";
import { useState } from "react";


const CartComponent = () => {
  const navigation=useNavigation();
  const {cartItems}=useSelector((state)=>state.auth);
  const [itemPrice]=useState(cartItems.reduce((prev,curr)=>prev+curr.quantity*curr.price,0));

  const dispatch=useDispatch();
  const incrementHandler=({
    product,
    name,
    stock,
    price,
    image,
    quantity
  })=>{
    if(quantity+1>=stock) return Toast.show({
    type: 'error',
    text1: "Item Does not have in Stock",
  });
    dispatch(addToCart({
        product:product,
        name:name,
        stock:stock,
        price:price,
        image:image,
        quantity:quantity+1
    }));

    
  }
  const decrementHandler=({
    product,
    name,
    stock,
    price,
    image,
    quantity
  })=>{
  if(quantity-1<1) return  dispatch(removeFromCart(product))

  dispatch(addToCart({
        product:product,
        name:name,
        stock:stock,
        price:price,
        image:image,
        quantity:quantity-1
    }));

  }
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
        flex:1
      }}
      className="bg-gray-100"    >
      <Header1 headertext={"Shipping Cart"} emptyCart={true} />
    <View
      style={{
        paddingVertical:5,
        marginRight:6,
        marginLeft:8,
        flex:1,
      }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        
      >
       {
       cartItems.length>0 ? cartItems.map((item,index)=>(
          <CartItem item={item} incrementHandler={incrementHandler} index={index} decrementHandler={decrementHandler}/>
        )):<View className="h-screen  w-full flex-1 justify-center items-center">
          <Text>Cart is Empty</Text>
        </View>
       }
      </ScrollView>
        
    </View>
      <View className="bg-white">
        <View className="flex-row justify-between items-center mx-6 my-2">
          <Text className="font-semibold">Total Items</Text>
          <Text className="font-semibold">{cartItems?.length>0 ? cartItems.length :0}</Text>
        </View>
        <View className="flex-row font-semibold  justify-between items-center mx-6 my-2">
          <Text className="font-semibold">Total Price</Text>
          <Text className="font-semibold">₹ {itemPrice}</Text>
        </View>
        <TouchableOpacity 
          onPress={cartItems.length>0?()=>navigation.navigate("confirmOrder"):null}
        >
          <Button
            icon="cart"
            className="bg-black py-2 mx-4 my-4  rounded-full"
            textColor="white"
          >
            CheckOut
          </Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartComponent;
