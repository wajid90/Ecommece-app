import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { useSelector } from "react-redux";

const Footer = ({ activeRoute = "home" }) => {
  const navigation = useNavigation();
  const {isAuthenticated,isLoadding}=useSelector((state)=>state.auth);
  console.log(isAuthenticated);
  const navigatationHandler = (key) => {
    switch (key) {
      case 0:
        navigation.navigate("home");
        break;
      case 1:
        navigation.navigate("cart");
        break;
      case 2:
        if (isAuthenticated===true) {
          navigation.navigate("profile");
        }else{
        navigation.navigate("login");
        }
        break;
      default:
        navigation.navigate("home");
        break;
    }
  };
  return (
   <View
   style={{
     backgroundColor: "black",
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
           backgroundColor: "black",
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
           backgroundColor: "black",
         }}
         icon={activeRoute  === "profile" ? "account" : isAuthenticated === false ?"login":"account"}
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
           backgroundColor: "black",
         }}
         icon={activeRoute === "home" ? "home" : "home-outline"}
       />
     </TouchableOpacity>
   </View>
 </View>
  );
};

export default Footer;
