import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

const SearchItem = ({ name, price, imgSrc, desc, handler }) => {
  return (
    <TouchableOpacity onPress={handler} activeOpacity={1}>
      <View
        style={{
          padding: 8,
          borderRadius: 10,
          backgroundColor: "#fff",
          justifyContent: "flex-start",
          width: "100%",
          alignItems: "center",
          flexDirection: "row",
          marginVertical: 10,
          marginLeft: 1,
          marginRight: 10,
          elevation: 3,
        }}
      >
        <Image
          source={{ uri: imgSrc }}
          style={{
            width: 100,
            height: 100,

            resizeMode: "contain",
          }}
        />
        <View className="px-4 -mt-7 w-[95%]">
          <Text className="font-bold pb-1 text-[15px]">{name}</Text>
          <Text className="text-[13px] font-semibold pb-1">Rs : {price}</Text>
          <Text className="text-[11px] ">{desc}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SearchItem;
