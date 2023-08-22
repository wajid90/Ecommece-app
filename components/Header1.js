import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Header1 = ({
  headertext="",
  emptyCart = false,
  cl=false
}) => {
  const navigation = useNavigation();
  return (
    <View className="flex-row items-center justify-between px-2 py-1">
      <View className="flex-row items-center flex-1 pl-1">
          <TouchableOpacity onPress={()=>navigation.goBack()} >
          <Avatar.Icon
            size={40}
            icon="arrow-left"
            color={`${cl?"white":"black"}`}
            className="bg-transparent"
          />
        </TouchableOpacity>
        <Text className="font-semibold text-[20px] flex-1 ml-5"
          style={{color:`${cl?"white":"black"}`}}
        >
          {headertext}
        </Text>
        
          <TouchableOpacity
            onPress={emptyCart ? emptyCart : () => navigation.navigate("cart")}
          >
            <Avatar.Icon
              size={45}
              className="bg-transparent"
              color={`${cl?"white":"black"}`}
              icon={emptyCart ? "delete-outline" : "cart-outline"}
            />
          </TouchableOpacity>

      </View>
    </View>
  );
};

export default Header1;
