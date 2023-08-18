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
const CartComponent = () => {
  const navigation=useNavigation();
  const incrementHandler=(id,quantity,stock)=>{
    console.log(id+" "+quantity+" "+ stock);
  }
  const decrementHandler=(quantity)=>{
   console.log(quantity);
  }

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex:1
      }}
    >
      <Header1 headertext={"Shipping Cart"} emptyCart={true} />
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
          <CartItem item={item} incrementHandler={incrementHandler} index={index} decrementHandler={decrementHandler}/>
        ))
       }
      </ScrollView>
        
    </View>
      <View className="bg-white">
        <View className="flex-row justify-between items-center mx-4 my-2">
          <Text>5 Items</Text>
          <Text>₹ 5000</Text>
        </View>
        <TouchableOpacity 
          onPress={itemData.length>0?()=>navigation.navigate("confirmOrder"):null}
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
