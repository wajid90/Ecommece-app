import {
  View,
  Text,
  Platform,
  StatusBar,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useRef, useState } from "react";
import Header1 from "../components/Header1";
import Carousel from "react-native-snap-carousel";
import CaroselCartItem from "../components/CaroselCartItem";
import { Avatar } from "react-native-paper";
import CartButton from "../components/CartButton";
import Toast from 'react-native-toast-message';
const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;

const images = [
  {
    public_id: "etgrgeiteb73wk3ofqis",
    url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691914272/etgrgeiteb73wk3ofqis.jpg",
  },
  {
    public_id: "ags3orubcz6e5qj40b0y",
    url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691916144/ags3orubcz6e5qj40b0y.jpg",
  },
  {
    public_id: "etgrgeiteb73wk3ofqisrr",
    url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691914272/etgrgeiteb73wk3ofqis.jpg",
  },
  {
    public_id: "ags3orubcz6e5qj40b0yjie",
    url: "https://res.cloudinary.com/dtcwpe8ig/image/upload/v1691916144/ags3orubcz6e5qj40b0y.jpg",
  },
];

const ProductDetaile = ({ route: { params } }) => {
  const isCarosel = useRef(null);
  const [quantity,setQuantity]=useState(1);
  const stock=5;
  const incrementHandler=()=>{
   if(quantity>=stock) return Toast.show({
    type: 'error',
    text1: "Item Does not have in Stock",
  });
    setQuantity((prev)=>prev+1);
  }
  const decrementHandler=()=>{
  if(quantity<=1) return  Toast.show({
    type: 'error',
    text1: 'Item Must be more than 1 !',
  });
  setQuantity((prev)=>prev-1);
  }
  
  const addtoCartHandler=()=>{
    if(stock===0) return Toast.show({
      type: 'error',
      text1: "Product Out of Stock!",
    });
    Toast.show({
      type: 'success',
      text1: 'Item Add To Cart',
    });
  }
  const name = "Macbook Pro";
  const price = 12000;
  const desc =
    "macOS is the most advanced desktop operating system in the world. macOS Ventura makes the things you do most on Mac even better, so you can work smarter, play harder and go further macOS is the most advanced desktop operating system in the world. macOS Ventura makes the things you do most on Mac even better, so you can work smarter, play harder and go further.";
  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <Header1 />

      <Carousel
        layout="default"
        ref={isCarosel}
        data={images}
        renderItem={CaroselCartItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
      />

      <View
        style={{
          flex: 1,
          padding: 35,
          marginTop: -320,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
        className="bg-color1"
      >
        <View className="flex-row justify-between items-center mx-2 my-2">
          <Text className="font-bold text-[16px] text-white">{name}</Text>
          <Text className="font-bold text-[16px] text-white">₹ {price}</Text>
        </View>
        <View className="mx-2 my-2">
          <Text className="font-bold text-[16px] text-white">Description</Text>
          <Text
            numberOfLines={9}
            style={{
              letterSpacing: 1,
              lineHeight: 20,
              marginVertical: 6,
            }}
            className="text-[14px] text-white"
          >
            {desc}
          </Text>
        </View>

        <View className="flex-row items-center justify-between  my-1">
          <View className="flex-row items-center mx-3">
            <Text className="text-[14px] text-white flex-1">Quantity</Text>
            <TouchableOpacity 
             onPress={decrementHandler}
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
              <Text>{quantity}</Text>
            </View>
            <TouchableOpacity activeOpacity={9}
             onPress={incrementHandler}
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
        <CartButton 
           
             title="Add To Cart"
             addtoCartHandler={addtoCartHandler}
           />
      </View>
    </View>
  );
};

export default ProductDetaile;
