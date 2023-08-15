import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const Header = ({
  back,
  headertext,
  setActiveSearchQuery,
  setActiveSearch,
  emptyCart = false,
}) => {
  const navigation = useNavigation();
  const handleBackAaction = () => {
    setActiveSearchQuery("");
    setActiveSearch(false);
  };
  return (
    <View className="flex-row items-center justify-between px-2 py-2">
      <View className="flex-row items-center flex-1 pl-1">
        {back == false ? (
          <TouchableOpacity activeOpacity={0.7}>
            <Avatar.Image
              size={40}
              source={require("../assets/pexels-photo-220453.webp")}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={handleBackAaction}>
            <Avatar.Icon
              size={40}
              icon="arrow-left"
              color="black"
              className="bg-transparent"
            />
          </TouchableOpacity>
        )}
        <Text className="font-semibold text-[20px] flex-1 ml-5 text-black">
          {headertext}
        </Text>
        <View className="flex-1 flex-row justify-around items-center">
          <TouchableOpacity
            onPress={() => setActiveSearch(true)}
            className="flex-1 justify-center items-end mr-1"
          >
            <Avatar.Icon
              size={40}
              icon="magnify"
              className="bg-gray-200 pr-1 text-center"
              color="black"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={emptyCart ? emptyCart : () => navigation.navigate("cart")}
          >
            <Avatar.Icon
              size={45}
              className="bg-transparent"
              color="black"
              icon={emptyCart ? "delete-outline" : "cart-outline"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
