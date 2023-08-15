import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";

const Footer = ({ activeRoute = "home" }) => {
  const navigation = useNavigation();
  const isAuthentication = true;
  const navigatationHandler = (key) => {
    switch (key) {
      case 0:
        navigation.navigate("home");
        break;
      case 1:
        navigation.navigate("cart");
        break;
      case 2:
        if (isAuthentication) navigation.navigate("profile");
        navigation.navigate("login");
        break;
      default:
        navigation.navigate("home");
        break;
    }
  };
  return (
    <View
      style={{
        backgroundColor: "#c70049",
        borderTopLeftRadius: 120,
        borderTopRightRadius: 120,
        position: "absolute",
        bottom: 0,
        left: 0,
        zIndex: 10,
      }}
      className="w-full"
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          position: "relative",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(1)}
        >
          <Avatar.Icon
            color="white"
            size={50}
            style={{
              backgroundColor: "#c70049",
            }}
            icon={activeRoute === "cart" ? "shopping" : "shopping-outline"}
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(2)}
        >
          <Avatar.Icon
            color="white"
            size={50}
            style={{
              backgroundColor: "#c70049",
            }}
            icon={activeRoute === "profile" ? "account" : "account-outline"}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: "absolute",
          width: 80,
          height: 80,
          backgroundColor: "white",
          borderRadius: 100,
          justifyContent: "center",
          alignItems: "center",
          bottom: 20,
          alignSelf: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(0)}
        >
          <Avatar.Icon
            color="white"
            size={50}
            style={{
              backgroundColor: "#c70049",
            }}
            icon={activeRoute === "home" ? "home" : "home-outline"}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
