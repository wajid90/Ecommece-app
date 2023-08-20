import { View, Text, Platform, StatusBar, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { Avatar, Button, IconButton } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import { AntDesign, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from "@expo/vector-icons";


const Profile = () => {
  const naviagtion = useNavigation();
  const logoutHandler = () => {

  }

  return (
    <View
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        backgroundColor: "white",
        flex: 1,
      }}
    >
      <View className="flex-row justify-between items-center mx-4 my-2">

        <TouchableOpacity onPress={() => naviagtion.goBack()}>
          <Avatar.Icon
            size={40}
            icon="arrow-left"
            color="black"
            className="bg-transparent"
          />
        </TouchableOpacity>
        <Text>My Profile</Text>

        <TouchableOpacity >
          <Avatar.Icon
            size={40}
            icon="content-save-settings-outline"
            color="black"
            className="bg-transparent"
          />
        </TouchableOpacity>




      </View>
      <View className="w-[95%] h-[150px]  mx-2 flex-row">
        <View className="w-[40%] h-[150px] mt-2">
          <Image
            source={require("../assets/pexels-photo-220453.webp")}
            style={{
              width: "100%",
              height: "90%",
              objectFit: "cover"
            }}
            className="rounded-full relative"
          />
        </View>
        <View className="w-[60%] h-[150px] mt-5 ml-4">
          <Text className="font-bold text-[18px]">Wajid Ali Altamash</Text>
          <Text className="font-semibold text-[12px]">wajid90273@gmail.com</Text>
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={()=>naviagtion.navigate("updateProfile")}
          >
            <Button
              className="bg-color1 mt-5 w-24"
              textColor="white"

            >
              Edit Profile
            </Button>
          </TouchableOpacity>

        </View>

        <View
          style={{

            zIndex: 10,
            backgroundColor: "black",
            position: "absolute",
            bottom: 16,
            left: 110,
            borderRadius: 100,
            borderWidth: 2,
            borderColor: "white"
          }}
        >
          <TouchableOpacity>
            <Avatar.Icon
              icon="camera"
              size={23}

            />
          </TouchableOpacity>

        </View>


      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
      <View className="bg-white border border-gray-100 mx-3 my-2 flex-row  justify-between items-center">
        <View className="flex-row items-center  my-2 px-4 py-2">
        <MaterialIcons name="admin-panel-settings" size={24} color="black" />
          <Text className="ml-4 font-semibold">Go to Admin Panel</Text>
        </View>
        <IconButton
          icon="chevron-right"
          textColor="black"
          onPress={() => naviagtion.navigate("dashboard")}
        />
      </View>
      <View className="bg-white border border-gray-100 mx-3 my-2 flex-row  justify-between items-center">
        <View className="flex-row items-center  my-2 px-4 py-2">
        <MaterialCommunityIcons name="update" size={24} color="black" />
          <Text className="ml-4 font-semibold">update Profile</Text>
        </View>
        <IconButton
          icon="chevron-right"
          textColor="black"
          onPress={() => naviagtion.navigate("updateProfile")}
        />
      </View>
      <View className="bg-white border border-gray-100 mx-3 my-2 flex-row  justify-between items-center">
        <View className="flex-row items-center  my-2 px-4 py-2">
        <Octicons name="list-ordered" size={24} color="black" />
          <Text className="ml-4 font-semibold">My Orders</Text>
        </View>
        <IconButton
          icon="chevron-right"
          textColor="black"
          onPress={() => naviagtion.navigate("order")}
        />
      </View>
      <View className="bg-white border border-gray-100 mx-3 my-2 flex-row  justify-between items-center">
        <View className="flex-row items-center  my-2 px-4 py-2">
        <MaterialCommunityIcons name="key-change" size={24} color="black" />
          <Text className="ml-4 font-semibold">change Password</Text>
        </View>
        <IconButton
          icon="chevron-right"
          textColor="black"
          onPress={() => naviagtion.navigate("changePassword")}
        />
      </View>
      <View className="bg-white border border-gray-100 mx-3 my-2 flex-row  justify-between items-center">
        <View className="flex-row items-center  my-2 px-4 py-2">
        <MaterialCommunityIcons name="lock-reset" size={24} color="black" />
          <Text className="ml-4 font-semibold">Reset Password</Text>
        </View>
        <IconButton
          icon="chevron-right"
          textColor="black"
          onPress={() => naviagtion.navigate("resetPassword")}
        />
        
      </View>
      <TouchableOpacity>
      <View className="bg-white border border-gray-100 mx-3 my-2 flex-row  justify-between items-center">
        <View className="flex-row items-center  my-2 px-4 py-2">
        <Ionicons name="md-remove-circle-outline" size={24} color="black" />
          <Text className="ml-4 font-semibold">Clear History</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View className="bg-white border border-gray-100 mx-3 my-2 flex-row  justify-between items-center">
        <View className="flex-row items-center  my-2 px-4 py-2">
        <AntDesign name="logout" size={24} color="red" />
          <Text className="ml-4 font-semibold text-red-400">logout</Text>
        </View>
       
        
      </View>
      </TouchableOpacity>
      

      </ScrollView>

    </View>
  );
};

export default Profile;
