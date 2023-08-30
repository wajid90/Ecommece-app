import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Button } from "react-native-paper";

const ProductCard = ({
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
          width: 300,
          alignContent: "center",
          justifyContent: "space-between",
          margin: 30,
          borderRadius: 20,
          height: 450,
          backgroundColor: i % 2 === 0 ? "#c70049" : "white",
          position: "relative",
        }}
      >
        <Image
          source={{ uri: image }}
          className="w-full h-[450px]"
          style={{
            borderRadius: 20,
            resizeMode: "contain",
          }}
        />
        <View className="absolute top-5 left-5 flex-row w-[85%]  justify-between items-center">
          <Text className="text-[17px]">{name}</Text>
          <Text className="font-bold text-[17px]">₹ {price}</Text>
        </View>
        <TouchableOpacity
          activeOpacity={0.9}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            backgroundColor: i % 2 === 0 ? "white" : "black",
            width: "100%",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            height: 50,
          }}
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
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
