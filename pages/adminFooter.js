import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { AntDesign, Feather, FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";

const AdminFooter = ({ activeRoute = "dashboard" }) => {
  const navigation = useNavigation();
  const isAuthentication = true;
  const navigatationHandler = (key) => {
    switch (key) {
      case 0:
        navigation.navigate("dashboard");
        break;
      case 1:
        navigation.navigate("Analysics");
        break;
      case 2:
        navigation.navigate("Reviews");
        break;
      case 3:
        navigation.navigate("Settings");
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
            <MaterialIcons name="analytics"  color="white"
            size={50}
            style={{
              backgroundColor: "#c70049",
            }}/>
          
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(1)}
        >
           <Ionicons name="wallet-outline"   color="white"
            size={50}
            style={{
              backgroundColor: "#c70049",
            }} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(2)}
        >
            <MaterialIcons name="rate-review"  size={50}
            style={{
              backgroundColor: "#c70049",
            }} />
           
        
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigatationHandler(2)}
        >
            <Feather name="settings"  color="white"
            size={50}
            style={{
              backgroundColor: "#c70049",
            }} />
        
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
           <AntDesign name="dashboard" size={24} color="black" 
             className=""
           />
         
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AdminFooter;
