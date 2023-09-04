import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const ProductSmallCart = ({
    stock,
    name,
    price,
    image,
    addToCartHandler,
    id,
    i,
    navigation,
}) => {
  return (
    <TouchableOpacity
    activeOpacity={0.99}
    onPress={() =>
      navigation.navigate("productDetaile", {
        id: id,
      })
    }
  >
    <View
      style={{
        elevation: 5,
        width: 155,
        alignContent: "center",
        justifyContent: "space-between",
        margin: 13,
        borderRadius: 20,
        height: 180,
        backgroundColor: i % 2 === 0 ? "#c70049" : "white",
        position: "relative",
      }}
    >
      <Image
        source={{ uri: image }}
        style={{
          borderRadius: 5,
          resizeMode: "cover",
          
        }}
        className="w-full h-[450px] object-bottom"
      />
      <View className="absolute top-5 left-3 flex-row w-[85%]  justify-between items-center">
        <Text className="text-[12px]  text-white">{name}</Text>
        <Text className="font-bold text-[12px] text-white">₹ {price}</Text>
      </View>
      {/* <TouchableOpacity
        activeOpacity={0.9}
        style={{
          position: "absolute",
          bottom: -30,
          left: 0,
          backgroundColor: i % 2 === 0 ? "white" : "black",
          width: "100%",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
          height: 50,
        }}
        onPress={()=>addToCartHandler({id,name,stock,price,image})}
      >
        <Button>
          <Text
            style={{
              color: i % 2 === 0 ? "black" : "white",
            }}
          >
            Add To Cart
          </Text>
        </Button>
      </TouchableOpacity> */}
    </View>
  </TouchableOpacity>
  )
}

export default ProductSmallCart