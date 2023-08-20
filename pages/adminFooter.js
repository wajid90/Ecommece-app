import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { AntDesign, Feather, FontAwesome, Fontisto, Ionicons, MaterialIcons } from "@expo/vector-icons";

const AdminFooter = ({ activeRoute = "dashboard" }) => {
  const navigation = useNavigation();
  const isAuthentication = true;
  const navigatationHandler = (key) => {
    switch (key) {
      case 0:
        navigation.navigate("dashboard");
        break;
      case 1:
        navigation.navigate("analysis");
        break;
      case 2:
        navigation.navigate("wallets");
        break;
      case 3:
          navigation.navigate("products");
        break;
      case 4:
        navigation.navigate("profile");
        break;
      default:
        navigation.navigate("dashboard");
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
          <View className="flex-col items-center p-2 mt-1">
          <MaterialIcons name="analytics"  color="white"
            size={20}
            style={{
              backgroundColor: "#c70049",
            }}/>
          <Text className="text-white text-xs">analytics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(2)}
        >
          <View className="flex-col items-center p-2 ml-2">
           <Ionicons name="wallet"   color="white"
            size={22}
            style={{
              backgroundColor: "#c70049",
            }} />
   <Text className="text-white text-xs">wallet</Text>

</View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(3)}
        >
           <View className="flex-col items-center p-2 mt-1 ml-12 ">
           <Fontisto name="preview" size={20} color="white" />
           <Text className="text-white text-xs">products</Text>

           </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(4)}
        >
           <View className="flex-col items-center p-2 mt-1">
            <MaterialIcons name="admin-panel-settings" size={22} color="white" />
            <Text className="text-white text-[10px]">My Account</Text>

        </View>
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
          className="bg-color1 p-4 rounded-full"
        >
           <AntDesign name="dashboard" size={35} color="white" 
             
           />
         
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminFooter;
